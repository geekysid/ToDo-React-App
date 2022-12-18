import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-text">Tools Used</div>
        <div className="footer-icon">
            <span className="footer-icon-span" title="HTML5"><ion-icon name="logo-html5"></ion-icon></span>
            <span className="footer-icon-separator"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
            <span className="footer-icon-span" title="CSS3"><ion-icon name="logo-css3"></ion-icon></span>
            <span className="footer-icon-separator"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
            <span className="footer-icon-span" title="JS5"><ion-icon name="logo-javascript"></ion-icon></span>
            <span className="footer-icon-separator"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
            <span className="footer-icon-span" title="React"><ion-icon name="logo-react"></ion-icon></span>
            <span className="footer-icon-separator"><ion-icon name="ellipsis-vertical-outline"></ion-icon></span>
            <span className="footer-icon-span" title="Firebase"><ion-icon name="logo-firebase"></ion-icon></span>
        </div>
    </div>
  )
}

export default Footer