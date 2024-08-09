import { useState } from 'react';

export function Task() {
    const [count, setCount] = useState(0);

    function updateCount1() {
        setCount(count + 1);
    }
    function updateCount2() {
        setCount(count + 2);
    }
    function updateCount3() {
        setCount(count + 3);
    }

    const style = {
        borderLeftColor: '#ff0000',
    };

    return (
        <div className="list">
            <article className="item" data-state="" style={style}>
                <div className="date">2024-08-08 11:38:20</div>
                <div className="state">Atlikta</div>
                <div className="text">What should i do({count})</div>
                <form className="hidden">
                    <input type="text" value="What should i do" />
                    <button className="update" type="submit">
                        Update
                    </button>
                    <button className="cancel" type="button">
                        Cancel
                    </button>
                </form>
                <div className="actions">
                    <button className="done" onClick={updateCount1}>
                        Done
                    </button>
                    <div className="divider"></div>
                    <button className="edit" onClick={updateCount2}>
                        Edit
                    </button>
                    <button className="delete" onClick={updateCount3}>
                        Delete
                    </button>
                </div>
            </article>
        </div>
    );
}
