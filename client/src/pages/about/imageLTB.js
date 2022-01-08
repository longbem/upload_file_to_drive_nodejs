import React from 'react';
import { imageSchool } from '../../constants';

function ImageAbout() {
  return (
    <div className="col-12">
     <img src={imageSchool} width="100%" className="imageAbout shadow" />
    </div>
  );
}

export { ImageAbout };