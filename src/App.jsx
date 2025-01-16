import { useEffect, useState } from "react";
import "./index.scss";

// Components
import CardAddTask from "./components/CardAddTask";

// Estado das tarefas
const App = () => {
  const [task, setTask] = useState(() => {
    // Local Storage - pega as tarefas
    const localSaved = localStorage.getItem("task");
    return localSaved ? JSON.parse(localSaved) : [];
  });

  //   Local Storage - Seleciona as tarefas
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  //   Adiciona uma tarefa
  const addTaskValue = (taskValue) => {
    setTask((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          title: taskValue,
          isConcluded: false,
        },
      ];
    });
  };

  //   Atualiza o estado de conclusão da tarefa
  const completeTask = (taskId) => {
    const completeTask = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isConcluded: !task.isConcluded,
        };
      }

      return task;
    });
    setTask(completeTask);
  };

  return (
    <main className="container">
      <CardAddTask
        task={task}
        setTask={setTask}
        addTaskValue={addTaskValue}
        completeTask={completeTask}
      />
    </main>
  );
};

export default App;
