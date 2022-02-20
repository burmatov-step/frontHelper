import React, {FC} from "react";
import '../styles/App.css'


const Preloader: FC<any> = (props) =>{

    return(
        <div className="preloader">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        
    )
}

export default Preloader
