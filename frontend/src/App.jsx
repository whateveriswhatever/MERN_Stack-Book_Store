import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookCollection from "./pages/BookCollection";
import CreateBooks from "./pages/CreateBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/detail/:id" element={<BookCollection />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  );
};

export default App;
