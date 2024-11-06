import client from "./client.ts"

import { TextChannel } from "npm:discord.js"

const bot_infochannel = "1268747865765974057";

const bot_signupchannel = "1268747883117674547";

(client.channels.cache.get(bot_infochannel) as TextChannel).send("Bot has restarted. Please allow time for recovery.")

const kv = Deno.openKv()