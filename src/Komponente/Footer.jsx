import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2024 Copyright:
                <a className='text-white m-1' href='#'>
                    E-Uprava
                </a>
            </div>
        </footer>
    );
};

export default Footer;