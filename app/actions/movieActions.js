'use server'

export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const type = formData.get("type")

    if (!titleSearchKey || titleSearchKey=='') return {Search: []}

    try{
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=da7b225d&s=${titleSearchKey}&type=${type}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }

}