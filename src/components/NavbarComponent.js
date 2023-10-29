import { Navbar} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function NavbarComponent(props) {
    const [scrolledNavbar, setScrolledNavbar] = useState(true);
    const [iconSize, setIconSize] = useState(50);
    const handleScroll = () => {
        if (props.scroll_visibility) {
            let scroll = window.scrollY;
            if (scroll > 0.2 * window.innerHeight) { 
            setScrolledNavbar(true);
            } else{
            setScrolledNavbar(false);
            }
        }
    };
    const handleResize = () => {
    } 

    useEffect(() => {
        if(props.scroll_visibility) {
            setScrolledNavbar(false)
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Navbar className={`custom-navbar ${scrolledNavbar ? 'custom-navbar-bg' : ''}`} id='navbar'>
          <div className="d-flex justify-content-between w-100 p-4 pb-0 pt-0">
            <div className="d-flex">
              <span className='m-2 navbar-item'><Link to="/" className='link color-2'>EXPERTISE</Link></span>
              <span className='m-2 navbar-item'><Link to="/" className='link color-2'>PROJECTS</Link></span>
              <span className='m-2 navbar-item'><Link to="/" className='link color-2'>EXPERIENCE</Link></span>
            </div>
            <div className='d-flex'>
              <a href="https://github.com/LeanderAK" target='blank'>
                <Github className="mt-1 ms-4 color-2" size={iconSize} />
              </a>
              <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
                <Linkedin className="mt-1 ms-4 color-2" size={iconSize} />
              </a>
            </div>
          </div>
        </Navbar>
    )
}
export default NavbarComponent;