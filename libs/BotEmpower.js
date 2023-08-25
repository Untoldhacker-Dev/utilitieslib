var UHToolzLib = {
  libPrefix: "UHToolzLib",

  restrict: function(tgid) {
    if (!tgid) throw new Error("Tgid is not mentioned while banning a user from bot using Lib!");
    var exist = Bot.getProperty(tgid + "ban");
    if (exist == true) Bot.sendMessage("*Answer From Lib: User Already Banned*");
    else Bot.setProperty(tgid + "ban", true);
    Bot.sendMessage("Banned " + tgid);
  },

  unrestrict: function(tgid) {
    if (!tgid) throw new Error("Tgid is not mentioned while Unbanning a user from bot using Lib!");
    var exist = Bot.getProperty(tgid + "ban");
    if (exist != true) Bot.sendMessage("*Answer From Lib: User Already UnBanned*");
    else Bot.setProperty(tgid + "ban", false);
    Bot.sendMessage("UnBanned " + tgid);
  },

  inspect: function() {
    var is_admin = Bot.getProperty(user.telegramid + "isadmin");
    if (!is_admin) {
      var man = Bot.getProperty("maintainence");
      var exists = Bot.getProperty(user.telegramid + "ban");
      if (exists == true) {
        Bot.sendMessage("*You cannot use this bot as you were banned by its Admin*");
        return;
      }
      if (man == true) {
        Bot.sendMessage("*You cannot Use the Bot as The bot is Currently in Maintenance*");
        return;
      }
    }
    var cmd = message.toLowerCase();
    var me = Bot.getProperty(cmd);
    if (me) {
      eval(me);
      return;
    }
    var is_filter = Bot.getProperty(message + "f");
    if (is_filter) {
      Bot.sendMessage(is_filter, { is_reply: true });
    }
  },

  createCommand: function(cmd, bjs) {
    if (!cmd) throw new Error("UHToolz Lib - Command name is not specified while using function for creating secret command!");
    if (!bjs) throw new Error("UHToolz Lib - Command bjs is not specified while using function for creating secret command!");
    Bot.setProperty(cmd.toLowerCase(), bjs);
    Bot.sendMessage("*Command Saved!*");
  },

  maintainence: function(status) {
    if (!status) throw new Error("UHToolz Lib - Status is not mentioned, mention on/off the Maintenance in ()");
    var toDo = status.toLowerCase();
    if (toDo != "on" && toDo != "off") throw new Error("UHToolz Lib - Status is not correctly mentioned, mention on/off the Maintenance in ()");
    if (toDo == "on") {
      Bot.setProperty("maintainence", true);
      Bot.sendMessage("*Maintenance is on now!*");
    } else {
      Bot.setProperty("maintainence", false);
      Bot.sendMessage("*Maintenance is off now!*");
    }
  },

  promote: function(tgid) {
    if (!tgid) throw new Error("Tgid is not mentioned while Promoting a user from bot using Lib!");
    Bot.setProperty(tgid + "isadmin", true);
    Bot.sendMessage("Promoted Successfully!");
  },

  filter: function(word, reply) {
    if (!word) throw new Error("Keyword is not mentioned while setting filter for a word from bot using Lib!");
    if (!reply) throw new Error("Reply is not mentioned while setting filter for a word from bot using Lib!");
    Bot.setProperty(word + "f", reply);
    Bot.sendMessage("*Filter Set!*");
  },

  transfer: function(bot_id, email) {
    if (!bot_id) throw new Error("Bot id is not mentioned while transferring bots using Lib!");
    if (!email) throw new Error("Email is not mentioned while transferring bots using Lib!");
    BBAdmin.installBot({
      email: email,
      bot_id: bot_id
    });
  },

  clone: function(bot_id) {
    if (!bot_id) {
      BBAdmin.cloneBot({
        bot_id: bot.id
      });
      Bot.sendMessage("*Successfully clone this bot into the same account*");
      return;
    }
    BBAdmin.cloneBot({
      bot_id: bot_id
    });
  },

  verifyMinAndMax: function(min, max) {
    if (!min || !max) {
      Bot.sendMessage("Need pass min and max for random value");
      return;
    }
    if (typeof min != "number" || typeof max != "number") {
      Bot.sendMessage("Min and max must be Number type");
      return;
    }
    if (min > max) {
      Bot.sendMessage("Max must be greater than min");
      return;
    }
    return true;
  },

  rndFloat: function(min, max) {
    if (!this.verifyMinAndMax(min, max)) {
      return;
    }
    return Math.random() * (max - min + 1) + min;
  },

  rndInt: function(min, max) {
    if (!this.verifyMinAndMax(min, max)) {
      return;
    }
    return Math.floor(this.rndFloat(min, max));
  },

  sendAds: function(ads, parse_mode) {
    if (!ads) throw new Error("Sending Ads... error: ads is not defined, need define ads to send ads");
    var myFrq = this.rndInt(1, 5);
    if (!parse_mode) {
      if (myFrq == 5) {
        Bot.sendMessage(ads);
      }
    }
    if (myFrq == 5) {
      Bot.sendMessage(ads, { parse_mode: parse_mode });
    }
  },

  validURL: function(url) {
    var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regex.test(url);
  },

  shortLink: function(url) {
    if (this.validURL(url)) {
      HTTP.get({
        url: "http://tinyurl.com/api-create.php?url=" + message,
        success: this.libPrefix + "onLoading "
      });
    } else {
      throw new Error("UhToolz Lib on short link - Wrong URL\nExample : https://bots.business");
    }
  },

  onLoading: function() {
    return content;
  },

  init: function() {
    on(this.libPrefix + "onLoading", this.onLoading);

    publish({
      restrict: this.restrict,
      unrestrict: this.unrestrict,
      inspect: this.inspect,
      createCommand: this.createCommand,
      maintainence: this.maintainence,
      promote: this.promote,
      filter: this.filter,
      transfer: this.transfer,
      clone: this.clone,
      verifyMinAndMax: this.verifyMinAndMax,
      rndFloat: this.rndFloat,
      rndInt: this.rndInt,
      sendAds: this.sendAds,
      validURL: this.validURL,
      shortLink: this.shortLink
    });
  }
};

UHToolzLib.init();
