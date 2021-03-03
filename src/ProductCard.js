import React from 'react';
import iPhoneImage from './images/iPhone.webp';
import fiveStarImage from './images/fiveStars.jpg';

class ProductCard extends React.Component{
    
render(){
    const {productName, price, rating} = this.props;
    return(

        <div className = "products">
            <h3>Iphone</h3>
            <img className = "productCardImage" src = {iPhoneImage} alt = "iPhone"/>
            <div className = "productSpecifications">
            <span>Rating:</span>
            <img className = "fiveStarImage" src = {rating} alt = "fiveStar"/>
            <p><span>Name:</span>{productName}</p>
            <p><span>Price:</span>{price}</p>
            </div>
        </div>
    );
}
}
export default ProductCard;