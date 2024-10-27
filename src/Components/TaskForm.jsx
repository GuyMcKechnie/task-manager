import React, { useState } from "react";

function TaskForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        //  Prevent default form submission behavior
        e.preventDefault();
        //  Call the onSubmit function with the title and description
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
    };
    return (
        <div className="bg-gray-800 mt-4 rounded-md p-8 w-full sm:w-3/4 md:w-1/2 lg:w-3/4">
            <div className="px-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full p-2 border border-gray-400 rounded-md"
                    />
                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full p-2 border border-gray-400 rounded-md"
                    ></textarea>
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
