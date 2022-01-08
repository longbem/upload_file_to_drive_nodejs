import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import './uploadFile.css';
import { Introduce } from './introduce';
import { UploadFiles } from './uploadFile';
import { imageSchool } from '../../constants';

const banner = 'https://lh4.googleusercontent.com/Z05p4fBV2HDg40-8ain6_jKc9v_Jv2PAo5SSFHqJRNeUo96PUr2m-0lLFbjmmnICo30oe3s-1TqkG5aupuD4qOI5EmSjghVCB9OODUoc_Um8xe9ZYac3x227uYJLILZb=w800';


function UploadFilesPages() {
  useEffect(() => {
    document.title = "Tải file";
  }, []);

  return (
    <div className="up-file-container">
        <div className="col-6">
          <img src={imageSchool} width='100%' className="img-school-up-file shadow"/>
        </div>
        <Introduce />
        <div className="col-6 background-upload center shadow">
          <img src={banner} className="banner" />
        </div>
        <div className="col-6 background-upload shadow">
          <h6>Nội dung:</h6>
          <p className="txt-introduce">Hãy viết những điều thầm kín của bạn vào ô bên dưới nhé.<br /> Thông điệp này sẽ được xuất hiện trong Fanpage: <a href='https://www.facebook.com/lacthuybconfessions' target="_blank" style={{color: 'blue'}} rel="noreferrer">Lạc thuỷ B Confessions</a> </p>
        </div>
        <div className="col-6 background-upload shadow">
          <h6>Nào! Hãy thả Cf tại đây bạn nhé. <span style={{color: 'red'}}>*</span></h6>
          <Input.TextArea rows={10} className="input-upload"/>
        </div>
        <UploadFiles />
        <Button type='submit'>Gửi</Button>
    </div>
  );
}

export { UploadFilesPages };
