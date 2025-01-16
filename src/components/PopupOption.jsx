import { Pencil, Moon, Sun, Info } from "lucide-react";
import "./PopupOption.scss";

const PopupOption = ({ isOpen, isClose }) => {
  return (
    <div className={`popup-bg ${isOpen ? "active" : ""}`} onClick={isClose}>
      <ul onClick={(e) => e.stopPropagation()} className="popup-card">
        <li>
          <Pencil className="icon" />
          <span>Editar</span>
        </li>
        <li>
          <Sun className="icon" />
          {/* <Moon /> */}
          <span>Tema</span>
        </li>
        <li>
          <Info className="icon" />
          <span>Informações</span>
        </li>
      </ul>
    </div>
  );
};

export default PopupOption;
