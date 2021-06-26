function broadcast(text){
  Bot.runAll({command:"&&XC-Broadcast"})
  Bot.setProperty("recent_broadcast",text)
  on('&&XC-Broadcast', Bot.sendMessage("Broadcast!\n\n"+Bot.getProperty("recent_broadcast"))
     
     }
publish({
     broadcast: broadcast
     })
