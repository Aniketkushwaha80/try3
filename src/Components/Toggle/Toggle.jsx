
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { useContext } from 'react';
import { themeContext } from '../../context/context';
const Toggle = () => {
    const theme= useContext(themeContext)
    const darkmode=theme.state.darkmode
    const Handle=()=>{
        theme.dispatch({type:"toggle"})
    }
    return (
        <div className='toggle' onClick={Handle}>
            <Sun/>
            <Moon/>
            <div className="t-button" style={darkmode? {left:"2px"}:{right:"2px"}}
            >
            </div>
        </div>
    );
};

export default Toggle;