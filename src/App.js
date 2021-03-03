import React from 'react';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import ProductCard from './ProductCard';


class App extends React.Component{
  render(){
      return(
      <div>
        <Header/>
        <div className = "body">
        <Filter/>
        <ProductCard/>
        </div>
      </div>
      );
  }
}
export default App;
