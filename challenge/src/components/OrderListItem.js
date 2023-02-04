import {React} from 'react';
import { showCollapsed } from '../helpers/helper';

const OrderListItem = () => (
    <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card mb-4">
            <h5 className="card-header">Basic</h5>
            <div className="card-body">
            <p className="card-text">
                Toggle the visibility of content across your project with a few classes and our JavaScript
                plugins.
            </p>
            <p className="demo-inline-spacing">                                            
                <button
                className="btn btn-primary me-1 collapsed"
                type="button"
                databstoggle="collapse"                                            
                ariaexpanded="false"
                ariacontrols="collapseExample"
                onClick={(e)=>showCollapsed(e)}
                >
                Button with data-bs-target
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="d-grid d-sm-flex p-3 border">
                <img
                    src="../assets/img/elements/1.jpg"
                    alt="collapse-image"
                    height="125"
                    className="me-4 mb-sm-0 mb-2"
                />
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. 
                </span>
                </div>
            </div>
            </div>
        </div>
    </div>
)

export default OrderListItem;