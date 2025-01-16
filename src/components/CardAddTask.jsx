// icons
import {
  BookmarkCheck,
  MoreHorizontal,
  Plus,
  Settings2Icon,
} from "lucide-react";

// styles
import "./CardAddTask.scss";

// states
import { useState } from "react";

// images
import logo from "../assets/img/syntaski-logo.png";
import imgNoTask from "../assets/img/no-task.svg";

// components
import PopupOption from "./PopupOption";
import Button from "./Button";
import Input from "./Input";

const CardAddTask = ({ addTaskValue, completeTask, task, handleEditModal }) => {
  // Estilo dos botões
  const btnStyle = {
    btnAdd: {
      display: "flex",
      backgroundColor: "#0033E8",
      color: "#fff",
      cursor: "pointer",
      padding: "5px 7px",
      alignItems: "center",
    },

    btnOption: {
      backgroundColor: "transparent",
      cursor: "pointer",
    },

    inputAdd: {
      backgroundColor: "#eaefff",
      border: 0,
      padding: "10px 15px",
      outline: "none",
      width: "100%",
    },
  };

  // Valor do input
  const [taskValue, setTaskValue] = useState("");
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  // Adicionar tarefas
  const handleAddTask = () => {
    addTaskValue(taskValue);
  };

  // Abre e fecha o pop-up
  const handlePopup = () => {
    setPopUpIsOpen(!popUpIsOpen);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <Button
          style={btnStyle.btnOption}
          content={<Settings2Icon color="#373737" />}
          event={handlePopup}
        />
      </div>
      <form>
        <label className="card-body">
          <Input
            event={(e) => setTaskValue(e.target.value)}
            setTaskValue={setTaskValue}
            style={btnStyle.inputAdd}
            placeholder={"Digite uma tarefa"}
            values={taskValue}
          />
          <Button
            event={(e) => {
              e.preventDefault();
              if (taskValue !== "") {
                handleAddTask();
                setTaskValue("");
              }
            }}
            style={btnStyle.btnAdd}
            content={<Plus />}
          />
        </label>
      </form>
      {task.length ? (
        <ul className="list-tasks">
          {task.map((task) => (
            <li
              className="task-added"
              onClick={() => completeTask(task.id)}
              key={task.id}
            >
              <p className={`task-line ${task.isConcluded ? "concluded" : ""}`}>
                {task.title}
              </p>
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
      <PopupOption
        handleEditModal={handleEditModal}
        isOpen={popUpIsOpen}
        isClose={handlePopup}
      />
    </div>
  );
};

export default CardAddTask;
