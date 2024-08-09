import { Task } from './Task';

export function TaskList() {
    const data = [
        {
            text: 'Issivalyti dantis',
        },
        {
            text: 'Nusivalyti makiaza',
        },
        {
            text: 'Pasigaminti vakariene',
        },
        {
            text: 'Sesti prie PC',
        },
    ];

    if (data.length === 0) {
        return <div className="list empty">Empty</div>;
    }
    return (
        <div className="list">
            {data.map((item, index) => (
                <Task key={index} data={item} />
            ))}
        </div>
    );
}
