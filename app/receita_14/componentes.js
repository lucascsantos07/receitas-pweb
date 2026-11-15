import Link from "next/link"

export function Mensagem({ texto, cor }) {
  return (
    <h2 style={{ color: cor }}>{texto}</h2>
  )
}

export function ListaPokemons({ pokemons }) {
  return (
    <ul>
      {pokemons.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  )
}

export function BotaoEquipe1() {
  return (
    <button><Link href="../receita_14">Trocar de Equipe</Link></button>
  )
}

export function BotaoEquipe2() {
  return (
    <button><Link href="../receita_14/equipe2pokemons">Trocar de Equipe</Link></button>
  )
}