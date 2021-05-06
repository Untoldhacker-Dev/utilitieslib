function generateSession(){
let mm = Libs.Random.randomInt(1, 5)
if(mm == 2){
  Bot.sendMessage("Ads from lib!")
  }

}

function goodbye(name){

  Bot.sendMessage("Goodbye, " + name)

}

publish({

  sayHello: hello,

  sayGoodbyeTo: goodbye     

})
