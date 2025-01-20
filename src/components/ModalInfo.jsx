import { X } from "lucide-react"
import logo from "../assets/img/syntaski-logo.png";
import TemaContext from "../context/Context";
import { useContext } from "react";
import './ModalInfo.scss'


const ModalInfo = () => {
    const { handleWindowInfo, theme } = useContext(TemaContext)

    return (
        <div onClick={handleWindowInfo} className="bg-modal-info">
            <div onClick={(e) => e.stopPropagation()} className={`bg-content ${theme ? 'dark' : ''}`}>
                <div className="header-content">
                    <div className="logo-box">
                        <img className="logo" src={logo} alt="Logo da Syntaski" />
                        <span>Syntaski</span>
                    </div>
                    <X onClick={handleWindowInfo} />
                </div>
                <div className="body-content">
                    <h2>Informações</h2>
                    <p>
                        Esse é o primeiro projeto em React feito por mim! fiz uma parte em protótipo no Figma e
                        apliquei alguns conhecimentos de design. Eu mesmo elaborei o nome "Syntaski", que tem algo relacionado com "Tarefa simples",
                        já que task em inglês é tarefa!
                    </p>
                    <p>
                        Ao lado superior direito da janela inicial, tem um ícone de OPÇÕES, ao clicar sobre ele abrirá um Pop-up com 3 botões:
                    </p>
                    <div>
                        <div className="btn-edit-info-modal">
                            <strong>
                                Botão EDITAR: Abre uma nova janela para editar as tarefas, nela conterá 2 botões.
                            </strong>
                            <p>
                                1- O botão que tem um lápis, é para editar a tarefa. Ao clicar, abrirá um modal para edição da mesma.
                            </p>
                            <p>
                                2- O botão que tem uma lixeira, é para deletar a tarefa desejada.
                            </p>
                            <p>
                                3- Completou uma tarefa ? Dê um click sobre a mesma para riscá-lá!
                            </p>
                        </div>
                    </div>
                    <div className="btn-theme-info-modal">
                        <strong>Botão TEMA: Sua visão cansou de olhar para uma tela com alta claridade?</strong>
                        <p>
                            Clique sobre este botão para entrar em modo noturno, sendo assim, sua vista terá descanso e você poderá usufruir ainda mais do <strong><em>Syntaski</em></strong>.
                        </p>
                    </div>
                    <div className="btn-info-modal">
                        <strong>Botão INFORMAÇÕES</strong>
                        <p>
                            Por fim, você já chegou nessa etapa...
                        </p>
                    </div>
                </div>
                <footer className="footer-card-info">
                    Planejado e Desenvolvido por Guilherme Paiva
                </footer>
            </div>
        </div>
    )
}

export default ModalInfo
