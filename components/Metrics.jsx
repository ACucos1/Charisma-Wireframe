import styles from '../styles/Metrics.module.css'

export default function Metrics({wpi}) {
  return (
    <div className={styles.metrics}>
        <h3>My Metrics:</h3>
        <ul>
            <li>{wpi && wpi["1"].info.Message}</li>
            <li>{wpi && wpi["2"].info.Message}</li>
            <li>{wpi && wpi["3"].info.Message}</li>
            <li>{wpi && wpi["4"].info.Message}</li>
        </ul>
    </div>
  )
}
