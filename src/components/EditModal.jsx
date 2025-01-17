import "./EditModal.scss";
import logo from "../assets/img/syntaski-logo.png";
import { ChevronRightIcon, Pencil, Trash, ClipboardList } from "lucide-react";
import NoTaskMessage from "./noTaskMessage";
import { useContext } from "react";
import TemaContext from "../context/Context";

const EditModal = () => {
  const { handleRenameModal, setTask, task, handleEditModal, openEditModal } =
    useContext(TemaContext);

  // Deleta a tarefa
  const handleDelTask = (taskId) => {
    const prev = task.filter((filteredTask) => filteredTask.id !== taskId);

    setTask(prev);
  };

  return (
    <div className={`bg-modal-edit ${openEditModal ? "active" : ""}`}>
      <div className="modal-content">
        <div className="modal-edit-header">
          <div className="logo-box">
            <img className="logo-modal" src={logo} alt="" />
            <span>Syntaski</span>
          </div>
          <button onClick={handleEditModal} className="btn-close-modal">
            <ChevronRightIcon />
          </button>
        </div>
        {task.length ? (
          <ul>
            {task.map((task) => (
              <li className="task-edit" key={task.id}>
                <p
                  className={`task-line ${task.isConcluded ? "concluded" : ""}`}
                >
                  <ClipboardList className="clipboard-icon-task" width={22} />
                  {task.title}
                </p>
                <div className="btns-tasks">
                  <button onClick={handleRenameModal} className="btn-edit">
                    <Pencil />
                  </button>
                  <button
                    onClick={() => handleDelTask(task.id)}
                    className="btn-del"
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <NoTaskMessage />
        )}
      </div>
    </div>
  );
};

export default EditModal;
