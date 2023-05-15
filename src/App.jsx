import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Molecules/Header";
import Footer from "./components/Molecules/Footer";
import { useContext } from "react";
import UsersContext from "./contexts/UsersContext";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import NewPlant from "./components/Pages/NewPlant";

const App = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/addNewPlant"
          element={currentUser ? <NewPlant /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
