import {React} from 'react';

const Plate = (props) => {
    if (window.matchMedia('screen and (min-width: 992px)').matches) {
        
        return(      
              <div className='card h-100'>
                <div className='card-header d-flex align-items-center justify-content-between pb-0'>
                    <div className="card-title mb-0">
                        <h5 className="m-0 me-2">{props.order}</h5>
                        <small className="text-muted">Precio: </small>
                    </div>
                    <div className="dropdown">
                        <button
                        className="btn p-0"
                        type="button"
                        id="orederStatistics"
                        databstoggle="dropdown"
                        ariahaspopup="true"
                        ariaexpanded="false"
                        >
                        <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" arialabelledby="orederStatistics">
                        <a className="dropdown-item" href="#">Select All</a>
                        <a className="dropdown-item" href="#">Refresh</a>
                        <a className="dropdown-item" href="#">Share</a>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-column align-items-center gap-1">
                        <h2 className="mb-2">8,258</h2>
                        <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart"></div>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <>
             
                
            </>
        ) 
    }
     
    
}

export default Plate;