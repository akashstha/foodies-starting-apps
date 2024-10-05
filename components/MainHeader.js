import imagesFood from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainHeader.module.css";

const MainHeader = () =>{
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
            <Image src ={imagesFood} alt = "Food on the paltes" priority/>
            Food in a plates</Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals that you like</Link>
                    </li>
                    <li>
                        <Link href="/community">Meals for the community</Link>
                    </li>
                </ul>
            </nav>
            </header>
    )
}
export default MainHeader;