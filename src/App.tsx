import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { EditCustomer } from "./pages/EditCustomer";
import { Container } from "react-bootstrap";
import { CreateCustomer } from "./pages/CreateCustomer";
import { Navbar } from "./components/navbar";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const basename = "/carsta";
  return (
    <>
      <Container className="mb-10">
        <Router basename={basename}>
          <Route path="/createcustomer" element={<CreateCustomer />} />
          <Route path="/EditCustomer" element={<EditCustomer />} />
        </Router>
      </Container>
    </>
  );
}

export default App;
