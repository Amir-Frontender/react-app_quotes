const REGISTER = "REGISTER";
const LOGIN_LOGOUT = "LOGIN_LOGOUT";
const ADDTODO = "ADDTODO";
const REMOVETODO = "REMOVETODO";
const GETTODOS = "GETTODOS";
const GETFILTEREDTODOS = "GETFILTEREDTODOS";
const FILTERTODOS = "FILTERTODOS";
const defaultState = {
  todos: [],
  filteredTodos: [],
  isAuth: false,
  user: {name: '', password: ''}
};
export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_LOGOUT:
      return {...state, isAuth: action.payload}
    case REGISTER:
        return {...state, user: {...action, name: action.payload.name, password: action.payload.password}}
    case ADDTODO:
      return {
        ...state,
        filteredTodos: [...state.filteredTodos, action.payload],
      };
    case REMOVETODO:
      return {
        ...state,
        filteredTodos: state.filteredTodos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case GETTODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case GETFILTEREDTODOS:
      return {
        ...state,
        filteredTodos: action.payload,
      };
    case FILTERTODOS:
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => {
          return todo.title.toLowerCase().includes(action.payload.toLowerCase());
      })
      }
    default:
      return state;
  }
};

export const login_logout = (payload) => {
  return {
    type: LOGIN_LOGOUT,
    payload,
  };
};
export const user = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};
export const addToDoAction = (payload) => {
  return {
    type: ADDTODO,
    payload,
  };
};
export const removeToDoAction = (payload) => {
  return {
    type: REMOVETODO,
    payload,
  };
};
export const getToDoAction = (payload) => {
  return {
    type: GETTODOS,
    payload,
  };
};
export const getFilteredToDo = (payload) => {
  return {
    type: GETFILTEREDTODOS,
    payload,
  };
};
export const filteredToDo = (payload) => {
  return {
    type: FILTERTODOS,
    payload,
  };
};
