export interface Pokemon {
    code: string;
    name: string;
  }
  
  export interface Generation {
    image: string;
    pokemons: Pokemon[];
  }
  
  export type GenerationData = Record<string, Generation>;
  
  const data: GenerationData = {
    Water: {
      image: '',
      pokemons: [
        {code:'SQ', name: 'Squirtle' },
        {code:'TT', name: 'Totodile' },
        {code:'FK', name: 'Froakie' },
        {code:'CA', name:'Croconaw'},
        {code:'FG', name:'Frogadier'},
        {code:'WT', name:'Wartortle'},
        {code:'BL', name:'Blastoise'},
        {code:'FA', name:'Feraligatr'},
        {code:'GR', name:'Greninja'},


      ]
    },
    Fire: {
      image:'',
      pokemons: [
        {code:'CH', name:'Charmander'},
        {code:'CL', name:'Charmeleon'},
        {code:'CR', name:'Charizard'},
        {code:'CY', name:'Cyndaquil'},
        {code:'QL', name:'Quilava'},
        {code:'TP', name:'Typhlosion'},
        {code:'TC', name:'Torchic'},
        {code:'CB', name:'Combusken'},
        {code:'BZ', name:'Blaziken'},
        ]
    },
    Grass: {
      image:'',
      pokemons:[
        {code:'BU', name:'Bulbasaur'},
        {code:'CH', name:'Chikorita'},
        {code:'IV', name:'Ivysaur'},
        {code:'BA', name:'Bayleef'},
        {code:'GR', name:'Grookey'},
        {code:'TH', name:'Thwackey'},
        {code:'VE', name:'Venusaur'},
        {code:'ME', name:'Meganium'},
        {code:'RI', name:'Rillaboom'},
        ]
    }
}

export default data

