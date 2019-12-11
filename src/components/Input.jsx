import React from 'react';
import '../assets/styles/components/Input.scss'

const Input = ({ title, f }) => (
    <div className="conatiner-Input">
        <h2 className="conatiner-Input__title">{title}</h2>
        <input onChange={f} className="conatiner-Input__input" type="text"/>
    </div>
);

export default Input;