import Input from "./Input";
import logo from "../assets/img/syntaski-logo.png";
import TemaContext from "../context/Context";
import { useContext } from "react";
import "./RenameTask.scss";
import { btnStyle } from "./CardAddTask";

const RenameTask = () => {
  const { handleRenameModal, setTask, task, openRenameModal } =
    useContext(TemaContext);

  return (
    <div className={`rename-task-bg ${openRenameModal ? "active" : ""}`}>
      <div className="card-content">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <p className="task-line">(tarefa aqui)</p>
        <Input style={btnStyle.inputAdd} placeholder={"Edite sua tarefa"} />
        <div className="btns-rename-modal">
          <button>Confirmar</button>
          <button onClick={handleRenameModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default RenameTask;
