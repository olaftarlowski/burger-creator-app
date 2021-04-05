import { Component } from "react";
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngrHandler  = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngr = {
            ...this.state.ingredients
        };
        updatedIngr[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngr});
    }

    removeIngrHandler  = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return
        } else {const updatedCount = oldCount - 1;
        const updatedIngr = {
            ...this.state.ingredients
        };
        updatedIngr[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngr});}
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <>
                <Burger 
                ingredients={this.state.ingredients}
                />
                <BurgerControls 
                addHandler={this.addIngrHandler}
                removeHandler={this.removeIngrHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}></BurgerControls>
            </>
        );
    }

}

export default BurgerBuilder;