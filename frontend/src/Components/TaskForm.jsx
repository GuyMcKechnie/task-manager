import React, { useState } from "react";

function TaskForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Normal");
    const [dueDate, setDueDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const handleSubmit = (e) => {
        //  Prevent default form submission behavior
        e.preventDefault();
        //  Call the onSubmit function with the various components
        onSubmit({ title, description, priority, dueDate });
        setTitle("");
        setDescription("");
        setPriority("Normal");
        setDueDate(new Date().toISOString().split("T")[0]);
    };
    return (
        <div className="bg-gray-800 max-h-full rounded-md mt-4 mb-4 w-full sm:w-2/3 md:w-1/2">
            <div className="px-4">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full p-2 border border-gray-400 rounded-md"
                    >
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                    </select>
                    <input
                        type="date"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
