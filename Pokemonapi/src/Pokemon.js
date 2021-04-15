
export async function getAllPokemon(url){    
    const resp = await fetch(url);
    return resp.json();
} 

export async function getPokemon(url) {
    const resp = await fetch(url);
    return resp.json();    
}