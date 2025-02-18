import SharedCharacterCard from "../Components/SharedCharacterCard.js";
import styles from "../styles/characterList.module.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BiSearchAlt } from "react-icons/bi";
import NewNavBar from "../Components/NewNavBar";
import PleaseLogin from "../Components/PleaseLogin.js";
import NoCharactersShared from "../Components/NoCharactersShared.js";

export default function characterList() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      async function fetchData() {
        const response = await fetch(
          `https://imaginerium-qpii.onrender.com/collab?user_email=${session.user.email}`
        );
        const data = await response.json();
        setCharactersArray(data.payload);
        console.log(data.payload);
        console.log(session.user.email);
      }
      fetchData();
    }
  }, [session]);

  const [charactersArray, setCharactersArray] = useState([]);

  async function searchByName() {
    const response = await fetch(
      `https://imaginerium-qpii.onrender.com/collab?user_email=${session.user.email}`
    );
    const data = await response.json();
    setCharactersArray(data.payload);
  }


  if (!session) {
    return (
      <>
        <PleaseLogin />
      </>
    );
  }

  if (charactersArray.length < 1) {
    return (
      <>
        <NoCharactersShared />
      </>
    );
  }


  return (
    <div className={styles.main}>
      <NewNavBar />
      <div>
        <div className={styles.header}>
          <div role="heading" aria-level="1">
            <h1 className={styles.h1}>Characters shared with you</h1>
          </div>
        </div>

        <div className={styles.filters} aria-level="2">
         
        </div>

        {/* {charactersArray.length === 0 : <p>loading..</p> */}
        <div className={styles.cardsContainer}>
          {charactersArray
            // .sort(sortMethods[sortState].method)
            .map((character) => {
              return (
                <SharedCharacterCard
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
    </div>
  );
}
