import React from 'react'
import OptionsPicker from "../OptionsPicker/OptionsPicker";
import Product from "../Product/Product";
import SubscribeBox from "../SubscribeBox/SubscribeBox";

const ProductPanel = () => {
    return (
        <div className="main">
            <div className="container">
                <OptionsPicker/>
                <Product/>
                <SubscribeBox/>
            </div>
        </div>
    )
}

export default ProductPanel
