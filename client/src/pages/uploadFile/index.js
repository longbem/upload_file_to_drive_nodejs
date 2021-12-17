import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import './uploadFile.css';
import { Introduce } from './introduce';
import { UploadFiles } from './uploadFile';


const banner = 'https://lh4.googleusercontent.com/Z05p4fBV2HDg40-8ain6_jKc9v_Jv2PAo5SSFHqJRNeUo96PUr2m-0lLFbjmmnICo30oe3s-1TqkG5aupuD4qOI5EmSjghVCB9OODUoc_Um8xe9ZYac3x227uYJLILZb=w800';
const imageSchool = 'https://scontent.xx.fbcdn.net/v/t1.6435-9/36726426_2051735801757938_8410435010913370112_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=WHRcAVAPvksAX_WixWi&tn=NqfCNzQysmY-vE_F&_nc_ht=scontent.fhan3-4.fna&oh=4bf1e5bbc5c7550fb92b73956e5b7488&oe=61D750FB&_nc_fr=fhan3c04';

function UploadFilesPages() {
  useEffect(() => {
    document.title = "Tải file";
  }, []);

  return (
    <div className="up-file-container">
        <div className="col-6">
          <img src={imageSchool} width='100%' className="img-school-up-file"/>
        </div>
        <Introduce />
        <div className="col-6 background-upload center">
          <img src={banner} width="400" />
        </div>
        <div className="col-6 background-upload">
          <h6>Nội dung:</h6>
          <p className="txt-introduce">Hãy viết những điều thầm kín của bạn vào ô bên dưới nhé.<br /> Thông điệp này sẽ được xuất hiện trong Fanpage: <a href='https://www.facebook.com/lacthuybconfessions' target="_blank" style={{color: 'blue'}} rel="noreferrer">Lạc thuỷ B Confessions</a> </p>
        </div>
        <div className="col-6 background-upload">
          <h6>Nào! Hãy thả Cf tại đây bạn nhé. <span style={{color: 'red'}}>*</span></h6>
          <Input.TextArea rows={10}/>
        </div>
        <UploadFiles />
        <Button />
    </div>
  );
}

export { UploadFilesPages };
