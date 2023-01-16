/* eslint-disable prettier/prettier */
import React from "react";
import {useNavigate} from 'react-router-dom';
import { Flex } from "@100mslive/react-ui";
// import { CREATE_ROOM_DOC_URL } from "../common/constants";
import PHONE from "../images/phone.png";
import ARROW from "../images/arrow-left.svg";
import CLOSE from "../images/close.svg";
import {API_URL} from '../common/constants';

function HomePage({ error }) {
//   const themeType = useTheme().themeType;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [secretNumber, setSecretNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);



  const startSessionHandler = (e) => {
        e.preventDefault();
        if(secretNumber.toString() !== "9137534807") {
                setErr(true);
        }
        else {
                setLoading(true);
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                        "api_name": "getVideoCallTokens",
                        "key": "JWT",
                        "secret": "DOPAMINE",
                        "mobile": secretNumber.toString()
                });

                var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                };

                fetch(`${API_URL}dopamine/getQuickCallTokens`, requestOptions)
                .then(response => response.json())
                .then(result => {
                        navigate(`/preview/${result?.data?.room_id}/customer`)

                })
                .catch(error => console.log('error', error));
        }
  }

  React.useEffect(() => {
        if(err) {
                setTimeout(() => {setErr(false)}, 3000)
        }
  }, [err])


  return (
        <>
        <div className="main-screen">
                <Flex className="main-div">
                        <div className="left-col">
                                <div className="border-div">
                                        <div className="black-div">
                                                <h1>Create your fitness session</h1>
                                                <p>
                                                        High quality live fitness sessions for everyone
                                                </p>
                                                <button className="btn" onClick={() => setIsModalOpen(true)}>
                                                        Start instant meeting <img src={ARROW} alt="arrow" width="20px" />
                                                </button>
                                        </div>
                                </div>
                        </div>
                        <div className="right-col">
                                <img src={PHONE} alt="phone" width="100%" />
                        </div>
                </Flex>
        </div>
        {
                isModalOpen &&
                <div className="modal-main">
                        <div className="modal">
                                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                                        <img src={CLOSE} alt="close" />
                                </button>
                                <h3>Create your fitness session</h3>
                                <form className="form" onSubmit={(e) => startSessionHandler(e)}>
                                        <label>Enter secret code</label>
                                        <input type="number" name="secret_number" id="secret_number" value={secretNumber} onChange={(e) => setSecretNumber(e.target.value)} placeholder="Ex: 91xxxxxx19" />
                                        <button className="btn" type="submit" disabled={loading}>
                                                {
                                                        loading ? "Starting instant meeting..." :
                                                        <>Start instant meeting <img src={ARROW} alt="arrow" width="20px" /></>
                                                }
                                        </button>
                                </form>
                        </div>
                </div>
        }
        <div className="error-chip" style={{opacity: err ? 1 : 0}}>Invalid secret code !</div>
        </>
  );
}

HomePage.displayName = "HomePage";

export default HomePage;
