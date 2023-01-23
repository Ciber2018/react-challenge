import {React} from 'react';

const ButtonCard = (props) => {
    return(
        <>            
            <div className="button-card icon-card text-center mb-4 tooltipC" style={props.customColor} datatext={props.text} onClick={props.handleClick}>
                <div className="card-body">
                    <i className={props.iconClass}></i>
                    <p className="icon-name text-capitalize text-truncate mb-0"></p>                    
                </div>
            </div>            
        </>
        
    )
}

export default ButtonCard;