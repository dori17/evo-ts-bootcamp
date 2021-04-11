import React from 'react';
import './Button.css';

interface ButtonProps {
    title: string,
    onClick: (e: React.MouseEvent) => void,
}

const Button = ({title, onClick}: ButtonProps) => {
    return (
        <button className="controls__btn" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;