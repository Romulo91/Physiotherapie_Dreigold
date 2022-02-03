import Link from "next/link";
import navstyles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={navstyles.navbody}>
      <h2>Physiotherapie Dreigold</h2>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/leistungen">Leistungen</Link>
        <Link href="/about">Über Uns</Link>
        <a className={navstyles.appointment}> Termin vereinbaren</a>
      </nav>
    </div>
  );
}
