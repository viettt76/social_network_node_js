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
exports.Conversation = exports.ConversationType = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const ConversationParticipant_1 = require("./ConversationParticipant");
const Message_1 = require("./Message");
const ConversationHistory_1 = require("./ConversationHistory");
var ConversationType;
(function (ConversationType) {
    ConversationType["PRIVATE"] = "PRIVATE";
    ConversationType["GROUP"] = "GROUP";
})(ConversationType || (exports.ConversationType = ConversationType = {}));
let Conversation = class Conversation extends Base_1.Base {
};
exports.Conversation = Conversation;
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ConversationType }),
    __metadata("design:type", String)
], Conversation.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Conversation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Conversation.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ConversationParticipant_1.ConversationParticipant, (conversationParticipant) => conversationParticipant.conversationId),
    __metadata("design:type", Array)
], Conversation.prototype, "conversationParticipants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.conversationId),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ConversationHistory_1.ConversationHistory, (history) => history.conversation),
    __metadata("design:type", ConversationHistory_1.ConversationHistory)
], Conversation.prototype, "history", void 0);
exports.Conversation = Conversation = __decorate([
    (0, typeorm_1.Entity)({ name: 'conversations' })
], Conversation);
