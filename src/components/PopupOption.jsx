import { Pencil, Sun, Info, Moon } from "lucide-react";
import "./PopupOption.scss";

const PopupOption = ({ setPopUpIsOpen, isOpen, handleEditModal, handleTheme, theme }) => {

  return (
    <div
      className={`popup-bg ${isOpen ? "active" : ""}`}
      onClick={() => setPopUpIsOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="popup-card">
        <button onClick={handleEditModal}>
          <Pencil className="icon" />
          <span>Editar</span>
        </button>
        <button onClick={handleTheme}>
          {theme ? <Moon /> : <Sun />}
          {/* <Moon /> */}
          {theme ? <span>Escuro</span> : <span>Claro</span>}
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
