import React from "react";
import Navbar from "../Components/Navbar";
import TaskForm from "../Components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../Redux/Slices/taskSlice";
import { FaTrash } from "react-icons/fa";

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
        <div className="bg-gray-100 h-screen">
            {/*Navbar Items*/}
            <Navbar />
            <div className="mr-4 ml-4">
                <h2 className="text-2xl text-gray-600 font-bold mb-4">
                    My Tasks
                </h2>
                <div className="flex flex-col lg:flex-row lg:gap-8 bg-gray-800 rounded-md shadow-md">
                    {/*Task Form*/}
                    <TaskForm onSubmit={handleAddTask} />
                    {/*Task List*/}
                    <div id="task-list" className="w-full m-4">
                        <ul id="task-container" className="space-y-2">
                            {tasks.map((task) => (
                                <li
                                    id="task-list-item"
                                    key={task.id}
                                    className="p-2 w-full w-full flex justify-between bg-gray-700 text-white rounded-md"
                                >
                                    <div className="gap-2">
                                        <h3 className="text-2xl font-bold">
                                            {task.title}
                                        </h3>
                                        <p>{task.description}</p>
                                    </div>
                                    <FaTrash
                                        color="#3498db"
                                        onClick={() =>
                                            handleRemoveTask(task.id)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
