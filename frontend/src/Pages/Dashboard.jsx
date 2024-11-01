import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TaskForm from "../Components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, updateTask } from "../Redux/Slices/taskSlice";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Dashboard() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("All");
    const filteredItems =
        filter === "All"
            ? // if filter is = 'all', make filter all tasks
              tasks
            : // if filter = anything else, make it the priority selected
              tasks.filter((task) => task.priority === filter);
    const [editTask, setEditTask] = useState(false);
    const handleEditTask = (task) => {
        setEditTask(task);
    };
    const handleAddTask = (task) => {
        if (editTask) {
            dispatch(updateTask({ ...task, id: editTask.id }));
            // reset edit task state after editing
            setEditTask(null);
        } else {
            dispatch(addTask({ ...task, id: Date.now() })); //  Add a unique id to each task
        }
    };

    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            {/*Navbar Items*/}
            <Navbar />
            <div className="mr-4 ml-4 py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    My Tasks
                </h2>
                <div className="flex flex-col lg:flex-row lg:gap-8 bg-gray-800 rounded-md shadow-md">
                    {/*Task Form*/}
                    <TaskForm onSubmit={handleAddTask} editTask={editTask} />
                    {/*Task List*/}
                    <div id="task-list" className="w-full m-4 space-y-6">
                        {/* Search Bar */}
                        <div className="flex justify-between text-gray-700">
                            <input
                                type="search"
                                placeholder="Search Tasks"
                                className="w-full p-2 rounded-l-md"
                            />
                            <select
                                className="p-2 rounded-r-md cursor-pointer"
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Low">Low</option>
                                <option value="Normal">Normal</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <ul id="task-container" className="space-y-2">
                            {filteredItems.map((task) => (
                                <li
                                    id="task-list-item"
                                    key={task.id}
                                    className="p-2 bg-gray-700 text-white rounded-md"
                                >
                                    <div className="flex flex-row justify-between">
                                        {/* Title */}
                                        {task.title === "" ? (
                                            <h3 className="text-2xl font-bold">
                                                Task
                                            </h3>
                                        ) : (
                                            <h3 className="text-2xl font-bold">
                                                {task.title}
                                            </h3>
                                        )}
                                        {/* Icon */}
                                        <div className="flex gap-4">
                                            <IconContext.Provider
                                                value={{
                                                    color: "rgb(52, 152, 219)",
                                                    size: 20,
                                                    className:
                                                        "global-class-name hover:scale-110 transition duration-200 ease-in-out cursor-pointer",
                                                }}
                                            >
                                                <FaPencilAlt
                                                    onClick={() =>
                                                        handleEditTask(task)
                                                    }
                                                />
                                                <FaTrash
                                                    onClick={() =>
                                                        handleRemoveTask(
                                                            task.id
                                                        )
                                                    }
                                                />
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                    {/* Priority */}
                                    <div className="flex justify-between text-2sm p-1 bg-gray-600 rounded-md">
                                        <div>{task.priority}</div>
                                        <div>{task.dueDate}</div>
                                    </div>
                                    {/* Description */}
                                    <div className="mt-4">
                                        {task.description === "" ? (
                                            <p>Description</p>
                                        ) : (
                                            <p>{task.description}</p>
                                        )}
                                    </div>
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
