import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import darkChoc from '../images/DarkChocolate.jpg';
import milkChoc from '../images/MilkChocolate.jpg';
import nutsChoc from '../images/NutsChocolate.jpg';
import silkChoc from '../images/SilkChocolate.jpg';
import { productQuantity, clearProduct } from '../actions/productQuantity';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);
    let productsInCart = [];
    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    //const productImages = [darkChoc, milkChoc, nutsChoc, silkChoc]
    const productImages = (product) => {
        if( product.tagName === 'darkChocolate') {
            return darkChoc;
        } else if( product.tagName === 'milkChocolate') {
            return milkChoc;
        } else if( product.tagName === 'nutsChocolate') {
            return nutsChoc;
        } else if( product.tagName === 'silkChocolate') {
            return silkChoc;
        }
    }
    productsInCart = productsInCart.map( (product, index) => {
        console.log("Product is :");
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product">
                    <ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon>
                    <img src={productImages(product)} alt="productpic"/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">Rs{product.price}</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">Rs{product.numbers * product.price}</div>
            </Fragment>
        )
    });
    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);