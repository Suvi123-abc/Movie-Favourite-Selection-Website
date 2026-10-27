import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import Favourites from "./components/Favourites.tsx";

function App() {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(movie) {
    setFavorites((currentFavorites) =>
      currentFavorites.some((favorite) => favorite.id === movie.id)
        ? currentFavorites.filter((favorite) => favorite.id !== movie.id)
        : [...currentFavorites, movie]
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage favorites={favorites} onToggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites favorites={favorites} onToggleFavorite={toggleFavorite} />
          }
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
