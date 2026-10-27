import { useState } from "react";
import { Link } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  description: string;
};

type HomePageProps = {
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
};

const movies = [
  { id: 1, title: "The Dark Knight", description: "Batman faces the Joker." },
  { id: 2, title: "Finding Nemo", description: "A clownfish searches for his son." },
  { id: 3, title: "The Matrix", description: "A hacker discovers a simulated reality." },
  { id: 4, title: "Toy Story", description: "Toys come to life when people aren't around." },
  { id: 5, title: "Jurassic Park", description: "Dinosaurs are brought back to life." },
  { id: 6, title: "Spirited Away", description: "A girl enters a mysterious spirit world." },
];

function HomePage({ favorites, onToggleFavorite }: HomePageProps) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-black tracking-tight text-violet-400">
            Next<span className="text-white">Flix</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Movies
            </Link>
            <Link
              to="/favourites"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Favourites
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Your next movie night
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Find something <span className="text-violet-400">great to watch.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Browse your movie collection and search for your next favourite.
          </p>

          <form
            className="mx-auto mt-8 max-w-lg"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="search"
              placeholder="Search movies..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
            />
          </form>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular movies</h2>
            <span className="text-sm text-slate-400">
              {filteredMovies.length} {filteredMovies.length === 1 ? "movie" : "movies"}
            </span>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMovies.map((movie, index) => (
                <article
                  key={movie.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-200 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/30"
                >
                  <div className="flex h-36 items-end bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-900 p-5">
                    <span className="text-5xl font-black text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold group-hover:text-violet-300">
                      {movie.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-3 text-sm leading-6 text-slate-400">
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {movie.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(movie)}
                      aria-label={`${favorites.some((favorite) => favorite.id === movie.id) ? "Remove" : "Add"} ${movie.title} ${favorites.some((favorite) => favorite.id === movie.id) ? "from" : "to"} favourites`}
                      aria-pressed={favorites.some((favorite) => favorite.id === movie.id)}
                      className="shrink-0 cursor-pointer rounded-md bg-violet-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-violet-700"
                    >
                      {favorites.some((favorite) => favorite.id === movie.id) ? "♥" : "♡"}
                    </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-white/10 bg-slate-900 p-8 text-center text-slate-400">
              No movies found. Try another title.
            </p>
          )}
        </section>

        <footer className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          &copy; 2024 NextFlix. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
