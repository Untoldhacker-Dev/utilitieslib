function broadcast(text) {

  Bot.runAll({ command: "&&XC-Broadcast" })

  Bot.setProperty("recent_broadcast", text)

  var msg = Bot.getProperty("recent_broadcast")

  on("&&XC-Broadcast", Bot.sendMessage("Broadcast!\n\n" + msg))

}

publish({ broadcast: broadcast })
