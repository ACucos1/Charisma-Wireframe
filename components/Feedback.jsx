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
        <div className={styles.feedback}>
            <h2>Like your results? Let us know!</h2>
            <div className={styles.buttonWrapper}>
                <button onClick={() => { handleFeedBack("Thumbs_up") }}>Like</button>
                <button onClick={() => { handleFeedBack("Thumbs_down") }}>Dislike</button>
            </div>
        </div>
    );
}
