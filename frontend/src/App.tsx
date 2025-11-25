import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

function a() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/auth/register',
        data: {
            name: "axios",
            author: false,
            executor: false,
            email: "e@mail.ru",
            password: "123",
            createdAt: ""
        }
    })
        .then(res => {
            console.log(res.data);
        })
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const App: React.FC = () => (

    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button type="primary" htmlType="submit" onClick={a}>
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export default App;
