import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export const NavigationBar = () => {
  return (
    <Navbar bg="light" className="mx-1">
      <>
        <Navbar.Brand className="logo-name">BondFire</Navbar.Brand>
      </>
    </Navbar>
  )
}
