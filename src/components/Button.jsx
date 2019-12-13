import React from 'react';
import '../assets/styles/components/Button.scss';

const Button = ({ dir, text  }) => (
<a className='button-a' href={dir}><button>{text}</button></a>
);

export default Button;