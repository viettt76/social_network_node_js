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
exports.User = exports.Role = exports.Gender = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const ConversationParticipant_1 = require("./ConversationParticipant");
const Comment_1 = require("./Comment");
const ConversationHistory_1 = require("./ConversationHistory");
const EmotionComment_1 = require("./EmotionComment");
const EmotionMessage_1 = require("./EmotionMessage");
const EmotionPost_1 = require("./EmotionPost");
const FriendRequest_1 = require("./FriendRequest");
const Message_1 = require("./Message");
const Notification_1 = require("./Notification");
const Post_1 = require("./Post");
const Relationship_1 = require("./Relationship");
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
let User = class User extends Base_1.Base {
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Gender }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "homeTown", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "workplace", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isPrivate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Role, default: Role.USER }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_1.Comment, (comment) => comment.commentator, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ConversationHistory_1.ConversationHistory, (conversationHistory) => conversationHistory.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "conversationHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ConversationParticipant_1.ConversationParticipant, (conversationParticipant) => conversationParticipant.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "conversationParticipant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionComment_1.EmotionComment, (emotionComment) => emotionComment.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "emotionComments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionMessage_1.EmotionMessage, (emotionMessage) => emotionMessage.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "emotionMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionPost_1.EmotionPost, (emotionPost) => emotionPost.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "emotionPosts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FriendRequest_1.FriendRequest, (friendRequest) => friendRequest.sender, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "friendRequestAsSender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FriendRequest_1.FriendRequest, (friendRequest) => friendRequest.receiver, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "friendRequestAsReceiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.sender, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notification_1.Notification, (notification) => notification.user, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Post_1.Post, (post) => post.poster, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Relationship_1.Relationship, (relationship) => relationship.user1, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "relationshipAsUser1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Relationship_1.Relationship, (relationship) => relationship.user2, {
        cascade: ['soft-remove', 'recover', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "relationshipAsUser2", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
