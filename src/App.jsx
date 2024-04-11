import { NavBar } from "./components/navbar/NavBar";
import { Profile } from "./components/profilepage/Profile";
import { FavoritesSongs } from "./context/favoritesContext";

function App() {
  return (
    <FavoritesSongs>
      <div className="App">
        <NavBar/>
        <Profile/>
      </div>
    </FavoritesSongs>
  );
}

export default App;
