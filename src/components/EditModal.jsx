import './EditModal.scss'
import logo from "../assets/img/syntaski-logo.png";
import { ChevronRightIcon, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

const EditModal = ({ task, setTask }) => {

    const [OpenEditModal, setOpenEditModal] = useState(false)

    const handleEditModal = () => {
        setOpenEditModal(!OpenEditModal)
    }

    return (
        <div className={`bg-modal-edit ${OpenEditModal ? "active" : ""}`}>
            <div className="modal-content">
                <div className="modal-edit-header">
                    <div className="logo-box">
                        <img className="logo-modal" src={logo} alt="" />
                        <span>Syntaski</span>
                    </div>
                    <button className="btn-close-modal">
                        <ChevronRightIcon />
                    </button>
                </div>
                <ul>
                    {task.map(task => (
                        <li className='task-edit' key={task.id}>
                            <p>{task.title}</p>
                            <div className='btns-tasks'>
                                <button onClick={handleEditModal} className='btn-edit'>
                                    <Pencil />
                                </button>
                                <button className='btn-del'>
                                    <Trash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EditModal
