import styles from '../styles/Metrics.module.css'

export default function Metrics({wpi}) {
  return (
    <div className={styles.metrics}>
        <h3>My Metrics:</h3>
        {wpi && <ul>
            <li><span className={styles.bigValue}>{ wpi["5"].info.Metrics[0].bigValue}</span> {wpi["5"].info.Metrics[0].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["1"].info.Metrics[0].bigValue}</span> {wpi["1"].info.Metrics[0].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["1"].info.Metrics[1].bigValue}</span> {wpi["1"].info.Metrics[1].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["2"].info.Metrics[0].bigValue}</span> {wpi["2"].info.Metrics[0].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["3"].info.Metrics[0].bigValue}</span> {wpi["3"].info.Metrics[0].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["3"].info.Metrics[1].bigValue}</span> {wpi["3"].info.Metrics[1].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["4"].info.Metrics[0].bigValue}</span> {wpi["4"].info.Metrics[0].smallText}</li>
            <li><span className={styles.bigValue}>{ wpi["4"].info.Metrics[1].bigValue}</span> {wpi["4"].info.Metrics[1].smallText}</li>
        </ul>}
    </div>
  )
}
