import {useEffect, useState} from 'react';
import {Alert, Button, Form, Input} from 'antd';
import axios from 'axios';
import { Checkbox } from 'antd';
import { CREATE_TASK_URL } from "../constants/links.ts";
import { DATE, POST } from "../constants/constants.ts";
import {useNavigate} from "react-router-dom";


type FieldType = {
  title?: string;
  description?: string;
  author?: string;
  executor?: string;
  email?: string;
};


function Task() {

  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [author, setAuthor] = useState<boolean>(false);
  const [executor, setExecutor] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const TOKEN = localStorage.getItem("TOKEN")
    if (TOKEN === null || TOKEN === undefined) {
      navigate('/');
    }
  }, [])

  function createTask(
    title: string,
    mail: string,
    description: string,
    author: boolean,
    executor: boolean
  ) {
    axios({
      method: POST,
      url: CREATE_TASK_URL ,
      data: {
        title: title,
        userEmail: mail,
        description: description,
        author: author,
        executor: executor,
        createdAt: DATE
      }
    })
    .then(res => {
      if (res.status === 201) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)

      } else {
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
        }, 3000)
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
        name="title"
        rules={[{ required: true, message: 'Введите название задачи!' }]}
      >
        <Input
          placeholder="Название задачи"
          onChange={(e) => setTitle(e.target.value)}
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
        name="description"
        rules={[{ required: true, message: 'Введите описание!' }]}
      >
        <Input type="text"
               placeholder="Описание"
               onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="author"
        valuePropName="checked"
        label={null}
        style={{ display: 'flex', justifyContent: 'start', marginRight: 'auto' }}
      >
        <Checkbox onChange={(event) => setAuthor(event.target.checked)}>Автор</Checkbox>
      </Form.Item>

      <Form.Item<FieldType>
        name="executor"
        valuePropName="checked"
        label={null}
        style={{ display: 'flex', justifyContent: 'start', marginRight: 'auto' }}
      >
        <Checkbox onChange={(event) => setExecutor(event.target.checked)}>Исполнитель</Checkbox>
      </Form.Item>

      <Form.Item
        label={null}
        style={{ display: 'flex', justifyContent: 'center'}}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => createTask(title, email, description, author, executor )} style={{ width: 340 }}
        >
          Создать
        </Button>
      </Form.Item>
      {isSuccess ?
        <Alert title="Задача создана!" type="success" showIcon />
      :
        null
     }
     {isError ?
       <Alert title="Ошибка!" type="error" showIcon />
      :
       null
     }
    </Form>
  );
}

export default Task;
