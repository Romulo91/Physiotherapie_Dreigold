import Link from "next/link";
import navstyles from "./navbar.module.scss";

export default function Navbar() {
  const smoothScolling = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(`#${target}`).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 90,
      behavior: "smooth",
    });
  };
  return (
    <div className={navstyles.navbody}>
      <h2>Physiotherapie Dreigold</h2>
      <nav>
        <a className="nav__link" href="home" onClick={smoothScolling}>
          Home
        </a>
        <a className="nav__link" href="leistungen" onClick={smoothScolling}>
          Leistungen
        </a>
        <a className="nav__link" href="about" onClick={smoothScolling}>
          Über Uns
        </a>
        <a className={navstyles.appointment}> Termin vereinbaren</a>
      </nav>
    </div>
  );
}
