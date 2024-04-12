import { NavBar } from "./components/navbar";
import { Profile } from "./components/pages";
import { FavoritesSongs } from "./context/favoritesContext";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <FavoritesSongs>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="*" element={<Profile/>}/>
          </Routes>
        </div>
      </FavoritesSongs>
    </BrowserRouter>
  );
}

export default App;
