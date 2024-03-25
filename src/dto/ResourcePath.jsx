
export const PROJECT ='/medical-center'
export const ResourcePath =  {

    // routes
    HOME: `${PROJECT}/`,
    LOGIN: `${PROJECT}/login`,
    REGISTER: `${PROJECT}/register`,
    PROFILE: `${PROJECT}/profile`,
    // Error
    ERROR: `${PROJECT}/404`,

    // Admin
    ADMIN: `${PROJECT}/admin`,
    ADMIN_DASHBOARD: `${PROJECT}/admin/dashboard`,
    ADMIN_USERS: `${PROJECT}/admin/users`,

    // Doctor
    DOCTOR: `${PROJECT}/doctor`,
    DOCTOR_DASHBOARD: `${PROJECT}/doctor/dashboard`,
    DOCTOR_APPOINTMENTS: `${PROJECT}/doctor/appointments`,

    // Patient
    PATIENT: `${PROJECT}/patient`,
    PATIENT_DASHBOARD: `${PROJECT}/patient/dashboard`,
    PATIENT_APPOINTMENTS: `${PROJECT}/patient/appointments`,


    // API
    API: 'http://localhost:3001/api/v1',
    // Auth
    AUTH: '/auth',
    AUTH_LOGIN: '/auth/login',
    AUTH_REGISTER: '/auth/register',
    AUTH_LOGOUT: '/auth/logout',

    // User
    USER: '/user',
    USER_PROFILE: '/user/profile',
    USER_UPDATE: '/user/update',
    USER_DELETE: '/user/delete',
    USER_CREATE: '/user/create',

    // Appointment
    APPOINTMENT: '/appointment',
    APPOINTMENT_CREATE: '/appointment/create',
    APPOINTMENT_UPDATE: '/appointment/update',
    APPOINTMENT_DELETE: '/appointment/delete',


}