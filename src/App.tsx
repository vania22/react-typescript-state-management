import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import ListTodo from "./components/ListTodo";
import AddTodo from "./components/AddTodo";
import {TodosContextProvider} from "./store";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
          <TodosContextProvider>
              <TopBar/>
              <ListTodo/>
              <AddTodo/>
          </TodosContextProvider>
      </Box>
    </ChakraProvider>
  );
}
