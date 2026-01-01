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
exports.Control = exports.ImplementationStatus = exports.ControlCategory = void 0;
const typeorm_1 = require("typeorm");
var ControlCategory;
(function (ControlCategory) {
    ControlCategory["ORGANIZATIONAL"] = "organizational";
    ControlCategory["PEOPLE"] = "people";
    ControlCategory["PHYSICAL"] = "physical";
    ControlCategory["TECHNOLOGICAL"] = "technological";
})(ControlCategory || (exports.ControlCategory = ControlCategory = {}));
var ImplementationStatus;
(function (ImplementationStatus) {
    ImplementationStatus["NOT_STARTED"] = "not_started";
    ImplementationStatus["IN_PROGRESS"] = "in_progress";
    ImplementationStatus["IMPLEMENTED"] = "implemented";
    ImplementationStatus["NOT_APPLICABLE"] = "not_applicable";
})(ImplementationStatus || (exports.ImplementationStatus = ImplementationStatus = {}));
let Control = class Control {
    id;
    code;
    name;
    description;
    category;
    status;
    implementationNotes;
    implementationPercentage;
    relatedControls;
    responsibleUserId;
    createdAt;
    updatedAt;
};
exports.Control = Control;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Control.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Control.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Control.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Control.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: ControlCategory,
    }),
    __metadata("design:type", String)
], Control.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-enum',
        enum: ImplementationStatus,
        default: ImplementationStatus.NOT_STARTED,
    }),
    __metadata("design:type", String)
], Control.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Control.prototype, "implementationNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Control.prototype, "implementationPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Control.prototype, "relatedControls", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Control.prototype, "responsibleUserId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Control.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Control.prototype, "updatedAt", void 0);
exports.Control = Control = __decorate([
    (0, typeorm_1.Entity)('controls')
], Control);
//# sourceMappingURL=control.entity.js.map