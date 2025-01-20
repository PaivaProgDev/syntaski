import { Pencil, Sun, Info, Moon } from "lucide-react";
import "./PopupOption.scss";


const PopupOption = ({
  setPopUpIsOpen,
  isOpen,
  handleEditModal,
  handleTheme,
  theme,
  handleWindowInfo
}) => {
  return (
    <div
      className={`popup-bg ${isOpen ? "active" : ""}`}
      onClick={() => setPopUpIsOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className={`popup-card`}>
        <button onClick={handleEditModal}>
          <Pencil className="icon" />
          <span>Editar</span>
        </button>
        <button onClick={handleTheme}>
          {theme ? <Moon className="icon" /> : <Sun className="icon" />}
          {/* <Moon /> */}
          {theme ? <span>Escuro</span> : <span>Claro</span>}
        </button>
        <button onClick={handleWindowInfo}>
          <Info className="icon" />
          <span>Informações</span>
        </button>
      </div>
    </div>
  );
};

export default PopupOption;
