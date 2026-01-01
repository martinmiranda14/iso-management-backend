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
exports.Asset = exports.AssetCriticality = exports.AssetType = void 0;
const typeorm_1 = require("typeorm");
var AssetType;
(function (AssetType) {
    AssetType["HARDWARE"] = "hardware";
    AssetType["SOFTWARE"] = "software";
    AssetType["DATA"] = "data";
    AssetType["SERVICES"] = "services";
    AssetType["PEOPLE"] = "people";
    AssetType["FACILITIES"] = "facilities";
})(AssetType || (exports.AssetType = AssetType = {}));
var AssetCriticality;
(function (AssetCriticality) {
    AssetCriticality["LOW"] = "low";
    AssetCriticality["MEDIUM"] = "medium";
    AssetCriticality["HIGH"] = "high";
    AssetCriticality["CRITICAL"] = "critical";
})(AssetCriticality || (exports.AssetCriticality = AssetCriticality = {}));
let Asset = class Asset {
    id;
    name;
    description;
    type;
    criticality;
    owner;
    location;
    confidentialityLevel;
    integrityLevel;
    availabilityLevel;
    relatedControlIds;
    createdAt;
    updatedAt;
};
exports.Asset = Asset;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Asset.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Asset.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: AssetType,
    }),
    __metadata("design:type", String)
], Asset.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: AssetCriticality,
        default: AssetCriticality.MEDIUM,
    }),
    __metadata("design:type", String)
], Asset.prototype, "criticality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Asset.prototype, "confidentialityLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Asset.prototype, "integrityLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Asset.prototype, "availabilityLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Asset.prototype, "relatedControlIds", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Asset.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Asset.prototype, "updatedAt", void 0);
exports.Asset = Asset = __decorate([
    (0, typeorm_1.Entity)('assets')
], Asset);
//# sourceMappingURL=asset.entity.js.map