import React from 'react';
import iPhoneImage from './images/iPhone.webp';
import fiveStarImage from './images/fiveStars.jpg';

class ProductCard extends React.Component{
render(){
    return(

        <div className = "products">
            <h3>Apple iPhone</h3>
            <img className = "productCardImage" src = {iPhoneImage} alt = "iPhone"/>
            <div className = "productSpecifications">
            <span>Rating:</span>
            <img className = "fiveStarImage" src = {fiveStarImage} alt = "fiveStar"/>
            <p><span>Name:</span>iPhone</p>
            <p><span>Price:</span>$1200</p>
            </div>
        </div>
    );
}
}
export default ProductCard;