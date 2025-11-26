import { useEffect, useState } from 'react';
import {Alert, Button, Form, Input} from 'antd';
import axios from 'axios';
import { CREATE_TASK_URL } from "../constants/links.ts";
import { DATE, POST } from "../constants/constants.ts";
import {Link, useNavigate} from "react-router-dom";


type FieldType = {
  title?: string;
  description?: string;
  author?: string;
  executor?: string;
};


function Task() {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [executor, setExecutor] = useState<string>('');
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
    description: string,
    author: string,
    executor: string
  ) {
    axios({
      method: POST,
      url: CREATE_TASK_URL ,
      data: {
        title: title,
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
        name="description"
        rules={[{ required: true, message: 'Введите описание!' }]}
      >
        <Input type="text"
               placeholder="Описание"
               onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>
        style={{ minWidth: 340 }}
        name="author"
        rules={[{ required: true, message: 'Укажите автора!' }]}
      >
        <Input type="text"
               placeholder="Автор"
               onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Item>

      <Form.Item<FieldType>
        style={{ minWidth: 340 }}
        name="executor"
        rules={[{ required: true, message: 'Укажите исполнителя!' }]}
      >
        <Input type="text"
               placeholder="Исполнитель"
               onChange={(e) => setExecutor(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label={null}
        style={{ display: 'flex', justifyContent: 'center'}}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => createTask(title, description, author, executor )} style={{ width: 340 }}
        >
          Создать
        </Button>
      </Form.Item>
      <Form.Item label={null} style={{ display: 'flex', justifyContent: 'center'}}>
        <Link to="/tasks">
          <Button type="primary"  style={{width: 340}}>
            Посмотреть задачи
          </Button>
        </Link>
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
