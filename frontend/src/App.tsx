import { Routes, Route } from 'react-router-dom';
import  Task  from "./pages/create-task.tsx";
import Login from './pages/login.tsx';
import Registration from './pages/registration.tsx';
import Tasks from "./pages/tasks.tsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/create-task" element={<Task />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;
