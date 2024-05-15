import { cssArticle, cssBtnSucess, cssSection } from "../../../utils/cssConsts";

function TasksActions() {
    return (
        <section className={cssSection}>
            <article className={`flex items-center justify-between ${cssArticle}`}>
                <p>Tasks</p>
                <button
                    className={cssBtnSucess}
                >
                    Add
                </button>
            </article>
        </section>
    );
}

export default TasksActions;