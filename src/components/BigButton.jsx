import React from 'react';
import '../assets/styles/components/BigButton.scss';

const BigButton = ({ text, funct }) => (
    <button onClick={funct} className="big-button">{text}</button>
);

export default BigButton;