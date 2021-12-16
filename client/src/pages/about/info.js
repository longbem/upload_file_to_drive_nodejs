import React from 'react';

const Info = ({ label, value }) => {
  return (
    <div className="info-about">
      <p><span className="label">{label}</span>:  {value}</p>
    </div>
  )
}

export { Info };