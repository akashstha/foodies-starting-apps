import imagesFood from "@/assets/logo.png";
import Link from "next/link";

const MainHeader = () =>{
    return(
        <header>
            <Link href="/">
            <img src ={imagesFood.src} alt = "Food on the paltes"/>
            Food in a plates</Link>

            <nav>
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