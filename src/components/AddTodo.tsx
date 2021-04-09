import * as React from "react";
import {Button, Input, Grid} from "@chakra-ui/react";
import {useTodosContext} from "../store";

function AddTodo() {
    const {addTodo} = useTodosContext();
    const [newTodo, setNewTodo] = React.useState<string>("");

    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input placeholder="New todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <Button onClick={() => {
                addTodo(newTodo)
                setNewTodo('');
            }}>Add Todo</Button>
        </Grid>
    );
}

export default AddTodo;
