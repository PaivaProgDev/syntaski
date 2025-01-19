// Style
import "./EditModal.scss";
// Images
import logo from "../assets/img/syntaski-logo.png";
// Icons
import { ChevronRightIcon, Pencil, Trash } from "lucide-react";
// Components
import NoTaskMessage from "./NoTaskMessage";
// ContextApi
import { useContext } from "react";
import TemaContext from "../context/Context";

const EditModal = () => {
  const {
    handleRenameModal,
    task,
    handleEditModal,
    handleDelTask,
    setGetTaskId,
    setTaskValue,
    deletedTask,
    theme,
  } = useContext(TemaContext);

  return (
    <div className={`bg-modal-edit`}>
      <div className={`modal-content ${theme ? "dark" : ""}`}>
        <div className="modal-edit-header">
          <div className="logo-box">
            <img className="logo-modal" src={logo} alt="" />
            <span>Syntaski</span>
          </div>
          <button onClick={handleEditModal} className="btn-close-modal">
            <ChevronRightIcon color={`${theme ? "#fff" : "blue"}`} />
          </button>
        </div>
        {task.length ? (
          <ul>
            {task.map((task) => (
              <li className={`task-edit ${theme ? "dark" : ""}`} key={task.id}>
                <p
                  className={`task-line ${task.isConcluded ? "concluded" : ""}`}
                >
                  - {task.title}
                </p>
                <div className="btns-tasks">
                  <button
                    onClick={() => {
                      setGetTaskId(task.id);
                      setTaskValue(task.title);
                      handleRenameModal();
                    }}
                    className="btn-edit"
                  >
                    <Pencil />
                  </button>
                  <button
                    onClick={() => {
                      handleDelTask(task.id);
                      deletedTask();
                    }}
                    className="btn-del"
                  >
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <NoTaskMessage theme={theme} />
        )}
      </div>
    </div>
  );
};

export default EditModal;
