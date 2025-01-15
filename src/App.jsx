import { useState } from "react";
import "./index.scss";

import { Plus, Ellipsis } from "lucide-react";

// Components
import CardAddTask from "./components/CardAddTask";

const App = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, in. Ex reprehenderit velit pariatur ipsa! Eum, voluptate quas vel vitae minus nam cupiditate molestias quis recusandae, excepturi deleniti! Soluta, earum?",
      isConcluded: false,
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, in. Ex reprehenderit velit pariatur ipsa! Eum, voluptate quas vel vitae minus nam cupiditate molestias quis recusandae, excepturi deleniti! Soluta, earum?",
      isConcluded: false,
    },
  ]);

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

  return (
    <main className="container">
      <CardAddTask task={task} setTask={setTask} addTaskValue={addTaskValue} />
    </main>
  );
};

export default App;
