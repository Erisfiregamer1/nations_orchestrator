const embed = new EmbedBuilder();
embed.setAuthor({
  name: "Nations - Day 1",
});
embed.setTitle("Economy: 1000051");
embed.addFields(
  {
    name: "Summary of Events",
    value: "-329 Economy from managing your nation's populace and territory.\n+5000 Economy from Workforce.\n-7691 Economy from attack by Russia.\n-479 Economy from attacking Poland.\n\nTotal economy change: -3499.",
    inline: false
  },
  {
    name: "Actions Taken",
    value: "You attacked Poland, draining 1026 Economy from them.\nYou increased your Workforce level. You will now gain 10000 Economy every day.",
    inline: false
  },
);
embed.setColor("#00b0f4");
embed.setFooter({
  text: "All changes will occur on next day's report.",
});
embed.setTimestamp();

await message.reply({ embeds: [embed] });