// eslint-didable react/prop-types

export function ListActions(props) {
    const { sortingAlgo, updateSorting } = props;
    return (
        <div className="list-action">
            <div className="title">Rikiavimas:</div>
            <button
                onClick={() => updateSorting('timeAsc')}
                className={sortingAlgo === 'timeAsc' ? 'active' : ''}
            >
                Laikas 0-9
            </button>
            <button
                onClick={() => updateSorting('timeDes')}
                className={sortingAlgo === 'timeDes' ? 'active' : ''}
            >
                Laikas 9-0
            </button>
            <button
                onClick={() => updateSorting('colorAsc')}
                className={sortingAlgo === 'colorAsc' ? 'active' : ''}
            >
                Spalva A-Z
            </button>
            <button
                onClick={() => updateSorting('colorDes')}
                className={sortingAlgo === 'colorDes' ? 'active' : ''}
            >
                Spalva Z-A
            </button>
            <button
                onClick={() => updateSorting('textAsc')}
                className={sortingAlgo === 'textAsc' ? 'active' : ''}
            >
                Pavadinimas A-Z
            </button>
            <button
                onClick={() => updateSorting('textDes')}
                className={sortingAlgo === 'textDes' ? 'active' : ''}
            >
                Pavadinimas Z-A
            </button>
        </div>
    );
}
