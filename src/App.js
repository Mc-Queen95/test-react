import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Nav } from "./components/navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./components/contents";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
