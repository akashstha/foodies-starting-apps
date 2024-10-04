import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Time to get started!
      </h1>
      <h2>
        <Link href= "/meals">Meals</Link>
      </h2>
      <h2>
        <Link href= "/meals/share">Meals Share</Link>
      </h2>
      <h2>
        <Link href= "/community">Meals Share to Community</Link>
      </h2>
      <h2>
        <Link href= "/meals/pizza">Meals Share Pizza</Link>
      </h2>
      <h2>
        <Link href= "/meals/burger">Meals Share Burger</Link>
      </h2>
    </main>
  );
}
