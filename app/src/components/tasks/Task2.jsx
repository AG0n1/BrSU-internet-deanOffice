function Task2() {
    let values = [],
        result = 1,
        step = 0

    const countProduct = () => {
        let txt = document.getElementById("task1_textarea"),
            paste = document.getElementById("task1_paste");
        values = txt.value.split("\n");

        for (let i = 0; i < values.length; i++) {
            if (!isNaN(parseInt(values[i]))) {
                result *= parseInt(values[i]);
            } else {
                continue;
            }
        }

        paste.innerHTML = result;
        result = 1
    }

    return (
        <div className="lab2">
            <h1>Задание 1</h1>
            <div className="practice">
                <textarea onChange={countProduct} id="task1_textarea"></textarea>
                <p id="task1_paste">{result}</p>
            </div>

            <h1>Задание 2</h1>
            <div className="practice">
                <textarea onChange={countProduct} id="task1_textarea"></textarea>
                <p id="task1_paste">{result}</p>
            </div>
        </div>
    );
}

export default Task2;
