import imagesFood from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () =>{
    return(
        <>
        <MainHeaderBackground/>
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
            <Image src ={imagesFood} alt = "Food on the paltes" priority/>
            Food in a plates</Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Meals that you like</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Meals for the community</NavLink>
                    </li>
                </ul>
            </nav>
            </header>
            </>
    )
}
export default MainHeader;