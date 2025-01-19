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
exports.Notification = exports.referenceType = exports.NotificationType = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
var NotificationType;
(function (NotificationType) {
    NotificationType["LIKE"] = "LIKE";
    NotificationType["COMMENT"] = "COMMENT";
    NotificationType["CONVERSATIOIN"] = "CONVERSATIOIN";
    NotificationType["FRIEND_REQUEST"] = "FRIEND_REQUEST";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var referenceType;
(function (referenceType) {
    referenceType["POST"] = "POST";
    referenceType["USER"] = "USER";
    referenceType["CONVERSATIOIN"] = "CONVERSATIOIN";
    referenceType["COMMENT"] = "COMMENT";
})(referenceType || (exports.referenceType = referenceType = {}));
let Notification = class Notification extends Base_1.Base {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Notification.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationType }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Notification.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: referenceType }),
    __metadata("design:type", String)
], Notification.prototype, "referenceType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notification.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isOpenMenu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.notifications),
    (0, typeorm_1.JoinColumn)({ name: 'userId', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Notification.prototype, "user", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)({ name: 'notifications' })
], Notification);
