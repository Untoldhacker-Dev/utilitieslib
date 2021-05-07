function hello(ads){
var num = Libs.Ramdom.randomInt(1,5)
if(num == 2){
  
  Bot.sendMessage("Ads from lib!\n\n"+ads)
}else return
}

function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

publish({

  sayHello: hello,

  sayGoodbyeTo: goodbye

})
