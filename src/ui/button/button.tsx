import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
    min-width: ${props => props.variant === 'secondary' ? 'auto' : '48px'};
    text-wrap: nowrap;
    min-height: 48px;
    padding: 12px 16px;
    border-radius: 12px;
    background: ${props => props.variant === 'secondary' ? '#FF4D00' : '#18191A'};
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
                                           icon,
                                           children,
                                           variant = 'primary',
                                           onClick,
                                           disabled = false,
                                           ...props
                                       }) => {
    return (
        <ButtonContainer
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {children}
        </ButtonContainer>
    );
};

export default Button;
