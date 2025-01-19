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
exports.Relationship = exports.RelationshipType = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const User_1 = require("./User");
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["FRIEND"] = "FRIEND";
    RelationshipType["LOVE"] = "LOVE";
    RelationshipType["SIBLING"] = "SIBLING";
    RelationshipType["BEST_FRIEND"] = "BEST_FRIEND";
})(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
let Relationship = class Relationship extends Base_1.Base {
};
exports.Relationship = Relationship;
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Relationship.prototype, "user1Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Relationship.prototype, "user2Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: RelationshipType, default: RelationshipType.FRIEND }),
    __metadata("design:type", String)
], Relationship.prototype, "relationshipType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.relationshipAsUser1),
    (0, typeorm_1.JoinColumn)({ name: 'user1Id', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Relationship.prototype, "user1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.relationshipAsUser2),
    (0, typeorm_1.JoinColumn)({ name: 'user2Id', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Relationship.prototype, "user2", void 0);
exports.Relationship = Relationship = __decorate([
    (0, typeorm_1.Entity)({ name: 'relationships' }),
    (0, typeorm_1.Unique)(['user1', 'user2'])
], Relationship);
