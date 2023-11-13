import { useEffect } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
function CustomNavbarLink(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const focusOnElement = () => {
        if(location.pathname !== "/") {
            navigate("/")
        }
        const identifier = props.object_id;
        const element = document.getElementById(identifier);
        if (element) {
            const y = element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
        }
    };
    
    return (
        <a onClick={focusOnElement} className="p-1 text-decoration-none">
            {props.children}
        </a>
    )
}
export default CustomNavbarLink;