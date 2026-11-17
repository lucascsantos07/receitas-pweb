import './movies.css'
import MovieForm from './movieSearch/movieForm'


export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header>
                    <h1>Movie Search</h1>
                    <nav>
                        <MovieForm />
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