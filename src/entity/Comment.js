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
exports.Comment = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
const EmotionComment_1 = require("./EmotionComment");
const Post_1 = require("./Post");
let Comment = class Comment extends Base_1.Base {
};
exports.Comment = Comment;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Comment.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Comment.prototype, "commentatorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "parentCommentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "picture", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.comments, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'commentatorId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Comment.prototype, "commentator", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Comment, (comment) => comment.replies, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parentCommentId', referencedColumnName: 'id' }),
    __metadata("design:type", Comment)
], Comment.prototype, "parentComment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment, (comment) => comment.parentComment, {
        cascade: ['soft-remove', 'remove', 'recover'],
    }),
    __metadata("design:type", Array)
], Comment.prototype, "replies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionComment_1.EmotionComment, (emotionComment) => emotionComment.comment, {
        cascade: ['soft-remove', 'remove', 'recover'],
    }),
    __metadata("design:type", Array)
], Comment.prototype, "emotions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Post_1.Post, (Post) => Post.comments, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Post_1.Post)
], Comment.prototype, "post", void 0);
exports.Comment = Comment = __decorate([
    (0, typeorm_1.Entity)({ name: 'comments' }),
    (0, typeorm_1.Index)(['postId']),
    (0, typeorm_1.Index)(['postId', 'createdAt'])
], Comment);
