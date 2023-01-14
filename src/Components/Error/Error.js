import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css"

const Error = () => {
      return (
            <div className='error'>
                 <h1>404 Error Page</h1>
                 <h3>Sorry, This Page Doesn't Exist</h3>
                 <button><Link to={"/home"}>Back Home</Link></button>
            </div>
      );
};

export default Error;