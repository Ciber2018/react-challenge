import {React} from 'react';

const ButtonCard = (props) => {
    return(
        <>            
            <div className="button-card icon-card text-center mb-4 tooltipC" style={props.customColor} dataText="Thanks for hovering! I'm a tooltip">
                <div className="card-body">
                    <i className={props.iconClass}></i>
                    <p className="icon-name text-capitalize text-truncate mb-0">{props.text}</p>                    
                </div>
            </div>            
        </>
        
    )
}

export default ButtonCard;