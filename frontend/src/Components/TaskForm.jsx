import React, { useEffect, useState } from "react";

function TaskForm({ onSubmit, editTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Normal");
    const [dueDate, setDueDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    useEffect(() => {
        if (editTask) {
            setTitle(editTask.title);
            setDescription(editTask.description);
            setPriority(editTask.priority);
            setDueDate(editTask.dueDate);
        } else {
            setTitle("Task");
            setDescription(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, obcaecati quis iure laboriosam quasi tempore quod dolorum harum dignissimos consequatur?"
            );
            // setTitle("");
            // setDescription("");
            setPriority("Normal");
            setDueDate(new Date().toISOString().split("T")[0]);
        }
    }, [editTask]);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, priority, dueDate });
    };

    return (
        <div className="bg-gray-800 max-h-full rounded-md mt-4 mb-4 w-full sm:w-2/3 md:w-1/2">
            <div className="px-4">
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-400 rounded-md"
                    />
                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-400 rounded-md"
                    ></textarea>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-2 border border-gray-400 rounded-md cursor-pointer"
                    >
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                    <input
                        type="date"
                        className="w-full p-2 border border-gray-400 rounded-md cursor-pointer"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-sky-800 text-white p-2 rounded-md hover:bg-sky-900"
                    >
                        {editTask ? "Update Task" : "Create New Task"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
