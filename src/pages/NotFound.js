import React from 'react'
import {Link} from "react-router-dom"
import "../styles/notfound.css"
function NotFound() {
  return (
    <div className="error-page">
      {" "}
      <p className="error-message">
        {" "}
        Oops! The page you're looking for doesn't exist.{" "}
      </p>{" "}
      <p className="error-description">
        {" "}
        It seems you've reached an unknown route. Please check the URL or
        navigate back to the home page using the navigation links.{" "}
      </p>{" "}
      <p className="error-contact">
        {" "}
        If you believe this is an issue with our website, please contact our
        support team at{" "}
        <a href="mailto:support@example.com" className="error-link">
          {" "}
          support@example.com{" "}
        </a>{" "}
        <Link to="/" className="error-link">
          {" "}
          Back to Home{" "}
        </Link>{" "}
      </p>{" "}
    </div>
  );
}

export default NotFound