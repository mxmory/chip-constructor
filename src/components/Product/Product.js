import React from 'react'
import ChosenOptions from "../ChosenOptions/ChosenOptions";
import './Product.scss'
import LiveView from "../LiveView/LiveView";
import Steps from "../Steps/Steps";

const Product = () => {
    return (
        <div className="product">
            <ChosenOptions/>
            <div className="product__main">
                <LiveView/>
                <Steps/>
            </div>
        </div>
    )
}

export default Product
