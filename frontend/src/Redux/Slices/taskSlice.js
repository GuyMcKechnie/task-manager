import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                ...action.payload,
                id: Date.now(),
                priority: action.payload.priority || "Normal", // default priority
                dueDate:
                    action.payload.dueDate ||
                    new Date().toISOString().split("T")[0], // default due date
            }); //  add new task to the state
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload); //  remove task from the state
        },
    },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
