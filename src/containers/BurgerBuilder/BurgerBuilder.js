import { Component } from "react";
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    }

    updatedPurchaseState (ingreds) {
        
        const sum = Object.keys(ingreds).map(ing => {
            return ingreds[ing];
        }).reduce((sum,el)=> {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
        console.log(sum);
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
        this.updatedPurchaseState(updatedIngr);
    }

    removeIngrHandler  = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return
        }  
        const updatedCount = oldCount - 1;
        const updatedIngr = {
            ...this.state.ingredients
        };
        updatedIngr[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngr});
        this.updatedPurchaseState(updatedIngr);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('continer');
    }

    render () {
        
        const disabledInfo = {
            ...this.state.ingredients
        };

        // console.log(disabledInfo);

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

    

        return (
            <>  
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        clickContinue={this.purchaseContinueHandler}
                        clickCancel={this.purchaseCancelHandler}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger 
                ingredients={this.state.ingredients}
                />
                <BurgerControls 
                addHandler={this.addIngrHandler}
                removeHandler={this.removeIngrHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchaseable}
                price={this.state.totalPrice}
                purchase={this.purchaseHandler}></BurgerControls>
            </>
        );
    }

}

export default BurgerBuilder;