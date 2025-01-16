import { PencilIcon, Trash } from "lucide-react";
import "./PopupTask.scss";

const PopupTask = ({ popupIsOpen, popupId }) => {
  const find = popupId;

  return (
    <>
      {popupIsOpen && (
        <div className="popup-content">
          <div>
            <PencilIcon />
            <span>Editar</span>
          </div>
          <div>
            <Trash />
            <span>Deletar</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupTask;
