export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', type, year} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=da7b225d&s=${titleSearchKey}&type=${type || ''}&y=${year || ''}`)
    const data = await res.json()

    return (
        <div className="movies-grid">
            {data.Search?.map((m) => (
                <div className="movie-card" key={m.imdbID}>
                    <img src={m.Poster} alt={m.Title} />

                    <div>
                        <h2>{m.Title}</h2>
                        <p>{m.Year}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}