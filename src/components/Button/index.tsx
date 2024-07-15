import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
       onClick,
       children,
       type = "button",
       disabled = false,
       className = '',
   }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
