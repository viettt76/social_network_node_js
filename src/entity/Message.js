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
exports.Message = exports.MessageType = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
const EmotionMessage_1 = require("./EmotionMessage");
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "TEXT";
    MessageType["IMAGE"] = "IMAGE";
    MessageType["FILE"] = "FILE";
    MessageType["VIDEO"] = "VIDEO";
})(MessageType || (exports.MessageType = MessageType = {}));
let Message = class Message extends Base_1.Base {
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Message.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Message.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MessageType,
        default: MessageType.TEXT,
    }),
    __metadata("design:type", String)
], Message.prototype, "messageType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Message.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.message),
    (0, typeorm_1.JoinColumn)({ name: 'senderId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Message.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionMessage_1.EmotionMessage, (emotionMessage) => emotionMessage.message),
    __metadata("design:type", Array)
], Message.prototype, "emotions", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)({ name: 'messages' }),
    (0, typeorm_1.Index)(['conversationId'])
], Message);
