import Form from "next/form"
import "./movieForms.css"

export default function MovieForm() {
    return (
        <Form action="/movies" className="movie-form">

            <div className="form-group">
                <label htmlFor="idTitleSearchKey">Título</label>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    placeholder="Ex: Batman"
                />
            </div>

            <div className="form-group">
                <label htmlFor="idType">Tipo</label>
                <select id="idType" name="type" defaultValue="">
                    <option value="">Todos</option>
                    <option value="movie">Filme</option>
                    <option value="series">Série</option>
                    <option value="episode">Episódio</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="idYear">Ano</label>
                <input
                    id="idYear"
                    name="year"
                    type="number"
                    placeholder="Ex: 2022"
                />
            </div>

            <button type="submit">Pesquisar</button>

        </Form>
    )
}