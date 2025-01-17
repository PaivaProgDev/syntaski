import imgNoTask from "../assets/img/no-task.svg";
import "./NoTaskMessage.scss";

const NoTaskMessage = () => {
  return (
    <div className="tasks">
      <img src={imgNoTask} alt="" />
      <div className="warning-tasks">
        <h3>Ooops!</h3>
        <p>No momento você está sem tarefas, não se acontume...</p>
      </div>
    </div>
  );
};

export default NoTaskMessage;
