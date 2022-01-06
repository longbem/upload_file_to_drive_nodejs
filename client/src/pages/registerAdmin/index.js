import React, { useState, useRef } from 'react';
import { Form, Input, Button, Radio, Select } from 'antd';
import { location, classCurrent, position } from './contants';

import './registerAdmin.css';


export const RegisterAdmin = () => {
    const formRef = useRef(null);
    const [info, setInfo] = useState({
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

    const submitHandler = (e) => {
        e.preventDefault();
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

    return (
        <div className="container-register-admin">
            <div className="form-register col-6 background-upload">
            <h2>React Google Sheets!</h2>
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
                
                <Button color="blue" onClick={submitHandler} type='submit'>Submit</Button>
            </Form>
            </div>
        </div>
    )
}