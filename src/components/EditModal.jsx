import "./EditModal.scss";
import logo from "../assets/img/syntaski-logo.png";
import { ChevronRightIcon, Pencil, Trash } from "lucide-react";
import imgNoTask from "../assets/img/no-task.svg";

import { useState } from "react";

const EditModal = ({ task, setTask, handleEditModal, openEditModal }) => {
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
                  {task.title}
                </p>
                <div className="btns-tasks">
                  <button className="btn-edit">
                    <Pencil />
                  </button>
                  <button className="btn-del">
                    <Trash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="tasks">
            <img src={imgNoTask} alt="" />
            <div className="warning-tasks">
              <h3>Oops, sem tarefas...</h3>
              <p>
                Digite algo e clique no <span className="more">+</span> para
                adicionar uma tarefa
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditModal;
