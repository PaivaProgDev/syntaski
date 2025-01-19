import imgNoTask from "../assets/img/no-task.svg";
import "./NoTaskMessage.scss";

const NoTaskMessage = ({ theme }) => {
  return (
    <div className="tasks">
      <img src={imgNoTask} alt="Imagem ilustrativa de um gato sem tarefas" />
      <div className={`warning-tasks ${theme ? 'dark' : ''}`}>
        <h3>Ooops!</h3>
        <p>No momento você está sem tarefas, não se acontume...</p>
      </div>
    </div>
  );
};

export default NoTaskMessage;
