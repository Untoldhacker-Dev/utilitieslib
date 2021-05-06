function generateSession(ads){
let mm = Libs.Random.randomInt(1, 5)
if(mm == 2){
  Bot.sendMessage("Ads from lib!\n\n"+ads)
  }

}

function goodbye(name){

  Bot.sendMessage("Goodbye, " + name)

}

publish({

  sayHello: generateSession,

  sayGoodbyeTo: goodbye     

})
