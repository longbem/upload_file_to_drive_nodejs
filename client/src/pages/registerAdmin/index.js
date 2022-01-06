import React, { useState, useRef, useMemo } from 'react';
import { Form, Input, Button, Radio, Select, message } from 'antd';
import { location, classCurrent, position } from './contants';
import { SubmitRegisterAdmin } from './services';

import './registerAdmin.css';

const imageSchool = 'https://scontent.xx.fbcdn.net/v/t1.6435-9/36726426_2051735801757938_8410435010913370112_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=WHRcAVAPvksAX_WixWi&tn=NqfCNzQysmY-vE_F&_nc_ht=scontent.fhan3-4.fna&oh=4bf1e5bbc5c7550fb92b73956e5b7488&oe=61D750FB&_nc_fr=fhan3c04';

export const RegisterAdmin = () => {
    const formRef = useRef(null);
    const [info, setInfo] = useState({
        id: '',
        name: '',
        numberPhone: '',
        linkFb: '',
        idea: '',
        isPhotoShop: 0,
        position: '',
        location: '',
        classCurrent: '',
    });

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            ...info,
            id: Math.round(Date.now()/100000),
            isPhotoShop: info.isPhotoShop === 0 ? 'Không' : 'Có',
            classCurrent: classCurrent[info.classCurrent - 1].label,
            location: location[info.location - 1].label,
            position: position[info.position - 1].label,
        }
        const res = await SubmitRegisterAdmin(data);
        if (res.status) {
            message.success(res?.message);
        } else {
            message.success(res?.message);
        }
    }
    
    const handleSelectPhotoShop = (e) => {
        setInfo({ ...info, isPhotoShop: e.target.value });
    };

    const handleSelectClassCurrent = (e) => {
        setInfo({ ...info, classCurrent: e });
    }

    const handleSelectPosition = (e) => {
        setInfo({ ...info, position: e });
    }

    const handleSelectLocation = (e) => {
        setInfo({ ...info, location: e });
    }

    const disableBtnSend = useMemo(() => {
        let disable = true;
        const { name,
            numberPhone,
            linkFb,
            idea,
            position,
            location,
            classCurrent,
        } = info
        const _isDisable = name && numberPhone && linkFb && idea && position && location && classCurrent
        if (_isDisable) {
            disable = false 
        }
        return disable;
    }, [info]);

    return (
        <div className="container-register-admin">
            <div className="col-6">
                <img src={imageSchool} width='100%' className="img-school-up-file shadow"/>
            </div>
            <div className="form-register col-6 background-upload">
            <h2>Đăng ký Admin Cfs</h2>
            <Form 
                ref={formRef} 
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 16 }}
            >
                <Form.Item label="Họ tên">
                    <Input placeholder='Họ và tên' className="col-4" name="name" allowClear value={info.name} onChange={changeHandler}/>
                </Form.Item>
                <Form.Item label="Lớp đang học">
                    <Select placeholder="Lớp đang học" onChange={handleSelectClassCurrent}>
                    {classCurrent.map((item) => <Select.Option value={item.key}>{item.label}</Select.Option> )}
                    </Select>
                </Form.Item>
                <Form.Item label="Chức vụ">
                    <Select placeholder="Chức vụ" onChange={handleSelectPosition}>
                        {position.map((item) => <Select.Option value={item.key}>{item.label}</Select.Option> )}
                    </Select>
                </Form.Item>
                <Form.Item label="Xuất sứ từ">
                    <Select placeholder="Xuất sứ từ" onChange={handleSelectLocation}>
                        {location.map((item) => <Select.Option value={item.key}>{item.label}</Select.Option> )}
                    </Select>
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input placeholder='Số điện thoại' className="col-4" type="text" allowClear name="numberPhone" value={info.numberPhone} onChange={changeHandler}/>
                </Form.Item>
                <Form.Item label="Facebook/Link Fb">
                    <Input placeholder='Enter your hobby' type="text" className="col-4" allowClear name="linkFb" value={info.linkFb} onChange={changeHandler}/>
                </Form.Item>
                <Form.Item label="Ý tưởng phát triển page">
                    <Input.TextArea rows={4} placeholder='Ý tưởng phát triển page' type="text" name="idea" value={info.idea} onChange={changeHandler}/>
                </Form.Item>
                <Form.Item label="Có khả năng photoshop">
                    <Radio.Group onChange={handleSelectPhotoShop} value={info.isPhotoShop}>
                        <Radio value={0}>Không</Radio>
                        <Radio value={1}>Có</Radio>
                    </Radio.Group>
                </Form.Item>
                
                <div className="box-btn-submit">
                    <Button disabled={disableBtnSend} className="btnSubmit"color="blue" onClick={submitHandler} type='submit'><span>Gửi</span></Button>
                </div>
            </Form>
            </div>
        </div>
    )
}