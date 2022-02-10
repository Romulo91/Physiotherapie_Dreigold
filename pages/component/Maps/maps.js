import styles from "../Maps/maps.module.scss";

export default function Maps() {
  return (
    <div className={styles.location__Container}>
      <section className={styles.visit}>
        <h2>Wollen Sie uns besuchen ?</h2>
        <p>
          Unsere in 2020 eröffnete physiotherapeutische Praxis liegt im Herzen
          von Berlin Kreuzberg, am Bermankiez. In der nähe der U-7 Geisenauer
          Str. oder dem bus 248 Jüterboger Str. erreichen Sie und zu Fuß
        </p>
        <a> Termin vereinbaren</a>
      </section>
      <section className={styles.map__Container}>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=J%C3%BCterboger%20Str.%206A&t=&z=19&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </section>
    </div>
  );
}
