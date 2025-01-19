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
exports.ConversationParticipant = exports.Role = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Conversation_1 = require("./Conversation");
const User_1 = require("./User");
var Role;
(function (Role) {
    Role["MEMBER"] = "MEMBER";
    Role["ADMIN"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
let ConversationParticipant = class ConversationParticipant extends Base_1.Base {
};
exports.ConversationParticipant = ConversationParticipant;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ConversationParticipant.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], ConversationParticipant.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ConversationParticipant.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Role, default: Role.MEMBER }),
    __metadata("design:type", String)
], ConversationParticipant.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Conversation_1.Conversation, (conversation) => conversation.conversationParticipants),
    (0, typeorm_1.JoinColumn)({ name: 'conversationId', referencedColumnName: 'id' }),
    __metadata("design:type", Conversation_1.Conversation)
], ConversationParticipant.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.conversationParticipant),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], ConversationParticipant.prototype, "user", void 0);
exports.ConversationParticipant = ConversationParticipant = __decorate([
    (0, typeorm_1.Entity)({ name: 'conversation_participants' }),
    (0, typeorm_1.Unique)(['userId', 'conversationId'])
], ConversationParticipant);
