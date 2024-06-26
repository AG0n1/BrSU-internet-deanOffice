import React, { useState } from 'react';

function Task2() {
    const [values, setValues] = useState([]);
    const [result, setResult] = useState(1);
    const [languages, setLanguages] = useState({
        russian: false,
        belarusian: false,
        english: false,
        german: false,
    });
    const [favoriteAnimal, setFavoriteAnimal] = useState('');
    const [cities, setCities] = useState(['Брест', 'Минск', 'Лондон', 'Берлин']);
    const [removeIndex, setRemoveIndex] = useState('');

    const countProduct = (e) => {
        const newValues = e.target.value.split("\n");
        let newResult = 1;

        newValues.forEach(value => {
            const parsedValue = parseInt(value);
            if (!isNaN(parsedValue)) {
                newResult *= parsedValue;
            }
        });

        setValues(newValues);
        setResult(newResult);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setLanguages(prevLanguages => ({
            ...prevLanguages,
            [name]: checked,
        }));
    };

    const handleAnimalChange = (e) => {
        setFavoriteAnimal(e.target.value);
    };

    const handleRemoveIndexChange = (e) => {
        setRemoveIndex(e.target.value);
    };

    const handleRemoveCity = () => {
        const index = parseInt(removeIndex);
        if (!isNaN(index) && index >= 0 && index < cities.length) {
            setCities(cities.filter((_, i) => i !== index));
        }
    };

    const selectedLanguages = Object.keys(languages)
        .filter(language => languages[language])
        .map(language => language.charAt(0).toUpperCase() + language.slice(1))
        .join(', ');

    return (
        <div className="lab2">
            <h1>Задание 1</h1>
            <div className="practice">
                <textarea onChange={countProduct} id="task1_textarea"></textarea>
                <p id="task1_paste">{result}</p>
            </div>

            <h1>Задание 2</h1>
            <div className="practice">
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="russian"
                            checked={languages.russian}
                            onChange={handleCheckboxChange}
                        />
                        Русский
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="belarusian"
                            checked={languages.belarusian}
                            onChange={handleCheckboxChange}
                        />
                        Белорусский
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="english"
                            checked={languages.english}
                            onChange={handleCheckboxChange}
                        />
                        Английский
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="german"
                            checked={languages.german}
                            onChange={handleCheckboxChange}
                        />
                        Немецкий
                    </label>
                </div>
                <p>Вы знаете следующие языки: {selectedLanguages}</p>
            </div>

            <h1>Задание 3</h1>
            <div className="practice">
                <select>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            <h1>Задание 4</h1>
            <div className="practice">
                <div>
                    <label>
                        <input
                            type="radio"
                            name="favoriteAnimal"
                            value="собака"
                            onChange={handleAnimalChange}
                        />
                        Собака
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="favoriteAnimal"
                            value="кот"
                            onChange={handleAnimalChange}
                        />
                        Кот
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="favoriteAnimal"
                            value="птица"
                            onChange={handleAnimalChange}
                        />
                        Птица
                    </label>
                    <br />

                    <label>
                        <input
                            type="radio"
                            name="favoriteAnimal"
                            value="рыба"
                            onChange={handleAnimalChange}
                        />
                        Рыба
                    </label>
                </div>
                <p>
                    Ваше любимое животное: {favoriteAnimal} {favoriteAnimal === 'собака' || favoriteAnimal === 'кот' ? 'Вы молодец!' : ''}
                </p>
            </div>

            <h1>Задание 5</h1>
            <div className="practice">
                <input
                    type="number"
                    value={removeIndex}
                    onChange={handleRemoveIndexChange}
                    placeholder="Введите индекс"
                />
                <button onClick={handleRemoveCity}>Удалить город</button>
                <p>Текущий список городов:</p>
                <ul>
                    {cities.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Task2;
