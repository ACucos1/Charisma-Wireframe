import { useEffect, useState, useRef } from "react";
import styles from '../styles/ResultsExplanation.module.css'

export default function ResultsExplanation({wpi, loading}) {
    const [selectedTrait, setSelectedTrait] = useState(1);
    const traitInfoRef = useRef();
    useEffect(() => {
    }, [selectedTrait]);

    useEffect(() => {
        if (loading === false) {
          setTimeout(() => {
            const preview = setInterval(() => {
              setSelectedTrait((prev) => {
                if (prev >= 2) {
                  clearInterval(preview);
                  return 1;
                } else {
                  return prev + 1;
                }
              });
            }, 1000);
          }, 1000);
        }
      }, [loading]);

    return (
        <div className={styles.resultExplanation}>
            <h2>
                The results are in. <br /> Your wallet personailty type is
            </h2>
            <span className={styles.tip}>
                Click the letters to read more about each trait
            </span>
            <h1 className={styles.wpi}>
                <span
                    className={`${styles.trait} ${selectedTrait === 1 && styles.selected
                        } ${wpi && wpi["1"].info.Value == "D" ? styles.D : styles.P}`}
                    onClick={() => {
                        setSelectedTrait(1);
                    }}
                >
                    {wpi && wpi["1"].info.Value}
                </span>
                <span
                    className={`${styles.trait}  ${selectedTrait === 2 && styles.selected
                        } ${wpi && wpi["2"].info.Value == "H" ? styles.H : styles.S}`}
                    onClick={() => {
                        setSelectedTrait(2);
                    }}
                >
                    {wpi && wpi["2"].info.Value}
                </span>
                <span
                    className={`${styles.trait}  ${selectedTrait === 3 && styles.selected
                        } ${wpi && wpi["3"].info.Value == "B" ? styles.B : styles.F}`}
                    onClick={() => {
                        setSelectedTrait(3);
                    }}
                >
                    {wpi && wpi["3"].info.Value}
                </span>
                <span
                    className={`${styles.trait}  ${selectedTrait === 4 && styles.selected
                        } ${wpi && wpi["4"].info.Value == "U" ? styles.U : styles.L}`}
                    onClick={() => {
                        setSelectedTrait(4);
                    }}
                >
                    {wpi && wpi["4"].info.Value}
                </span>
            </h1>

            <p className={styles.resultInfo}>
                {wpi && wpi["6"][Object.keys(wpi["6"])[0]]}
            </p>

            <p className={styles.traitInfo} ref={traitInfoRef}>
                {wpi && wpi[selectedTrait].info.Message}
                <br />
            </p>
        </div>
    );
}
