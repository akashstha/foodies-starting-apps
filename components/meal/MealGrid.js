import styles from "./MealGrid.module.css";
import MealItem from "./MealIteam";

const MealGrid = ({meals}) =>{
    return(
        
        <ul className={styles.meals}>
        {meals.map(meal =>{
                <li key={meal.id}>
                <MealItem {...meal}/>
                </li>
            })}
        </ul>
    )
}
export default MealGrid;