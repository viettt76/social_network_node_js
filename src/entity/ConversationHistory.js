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
exports.ConversationHistory = void 0;
const typeorm_1 = require("typeorm");
const Conversation_1 = require("./Conversation");
const User_1 = require("./User");
const Message_1 = require("./Message");
const Base_1 = require("./Base");
let ConversationHistory = class ConversationHistory extends Base_1.Base {
};
exports.ConversationHistory = ConversationHistory;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ConversationHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ConversationHistory.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ConversationHistory.prototype, "lastMessageId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Conversation_1.Conversation, (conversation) => conversation.id),
    (0, typeorm_1.JoinColumn)({ name: 'conversationId', referencedColumnName: 'id' }),
    __metadata("design:type", Conversation_1.Conversation)
], ConversationHistory.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], ConversationHistory.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Message_1.Message, (message) => message.id),
    (0, typeorm_1.JoinColumn)({ name: 'lastMessageId', referencedColumnName: 'id' }),
    __metadata("design:type", Message_1.Message)
], ConversationHistory.prototype, "lastMessage", void 0);
exports.ConversationHistory = ConversationHistory = __decorate([
    (0, typeorm_1.Entity)('conversation_histories'),
    (0, typeorm_1.Unique)(['userId', 'conversationId', 'lastMessageId'])
], ConversationHistory);
