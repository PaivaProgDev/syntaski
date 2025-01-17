import { useEffect, useState } from "react";
import "./index.scss";

// Components
import CardAddTask from "./components/CardAddTask";
import EditModal from "./components/EditModal";
import RenameTask from "./components/RenameTask";
import TemaContext from "./context/Context";

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

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openRenameModal, setOpenRenameModal] = useState(false);

  //   Toggle modal
  const handleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const handleRenameModal = () => {
    setOpenRenameModal(!openRenameModal);
  };

  return (
    <main className="container">
      <TemaContext.Provider
        value={{
          handleRenameModal,
          setTask,
          task,
          openRenameModal,
          handleEditModal,
          openEditModal,
          addTaskValue,
          completeTask,
        }}
      >
        {/* Transição ao rendezar os componentes */}
        <div
          className={`transition-container ${
            !openEditModal && !openRenameModal ? "fade-in" : "fade-out"
          }`}
        >
          {!openEditModal && !openRenameModal && <CardAddTask />}
        </div>

        <div
          className={`transition-container ${
            openEditModal ? "fade-in" : "fade-out"
          }`}
        >
          {openEditModal && <EditModal />}
        </div>

        <div
          className={`transition-container ${
            openRenameModal ? "fade-in-modal" : "fade-out-modal"
          }`}
        >
          {openRenameModal && <RenameTask />}
        </div>
      </TemaContext.Provider>
    </main>
  );
};

export default App;
