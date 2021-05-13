import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="row justify-content-center text-white">
        <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">The page you are looking for was not found.</div>
            <Link className="btn btn-link" to="/">Back to Home</Link>
        </div>
    </div>
    )
}

export default NotFound
