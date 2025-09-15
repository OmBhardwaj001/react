import React from "react"
import Todo from "./components/Todo"
import AddTodo from "./components/AddTodo"

function App() {

    return(
        <>
            <h1> Todo using RTK</h1>
            <AddTodo/>
            <Todo/>
        </>
    )
}

export default App
