import {React} from 'react';

const Modal = ({openModal,closeButton}) => (
  <div className='mt-3'>
    <div className={`modal fade ${openModal && 'show'}`} id="backDropModal" databsbackdrop="static" tabIndex="-1" role='dialog' style={{display: openModal ? 'block' : 'none'}}>
        <div className="modal-dialog">
        <form className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="backDropModalTitle">Modal title</h5>
            <button
                type="button"
                className="btn-close"
                databsdismiss="modal"
                aria-label="Close"
                onClick={closeButton}
            ></button>
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="col mb-3">
                <label htmlFor="nameBackdrop" className="form-label">Name</label>
                <input
                    type="text"
                    id="nameBackdrop"
                    className="form-control"
                    placeholder="Enter Name"
                />
                </div>
            </div>
            <div className="row g-2">
                <div className="col mb-0">
                <label htmlFor="emailBackdrop" className="form-label">Email</label>
                <input
                    type="text"
                    id="emailBackdrop"
                    className="form-control"
                    placeholder="xxxx@xxx.xx"
                />
                </div>
                <div className="col mb-0">
                <label htmlFor="dobBackdrop" className="form-label">DOB</label>
                <input
                    type="text"
                    id="dobBackdrop"
                    className="form-control"
                    placeholder="DD / MM / YY"
                />
                </div>
            </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" databsdismiss="modal">
                Close
            </button>
            <button type="button" className="btn btn-primary">Save</button>
            </div>
        </form>
        </div>
    </div>
  </div>
)

export default Modal;