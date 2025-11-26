import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { LOGIN_URL } from "../constants/links.ts";
import { POST } from "../constants/constants.ts";
import { useNavigate, Link } from 'react-router-dom';


type FieldType = {
  password?: string;
  email?: string;
};

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  function loginUser(mail: string, pass: string) {
    axios({
      method: POST,
      url: LOGIN_URL,
      data: {
        email: mail,
        password: pass
      }
    })
      .then(res => {
        const token = res.data.accessToken;
        localStorage.setItem('TOKEN', token);
        if (res.status === 200) {
          navigate('/create-task');
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
          onClick={() => loginUser(email, password)} style={{ width: 340 }}
        >
          Войти
        </Button>
      </Form.Item>
      <Form.Item label={null} style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="/registration">
          <Button type="primary"  style={{width: 340}}>
            Зарегистрироваться
          </Button>
        </Link>
      </Form.Item>
    </Form>
  )
}

export default Login;
