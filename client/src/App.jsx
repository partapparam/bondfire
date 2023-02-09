import logo from "./logo.svg"
import React from "react"
import Container from "react-bootstrap/Container"
import "./App.css"
import { NavigationBar } from "./NavigationBar"

function App() {
  return (
    <div className="App .container-fluid">
      <NavigationBar />
    </div>
  )
}

export default App
