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
exports.TreatmentPlan = exports.TreatmentStatus = exports.TreatmentStrategy = void 0;
const typeorm_1 = require("typeorm");
var TreatmentStrategy;
(function (TreatmentStrategy) {
    TreatmentStrategy["MITIGATE"] = "mitigate";
    TreatmentStrategy["TRANSFER"] = "transfer";
    TreatmentStrategy["AVOID"] = "avoid";
    TreatmentStrategy["ACCEPT"] = "accept";
})(TreatmentStrategy || (exports.TreatmentStrategy = TreatmentStrategy = {}));
var TreatmentStatus;
(function (TreatmentStatus) {
    TreatmentStatus["PLANNED"] = "planned";
    TreatmentStatus["IN_PROGRESS"] = "in_progress";
    TreatmentStatus["COMPLETED"] = "completed";
    TreatmentStatus["CANCELLED"] = "cancelled";
})(TreatmentStatus || (exports.TreatmentStatus = TreatmentStatus = {}));
let TreatmentPlan = class TreatmentPlan {
    id;
    riskId;
    title;
    description;
    strategy;
    status;
    controlIds;
    estimatedCost;
    actualCost;
    plannedStartDate;
    plannedEndDate;
    actualStartDate;
    actualEndDate;
    responsibleUserId;
    completionPercentage;
    notes;
    createdAt;
    updatedAt;
};
exports.TreatmentPlan = TreatmentPlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "riskId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: TreatmentStrategy,
    }),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "strategy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: TreatmentStatus,
        default: TreatmentStatus.PLANNED,
    }),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], TreatmentPlan.prototype, "controlIds", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TreatmentPlan.prototype, "estimatedCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], TreatmentPlan.prototype, "actualCost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "plannedStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "plannedEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "actualStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "actualEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "responsibleUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], TreatmentPlan.prototype, "completionPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], TreatmentPlan.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TreatmentPlan.prototype, "updatedAt", void 0);
exports.TreatmentPlan = TreatmentPlan = __decorate([
    (0, typeorm_1.Entity)('treatment_plans')
], TreatmentPlan);
//# sourceMappingURL=treatment-plan.entity.js.map