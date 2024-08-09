import { useState } from 'react';

export function Task(params) {
    const data = params.data;
    const text = data.text;

    // arba galem pasirasyti sitaip:
    // const {text} = params.data;

    const [editForm, setEditForm] = useState(false);
    const [taskText, setTaskText] = useState(text);
    const [inputText, setInputText] = useState(text);

    // hooks'ai
    // const [count, setCount] = useState(0);

    // function updateCount1() {
    //     setCount(count + 1);

    const style = {
        borderLeftColor: '#ff0000',
    };

    function handleUpdate(e) {
        e.preventDefault();

        const cleanText = inputText.trim();
        if (cleanText !== '') {
            setTaskText(cleanText);
            setInputText(cleanText);
            setEditForm(false);
        }
    }

    return (
        <div className="list">
            <article className="item" data-state="" style={style}>
                <div className="date">2024-08-08 11:38:20</div>
                <div className="state">Atlikta</div>
                <div className="text">{taskText}</div>
                <form
                    onSubmit={handleUpdate}
                    className={editForm ? '' : 'hidden'}
                >
                    <input
                        onChange={(e) => setInputText(e.target.value)}
                        type="text"
                        value={inputText}
                    />
                    <div className="btnList">
                        <button
                            onClick={() => setInputText(taskText)}
                            className="clear"
                            type="reset"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => setInputText('')}
                            className="clear"
                            type="reset"
                        >
                            Clear
                        </button>
                        <button className="update" type="submit">
                            Update
                        </button>
                        <button
                            onClick={() => setEditForm(false)}
                            className="cancel"
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                <div className="actions">
                    <button className="done">Done</button>
                    <div className="divider"></div>
                    <button className="edit" onClick={() => setEditForm(true)}>
                        Edit
                    </button>
                    <button className="delete">Delete</button>
                </div>
            </article>
        </div>
    );
}
