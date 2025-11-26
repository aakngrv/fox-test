import { useEffect, useState } from "react";
import axios from "axios";
import { GET } from "../constants/constants.ts";
import { GET_TASKS_URL } from "../constants/links.ts";
import { Card } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

let tasksArr: any[]= [];

export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const TOKEN = localStorage.getItem("TOKEN")
    if (TOKEN === null || TOKEN === undefined) {
      navigate('/');
    }
  }, [])

  useEffect(() => {
      axios({
        method: GET,
        url: GET_TASKS_URL,
      })
        .then(res => {
          tasksArr = res.data;
          setTasks(tasksArr[0])
          return tasksArr;
        })
  }, [])

  const tasksArray = tasksArr.map((element, index) => {

    return (
      <li key={index}>
        <div>
          <Card
            title={element.title}
            style={{width: 300, backgroundColor: "fff5eb", margin: "8px 0"}}
          >
            <p>Описание: {element.description}</p>
            <p>Автор: {element.author}</p>
            <p>Исполнитель: {element.executor}</p>
            <p>Дата создания: {dayjs(element.createdAtAt).format('DD.MM.YYYY')}</p>
          </Card>
        </div>
      </li>
    );
  })

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "2rem" }}>
      <h1>Список задач</h1>
      <ul>
        {tasksArray.reverse()}
      </ul>
    </div>
  )
}
