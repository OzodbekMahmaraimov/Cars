import React, { useState, useEffect } from 'react';
import './loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Hide loader after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-container ${loading ? 'visible' : 'hidden'}`}>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;
