import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '80vh' }} className="d-flex align-items-center justify-content-center">
            <div style={{ color: '#83b735' }} className="spinner-border my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;