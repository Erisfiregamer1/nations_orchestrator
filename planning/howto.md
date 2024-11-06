- Set up a cron job for every day at noon
Check all actions queued for previous day and set up an atomic write operation for deno KV to do them all at once to avoid race conditions
Also write a comprehensive list of the effects of all the actions, and also which countries exploded
Do the write, deleting countries that ran out of eco while sending a death message to those that lost
Format and send embeds to all the other countries that survived allowing them to choose their next actions and see what happened on the current day

- When the bot starts
Check if a game was already in progress (the Orchestrator should be structured in such a way that it saves all selected actions in the database to be registered so a restart can be recovered from easily)
If so, resume game and let everyone know that the bot restarted

If no game is in progress:
Wait until the next month and begin one

- At the start of every month
Check if the game has ended
If not, end the damn game and select a winner to get the medal
Spawn a new message requesting people to sign up with a button
Check if they signed up already, if so say they already did and return
Button opens a form with requested country name
When someone signs up, check if they already HAVE signed up again just in case
If so, return
If not, add country to be added to database linked to user

- After 3 days
Delete sign up message
Check all countries that are joining the game
Spawn a new channel in specific category for country to send messages in, save channel ID for later sending-in
Send initial message showing civilian and economy amount and prompt for actions