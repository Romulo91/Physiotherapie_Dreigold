import styles from "../Info/info.module.scss";

export default function Info() {
  return (
    <div className={styles.container}>
      <section id="home">
        <div>
          <>
            <h1> Ihre Gesundheit liegt uns am Herzen </h1>

            <p>
              Unsere in 2020 eröffnete physiotherapie Praxis liegt im Herzen
              Berlin Kreuzberg, am Bergmankiez. In der nähe der U-7 Geisenauer
              Str. oder dem bus 248 Jüterboger Str. erreichen Sie und zu Fuß
            </p>

            <p>
              In unserer modernen Physiotherapie betreuen wir Sie auf über ????
              qm. Sie stehen als Mensch und Patient bei uns im Mittelpukt, den
              Ihre Gesundheit und Ihr Wohlempfinden ist unsere Priorität.
            </p>
          </>
        </div>
      </section>
      <section className={styles.img__Container}></section>
    </div>
  );
}
