import { MdArrowOutward } from "react-icons/md";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"
import logo from "../../assets/Cryptoplace.png"
import  {CoinContext} from "../../context/CoinContext";

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (e) =>{
         switch(e.target.value){
            case "usd":{
              setCurrency({name:"usd",symbol:"$"})
                break;
            }
            case "euro":{
              setCurrency({name:"eur",symbol:"€"})
                break;
            }
            case "inr":{
              setCurrency({name:"inr",symbol:"₹"})
                break;
            }
            default:
              setCurrency({name:"usd",symbol:"$"})
            }
            }
         
    

  return (
    <div className="navbar">
      <Link to={'/'}><img src={logo} className ='logo' alt="crypto"/></Link>
      <ul>
      <Link to={'/'}><li>Home</li></Link>
      <li>Feature</li>
      <li>Pricing</li>
      <li>Blog</li>
      <li>Home</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
        <option value="usd">usd</option>
        <option value="euro">euro</option>
        <option value="inr">inr</option>
        </select>       
        <button>Sign up <MdArrowOutward style={{width:"13px"}} /></button>
      </div>
    </div>
  )
}

export default Navbar
