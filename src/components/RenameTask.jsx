import Input from "./Input";
import logo from "../assets/img/syntaski-logo.png";
import TemaContext from "../context/Context";
import { useContext } from "react";
import "./RenameTask.scss";
import { btnStyle } from "./CardAddTask";
import { ListRestart } from "lucide-react";

const RenameTask = () => {
  const { handleRenameModal, openRenameModal, findTaskRename, taskValue } = useContext(TemaContext);

  return (
    <div
      onClick={handleRenameModal}
      className={`rename-task-bg ${openRenameModal ? "active" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="card-content">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <div className="edit-task-reference" >
          <ListRestart />
          <p className="task-line">{taskValue}</p>
        </div>
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
