import {useState, useEffect} from "react";

function MyToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setToDo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setToDos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    }
    return (
        <div>
            <h1>My To Do List ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange = {onChange} type="text" placeholder="Write your to do.."/>
                <button>Add To Do</button>
            </form>
            <hr/>
            {toDos.map((item, index)=>
                <ul>
                    <li key={index}>{item}</li>
                </ul>
            )}
        </div>
    );
}

export default MyToDoList;
