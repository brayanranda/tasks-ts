import { cssArticle, cssBtnSucess, cssSection, cssTitle } from "../../../utils/cssConsts";

interface Props {
    showModal: () => void
    modal: boolean;
}

function TasksActions({ showModal, modal }: Props) {
    return (
        <section className={cssSection}>
            <article className={`flex items-center justify-between ${cssArticle}`}>
                <p className={cssTitle}>Lista de tareas</p>
                <button
                    onClick={() => { showModal() }}
                    className={cssBtnSucess}
                >
                    {modal ? "Ocultar" : "Agregar"}
                </button>
            </article>
        </section>
    );
}

export default TasksActions;