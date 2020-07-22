import React from 'react';
import './Button.scss';
import { ArrowLeft, ArrowRight, ArrowDown, ArrowUp } from 'react-feather';

const Button = ({ action, color, icon, onClick }) => {
  const getIcon = () => {
    const iconSize = 20;

    switch (icon) {
      case 'arrowLeft':
        return <ArrowLeft size={iconSize} />;
      case 'arrowRight':
        return <ArrowRight size={iconSize} />;
      case 'arrowUp':
        return <ArrowUp size={iconSize} />;
      case 'arrowDown':
        return <ArrowDown size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <div className={`button-wrapper ${color}`}>
      <button type="button" onClick={onClick}>
        {icon === 'arrowLeft' && <i>{getIcon()}</i>}
        <span>{action}</span>
        {icon === 'arrowRight' && <i>{getIcon()}</i>}
      </button>
    </div>
  );
};

export default Button;
