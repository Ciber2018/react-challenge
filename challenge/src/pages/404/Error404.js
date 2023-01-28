import {React} from 'react';
import { Link } from 'react-router-dom';
import image404 from '../../assets/img/error404/page-misc-error-light.png';

const Error404 = () => {
    return(
        <div className="container-xxl container-p-y">
            <div className="misc-wrapper">
                <h2 className="mb-2 mx-2">Page Not Found :(</h2>
                <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                <Link to="/sale" className="btn btn-primary">Back to home</Link>
                <div className="mt-3">
                <img
                    src={image404}
                    alt="page-misc-error-light"
                    width="500"
                    className="img-fluid"
                    dataappdarkimg="illustrations/page-misc-error-dark.png"
                    dataapplightimg="illustrations/page-misc-error-light.png"
                 />
                </div>
            </div>
        </div>
    )
}

export default Error404;