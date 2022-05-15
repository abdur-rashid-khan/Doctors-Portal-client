import React from 'react';

const PrimaryBtn = ({children}) => {
  return (
    <button  className="btn btn-primary font-bold bg-gradient-to-r from-emerald-400 to-sky-400 border-0 hoverBtnSpacing rounded">{children}</button>
  );
};

export default PrimaryBtn; 