import React from 'react';

const imageUrl = 'https://scontent.xx.fbcdn.net/v/t1.6435-9/36726426_2051735801757938_8410435010913370112_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=WHRcAVAPvksAX_WixWi&tn=NqfCNzQysmY-vE_F&_nc_ht=scontent.fhan3-4.fna&oh=4bf1e5bbc5c7550fb92b73956e5b7488&oe=61D750FB&_nc_fr=fhan3c04';

function ImageAbout() {
  return (
    <div className="col-12">
     <img src={imageUrl} width="100%" className="imageAbout" />
    </div>
  );
}

export { ImageAbout };