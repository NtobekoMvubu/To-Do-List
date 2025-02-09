import React, {useState} from "react";
import Proptype from 'prop-types'
import styles from './Task.module.css'
function Task(){
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");


    const addNewTask = () =>{
        console.log(newTask);
        setTaskList(t => ([...t, newTask]));
        setNewTask("");
    }

    function handleTaskChange(e){
        setNewTask(e.target.value);
    }

    const deleteTask = (index)=>{
        setTaskList(s => s.filter((_, i)=> i!== index ))
    }

    return(
        <div>
            <input value={newTask} className={styles.textInput} type="text" placeholder="Enter a task..." onChange={handleTaskChange} />
            <button className={styles.btnAdd} onClick={addNewTask} >Add</button><br/>
            <ul>
                {taskList.map((task, index) => 
                <li className={styles.listItem} key={index}>
                    <div>
                        {task}
                    </div>                    
                    <div>
                        <button onClick={() => deleteTask(index)} className={styles.btnDel}>Delete</button>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}
export default Task