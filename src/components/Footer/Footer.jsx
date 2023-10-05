import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footerIcon'>
                <a href='#' className='icon'>
                    <li>
                        <i className="bi bi-twitter">
                        </i>
                    </li>
                </a>
                <a href='#' className='icon'>
                    <li>
                        <i className="bi bi-envelope-fill">
                        </i>
                    </li>
                </a>
                <a href='#' className='icon'>
                    <li>
                        <i className="bi bi-facebook">
                        </i>
                    </li>
                </a>
            </ul>
            <p>Copyright 2023
                    <i className="bi bi-c-circle-fill">
                    </i>
                </p>
      </div>  
    );
}

export default Footer;