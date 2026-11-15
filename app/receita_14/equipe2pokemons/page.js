import { BotaoEquipe1, ListaPokemons, Mensagem } from "../componentes";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Sua Equipe 2 de Pokemons</h1>
          <Mensagem texto="Morreu Maria Preá..." cor="red" />
          <ListaPokemons pokemons={["Caterpie", "Tortic", "Cindaquil", "Snorlax"]} />
          <BotaoEquipe1/>
       </div>
    )
}