import './movies.css'

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header>
                    <h1>Movie Search</h1>
                    <nav>
                        <a href="/">Início</a>
                        <a href="/movies">Filmes</a>
                    </nav>
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <p>Movie Search</p>
                </footer>
            </body>
        </html>
    )
}