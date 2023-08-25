# Utilities-lib
Here's a basic documentation page that explains how to use the library:

---

# Utils Library Documentation

The Utils library is a powerful tool designed to simplify complex JavaScript operations and provide a range of functionalities for your Bots.Business application. This documentation will guide you through the process of using the library's features to enhance your bot's capabilities.

## Getting Started

1. Make sure you have a Bots.Business account set up.
2. Import the `Utils` library into your bot's libs.

## Basic Functions Overview

### `Utils.banUser(tgUserId)`

Ban a user from your bot.

- `tgUserId`: Telegram User ID to be banned.
- Calling Method: `Lib.Utils.banUser(tgUserId)`

### `Utils.unbanUser(tgUserId)`

Unban a user previously banned by the bot.

- `tgUserId`: Telegram User ID to be unbanned.
- Calling Method: `Lib.Utils.unbanUser(tgUserId)`

### `Utils.inspectUser()`

Inspect users to manage access and permissions.

- Calling Method: `Lib.Utils.inspectUser()`

### `BotEnhance.createCustomCommand(commandName, jsCode)`

Create a custom command with associated JavaScript code.

- `commandName`: Name of the custom command.
- `jsCode`: JavaScript code to be associated with the custom command.
- Calling Method: `Lib.Utils.createCustomCommand(commandName, jsCode)`

... There are many more functions!
## How to Use

1. Import the library using `Lib.Utils`.
2. Call the desired method by chaining it to the library name and method name. For example, to ban a user, use `Lib.Utils.banUser(tgUserId)`.
3. Provide the necessary parameters to the method as described in the function overview.

## Examples

### Ban a User

```javascript
Lib.Utils.banUser(123456789);
```

### Create a Custom Command

```javascript
var customJsCode = "Bot.sendMessage('This is a custom command!')";
Lib.Utils.createCustomCommand("custom", customJsCode);
```

## Contributing

Found a bug or have an idea for improvement? Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Untoldhacker-Dev/utilitieslib/tree/main).

---
