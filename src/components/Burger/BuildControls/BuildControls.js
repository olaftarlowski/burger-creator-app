import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                type={ctrl.type} 
                added={() => props.addHandler(ctrl.type)}
                removed={() => props.removeHandler(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            })}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchase}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;