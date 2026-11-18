"use client"

import Form from "next/form"
import { useState, memo, useCallback } from "react"

export default function Home() {
    console.log("Home renderizou")

    const [resultMovies, setResultMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleAction = useCallback(async (formData) => {
        setIsLoading(true)

        try {
            const titleSearchKey = formData.get("titleSearchKey")

            const httpRes = await fetch(
                `https://www.omdbapi.com/?apikey=da7b225d&s=${encodeURIComponent(titleSearchKey)}`
            )

            const jsonRes = await httpRes.json()

            setResultMovies(jsonRes.Search || [])

        } finally {
            setIsLoading(false)
        }
    }, [])

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
            <div className="mx-auto max-w-5xl">

                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Movie Search
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Encontre informações sobre seus filmes favoritos.
                    </p>
                </header>

                <MovieForm
                    handleAction={handleAction}
                    isLoading={isLoading}
                />

                <MovieTable movies={resultMovies} />

            </div>
        </main>
    )
}

const MovieForm = memo(function MovieForm({ handleAction, isLoading }) {
    console.log("MovieForm renderizou")

    const [titleSearchKey, setTitleSearchKey] = useState("")

    return (
        <Form
            action={handleAction}
            className="mx-auto mb-12 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
            <div className="flex-1">
                <label
                    htmlFor="idTitleSearchKey"
                    className="mb-2 block text-sm font-medium text-slate-300"
                >
                    Título do filme
                </label>

                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    value={titleSearchKey}
                    onChange={(event) => setTitleSearchKey(event.target.value)}
                    placeholder="Ex: Batman, Interestelar..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="self-end rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isLoading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </Form>
    )
})

const MovieTable = memo(function MovieTable({ movies }) {
    console.log("MovieTable renderizou")

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((m) => (
                <div
                    key={m.imdbID}
                    className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-lg transition hover:border-blue-500/50"
                >
                    {m.Poster && m.Poster !== "N/A" ? (
                        <img
                            src={m.Poster}
                            alt={`Pôster de ${m.Title}`}
                            className="h-40 w-28 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="flex h-40 w-28 items-center justify-center rounded-lg bg-slate-800 text-center text-xs text-slate-500">
                            Sem pôster
                        </div>
                    )}

                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">
                            {m.Title}
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Ano: {m.Year}
                        </p>

                        <p className="mt-1 text-xs uppercase tracking-wider text-blue-400">
                            {m.Type}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
})