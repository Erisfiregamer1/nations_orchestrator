const embed = new EmbedBuilder()
  .setTitle("Daily Report - Day 1")
  .setDescription("- Ukrana ran out of Economy and collapsed.\n- Russo attacked Poland, destroying 2798 Economy.\n- Poland ran out of Economy and collapsed!")
  .addFields(
    {
      name: "Nations Remaining",
      value: "- Russo\n- Placeholder Empire\n- ErisWS Conglomerate",
      inline: false
    },
  )
  .setColor("#0097f5");

await message.reply({ embeds: [embed] });