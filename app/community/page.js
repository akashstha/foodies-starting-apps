import Link from "next/link";

const Community =() =>{
    return(
        <main>
            <h1>Thanks for sharing to Community</h1>
            <h2>
                <Link href="/meals/burgers">Share a meals plan for Burger.</Link>
            </h2>
            <h2>
                <Link href="/meals/pizza">Share a meals plan for Pizza.</Link>
            </h2>
        </main>
    )
}

export default Community;