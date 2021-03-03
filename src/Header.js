import img from './images/logo.JPG';
import img1 from './images/cart.jpg';

export default function Header() {
return(
    <div className = "TopNavBar">
        <img className = "logo" src={img} alt = "logo"/>
        <span className = "websiteName">sampleReactWebsite</span>
        <input className = "searchBar" type = "text" placeholder = "Search"/>
        <span className = "myAccount">My Account</span>
        <img className = "cart" src={img1} alt = "cart"/>
      </div>
);
}