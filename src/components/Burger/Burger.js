import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingriName => {
        // console.log("ingriname: " + ingriName)
        const amount = props.ingredients[ingriName];
        // console.log("amount: " + amount);
        return [...Array(amount)].map((_, i)=> {
            
            return <BurgerIngredient key={ingriName + i} type={ingriName}/>;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    // console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default burger;