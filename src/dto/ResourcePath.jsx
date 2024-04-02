
export const PROJECT ='/medical-center'
export const ResourcePath =  {

    // routes
    HOME: `${PROJECT}/`,
    LOGIN: `${PROJECT}/login`,
    REGISTER: `${PROJECT}/register`,
    PROFILE: `${PROJECT}/profile`,
    USERS: `${PROJECT}/users`,
    USER_AVAILABLE_APPOINTMENTS: `${PROJECT}/available-appointments`,
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
    OUR_USERS: '/users',
    USER_PATIENTS: '/user/patients',
    USER_PROFILE: '/user/profile',
    USER_UPDATE: '/user/update',
    USER_DELETE: '/user/delete/',
    USER_CREATE: '/user/create',

    // Appointment
    APPOINTMENTS: '/appointment',
    AVAILABLE_APPOINTMENTS: '/appointment/available',
    APPOINTMENT_CREATE: '/appointment/create',
    APPOINTMENT_UPDATE: '/appointment/update',
    APPOINTMENT_DELETE: '/appointment/delete',

    // Resource
    MAIN_BANNER_DESKTOP: 'https://avionic-design.de/assets/images/7/Medical_Header-1efb6809.jpg',
    MAIN_BANNER_MOBILE: 'https://timesofindia.indiatimes.com/photo/108759573/108759573.jpg',

    // Developer
    DEVELOPER: 'Sasa',
    GITHUB: 'https://github.com/sasankaweera123',


}