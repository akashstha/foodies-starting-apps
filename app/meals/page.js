
import MealGrid from "@/components/meal/MealGrid";
import { getMeals } from "@/libs/meals";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";

const MealsApi = async() =>{
    const meals = await getMeals();
    return  <MealGrid meals={meals}/>
}
const Meals = () =>{
    
    return(
      <>
      <header className={styles.header}>
        <h1>Delicious Meal created <span className={styles.highlight}>by you.</span></h1>
        <p>Choose your favrouite recipe and cook it by yourself. It is an easy and fun!</p>
        <p className={styles.cta}><Link href="./meals/share">Share your Favrouite recipe</Link></p>
      </header>
      <main className={styles.main}>
    <Suspense fallback ={ <p className={styles.loading}>Loading page</p>}>
       <MealsApi/>
       </Suspense>
        
      </main>
      </>
    )
}
export default Meals;