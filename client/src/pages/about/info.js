import React from 'react';

const Info = ({ label, value }) => {
  return (
    <div className="info-about">
      <p><span className="label">{label}</span>:  <span className="value">{value}</span></p>
    </div>
  )
}

export { Info };