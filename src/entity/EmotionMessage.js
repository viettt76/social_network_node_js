"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotionMessage = exports.EmotionType = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
const Message_1 = require("./Message");
var EmotionType;
(function (EmotionType) {
    EmotionType["LIKE"] = "LIKE";
    EmotionType["LOVE"] = "LOVE";
    EmotionType["LOVE_LOVE"] = "LOVE_LOVE";
    EmotionType["HAHA"] = "HAHA";
    EmotionType["WOW"] = "WOW";
    EmotionType["SAD"] = "SAD";
    EmotionType["ANGRY"] = "ANGRY";
})(EmotionType || (exports.EmotionType = EmotionType = {}));
let EmotionMessage = class EmotionMessage extends Base_1.Base {
};
exports.EmotionMessage = EmotionMessage;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], EmotionMessage.prototype, "messageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], EmotionMessage.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EmotionType }),
    __metadata("design:type", String)
], EmotionMessage.prototype, "emotionType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.emotionMessages),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], EmotionMessage.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Message_1.Message, (message) => message.emotions),
    (0, typeorm_1.JoinColumn)({ name: 'messageId', referencedColumnName: 'id' }),
    __metadata("design:type", Message_1.Message)
], EmotionMessage.prototype, "message", void 0);
exports.EmotionMessage = EmotionMessage = __decorate([
    (0, typeorm_1.Entity)({ name: 'emotion_messages' }),
    (0, typeorm_1.Unique)(['messageId', 'userId'])
], EmotionMessage);
