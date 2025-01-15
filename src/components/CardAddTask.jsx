import { Ellipsis, Plus } from "lucide-react";
import logo from "../assets/img/syntaski-logo.png";
import imgNoTask from "../assets/img/no-task.svg";
import "./CardAddTask.scss";
import Button from "./Button";
import Input from "./Input";

const CardAddTask = () => {
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

  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <Button style={btnStyle.btnOption} content={<Ellipsis />} />
      </div>
      <label className="card-body">
        <Input style={btnStyle.inputAdd} placeholder={"Digite uma tarefa"} />
        <Button style={btnStyle.btnAdd} content={<Plus />} />
      </label>
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
    </div>
  );
};

export default CardAddTask;
