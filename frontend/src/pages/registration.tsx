import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { REGISTER_URL } from "../constants/links.ts";
import { DATE, POST } from "../constants/constants.ts";
import { Link, useNavigate } from "react-router-dom";


type FieldType = {
  username?: string;
  password?: string;
  email?: string;
};


function Registration() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const navigate = useNavigate();

  function registerUser(
    name: string,
    mail: string,
    pass: string
  ) {
    axios({
      method: POST,
      url: REGISTER_URL,
      data: {
        name: name,
        email: mail,
        password: pass,
        createdAt: DATE
      }
    })
    .then(res => {
      if (res.status === 201) {
        navigate('/');
      }
    })
  }

  return (

    <Form
      name="basic"
      style={{ maxWidth: 340, display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        style={{ minWidth: 340 }}
        name="username"
        rules={[{ required: true, message: 'Введите логин!' }]}
      >
        <Input
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>

        style={{ minWidth: 340 }}
        name="email"
        rules={[{ required: true, message: 'Введите email!' }]}
      >
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>
        style={{ minWidth: 340 }}
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label={null}
        style={{ display: 'flex', justifyContent: 'center'}}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => registerUser(name, email, password)} style={{width: 340}}
        >
          Регистрация
        </Button>
      </Form.Item>
      <Form.Item label={null} style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="/">
          <Button type="primary"  style={{width: 340}}>
            Назад
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
}

export default Registration;
