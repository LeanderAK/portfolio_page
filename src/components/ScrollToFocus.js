import { ChevronDown } from "react-bootstrap-icons";

function ScrollToFocus(props) {
    const scrollToElement = () => {
        const yOffset = props.yOffset; 
        const identifier = props.object_id;
        const element = document.getElementById(identifier);
        if (element) {
            const y = element.getBoundingClientRect().top + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };
    
    return (
        <button onClick={scrollToElement}>
            <ChevronDown className='scroll-indicator' size={40}/>
        </button>
    )
}
export default ScrollToFocus;