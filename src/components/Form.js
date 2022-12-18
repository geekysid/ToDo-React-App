import React, { useState } from 'react';
import '../Style.css';

const Form = ({ tasks, setTasks, setFilter, updateFilteredTasks }) => {

    // addding new state
    const [inputText, setInputText] = useState("");

    // FUNCTION TO ADD NEW TASK AND UPDATE STATE
    const formSubmitHandler = () => {
        setTasks([
            ...tasks,
            {
                id: parseInt(Math.random()*10000000),
                task: inputText,
                status: "Pending"
            }
        ]);
        setInputText("");
    }

    // function called whenever input text is changed
    const inputTextHandler = event => setInputText(event.target.value);

    // function to be calledn whenever filer is selected from dropdown
    const filterSelectHandler = e => {
        setFilter(e.target.value);
        updateFilteredTasks();
    }

    return (
        <div>
            <header className="header">Add New Tasks</header>
            <div className="form--div">
                <form className="form-input">
                    <input
                        type="text"
                        className="form-input--task"
                        value={inputText}
                        onChange={inputTextHandler}
                        placeholder="Enter new Task here"
                    />
                    <div className="form-input--submit" onClick={formSubmitHandler}><ion-icon name="add-outline"></ion-icon> </div>
                </form>

                <form className="form-filter">
                    <select className="form-filter--task" onChange={filterSelectHandler}>
                    <option value="All"> All </option>
                    <option value="Pending"> Pending </option>
                    <option value="Completed"> Completed </option>
                    </select>
                </form>
            </div>
        </div>

    )
}

export default Form