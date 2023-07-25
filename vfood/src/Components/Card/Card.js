import React from 'react';
import './styles.css';

const Card = ({ height, width, children, maxHeight = null, onClick = null }) => {
  return (
    <div
      onClick={onClick ? () => onClick() : null}
      className="cardMain"
      style={{
        marginLeft: '0.5%',
        marginRight: '0.5%',
        opacity: '90%',
        height: height,
        width: width,
        backgroundColor: '#3F3636',
        borderRadius: '14px',
        marginTop: '15px',
        maxHeight: maxHeight,
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  );
};

export default Card;

