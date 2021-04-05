import { Component } from "react";
import Burger from '../../components/Burger/Burger'



class BurgerBuilder extends Component {
    render () {
        return (
            <>
                <Burger/>
                <div>Build control</div>
            </>
        );
    }

}

export default BurgerBuilder;