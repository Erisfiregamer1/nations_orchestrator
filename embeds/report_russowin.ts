const embed = new EmbedBuilder()
  .setTitle("Daily Report - Day 1")
  .setDescription("- Ukrana ran out of Economy and collapsed.\n- Russo attacked Poland, destroying 2798 Economy.\n- Poland ran out of Economy and collapsed!")
  .addFields(
    {
      name: "Game Over!",
      value: "The winner of this round was: Russo!\nThey had 58929 Economy left.",
      inline: false
    },
  )
  .setColor("#00f51d");

await message.reply({ embeds: [embed] });