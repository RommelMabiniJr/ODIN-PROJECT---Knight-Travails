export const printPath = (path) => {
    console.log(`=> You made it in ${path.length} ${ path.length > 1 ? "moves" : "move" }!  Here's your path:`);

    for (let i = 0; i < path.length; i++) {
        console.log(path[i])
    }
}