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
exports.Post = exports.PostVisibility = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
const Comment_1 = require("./Comment");
const EmotionPost_1 = require("./EmotionPost");
const PictureOfPost_1 = require("./PictureOfPost");
var PostVisibility;
(function (PostVisibility) {
    PostVisibility["FRIEND"] = "FRIEND";
    PostVisibility["PUBLIC"] = "PUBLIC";
    PostVisibility["PRIVATE"] = "PRIVATE";
})(PostVisibility || (exports.PostVisibility = PostVisibility = {}));
let Post = class Post extends Base_1.Base {
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Post.prototype, "posterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PostVisibility, default: PostVisibility.FRIEND }),
    __metadata("design:type", String)
], Post.prototype, "visibilityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "isApproved", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "isInvalid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.posts),
    (0, typeorm_1.JoinColumn)({ name: 'posterId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Post.prototype, "poster", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comment_1.Comment, (comment) => comment.post),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EmotionPost_1.EmotionPost, (emotionPost) => emotionPost.post),
    __metadata("design:type", Array)
], Post.prototype, "emotions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PictureOfPost_1.PictureOfPost, (pictureOfPost) => pictureOfPost.post),
    __metadata("design:type", Array)
], Post.prototype, "pictures", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)({ name: 'posts' })
], Post);
