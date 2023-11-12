import { ChevronDown } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
function CustomNavbarLink(props) {
    const location = useLocation();
    console.log(location.pathname);

    const focusOnElement = () => {
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