import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { AiFillEdit } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import styles from "../styles/characterPopup.module.css";
import { motion } from "framer-motion";

export default function SharedCharacterPopUp(props) {
  const [editNameInput, setEditNameInput] = useState(false);
  const [editName, setEditName] = useState(null);
  const [editAgeInput, setEditAgeInput] = useState(false);
  const [editAge, setEditAge] = useState(null);
  const [editBackgroundInput, setEditBackgroundInput] = useState(false);
  const [editBackground, setEditBackground] = useState(null);
  const [editDescInput, setEditDescInput] = useState(false);
  const [editDesc, setEditDesc] = useState(null);
  const [editDisabilitiesInput, setEditDisabilitiesInput] = useState(false);
  const [editDisabilities, setEditDisabilities] = useState(null);
  const [editEyeInput, setEditEyeInput] = useState(false);
  const [editEye, setEditEye] = useState(null);
  const [editFearsInput, setEditFearsInput] = useState(false);
  const [editFears, setEditFears] = useState(null);
  const [editFeaturesInput, setEditFeaturesInput] = useState(false);
  const [editFeatures, setEditFeatures] = useState(null);
  const [editGenderInput, setEditGenderInput] = useState(false);
  const [editGender, setEditGender] = useState(null);
  const [editHairInput, setEditHairInput] = useState(false);
  const [editHair, setEditHair] = useState(null);
  const [editHeightInput, setEditHeightInput] = useState(false);
  const [editHeight, setEditHeight] = useState(null);
  const [editHopesInput, setEditHopesInput] = useState(false);
  const [editHopes, setEditHopes] = useState(null);

  const [editJobInput, setEditJobInput] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [editLikesInput, setEditLikesInput] = useState(false);
  const [editLikes, setEditLikes] = useState(null);
  const [editMoralityInput, setEditMoralityInput] = useState(false);
  const [editMorality, setEditMorality] = useState(null);
  const [editNotesInput, setEditNotesInput] = useState(false);
  const [editNotes, setEditNotes] = useState(null);
  const [editPronounsInput, setEditPronounsInput] = useState(false);
  const [editPronouns, setEditPronouns] = useState(null);
  const [editRelationshipsInput, setEditRelationshipsInput] = useState(false);
  const [editRelationships, setEditRelationships] = useState(null);
  const [editSexualityInput, setEditSexualityInput] = useState(false);
  const [editSexuality, setEditSexuality] = useState(null);
  const [editSkillsInput, setEditSkillsInput] = useState(false);
  const [editSkills, setEditSkills] = useState(null);
  const [editSkinInput, setEditSkinInput] = useState(false);
  const [editSkin, setEditSkin] = useState(null);
  const [editSpeciesInput, setEditSpeciesInput] = useState(false);
  const [editSpecies, setEditSpecies] = useState(null);
  const [editSpeechInput, setEditSpeechInput] = useState(false);
  const [editSpeech, setEditSpeech] = useState(null);
  const [editWeightInput, setEditWeightInput] = useState(false);
  const [editWeight, setEditWeight] = useState(null);

  async function editCharacter(id, key, value) {
    let body = {};
    body.user_id = 1;
    body[key] = value;
    await fetch(`https://imaginerium-qpii.onrender.com/characters/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    });
  }

  return (
    <>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        className={styles.popUp}
      >
        <div className={styles.popUpLeft}>
          {props.char_img ? (
            <img className={styles.popUpImage} src={props.char_img} />
          ) : (
            <img
              className={styles.popUpImage}
              src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png"
            />
          )}

          <div className={styles.leftStuffContainer}>
            <div className={styles.editName}>
              <div hidden={editNameInput}>
                <button
                  onClick={() => setEditNameInput(!editNameInput)}
                  className={styles.editNameButton}
                  hidden={editNameInput}
                >
                  <AiFillEdit aria-label="edit trait" />
                </button>
              </div>
              {editNameInput ? (
                <div>
                  <input
                    defaultValue={props.char_name}
                    onChange={(e) => setEditName(e.target.value)}
                  ></input>
                  <button
                    onClick={() => {
                      editCharacter(
                        props.character_id,
                        "char_name",
                        editName
                      ).then(() => {
                        props.searchByName().then(() => {
                          setEditNameInput(false);
                        });
                      });
                    }}
                    className={styles.editButton}
                  >
                    <MdFileDownloadDone aria-label="done" />
                  </button>
                </div>
              ) : (
                <div>
                  <p>{props.char_name}</p>
                </div>
              )}
            </div>

            <div className={styles.buttonsContainerLeft}>
              <div className={styles.shareContainer}></div>
            </div>
          </div>
        </div>
        <div className={styles.popUpRight}>
          <button
            className={styles.closePopUpButton}
            onClick={() => {
              props.searchByName();
              props.setShowModal(false);
            }}
          >
            <GrFormClose />
          </button>

          <h1 className={styles.header}>{props.char_name}</h1>
          <div className={styles.infoContainer}>
            <div className={styles.section}>
              <h2>Physical Appearance:</h2>

              <div className={styles.category}>
                <div>Age in years: </div>
                <div hidden={editAgeInput}>
                  <button
                    onClick={() => setEditAgeInput(!editAgeInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editAgeInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_age}
                        type="number"
                        onChange={(e) => setEditAge(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_age",
                            editAge
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditAgeInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_age}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Species / ethnicity: </div>
                <div hidden={editSpeciesInput}>
                  <button
                    onClick={() => setEditSpeciesInput(!editSpeciesInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editSpeciesInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_species}
                        type="text"
                        onChange={(e) => setEditSpecies(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_species",
                            editSpecies
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditSpeciesInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_species}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Hair colour: </div>
                <div hidden={editHairInput}>
                  <button
                    onClick={() => setEditHairInput(!editHairInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editHairInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_haircolour}
                        type="text"
                        onChange={(e) => setEditHair(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_haircolour",
                            editHair
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditHairInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_haircolour}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Eye colour: </div>
                <div hidden={editEyeInput}>
                  <button
                    onClick={() => setEditEyeInput(!editEyeInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editEyeInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_eyecolour}
                        type="text"
                        onChange={(e) => setEditEye(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_eyecolour",
                            editEye
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditEyeInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_eyecolour}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Skin colour: </div>
                <div hidden={editSkinInput}>
                  <button
                    onClick={() => setEditSkinInput(!editSkinInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editSkinInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_skincolour}
                        type="text"
                        onChange={(e) => setEditSkin(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_skincolour",
                            editSkin
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditSkinInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_skincolour}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Height in meters: </div>
                <div hidden={editHeightInput}>
                  <button
                    onClick={() => setEditHeightInput(!editHeightInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editHeightInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_height}
                        type="number"
                        onChange={(e) => setEditHeight(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_height",
                            editHeight
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditHeightInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_height}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Weight in kilograms: </div>
                <div hidden={editWeightInput}>
                  <button
                    onClick={() => setEditWeightInput(!editWeightInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editWeightInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_weight}
                        type="number"
                        onChange={(e) => setEditWeight(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_weight",
                            editWeight
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditWeightInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_weight}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Distinguishing features: </div>
                <div hidden={editFeaturesInput}>
                  <button
                    onClick={() => setEditFeaturesInput(!editFeaturesInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editFeaturesInput ? (
                <>
                  <p>
                    <div>
                      <input
                        defaultValue={props.char_features}
                        type="text"
                        onChange={(e) => setEditFeatures(e.target.value)}
                      ></input>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_features",
                            editFeatures
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditFeaturesInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_features}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Physical description: </div>
                <div hidden={editDescInput}>
                  <button
                    onClick={() => setEditDescInput(!editDescInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editDescInput ? (
                <>
                  <p>
                    <div>
                      <textarea
                        defaultValue={props.char_desc}
                        type="text"
                        onChange={(e) => setEditDesc(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_desc",
                            editDesc
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditDescInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_desc}</p>
                </>
              )}

              {props.char_alive ? (
                <>
                  <div className={styles.category}>Status:</div>
                  <p>
                    {" "}
                    <GiHeartInside /> Alive!
                    <button
                      className={styles.editButton}
                      onClick={() =>
                        editCharacter(props.character_id, "char_alive", false)
                      }
                    >
                      Kill!
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <p className={styles.category}>Status:</p>
                  <p>
                    {" "}
                    <SlGhost /> Dead
                    <button
                      className={styles.editButton}
                      onClick={() =>
                        editCharacter(props.character_id, "char_alive", true)
                      }
                    >
                      Resurrect!
                    </button>
                  </p>
                </>
              )}
            </div>
            <div className={styles.section}>
              <h2>Personality:</h2>

              <div className={styles.category}>
                <div>Hopes, dreams, motivation, and goals: </div>
                <div hidden={editHopesInput}>
                  <button
                    onClick={() => setEditHopesInput(!editHopesInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editHopesInput ? (
                <>
                  <p>
                    <div>
                      <textarea
                        defaultValue={props.char_hopes}
                        type="text"
                        onChange={(e) => setEditHopes(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_hopes",
                            editHopes
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditHopesInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_hopes}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Fears, troubles, and flaws: </div>
                <div hidden={editFearsInput}>
                  <button
                    onClick={() => setEditFearsInput(!editFearsInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editFearsInput ? (
                <>
                  <p>
                    <div>
                      <textarea
                        defaultValue={props.char_fears}
                        type="text"
                        onChange={(e) => setEditFears(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_fears",
                            editFears
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditFearsInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_fears}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Catchphrases, speech patterns, languages spoken: </div>
                <div hidden={editSpeechInput}>
                  <button
                    onClick={() => setEditSpeechInput(!editSpeechInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editSpeechInput ? (
                <>
                  <p>
                    <div>
                      <textarea
                        defaultValue={props.char_speech}
                        type="text"
                        onChange={(e) => setEditSpeech(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_speech",
                            editSpeech
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditSpeechInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_speech}</p>
                </>
              )}

              <div className={styles.category}>
                <div>Likes and dislikes: </div>
                <div hidden={editLikesInput}>
                  <button
                    onClick={() => setEditLikesInput(!editLikesInput)}
                    className={styles.editButton}
                  >
                    <AiFillEdit aria-label="edit trait" />
                  </button>
                </div>
              </div>
              {editLikesInput ? (
                <>
                  <p>
                    <div>
                      <textarea
                        defaultValue={props.char_likes}
                        type="text"
                        onChange={(e) => setEditLikes(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() => {
                          editCharacter(
                            props.character_id,
                            "char_likes",
                            editLikes
                          ).then(() => {
                            props.searchByName().then(() => {
                              setEditLikesInput(false);
                            });
                          });
                        }}
                        className={styles.editButton}
                      >
                        <MdFileDownloadDone aria-label="done" />
                      </button>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <p>{props.char_likes}</p>
                </>
              )}

              <div className={styles.section}>
                <h2>Other Details:</h2>
                <div className={styles.category}>
                  <div>Character background: </div>
                  <div hidden={editBackgroundInput}>
                    <button
                      onClick={() =>
                        setEditBackgroundInput(!editBackgroundInput)
                      }
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editBackgroundInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_background}
                          type="text"
                          onChange={(e) => setEditBackground(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_background",
                              editBackground
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditBackgroundInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_background}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Disabilities: </div>
                  <div hidden={editDisabilitiesInput}>
                    <button
                      onClick={() =>
                        setEditDisabilitiesInput(!editDisabilitiesInput)
                      }
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editDisabilitiesInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_disabilities}
                          type="text"
                          onChange={(e) => setEditDisabilities(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_disabilities",
                              editDisabilities
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditDisabilitiesInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_disabilities}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Career and education: </div>
                  <div hidden={editJobInput}>
                    <button
                      onClick={() => setEditJobInput(!editJobInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editJobInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_job}
                          type="text"
                          onChange={(e) => setEditJob(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_job",
                              editJob
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditJobInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_job}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Gender: </div>
                  <div hidden={editGenderInput}>
                    <button
                      onClick={() => setEditGenderInput(!editGenderInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editGenderInput ? (
                  <>
                    <p>
                      <div>
                        <input
                          defaultValue={props.char_gender}
                          type="text"
                          onChange={(e) => setEditGender(e.target.value)}
                        ></input>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_gender",
                              editGender
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditGenderInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_gender}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Pronouns: </div>
                  <div hidden={editPronounsInput}>
                    <button
                      onClick={() => setEditPronounsInput(!editPronounsInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editPronounsInput ? (
                  <>
                    <p>
                      <div>
                        <input
                          defaultValue={props.char_pronouns}
                          type="text"
                          onChange={(e) => setEditPronouns(e.target.value)}
                        ></input>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_pronouns",
                              editPronouns
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditPronounsInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_pronouns}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Sexuality: </div>
                  <div hidden={editSexualityInput}>
                    <button
                      onClick={() => setEditSexualityInput(!editSexualityInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editSexualityInput ? (
                  <>
                    <p>
                      <div>
                        <input
                          defaultValue={props.char_sexuality}
                          type="text"
                          onChange={(e) => setEditSexuality(e.target.value)}
                        ></input>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_sexuality",
                              editSexuality
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditSexualityInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_sexuality}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Skills: </div>
                  <div hidden={editSkillsInput}>
                    <button
                      onClick={() => setEditSkillsInput(!editSkillsInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editSkillsInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_skills}
                          type="text"
                          onChange={(e) => setEditSkills(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_skills",
                              editSkills
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditSkillsInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_skills}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Morality: </div>
                  <div hidden={editMoralityInput}>
                    <button
                      onClick={() => setEditMoralityInput(!editMoralityInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editMoralityInput ? (
                  <>
                    <p>
                      <div>
                        <input
                          defaultValue={props.char_morality}
                          type="text"
                          onChange={(e) => setEditMorality(e.target.value)}
                        ></input>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_morality",
                              editMorality
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditMoralityInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_morality}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Key relationships - family, friends, romance: </div>
                  <div hidden={editRelationshipsInput}>
                    <button
                      onClick={() =>
                        setEditRelationshipsInput(!editRelationshipsInput)
                      }
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editRelationshipsInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_relationships}
                          type="text"
                          onChange={(e) => setEditRelationships(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_relationships",
                              editRelationships
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditRelationhipsInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_relationships}</p>
                  </>
                )}

                <div className={styles.category}>
                  <div>Any other character notes: </div>
                  <div hidden={editNotesInput}>
                    <button
                      onClick={() => setEditNotesInput(!editNotesInput)}
                      className={styles.editButton}
                    >
                      <AiFillEdit aria-label="edit trait" />
                    </button>
                  </div>
                </div>
                {editNotesInput ? (
                  <>
                    <p>
                      <div>
                        <textarea
                          defaultValue={props.char_notes}
                          type="text"
                          onChange={(e) => setEditNotes(e.target.value)}
                        ></textarea>
                        <button
                          onClick={() => {
                            editCharacter(
                              props.character_id,
                              "char_notes",
                              editNotes
                            ).then(() => {
                              props.searchByName().then(() => {
                                setEditNotesInput(false);
                              });
                            });
                          }}
                          className={styles.editButton}
                        >
                          <MdFileDownloadDone aria-label="done" />
                        </button>
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>{props.char_notes}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
