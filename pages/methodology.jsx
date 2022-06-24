/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Methodology.module.css";

const diamondHands = {
  list: [
    "Have high fortitude",
    "Are less sensitive to price movments",
    "Are a long term thinker",
  ],
  desc: "If the ratio of sell transactions (outgoing transfer) to the number of buy transactions (incoming transfer) is 30% or less, then the wallet will receive the “D” attribute (💎).",
  class: styles.diamond,
};

const paperHands = {
  list: [
    "Are more sensitive to price movements",
    "Are alert, enjoy the thrill of trading",
    "Are flexible and not afraid of change",
  ],
  desc: "If the ratio of sell transactions (outgoing transfer) to the number of buy transactions (incoming transfer) is greater than 30%, then the wallet will receive the “P” attribute (🧻).",
  class: styles.toiletpaper,
};

const homeBody = {
  list: [
    "Prefer a relatively slower pace",
    "Highly value deep connections with friends",
    "Enjoy substantive conversations",
  ],
  desc: "If the number of unique NFT projects that are currently in the wallet is 16 or less, then the wallet will receive the “H” attribute (🏠).",
  class: styles.house,
};

const socialButterfly = {
  list: [
    "Enjoy meeting new people",
    "Find your energy by interacting with others",
    "Work out your ideas with others",
  ],
  desc: "If the number of unique NFT projects that are currently in the wallet is more than 16, then the wallet will receive the “S” attribute (🦋).",
  class: styles.butterfly,
};

const fledgling = {
  list: [
    "Enjoy taking risk in others",
    "Are spontaneous, comfortable with improvisation",
    "Want to be a part of a journey where you can be most impactful",
  ],
  desc: "If the ratio of the number of fledging project NFTs compared to the number of bluechip project NFTs is equal to or greater than 50%, then the wallet will receive the “F” attribute (🐣).",
  class: styles.chick,
};

const bluechip = {
  list: [
    "Like roadmaps, enjoy research and track records, love roadmaps",
    "Enjoy luxury and premium branding",
    "Prefers long term visions",
  ],
  desc: "If the ratio of the number of fledging project NFTs compared to the number of bluechip project NFTs is less than 50%, then the wallet will receive the “B” attribute (🔵).",
  class: styles.pokerchip,
};

const upwards = {
  list: [
    "Your wallet is experiencing Mercury direct",
    "It is time to apply what you have learned when things were down",
    "Think deeply about important decisions",
  ],
  desc: "If the sum of the differences between the 7 day average price and the 30 day average price for each project is zero or position, then the wallet will receive the “U” attribute (📈).",
  class: styles.upchart,
};

const downwards = {
  list: [
    "Your wallet is experiencing Mercury retrograde",
    "It is now an opportunity to fine-tune ideas",
    "It is time to let go of our need to control",
  ],
  desc: "If the sum of the differences between the 7 day average price and the 30 day average price for each project is negative, then the wallet will receive the “L” attribute (📉).",
  class: styles.downchart,
};

const Card = ({ color, trait, img }) => {
  return (
    <div className={`${styles.GridItem}`}>
      <img
        className={`${styles.Border} ${trait.class}`}
        src={`/images/squigle border svg.svg`}
        alt='border'
      />
      <div className={`${styles.GridItemTopHalf}`}>
        <img
          className={`${styles.TraitImage} ${trait.class}`}
          src={`images/${img}.svg`}
          alt='diamond'
        />
        <ul className={`${styles.TraitList}`}>
          {trait.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.GridItemBottomHalf}`}>{trait.desc}</div>
    </div>
  );
};

export default function Methodology() {
  return (
    <section className={`container ${styles.Methodology}`}>
      <h1>Traits &amp; Methodology - Season 0 Alpha</h1>
      <div className={`${styles.MethodologyGrid}`}>
        <Card color='pink' trait={diamondHands} img={"diamond"} />
        <Card color='turquoise' trait={paperHands} img={"toiletpaper"} />
        <Card color='yellow' trait={homeBody} img={"house"} />
        <Card color='orange' trait={socialButterfly} img={"butterfly"} />
        <Card color='blue' trait={fledgling} img={"chick"} />
        <Card color='pink' trait={bluechip} img={"pokerchip"} />
        <Card color='purple' trait={upwards} img={"upchart"} />
        <Card color='red' trait={downwards} img={"downchart"} />
      </div>
    </section>
  );
}
