import {
  ActivityType,
  Client,
  GatewayIntentBits,
  Partials,
  Collection
} from "npm:discord.js";

const token = Deno.env.get("DISCORD_TOKEN");
const id = Deno.env.get("APP_ID");

if (typeof token !== "string") {
  throw "notoken";
} else if (typeof id !== "string") {
  throw `noappid`;
}

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [
    Partials.Channel,
  ],
});

client.on("ready", (c) => {
  console.log(`Logged in as ${c.user.tag}!`);

  c.user.setActivity("over the players of Nations", {
    type: ActivityType.Watching,
  });
});

await client.login(Deno.env.get("DISCORD_TOKEN"));

export default client;
