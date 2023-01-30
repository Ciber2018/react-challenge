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
                    <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Electronic</h6>
                              <small className="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-semibold">82.5k</small>
                            </div>
                          </div>
                        </li>
                        
                      </ul>
                </div>
            </div>
        )

    } else {
        return(
            <>
                    <div className="card">
                        <div className="card-body">
                          <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                              <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded" />
                            </div>
                            <div className="dropdown">
                              <button
                                className="btn p-0"
                                type="button"
                                id="cardOpt1"
                                databstoggle="dropdown"
                                ariahaspopup="true"
                                ariaexpanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu" arialabelledby="cardOpt1">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </div>
                          <span className="fw-semibold d-block mb-1">Transactions</span>
                          <h3 className="card-title mb-2">$14,857</h3>
                          <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.14%</small>
                        </div>
                    </div>
                
            </>
        ) 
    }
     
    
}

export default Plate;