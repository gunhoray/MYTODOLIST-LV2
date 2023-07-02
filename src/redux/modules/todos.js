// action value
const CREATE = "todos/CREATE"; // 투두 1개 추가
const TOGGLE = "todos/TOGGLE"; // 투두 완료/취소
const DELETE = "todos/DELETE"; // 투두 1개 삭제

// action creator
export const createTodo = (payload) => {
    return {
        type: CREATE,
        payload, // 입력할 투두 인풋값 객체
    };
};

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE,
        payload, // 토글할 투두의 id 값
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE,
        payload, // 삭제할 투두의 id 값
    };
};

// initial State
const initialState = {
    todos: [],
};

// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case CREATE: // 투두 추가
            return {
                todos: [...state.todos, action.payload],
            };
        case TOGGLE: // 투두 완료/취소 토글
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
                ),
            };
        case DELETE: // 투두 삭제
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default todos;
