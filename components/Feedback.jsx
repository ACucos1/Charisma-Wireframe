import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Feedback.module.css";
const apiUrl = "https://api.charismasocial.xyz";

export default function Feedback({ address }) {
    const [submitted, setSubmitted] = useState(false);

    const handleFeedBack = async (feedback) => {
        
        const payload = {
            address: address,
            result: feedback,
            message: ""
        }
        if(submitted === false){
            const res = await axios.post(`${apiUrl}/feedback`, payload);
            console.log(res);
            if(res.status === 200){
                setSubmitted(true)
            }
        }
        
        
    };
    return (
        <div className={`${styles.feedback} ${submitted && styles.exiting}`}>
            <h2>{!submitted ? "How do you feel about your results? Let us know!" : "Thanks!"}</h2>
            <div className={styles.buttonWrapper}>
                <button className={`${styles.btn} ${styles.likeBtn}`} onClick={() => { handleFeedBack("Thumbs_up") }}><img className={styles.thumbsUpImg} src="images/thumbsup.png" alt="" /></button>
                <button className={`${styles.btn} ${styles.dislikeBtn}`} onClick={() => { handleFeedBack("Thumbs_down") }}><img className={styles.thumbsDownImg} src="images/thumbsdown.png" alt="" /></button>
            </div>
        </div>
    );
}
