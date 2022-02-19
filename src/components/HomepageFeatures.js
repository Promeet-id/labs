import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Promeet Labs sebagai media belajar yang ramah pemula karena menawarkan
        pendampingan/
      </>
    ),
  },
  {
    title: "Focus on Target",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Fokus adalah kunci untuk menjadi pembelajar yang baik. Media ini akan
        fokus mulai dari yang dasar hingga advance disertai dengan beberapa
        artikel penunjang untuk mempertajam skill coding.
      </>
    ),
  },
  {
    title: "Powered by Community",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Bergabung bersama komunitas kami untuk mendapatkan manfaat lebih banyak.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
