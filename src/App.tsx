import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EditCustomer } from "./pages/EditCustomer";
import { CreateCustomer } from "./pages/CreateCustomer";

function App() {
  return (
    <Routes>
      <Route path="/createcustomer" element={<CreateCustomer />} />
      <Route path="/editcustomer" element={<EditCustomer />} />
    </Routes>
  );
}

export default App;
