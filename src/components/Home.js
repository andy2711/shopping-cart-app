import React from 'react';
import darkChoc from '../images/DarkChocolate.jpg';
import milkChoc from '../images/MilkChocolate.jpg';
import nutsChoc from '../images/NutsChocolate.jpg';
import silkChoc from '../images/SilkChocolate.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={darkChoc} alt="Dark Chocolate" height="194px" width="259px"/>
                <h3>Dark Chocolate</h3>
                <h3>Rs 299.00</h3>
                <a onClick={() => props.addBasket('darkChocolate')} className="addToCart cart1" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={milkChoc} alt="Milk Chocolate"/>
                <h3>Milk Chocolate</h3>
                <h3>Rs 299.00</h3>
                <a onClick={() => props.addBasket('milkChocolate')} className="addToCart  cart2" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={nutsChoc} alt="Nuts Chocolate" height="194px" width="259px"/>
                <h3>Nuts Chocolate</h3>
                <h3>Rs 349.00</h3>
                <a onClick={() => props.addBasket('nutsChocolate')} className="addToCart cart3" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={silkChoc} alt="Silk Chocolate" height="194px" width="259px"/>
                <h3>Silk Chocolate</h3>
                <h3>Rs 329.00</h3>
                <a onClick={() => props.addBasket('silkChocolate')} className="addToCart cart4" href="#">Add To Cart</a>
            </div>
        </div>
    );
}

export default connect(null,{addBasket})(Home);