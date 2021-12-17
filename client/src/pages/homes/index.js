import React, { useEffect } from 'react';
import './homes.css';


function HomesPages() {
  useEffect(() => {
    document.title = "Lạc Thuỷ B Confessions";
  }, []);

  return (
    <div className="container-home">
      <div className="container-welcome">
        <div className="box-welcome">
          <p className="welcome">Chào mừng bạn đến với</p>
          <p className="name">Lạc Thuỷ B Confessions</p>
        </div>
      </div>
    </div>
  );
};

export { HomesPages };
