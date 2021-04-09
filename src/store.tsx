import * as React from "react";
import {ReactNode} from "react";

// Standard interface and functions

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text,
    }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
    todos.map((todo) => ({
        ...todo,
        done: todo.id === id ? !todo.done : todo.done,
    }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({id}) => id))) + 1,
        text,
        done: false,
    },
];


// Native React Implementation
export const useTodos = (initialState: Todo[]) => {
    const [todos, setTodos] = React.useState<Todo[]>(initialState);

    return {
        todos,
        setTodos,
        addTodo(newTodo: string) {
            setTodos((prevState => addTodo(prevState, newTodo)))
        },
        updateTodo(id: number, updatedText: string) {
            setTodos((prevState => updateTodo(prevState, id, updatedText)))
        },
        toggleTodo(id: number) {
            setTodos((prevState => toggleTodo(prevState, id)))
        },
        deleteTodo(id: number) {
            setTodos((prevState => removeTodo(prevState, id)))
        },
    }
}

type IUseTodos = ReturnType<typeof useTodos>;

const TodosContext = React.createContext<IUseTodos | null>(null);
export const useTodosContext = () => React.useContext(TodosContext)!;

export const TodosContextProvider = ({children}: { children: ReactNode }) => {
    const todosHook = useTodos([])
    return (
        <TodosContext.Provider value={{...todosHook}}>
            {children}
        </TodosContext.Provider>
    )
}

