import { Link } from "react-router-dom";

function FooterComponent(props) {
    return (
        <footer className='text-center'>
          <span className='timeline-title p-1 footer-item m-3'>
            <Link to="/imprint" className='link'>Imprint</Link>
          </span>
          <span className='timeline-title p-1 footer-item m-3 '>
            <Link to="/privacy" className='link'>Privacy Policy</Link>
          </span>
        </footer>
    );
}

export default FooterComponent;