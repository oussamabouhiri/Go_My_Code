import { combineReducers } from "redux";

const initialState = {
  tasks: [
    { id: 1, description: "Learn Redux", isDone: false },
    { id: 2, description: "Build a ToDo App", isDone: true },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
