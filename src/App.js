import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Telefonok from "./Pages/Telefonok/Telefonok";
import Add from "./Pages/Add/Add";
import Update from "./Pages/Update/Update";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Telefonok />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
