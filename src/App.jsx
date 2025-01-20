import { useEffect, useRef, useState } from "react";
import "./index.scss";

// Components
import CardAddTask from "./components/CardAddTask";
import EditModal from "./components/EditModal";
import RenameTask from "./components/RenameTask";
import TemaContext from "./context/Context";

import { ToastContainer, toast } from 'react-toastify';
import ModalInfo from "./components/ModalInfo";


// Estado das tarefas
const App = () => {
  const [task, setTask] = useState(() => {
    // Local Storage - pega as tarefas
    const localSaved = localStorage.getItem("task");
    return localSaved ? JSON.parse(localSaved) : [];
  });

  // tema
  const [theme, setTheme] = useState(() => {
    const localSavedTheme = localStorage.getItem('theme')
    return localSavedTheme === 'dark'
  })


  //   Local Storage - Seleciona as tarefas
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem('theme', theme ? 'dark' : '');
  }, [task, theme]);

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
    window.scrollTo(0, 0)
  };

  // Abstrai o valor da tarefa
  const [taskValues, setTaskValue] = useState('');

  // Abstrai o ID da tarefa
  const [getTaskId, setGetTaskId] = useState('');

  const findTaskRename = (taskValue) => {

    const editedTask = task.map(task => {
      if (task.id === getTaskId) {
        return {
          ...task,
          title: taskValue,

        }
      }
      return task
    })

    setTask(editedTask)
  }

  const deletedTask = () => toast.error("Tarefa deletada!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

  const editedTask = () => toast.warn("Tarefa editada!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });

  const addedTask = () => toast.success("Tarefa adicionada!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });


  const handleTheme = () => {
    setTheme(!theme)
  }

  const [openWindowInfo, setOpenWindowInfo] = useState(false)

  const handleWindowInfo = () => {
    setOpenWindowInfo(!openWindowInfo)
  }

  return (
    <main className={`container ${theme ? "dark" : "light"}`} >
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
          taskValues,
          setTaskValue,
          setGetTaskId,
          deletedTask,
          editedTask,
          addedTask,
          handleTheme,
          theme,
          handleWindowInfo,
        }}
      >
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored" />

        {/* Transição ao rendezar os componentes */}
        <div
          className={`transition-container ${!openEditModal && !openRenameModal && !openWindowInfo ? "fade-in" : "fade-out"
            }`}
        >
          {!openEditModal && !openRenameModal && !openWindowInfo && <CardAddTask />}
        </div>

        <div
          className={`transition-container ${openEditModal ? "fade-in" : "fade-out"
            }`}
        >
          {openEditModal && <EditModal />}
        </div>

        <div
          className={`transition-container ${openWindowInfo ? "fade-in" : "fade-out"
            }`}
        >
          {openWindowInfo && <ModalInfo />}

        </div>

        {openEditModal && <RenameTask />}
      </TemaContext.Provider>

    </main>
  );
};

export default App;
