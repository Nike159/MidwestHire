import logo from '../Assets/Logo.png';
import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-scroll";





const Logo = () => {
    return (
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "175px", width: "175px" }} />
      </div>
    );
  };
class Navbar extends Component{
    state = { clicked: false };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 0) {
          this.setState({ scrolled: true });
        } else {
          this.setState({ scrolled: false });
        }
      };
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){     
        return(         
            <nav className={`NavbarItems ${this.state.scrolled ? "scrolled" : ""}`}>
            <div className='navbar-logo'>
                    <Logo />
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li> 
                    <Link to="content" smooth={true} duration={100}>
                        <a className='nav-links' href="#home">
                            <i class="fa-solid fa-house"></i>Home
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link to="aboutContainer" smooth={true} duration={100}>
                        <a className='nav-links' href='#aboutContainer'>
                            <i class="fa-solid fa-user"></i>About
                        </a>
                    </Link>
                    </li>
                    <li>
                    <Link to="newsContainer" smooth={true} duration={100}>
                        <a className='nav-links' href="#newsContainer">
                            <i class="fa-solid fa-square-rss"></i>News
                        </a>
                    </Link>   
                    </li>
                    <li>
                    <Link to="contactContainer" smooth={true} duration={100}>
                        <a className='nav-links' href="#contactContainer">
                            <i class="fa-solid fa-square-rss"></i>Contact
                        </a>
                    </Link>
                    </li>
                </ul>
            </nav>
)}}

export default Navbar;
