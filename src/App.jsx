function App() {
    const style = {
        borderLeftColor: '#ff0000',
    };
    return (
        <main>
            <h1>Todo</h1>
            <form>
                <input type="text" value="" />
                <input type="color" />
                <button type="submit">Create Task</button>
            </form>
            <div className="list-action">
                <div className="title">Rikiavimas:</div>
                <button>Laikas 0-9</button>
                <button>Laikas 9-0</button>
                <button>Spalva A-Z</button>
                <button>Spalva Z-A</button>
                <button>Pavadinimas A-Z</button>
                <button>Pavadinimas Z-A</button>
            </div>

            <div className="list empty">Empty</div>

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
        </main>
    );
}

export default App;
