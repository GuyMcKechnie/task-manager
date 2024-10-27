import React from "react";
import Navbar from "../Components/Navbar";
import TaskForm from "../Components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../Redux/Slices/taskSlice";

function Dashboard() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const handleAddTask = (task) => {
        dispatch(addTask({ ...task, id: Date.now() })); //  Add a unique id to each task
    };
    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };
    return (
        <div>
            <Navbar />
            <div className="max-w-md p-4">
                <h2 className="text-2xl mb-4">My Tasks</h2>
                <div className="flex justify-around">
                    <TaskForm onSubmit={handleAddTask} />
                    <ul className="mt-4 space-y-2">
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className="border ml-2 p-2 mx-auto w-full flex justify-between"
                            >
                                <div className="flex justify-between gap-2">
                                    <h3>{task.title}</h3>
                                    <p>{task.description}</p>
                                </div>
                                <button
                                    onClick={() => handleRemoveTask(task.id)}
                                    className="ml-16 text-red-500"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
