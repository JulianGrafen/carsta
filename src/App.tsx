import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditCustomer } from "./pages/EditCustomer";
import { Container } from "react-bootstrap";
import { CreateCustomer } from "./pages/CreateCustomer";
import { Navbar } from "./components/navbar";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Container className="mb-10">
        <Routes>
          <Route path="/createcustomer" element={<CreateCustomer />} />
          <Route path="/EditCustomer" element={<EditCustomer />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
