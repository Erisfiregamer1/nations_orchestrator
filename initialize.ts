async function initialize(kv: Deno.Kv) {
    // Assume the key value store was already initialized
    let isGameRunning = (await kv.get<boolean>(["game", "isGameRunning"])).value

    if (isGameRunning === null) {
        isGameRunning = false
        console.log("The database may be damaged. Assuming no game is running to atempt consistency reset.")
    }

    if (!isGameRunning) {
        console.log("No previously running game detected!")
    }
}

/*
dbstruct:
{
    users: {

    }
    game: {
        isGameRunning: boolean,
        countries: {
            "russo": {
                channelId: 1,
                economy: 57846932,
                controlledLand: ["Russia", "Poland"]
            }
        },
        land: {
            "Russia": {
                population: 69339899,
                controlled: true,
                controlledBy: "russo"
            },
            "Poland": {
                population: 1,
                controlled: true, 
                controlledBy: "russo"
            }
        },
        queuedActions: {
            "russo": [{"action": "createHomes", value: "5783289"}, {"action": "createFactories", value: "578922"}]
        }
    }
}
*/