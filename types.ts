export enum UserRole {
  ABOGADO = 'ABOGADO',
  SECRETARIO = 'SECRETARIO',
}

export interface User {
  id: string;
  username: string;
  passwordHash: string; // In a real app, this would be a hash
  role: UserRole;
  fullName: string;
  email: string;
  isActive: boolean;
  createdAt: string; // ISO Date string
  lastLogin?: string; // ISO Date string
}

export enum ClientStatus {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
}

export interface Client {
  id: string;
  nombreCompleto: string;
  dni: string;
  telefono: string;
  direccion?: string;
  fechaRegistro: string; // ISO Date string
  estado: ClientStatus;
  observaciones?: string;
  procesosIds: string[];
}

export enum ProcessMatter {
  ADMINISTRATIVO = 'ADMINISTRATIVO',
  PENAL = 'PENAL',
  CIVIL = 'CIVIL',
  FAMILIA = 'FAMILIA',
  CONSTITUCIONAL = 'CONSTITUCIONAL',
  LABORAL = 'LABORAL',
  TRIBUTARIO = 'TRIBUTARIO',
  OTROS = 'OTROS',
}

export enum Currency {
  PEN = 'PEN',
  USD = 'USD',
}

export interface Process {
  id: string;
  clienteId: string;
  numeroExpediente: string;
  numeroCaso: string; // MP Format
  materia: ProcessMatter;
  materiaOtros?: string;
  costoTotal: number;
  moneda: Currency;
  estadoProceso: string; // Configurable by user, starts with default
  fechaInicio: string; // ISO Date string (YYYY-MM-DD)
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
}

export enum IterEntryType {
  ESCRITO = 'ESCRITO',
  AUDIENCIA = 'AUDIENCIA',
  RESOLUCION = 'RESOLUCION',
  NOTIFICACION = 'NOTIFICACION',
  OTRO = 'OTRO',
}

export interface IterEntry {
  id: string;
  procesoId: string;
  fecha: string; // ISO DateTime string
  tipo: IterEntryType;
  descripcion: string;
  documentoAdjunto?: string; // File path (simulated)
  usuarioId: string; // User ID of who registered
  createdAt: string; // ISO Date string
}

export enum PaymentType {
  CUOTA = 'CUOTA',
  REEMBOLSO = 'REEMBOLSO',
}

export enum PaymentMethod {
  EFECTIVO = 'EFECTIVO',
  TRANSFERENCIA = 'TRANSFERENCIA',
}

export interface Payment {
  id: string;
  procesoId: string;
  fechaPago: string; // ISO Date string (YYYY-MM-DD)
  monto: number;
  tipoPago: PaymentType;
  metodoPago: PaymentMethod;
  numeroOperacion?: string;
  concepto: string;
  usuarioRegistroId: string;
  createdAt: string; // ISO Date string
}

export interface NotificationMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}