import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import ProductCard from './ProductCard';
import twoStarImage from "./images/twoStar.png"
import fiveStarImage from "./images/fiveStars.jpg"


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: {
        iPhone:{
        productName: "iPhone 11 pro max",
        price : "$1200",
        Rating :{twoStarImage}
        },
        Android:{
          productName: "Android smart Phone",
          price : "$1300",
          Rating : {twoStarImage}
      },
      SamsungPhone:{
        productName: "Samsung Note 10 Plus",
        price : "$1500",
        Rating : {fiveStarImage}
        },
      Moto:{
          productName: "Moto zforce 2",
          price : "$1000",
          Rating : ""
       }
    }
  }
  }
  render(){
    console.log("this.state.products.iPhone.name", this.state.products.SamsungPhone.Rating);
      return(
      <React.Fragment>
        <Header/>
        <div className = "body">
        <Filter/>
        <ProductCard productName={this.state.products.iPhone.productName} rating= {this.state.products.iPhone.Rating.twoStarImage} price={this.state.products.iPhone.price}/>
        <ProductCard productName={this.state.products.Android.productName} rating= {this.state.products.Android.Rating.twoStarImage} price={this.state.products.Android.price}/>
        <ProductCard productName={this.state.products.SamsungPhone.productName} rating= {this.state.products.SamsungPhone.Rating.fiveStarImage} price={this.state.products.SamsungPhone.price}/>
        <ProductCard productName={this.state.products.Moto.productName} rating= {this.state.products.Moto.Rating} price={this.state.products.Moto.price}/>
        {/* <ProductCard/> */}
        </div>
      </React.Fragment>
      );
  }
}
export default App;
