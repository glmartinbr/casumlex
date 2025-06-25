
export const APP_NAME = "Casumlex V.1";

export const DEFAULT_PROCESS_STATES: string[] = [
  'EN TRÁMITE', 'PENDIENTE DOCUMENTACIÓN', 'AUDIENCIA PROGRAMADA',
  'PENDIENTE RESOLUCIÓN', 'APELACIÓN', 'FINALIZADO FAVORABLE',
  'FINALIZADO DESFAVORABLE', 'ARCHIVADO', 'SUSPENDIDO'
];

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/',
  CLIENTS: '/clients',
  CLIENT_NEW: '/clients/new',
  CLIENT_DETAIL: '/clients/:id', // Needs to be function for ID
  PROCESSES: '/processes',
  PROCESS_NEW: '/processes/new',
  PROCESS_DETAIL: '/processes/:id', // Needs to be function for ID
};

export const UI_COLORS = {
  primary: 'azul-corporativo',
  secondary: 'gris-neutro',
  success: 'verde-exito',
  error: 'rojo-error',
};

export const DNI_REGEX = /^\d{8}$/;
export const PHONE_REGEX = /^9\d{8}$/;
// Simplified RFC 5322 regex for email validation
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// export const EXPEDIENTE_REGEX = /^\d{5}-\d{4}-\d{1,4}-\d{4}-[A-Z]{2}-[A-Z]{2}-\d{2}$/; // Removed
export const MIN_PASSWORD_LENGTH = 8;
