import { Ellipsis } from "lucide-react";
import logo from "../assets/img/syntaski-logo.png";
import "./CardAddTask.scss";
import Button from "./Button";
import InputAddTask from "./InputAddTask";

const CardAddTask = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="logo-box">
          <img className="logo" src={logo} alt="Logo da Syntaski" />
          <span>Syntaski</span>
        </div>
        <Button content={<Ellipsis />} />
      </div>
      <div className="card-body">
        <InputAddTask />
      </div>
    </div>
  );
};

export default CardAddTask;
