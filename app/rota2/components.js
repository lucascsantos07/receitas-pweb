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