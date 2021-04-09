import React from 'react';
import Button from '../../UI/Button/Button';



const orderSummary = (props) => {

    const ingredsSumm = Object.keys(props.ingredients).map(
        igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
            <strong><p>Total price: {props.price.toFixed(2)} $</p></strong>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.clickCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.clickContinue}>CONTINUE</Button>
        </>
    );
}


export default orderSummary;