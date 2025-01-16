import { Pencil, Moon, Sun, Info } from "lucide-react";
import "./PopupOption.scss";

import { useState } from "react";
const PopupOption = ({ isOpen, isClose, handleEditModal }) => {
  return (
    <div className={`popup-bg ${isOpen ? "active" : ""}`} onClick={isClose}>
      <div onClick={(e) => e.stopPropagation()} className="popup-card">
        <button onClick={handleEditModal}>
          <Pencil className="icon" />
          <span>Editar</span>
        </button>
        <button>
          <Sun className="icon" />
          {/* <Moon /> */}
          <span>Tema</span>
        </button>
        <button>
          <Info className="icon" />
          <span>Informações</span>
        </button>
      </div>
    </div>
  );
};

export default PopupOption;
