async function main() {
    let u = await getAPI("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(u)

    let o = document.getElementById("poke_head");
    console.log(o)
    o.innerText = u.name
    
    let text = document.getElementById("poke_text");
    let p = `Height: ${u.height} Weight: ${u.weight}`

    text.textContent = p
}

async function getAPI(link) {
    return new Promise ((res, rej)=>{
        fetch(link).then(rep => {
            return rep.json();
        }).then(result => {
            res(result)
        });
    })
}

main();