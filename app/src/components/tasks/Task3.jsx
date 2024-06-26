import React, { useState } from 'react';

function Task3() {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, newNote]);
            setNewNote('');
        }
    };

    const handleNoteChange = (e) => {
        setNewNote(e.target.value);
    };

    const initNotes = [
        {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
        },
        {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
        },
        {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
        },
    ]
    const [idToEdit, setIdToEdit] = useState('');
    const [prop1ToEdit, setProp1ToEdit] = useState('');
    const [prop2ToEdit, setProp2ToEdit] = useState('');

    const handleEditProperties = () => {
        setNotes(prevNotes => prevNotes.map(note => {
            if (note.id === idToEdit) {
                return {
                    ...note,
                    [prop1ToEdit]: note[prop1ToEdit] + '!',
                    [prop2ToEdit]: note[prop2ToEdit] + '!'
                };
            }
            return note;
        }));
    };

    const [products, setProducts] = useState(initNotes);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const initProds = [
        { id: id(), name: 'prod1', cost: 'cost1', desc: 'long description 1', comm: 'my super comment 1' },
        { id: id(), name: 'prod2', cost: 'cost2', desc: 'long description 2', comm: 'my super comment 2' },
        { id: id(), name: 'prod3', cost: 'cost3', desc: 'long description 3', comm: 'my super comment 3' },
    ];
    const [prods, setProds] = useState(initProds);
    const [showDetails, setShowDetails] = useState(prods.map(() => false));

    const handleToggleDetails = (index) => {
        setShowDetails(prevShowDetails => {
            const newShowDetails = [...prevShowDetails];
            newShowDetails[index] = !newShowDetails[index];
            return newShowDetails;
        });
    };

    return (
        <div className="lab3">
            <h1>Задание 1</h1>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
            <input type="text" value={newNote} onChange={handleNoteChange} placeholder="Введите новую заметку" />
            <button onClick={handleAddNote}>Добавить</button>

            <h1>Задание 2</h1>
            <input type="text" value={idToEdit} onChange={(e) => setIdToEdit(e.target.value)} placeholder="ID" />
            <br />
            <input type="text" value={prop1ToEdit} onChange={(e) => setProp1ToEdit(e.target.value)} placeholder="Свойство 1" />
            <br />

            <input type="text" value={prop2ToEdit} onChange={(e) => setProp2ToEdit(e.target.value)} placeholder="Свойство 2" />
            <br />

            <button onClick={handleEditProperties}>Редактировать свойства</button>

            <h1>Задание 3</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Prop1</th>
                        <th>Prop2</th>
                        <th>Prop3</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.prop1}</td>
                            <td>{product.prop2}</td>
                            <td>{product.prop3}</td>
                            <td>
                                <button onClick={() => handleDeleteProduct(product.id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Задание 4</h1>
            <ol>
                {prods.map((prod, index) => (
                    <li key={prod.id}>
                        {prod.name} - {prod.cost}
                        <button onClick={() => handleToggleDetails(index)}>
                            {showDetails[index] ? 'Скрыть детали' : 'Показать детали'}
                        </button>
                        {showDetails[index] && (
                            <div>
                                <p>{prod.desc}</p>
                                <p>{prod.comm}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default Task3;
