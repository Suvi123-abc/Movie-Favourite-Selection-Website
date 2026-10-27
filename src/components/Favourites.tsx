import { Link } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  description: string;
};

type FavouritesProps = {
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
};

function Favourites({ favorites, onToggleFavorite }: FavouritesProps) {
   return(
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

      <section className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your <span className="text-violet-400">Favourites</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Browse your favourite movies and enjoy your collection.
          </p>
        </section>


        <main className="mx-auto grid max-w-6xl gap-5 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((movie, index) => (
              <article
                key={movie.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
              >
                <div className="flex h-36 items-end bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-900 p-5">
                  <span className="text-5xl font-black text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h2 className="text-lg font-bold">{movie.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {movie.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggleFavorite(movie)}
                    aria-label={`Remove ${movie.title} from favourites`}
                    className="shrink-0 cursor-pointer rounded-md bg-violet-600 px-4 py-2 text-lg font-semibold text-white transition hover:bg-violet-700"
                  >
                    ♥
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full rounded-xl border border-white/10 bg-slate-900 p-8 text-center text-slate-400">
              You haven't added any favourite movies yet. Browse movies and tap
              the heart to add one.
            </p>
          )}
        </main>
    </div>
   )
}

export default Favourites
