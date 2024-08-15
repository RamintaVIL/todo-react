import { useState } from 'react';

export function Task(params) {
    const data = params.data;
    const text = data.text;
    const color = data.color;
    const id = data.id;
    const state = data.state;
    const { removeTask, updateTaskText, updateTaskColor, updateTaskState } =
        params;

    // arba galem pasirasyti sitaip:
    // const {text} = params.data;

    const [taskVisibility, setTaskVisibility] = useState(true);
    // reiketu istrinti, nes tam turime state
    // const [taskDone, setTaskDone] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [inputText, setInputText] = useState(text);
    const [inputColor, setInputColor] = useState(color);

    // hooks'ai
    // const [count, setCount] = useState(0);

    // function updateCount1() {
    //     setCount(count + 1);

    const style = {
        borderLeftColor: color ?? '#ccc',
    };

    function handleUpdate(e) {
        e.preventDefault();

        const cleanText = inputText.trim();
        if (cleanText !== '') {
            updateTaskText(id, cleanText);
            updateTaskColor(id, inputColor);
            setEditForm(false);
        }
    }

    function handleDelete() {
        removeTask(id);
    }
    function handleReset() {
        setInputText(text);
        setInputColor(color);
    }
    function handleClear() {
        setInputText('');
        setInputColor('#cccccc');
    }

    if (taskVisibility === false) {
        return;
    }

    return (
        <article
            className="item"
            data-state={state === 'done' ? 'done' : ''}
            style={style}
        >
            <div className="date">2024-08-08 11:38:20</div>
            <div className="state">Atlikta</div>
            <div className="text">{text}</div>
            <form onSubmit={handleUpdate} className={editForm ? '' : 'hidden'}>
                <input
                    onChange={(e) => setInputText(e.target.value)}
                    type="text"
                    value={inputText}
                />
                <input
                    onChange={(e) => setInputColor(e.target.value)}
                    type="color"
                    value={inputColor}
                />
                <div className="btnList">
                    <button
                        onClick={handleReset}
                        className="clear"
                        type="reset"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleClear}
                        className="clear"
                        type="reset"
                    >
                        Clear
                    </button>
                    <button className="update" type="submit">
                        Update
                    </button>
                    <button
                        onClick={() => setEditForm((prev) => false)}
                        className="cancel"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <div className="actions">
                {state !== 'done' && (
                    <>
                        <button
                            onClick={() => updateTaskState(id)}
                            className="done"
                        >
                            Done
                        </button>
                        <div className="divider"></div>

                        <button
                            className="edit"
                            onClick={() => setEditForm((prev) => true)}
                        >
                            Edit
                        </button>
                    </>
                )}

                <button onClick={handleDelete} className="delete">
                    Delete
                </button>
            </div>
        </article>
    );
}

// ternary uzrasymo budas button edit ir done:
/* <div className="actions">
    {taskDone === true ? (
        <></>
    ) : (
        <>
            <button onClick={() => setTaskDone(true)} className="done">
                Done
            </button>
            <div className="divider"></div>
            <button className="edit" onClick={() => setEditForm(true)}>
                Edit
            </button>
        </>
    )}
    <button onClick={() => setTaskVisibility(false)} className="delete">
        Delete
    </button>
</div>; */
