import React, { useState, useRef, useEffect, useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import styles from "../styles/Passwordmodal.module.css";

export default function PasswordModal() {
  const [input, setInput] = useState("");
  const [showWrongPwd, setShowWrongPwd] = useState(false);
  const { setLoggedIn } = useContext(Web3Context);
  const modalRef = useRef();
  const pwd = "dazzle";

  const handlePasswordEnter = () => {
    if (input.toLowerCase() === pwd) {
      modalRef.current.style.display = "none";
      window.localStorage.setItem("loggedIn", "loggedin");
      setLoggedIn(true);
    } else {
      setShowWrongPwd(true);
      setInput("");
      setTimeout(() => {
        setShowWrongPwd(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (window.localStorage.getItem("loggedIn") === "loggedin") {
      modalRef.current.style.display = "none";
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className={styles.pwdModal} ref={modalRef}>
      <div className={styles.modalWrapper}>
        <img src="./images/EYE.svg" alt="" />
        <h1>
          Whoa there, partner! <br /> You need a password to enter this site.
        </h1>
        <div className={styles.inputWrapper}>
          <input type="password" onChange={handleChange} value={input} />
          <button className="btn-secondary" onClick={handlePasswordEnter}>
            Enter
          </button>
        </div>
        <span className={styles.error}>
          {showWrongPwd && "Incorrect password. Better luck next time!!"}
        </span>
      </div>
    </div>
  );
}
