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
exports.PictureOfPost = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Post_1 = require("./Post");
let PictureOfPost = class PictureOfPost extends Base_1.Base {
};
exports.PictureOfPost = PictureOfPost;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], PictureOfPost.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PictureOfPost.prototype, "pictureUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Post_1.Post, (post) => post.pictures),
    (0, typeorm_1.JoinColumn)({ name: 'postId', referencedColumnName: 'id' }),
    __metadata("design:type", Post_1.Post)
], PictureOfPost.prototype, "post", void 0);
exports.PictureOfPost = PictureOfPost = __decorate([
    (0, typeorm_1.Entity)({ name: 'picture_of_posts' })
], PictureOfPost);
