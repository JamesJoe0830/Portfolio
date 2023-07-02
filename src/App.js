import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
