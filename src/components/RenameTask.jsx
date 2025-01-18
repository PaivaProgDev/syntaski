import Input from "./Input";
import logo from "../assets/img/syntaski-logo.png";
import TemaContext from "../context/Context";
import { useContext, useState } from "react";
import "./RenameTask.scss";
import { btnStyle } from "./CardAddTask";
import { ListRestart } from "lucide-react";

const RenameTask = () => {
  const { handleRenameModal, openRenameModal, taskValues, findTaskRename, editedTask } = useContext(TemaContext);

  const [valueRename, setValueRename] = useState('')

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
          <p className="task-line">- {taskValues}</p>
        </div>
        <form>
          <label className="label-input-rename">
            <ListRestart />
            <Input values={valueRename} event={(e) => setValueRename(e.target.value)} style={btnStyle.inputAdd} placeholder={"Edite sua tarefa"} />
          </label>
          <div className="btns-rename-modal">
            <button onClick={(e) => {
              e.preventDefault()
              if (valueRename.trim() !== '') {
                e.preventDefault()
                findTaskRename(valueRename)
                setValueRename('')
                editedTask()
              }
            }}>Confirmar</button>
            <button onClick={(e) => {
              e.preventDefault()
              handleRenameModal()
              setValueRename('')
            }}>Cancelar</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default RenameTask;
