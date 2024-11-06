const embed = new EmbedBuilder()
  .setAuthor({
    name: "Nations - Day 2",
  })
  .setTitle("Economy: -2379")
  .setDescription("- You were attacked by Ukrana and lost 27985 Economy.\n- You were attacked by Placeholder Empire and lost 5692629 Economy.")
  .addFields(
    {
      name: "Actions Taken",
      value: "- You attacked Ukrana, draining 579 Economy from them.",
      inline: false
    },
    {
      name: "💀 Game Over! 💀",
      value: "Your nation collapsed from running out of Economy!\n\nThe remaining nations are:\n- Russo\n- Placeholder Empire\n- Ukrana\n- ErisWS Conglomerate",
      inline: false
    },
  )
  .setColor("#f50000");

await message.reply({ embeds: [embed] });