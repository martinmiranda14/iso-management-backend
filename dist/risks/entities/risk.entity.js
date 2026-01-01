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
exports.Risk = exports.RiskImpact = exports.RiskLikelihood = exports.RiskStatus = void 0;
const typeorm_1 = require("typeorm");
var RiskStatus;
(function (RiskStatus) {
    RiskStatus["IDENTIFIED"] = "identified";
    RiskStatus["ASSESSED"] = "assessed";
    RiskStatus["TREATED"] = "treated";
    RiskStatus["ACCEPTED"] = "accepted";
    RiskStatus["CLOSED"] = "closed";
})(RiskStatus || (exports.RiskStatus = RiskStatus = {}));
var RiskLikelihood;
(function (RiskLikelihood) {
    RiskLikelihood[RiskLikelihood["VERY_LOW"] = 1] = "VERY_LOW";
    RiskLikelihood[RiskLikelihood["LOW"] = 2] = "LOW";
    RiskLikelihood[RiskLikelihood["MEDIUM"] = 3] = "MEDIUM";
    RiskLikelihood[RiskLikelihood["HIGH"] = 4] = "HIGH";
    RiskLikelihood[RiskLikelihood["VERY_HIGH"] = 5] = "VERY_HIGH";
})(RiskLikelihood || (exports.RiskLikelihood = RiskLikelihood = {}));
var RiskImpact;
(function (RiskImpact) {
    RiskImpact[RiskImpact["VERY_LOW"] = 1] = "VERY_LOW";
    RiskImpact[RiskImpact["LOW"] = 2] = "LOW";
    RiskImpact[RiskImpact["MEDIUM"] = 3] = "MEDIUM";
    RiskImpact[RiskImpact["HIGH"] = 4] = "HIGH";
    RiskImpact[RiskImpact["VERY_HIGH"] = 5] = "VERY_HIGH";
})(RiskImpact || (exports.RiskImpact = RiskImpact = {}));
let Risk = class Risk {
    id;
    title;
    description;
    status;
    assetId;
    threatSources;
    vulnerabilities;
    likelihood;
    impact;
    riskScore;
    riskLevel;
    residualLikelihood;
    residualImpact;
    residualRiskScore;
    relatedControlIds;
    ownerId;
    createdAt;
    updatedAt;
};
exports.Risk = Risk;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Risk.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Risk.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: RiskStatus,
        default: RiskStatus.IDENTIFIED,
    }),
    __metadata("design:type", String)
], Risk.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "assetId", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Risk.prototype, "threatSources", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Risk.prototype, "vulnerabilities", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: RiskLikelihood.MEDIUM,
    }),
    __metadata("design:type", Number)
], Risk.prototype, "likelihood", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: RiskImpact.MEDIUM,
    }),
    __metadata("design:type", Number)
], Risk.prototype, "impact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "riskScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "riskLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
    }),
    __metadata("design:type", Number)
], Risk.prototype, "residualLikelihood", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
    }),
    __metadata("design:type", Number)
], Risk.prototype, "residualImpact", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "residualRiskScore", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Risk.prototype, "relatedControlIds", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Risk.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Risk.prototype, "updatedAt", void 0);
exports.Risk = Risk = __decorate([
    (0, typeorm_1.Entity)('risks')
], Risk);
//# sourceMappingURL=risk.entity.js.map