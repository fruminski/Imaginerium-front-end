import CharacterCard from "../Components/CharacterCard.js";
import styles from "../styles/characterList.module.css";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BiSearchAlt } from "react-icons/bi";
import NewNavBar from "../Components/NewNavBar.js";
import PleaseLogin from "../Components/PleaseLogin.js";
import NoCharactersYet from "../Components/NoCharactersYet.js";

export default function characterList() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      async function fetchData() {
        const response = await fetch(
          `https://imaginerium-qpii.onrender.com/characters?user_email=${session.user.email}`
        );
        const data = await response.json();
        setCharactersArray(data.payload);

        console.log(session.user.email);
      }
      fetchData();
    }
  }, [session]);

  async function searchByName(nameToSearch) {
    const response = await fetch(
      `https://imaginerium-qpii.onrender.com/characters?char_name=${nameToSearch}&user_email=${session.user.email}`
    );
    const data = await response.json();
    setCharactersArray(data.payload);
  }

  //sort by date created functionality
  const [charactersArray, setCharactersArray] = useState([]);
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.character_id < b.character_id ? -1 : 1) },
    descending: {
      method: (a, b) => (a.character_id > b.character_id ? -1 : 1)
    }
  };

  if (!session) {
    return (
      <>
        <PleaseLogin />
      </>
    );
  }

  if (!charactersArray) {
    return (
      <>
        <NoCharactersYet />
      </>
    );
  }

  return (
    <div className={styles.main}>
      <NewNavBar />
      <div>
        <div className={styles.header}>
          <div role="heading" aria-level="1">
            <h1 className={styles.h1}>Your Characters</h1>
          </div>
        </div>

        <div className={styles.filters} aria-level="2">
          <div id={styles.cover}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                let nameToSearch = formData.get("char_name");

                searchByName(nameToSearch);
              }}
            >
              <div className={styles.tb}>
                <div className={styles.td} id={styles.sCover}>
                  <input
                    placeholder="search by name"
                    className={styles.input}
                    type="text"
                    name="char_name"
                    id="char_name"
                  />
                  <button className={styles.button} type="submit" aria-label="search">
                    <span>
                      <BiSearchAlt size="60" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <button
              className={styles.allButton}
              onClick={() => searchByName("")}
            >
              <div>View All</div>
            </button>
          </div>

          <div>
            <select
              className={styles.allButton}
              defaultValue={"DEFAULT"}
              onChange={(e) => setSortState(e.target.value)}
            >
              <option
                className={styles.dropdownContent}
                value="DEFAULT"
                disabled
              >
                Sort By: Date Created
              </option>

              <option className="option" value="descending">
                Newest to Oldest
              </option>

              <option className="option" value="ascending">
                Oldest to Newest
              </option>
            </select>{" "}
          </div>
        </div>
      </div>

      {/* {charactersArray.length === 0 : <p>loading..</p> */}
      <div className={styles.cardsContainer}>
        {charactersArray
          .sort(sortMethods[sortState].method)
          .map((character) => {
            return (
              <CharacterCard
                className="cctest"
                searchByName={searchByName}
                key={character.character_id}
                character_id={character.character_id}
                user_email={character.user_email}
                char_name={character.char_name}
                char_age={character.char_age}
                char_alive={character.char_alive}
                char_background={character.char_background}
                char_desc={character.char_desc}
                char_disabilities={character.char_disabilities}
                char_eyecolour={character.char_eyecolour}
                char_fears={character.char_fears}
                char_features={character.char_features}
                char_gender={character.char_gender}
                char_haircolour={character.char_haircolour}
                char_height={character.char_height}
                char_hopes={character.char_hopes}
                char_img={character.char_img}
                char_job={character.char_job}
                char_likes={character.char_likes}
                char_morality={character.char_morality}
                char_notes={character.char_notes}
                char_pronouns={character.char_pronouns}
                char_relationships={character.char_relationships}
                char_sexuality={character.char_sexuality}
                char_skills={character.char_skills}
                char_skincolour={character.char_skincolour}
                char_species={character.char_species}
                char_speech={character.char_speech}
                char_weight={character.char_weight}
              />
            );
          })}
      </div>
    </div>
  );
}
