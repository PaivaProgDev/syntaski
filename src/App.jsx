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

  // Deleta a tarefa
  const handleDelTask = (taskId) => {
    const prev = task.filter((filteredTask) => filteredTask.id !== taskId);
    setTask(prev);
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

  // Verifica se o modal de edição está aberto
  const [openEditModal, setOpenEditModal] = useState(false);
  //   Toggle modal
  const handleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  // Verifica se o modal de renome está aberto
  const [openRenameModal, setOpenRenameModal] = useState(false);
  const handleRenameModal = () => {
    setOpenRenameModal(!openRenameModal);
  };

  // Abstrai o valor da tarefa
  const [taskValue, setTaskValue] = useState(null);
  const findTaskRename = (taskTitle) => {
    setTaskValue(taskTitle)
  }

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
          handleDelTask,
          findTaskRename,
          taskValue
        }}
      >
        {/* Transição ao rendezar os componentes */}
        <div
          className={`transition-container ${!openEditModal && !openRenameModal ? "fade-in" : "fade-out"
            }`}
        >
          {!openEditModal && !openRenameModal && <CardAddTask />}
        </div>

        <div
          className={`transition-container ${openEditModal ? "fade-in" : "fade-out"
            }`}
        >
          {openEditModal && <EditModal />}
        </div>

        {openEditModal && <RenameTask />}

      </TemaContext.Provider>

    </main>
  );
};

export default App;
