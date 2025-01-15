import { Check, CheckCheck, Ellipsis, Plus } from "lucide-react";
import logo from "../assets/img/syntaski-logo.png";
import imgNoTask from "../assets/img/no-task.svg";
import "./CardAddTask.scss";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const CardAddTask = ({ addTaskValue, completeTask, task }) => {
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
  const [taskValue, setTaskValue] = useState(null);

  const handleAddTask = () => {
    addTaskValue(taskValue);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <Button style={btnStyle.btnOption} content={<Ellipsis />} />
      </div>
      <form>
        <label className="card-body">
          <Input
            event={(e) => setTaskValue(e.target.value)}
            setTaskValue={setTaskValue}
            style={btnStyle.inputAdd}
            placeholder={"Digite uma tarefa"}
            value={taskValue}
          />
          <Button
            event={(e) => {
              e.preventDefault();
              handleAddTask();
              setTaskValue("");
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
              <p className={`${task.isConcluded ? "concluded" : ""}`}>
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
    </div>
  );
};

export default CardAddTask;
