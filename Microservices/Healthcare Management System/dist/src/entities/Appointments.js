var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from './Patient.js';
import { Doctor } from './Doctor.js';
let Appointment = class Appointment {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Appointment.prototype, "appointment_id", void 0);
__decorate([
    ManyToOne(() => Patient),
    __metadata("design:type", Patient)
], Appointment.prototype, "patient", void 0);
__decorate([
    ManyToOne(() => Doctor),
    __metadata("design:type", Doctor)
], Appointment.prototype, "doctor", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Appointment.prototype, "booking_date", void 0);
Appointment = __decorate([
    Entity()
], Appointment);
export { Appointment };
