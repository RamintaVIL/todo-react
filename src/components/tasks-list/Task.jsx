export function Task() {
    const style = {
        borderLeftColor: '#ff0000',
    };
    return (
        <div className="list">
            <article className="item" data-state="" style={style}>
                <div className="date">2024-08-08 11:38:20</div>
                <div className="state">Atlikta</div>
                <div className="text">What should i do</div>
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
                    <button className="done">Done</button>
                    <div className="divider"></div>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </article>
        </div>
    );
}
