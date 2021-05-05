import React from 'react';
import './Header.css';

function Header() {
    function refreshPage(){ 
        window.location.reload(); 
    }
    return (
        <div className="header">
                <div className="header_left">
                    <h2>Restaurant Menü</h2>
                </div>

                {/* <div className="header_right">
                <button type="button" onClick={ refreshPage }> <span>Refresh Page</span> </button> 
                </div> */}

        </div>
    )
}

export default Header
