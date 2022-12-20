import React, { useState } from 'react';
import '../Style.css';
import Card from './Card';

const Form = ({ tasks, setTasks, setFilter, updateFilteredTasks, addTaskDB }) => {

    // addding new state
    const [inputText, setInputText] = useState("");

    // FUNCTION TO ADD NEW TASK AND UPDATE STATE
    const formSubmitHandler = () => {
        if (inputText === '') {
            alert("Kindly add a valid task")
            return
        }

        const newTask = {
            id: parseInt(Math.random()*10000000),
            task: inputText,
            status: "Pending"
        }
        addTaskDB(newTask);
        // setTasks([
        //     ...tasks,
        //     newTask
        // ]);
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
        <Card header="Add New Tasks">
            <div className="form--div">
                <form className="form-input">
                    <input
                        type="text"
                        className="form-input--task"
                        value={inputText}
                        onChange={inputTextHandler}
                        placeholder="Enter new Task here"
                    />
                    <button type="submit" className="form-input--submit" onClick={formSubmitHandler}>
                        <div>+</div>
                    </button>
                    {/* <div className="form-input--submit" onClick={formSubmitHandler}><ion-icon name="add-outline"></ion-icon> </div> */}
                </form>

                <form className="form-filter">
                    <div className="form-filter--relative">
                        <select className="form-filter--type" onChange={filterSelectHandler}>
                            <option value="All"> All </option>
                            <option value="Pending"> Pending </option>
                            <option value="Completed"> Completed </option>
                        </select>
                    </div>
                </form>
            </div>
        </Card>
    )
}

export default Form