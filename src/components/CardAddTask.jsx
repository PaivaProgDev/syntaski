// icons
import { ClipboardList, Plus, Settings2Icon } from "lucide-react";

// styles
import "./CardAddTask.scss";

// states
import { useState } from "react";

// images
import logo from "../assets/img/syntaski-logo.png";
import NoTaskMessage from "./noTaskMessage";

// components
import PopupOption from "./PopupOption";
import Button from "./Button";
import Input from "./Input";
import TemaContext from "../context/Context";
import { useContext } from "react";
// Estilo dos botões

export const btnStyle = {
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

const CardAddTask = ({}) => {
  const { addTaskValue, completeTask, task, handleEditModal } =
    useContext(TemaContext);

  // Valor do input
  const [taskValue, setTaskValue] = useState("");
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  // Adicionar tarefas
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
        <Button
          style={btnStyle.btnOption}
          content={<Settings2Icon color="#373737" />}
          event={() => setPopUpIsOpen(true)}
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
                <ClipboardList className="clipboard-icon-task" width={22} />
                {task.title}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <NoTaskMessage />
      )}
      <PopupOption
        handleEditModal={handleEditModal}
        isOpen={popUpIsOpen}
        setPopUpIsOpen={setPopUpIsOpen}
      />
    </div>
  );
};

export default CardAddTask;
