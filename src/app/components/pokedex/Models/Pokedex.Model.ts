export interface Pokedex {
    count : number
    next? : string
    previous? : string
    results : Result[]
}

export interface Result {
    name : string
    url : string
}

export interface Pokemon {
    name : string
    weight : number
    height : number
    sprites : Sprites
}

export interface Sprites {
    front_default : string
    back_default : string
}