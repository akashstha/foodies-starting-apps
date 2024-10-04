import Link from "next/link";

const Meals = () =>{
    return(
        <main>
            <h1>This is the meals Pages</h1>
            <h2>
                <Link href="/meals/share">Share this meals.</Link>
            </h2>
        </main>
    )
}
export default Meals;