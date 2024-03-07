import { Component, useState } from "react";
import './index.css';

function Switchbtn() {
    const [option, setOption] = useState('monthly');

    const handleSwitch = (option) => {
        setOption(option);
    }

    return (
        <div className="row switch">
            <div className={`col d-flex justify-content-center ${option === 'monthly' ? 'active' : ''}`} onClick={() => handleSwitch('monthly')}>Monthly</div>
            <div className={`col d-flex justify-content-center ${option === 'annual' ? 'active' : ''}`} onClick={() => handleSwitch('annual')}>Annual&nbsp;<span>-20% off</span></div>
            <div className="switchbg" style={{ left: option === 'monthly' ? '0' : '50%' }}></div>
        </div>
    );
}

export default Switchbtn;