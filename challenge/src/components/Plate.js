import {React} from 'react';
import { openMenuDropdown,openCardMenuDropdown, openMobileEndMenu } from '../helpers/helper';
import Input from './Input';

const Plate = (props) => ( 
                 
              <div className='card h-100'>
                <div className='card-header d-flex align-items-center justify-content-between pb-0'>
                    <div className="card-title mb-0">
                        <h5 className="m-0 me-2">{props.order}</h5>
                        <small className="text-muted bot-pad">Precio: </small>
                    </div>
                    <div className="dropdown">
                        <button
                        className="custom-btn p-0"
                        type="button"
                        id="orederStatistics"
                        databstoggle="dropdown"
                        ariahaspopup="true"
                        ariaexpanded="false"
                        onClick={openMenuDropdown}                        
                        >
                        <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" arialabelledby="orederStatistics">
                        <button className="dropdown-item">Duplicar</button>
                        <button className="dropdown-item">Duplicar con</button>
                        <button className="dropdown-item" onClick={openMobileEndMenu}>Complementos</button>
                        <button className="dropdown-item">Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className="d-flex justify-content-between align-items-center mb-3 up-pad">
                       <div className="d-flex flex-column align-items-center gap-1">
                        <h4 className="mb-2">Total: 8,258</h4>                        
                        </div>
                        <div className='row'>
                          <div style={{'textAlign':'center'}}>
                            <div className="dropdown">
                                <button
                                  className="btn btn-sm btn-outline-primary dropdown-toggle"
                                  type="button"
                                  id="growthReportId"
                                  databstoggle="dropdown"
                                  ariahaspopup="true"
                                  ariaexpanded="false"
                                  onClick={openCardMenuDropdown}
                                >
                                Tipo
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                  <button className="dropdown-item">Cuarto(a)</button>
                                  <button className="dropdown-item">Medio(a)</button>
                                  <button className="dropdown-item">Tres Cuartos(as)</button>
                                  <button className="dropdown-item">Entero(a)</button>
                                </div>
                              </div>
                          </div>
                          <div className='up-pad' style={{'textAlign':'center'}}>                            
                              <Input inputType='number' inputClass='form-control' customStyle={{'width':'120px','margin':'0 auto'}} inputPlaceholder='Cantidad'/>                                            
                          </div>                           
                        </div>
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

export default Plate;