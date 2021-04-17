"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../package.json");
const Util_1 = __importDefault(require("./Classes/Util"));
const Minigames_1 = __importDefault(require("./Classes/Minigames"));
class DiscordMultipurpose {
}
exports.default = DiscordMultipurpose;
DiscordMultipurpose.version = package_json_1.version;
DiscordMultipurpose.Util = Util_1.default;
DiscordMultipurpose.MiniGames = Minigames_1.default;
;
//# sourceMappingURL=Index.js.map