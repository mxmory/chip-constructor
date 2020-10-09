import React, {Fragment} from 'react';
import ProductPanel from "../ProductPanel/ProductPanel";
import Header from "../Header/Header";
import TitleContainer from "../TitleContainer/TitleContainer";
import Footer from "../Footer/Footer";


const App = () => {
    return (
        <Fragment>
            <Header/>
            <TitleContainer/>
            <ProductPanel/>
            <Footer/>
        </Fragment>
    )
}

export default App;
