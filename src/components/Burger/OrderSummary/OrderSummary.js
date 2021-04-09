import React, { Component } from 'react';
import Button from '../../UI/Button/Button';



class OrderSummary extends Component  {

    componentDidUpdate() {
        console.log('[OrderSumamry] did update');
    }

    

    render () {

        const ingredsSumm = Object.keys(this.props.ingredients).map(
            igKey => {
                return (<li key={igKey}>
                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>)
            }
        );



        return (
            <>
                <h3>Your Order</h3>
                <p>Delicious burger with the following ingredients: </p>
                <ul>
                    {ingredsSumm}
                </ul>
                <strong><p>Total price: {this.props.price.toFixed(2)} $</p></strong>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.clickCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.clickContinue}>CONTINUE</Button>
            </>
        );
    }
    
}


export default OrderSummary;