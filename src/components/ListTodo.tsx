import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useTodosContext} from "../store";

function TodoListItems() {
    const {todos, toggleTodo, updateTodo, deleteTodo} = useTodosContext();

    console.log(todos)

  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onChange={(e) => toggleTodo(todo.id)}/>
          <Input
              mx={2}
              value={todo.text}
              onChange={(e) => updateTodo(todo.id, e.target.value)}/>
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function ListTodo() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems/>
    </>
  );
}

export default ListTodo;
