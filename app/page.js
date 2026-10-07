export default function Home(){
    return (
        <div>
            <div>Menu principal</div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
            </div>
        </div>
    )
}

export function Forms() {
  return (
    <div>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>

        <br />

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}