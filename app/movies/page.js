export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', type, year} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=da7b225d&s=${titleSearchKey}&type=${type || ''}&y=${year || ''}`)
    const data = await res.json()

    return (
        <div>
            <div>
                {data.Search?.map((m) => (
                    <div key={m.imdbID}>
                        <h2>{m.Title}</h2>
                        <p>{m.Year}</p>

                        <img
                            src={m.Poster}
                            alt={`Poster do filme ${m.Title}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}