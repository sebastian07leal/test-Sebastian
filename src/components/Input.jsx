import React from 'react';
import '../assets/styles/components/Input.scss'

const Input = ({ title, f, val }) => (
    <div className="conatiner-Input">
        <h2 className="conatiner-Input__title">{title}</h2>
        <input defaultValue={val} onChange={f} className="conatiner-Input__input" type="text"/>
    </div>
);

export default Input;