import logo from '../Assets/Logo.png';
import "./NavbarStyles.css";
import { Component } from "react";


const Logo = () => {
    return (
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "95px", width: "95px" }} />
      </div>
    );
  };
  
class Navbar extends Component{
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){     
        return(         
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                    <Logo />
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li>                        
                        <a className='nav-links' href="/home"><i class="fa-solid fa-house"></i>Home</a>
                    </li>
                    <li>                        
                        <a className='nav-links' href="#AboutContainer"><i class="fa-solid fa-user"></i>About</a>
                    </li>
                    <li>
                       <a className='nav-links' href="/contact"><i class="fa-solid fa-envelope"></i> Contact</a>
                    </li>
                    <li>
                        <a className='nav-links' href="/news"><i class="fa-solid fa-square-rss"></i>News</a>
                    </li>
                </ul>
            </nav>
)}}

export default Navbar;
