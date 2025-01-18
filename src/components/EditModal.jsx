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
  const { handleRenameModal, task, handleEditModal, handleDelTask, findTaskRename } =
    useContext(TemaContext);

  return (
    <div className="bg-modal-edit">
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
                  - {task.title}
                </p>
                <div className="btns-tasks">
                  <button onClick={() => {
                    handleRenameModal()
                    findTaskRename(task.title)
                  }} className="btn-edit">
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
