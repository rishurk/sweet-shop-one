import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 mt-5 glass-nav text-center text-white-50">
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Antigravity Template. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
