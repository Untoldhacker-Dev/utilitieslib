// Banning System ////
///// Banning System ////

function restrict(tgid) {
  if (!tgid) {
    throw new Error(
      "Tgid is not mentioned while banning a user from bot using Lib!"
    )
  }

  var exist = Bot.getProperty(tgid + "ban")

  if (exist == true) {
    Bot.sendMessage("*Answer From Lib: User Already Banned*")

    return
  } else Bot.setProperty(tgid + "ban", true)

  Bot.sendMessage("Banned " + tgid)
}

////Unbanning System////

function unrestrict(tgid) {
  if (!tgid) {
    throw new Error(
      "Tgid is not mentioned while Unbanning a user from bot using Lib!"
    )
  }

  var exist = Bot.getProperty(tgid + "ban")

  if (exist != true) {
    Bot.sendMessage("*Answer From Lib: User Already UnBanned*")

    return
  } else Bot.setProperty(tgid + "ban", false)

  Bot.sendMessage("UnBanned " + tgid)
}

////Inspection (@)////

function inspect() {
  var is_admin = Bot.getProperty(user.telegramid + "isadmin")

  if (!is_admin) {
    var man = Bot.getProperty("maintainence")

    var exists = Bot.getProperty(user.telegramid + "ban")

    if (exists == true) {
      Bot.sendMessage(
        "*You cannot use this bot as you were banned by it's Admin*"
      )

      return
    }

    if (man == true) {
      Bot.sendMessage(
        "*You cannot Use the Bot as The bot is Currently in Maintainence*"
      )

      return
    }
  }

  var cmd = message.toLowerCase()

  var me = Bot.getProperty(cmd)

  if (me) {
    eval(me)

    return
  }

  var is_filter = Bot.getProperty(message + "f")

  if (is_filter) {
    Bot.sendMessage(is_filter, { is_reply: true })
  }
}

////Creating Secret command////

function createCommand(cmd, bjs) {
  if (!cmd) {
    throw new Error(
      "UHToolz Lib - Command name is not specified while using funtion for creating secret command!"
    )
  }

  if (!bjs) {
    throw new Error(
      "UHToolz Lib - Command bjs is not specified while using funtion for creating secret command!"
    )
  }

  Bot.setProperty(cmd.toLowerCase(), bjs)

  Bot.sendMessage("*Command Saved!*")
}

////Maintainence System////

function maintainence(status) {
  if (!status) {
    throw new Error(
      "UHToolz Lib - Status is not mentioned, mention on/off the Maintainence in ()"
    )
  }

  var toDo = status.toLowerCase()

  if (toDo != "on" || toDo != "off") {
    throw new Error(
      "UHToolz Lib - Status is not correctly mentioned, mention on/off the Maintainence in ()"
    )
  }

  if (toDo == "on") {
    Bot.setProperty("maintainence", true)

    Bot.sendMessage("*Maintainence is on now!*")

    return
  }

  Bot.setProperty("maintainence", false)

  Bot.sendMessage("*Maintainence is off now!*")

  return
}

////Promote system////

function promote(tgid) {
  if (!tgid) {
    throw new Error(
      "Tgid is not mentioned while Promoting a user from bot using Lib!"
    )
  }

  Bot.setProperty(tgid + "isadmin", true)

  Bot.sendMessage("Promoted Successfully!")
}

////Filter system////

function filter(word, reply) {
  if (!word) {
    throw new Error(
      "Keyword is not mentioned while setting filter for a word from bot using Lib!"
    )
  }

  if (!reply) {
    throw new Error(
      "Reply is not mentioned while setting filter for a word from bot using Lib!"
    )
  }

  Bot.setProperty(word + "f", reply)

  Bot.sendMessage("*Filter Set!*")
}

function transfer(bot_id, email) {
  if (!bot_id) {
    throw new Error(
      "Bot id is not mentioned while transferring bots using Lib!"
    )
  }

  if (!email) {
    throw new Error("Email is not mentioned while transferring bots using Lib!")
  }

  BBAdmin.installBot({
    email: email,

    bot_id: bot_id
  })
}

function clone(bot_id) {
  if (!bot_id) {
    BBAdmin.cloneBot({
      // see bot id in the app -> Bots -> Bot

      bot_id: bot.id

      // bot can be installed as protected

      // as_protected: true,

      // you can pass properties to bot:

      // bot_properties: [

      //     { name: 'test',

      //       value:'hello world',

      //       type:'string' }

      // ]
    })

    Bot.sendMessage("*Successfully clone this bot into the same account*")

    return
  }

  BBAdmin.cloneBot({
    // see bot id in the app -> Bots -> Bot

    bot_id: bot_id

    // bot can be installed as protected

    // as_protected: true,

    // you can pass properties to bot:

    // bot_properties: [

    //     { name: 'test',

    //       value:'hello world',

    //       type:'string' }

    // ]
  })
}

function verifyMinAndMax(min, max) {
  if (!min || !max) {
    Bot.sendMessage("Need pass min and max for random value")

    return
  }

  if (typeof min != "number" || typeof max != "number") {
    Bot.sendMessage("Min and max must be Number type")

    return
  }

  if (min > max) {
    Bot.sendMessage("Max must be creater then min")

    return
  }

  return true
}

function rndFloat(min, max) {
  if (!verifyMinAndMax(min, max)) {
    return
  }

  return Math.random() * (max - min + 1) + min
}

function rndInt(min, max) {
  if (!verifyMinAndMax(min, max)) {
    return
  }

  return Math.floor(rndFloat(min, max))
}

function sendAds(ads, parse_mode) {
  if (!ads) {
    throw new Error(
      "Sending Ads.... error: ads is not defined, need define ads to send ads"
    )
  }

  var myFrq = rndInt(1, 5)

  if (!parse_mode) {
    if (myFrq == 5) {
      Bot.sendMessage(ads)
    }
  }

  if (myFrq == 5) {
    Bot.sendMessage(ads, { parse_mode: parse_mode })
  }
}

function validURL(url) {
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

  return regex.test(url)
}

var libPrefix = "UHToolz"

function shortLink(url) {
  if (validURL(url)) {
    HTTP.get({
      url: "http://tinyurl.com/api-create.php?url=" + url,

      success: libPrefix + "onLoading "

      // headers: headers - if you need headers
    })
  } else
    throw new Error(
      "UhToolz Lib on short link - Wrong URL\nExample : https://bots.business"
    )
}

function onLoading() {
  return content
}

on(libPrefix + "onLoading", onLoading)

publish({
  transfer: transfer,
  filter: filter,
  promote: promote,
  maintainence: maintainence,
  createCommand: createCommand,
  inspect: inspect,
  unrestrict: unrestrict,
  restrict: restrict,
  clone: clone,
  shortLink: shortLink,
  sendAds: sendAds
})
