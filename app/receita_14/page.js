import { BotaoEquipe2, ListaPokemons, Mensagem } from "./componentes";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Sua Equipe 1 de Pokemons</h1>
          <Mensagem texto="Morreu Maria Preá..." cor="red" />
          <ListaPokemons pokemons={["Charmander", "Squirtle", "Bulbasaur", "Pikachu"]} />
          <BotaoEquipe2/>
       </div>
    )
}