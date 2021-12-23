import React, { useEffect } from 'react';
import './about.css';
import { ImageAbout } from './imageLTB';
import { Info } from './info';

function AboutPages() {
  useEffect(() => {
    document.title = "Thông tin";
  }, []);

  return (
    <div className="container-about">
      <div className="col-6">
        <h1>Thông Tin</h1>
        <h2>Lạc Thủy B Confessions</h2>
        <Info label="Địa chỉ" value="X.Phú Nghĩa - H.Lạc Thuỷ - T.Hoà Bình"/>
        {/* <Info label="Điện thoại" value="0123456789"/> */}
        <Info label="Facebook" value={<a href="https://www.facebook.com/lacthuybconfessions" target="_blank" style={{color: 'blue'}} rel="noreferrer">Lạc Thủy B Confessions</a>}/>
      </div>
      <div className="col-6">
        <ImageAbout />
      </div>
      
    </div>
  );
}

export { AboutPages };
