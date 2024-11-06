const embed = new EmbedBuilder()
  .setTitle("Daily Report - Day 1")
  .setDescription("- Ukrana ran out of Economy and collapsed.\n- Russo attacked Poland, destroying 2798 Economy.\n- Russo and Poland collapsed in mutual destruction!")
  .addFields(
    {
      name: "💀 Game Over! 💀",
      value: "The winner of this round was: Nobody!\nEverybody collapsed at the end! Such is war...",
      inline: false
    },
  )
  .setColor("#f50000");

await message.reply({ embeds: [embed] });