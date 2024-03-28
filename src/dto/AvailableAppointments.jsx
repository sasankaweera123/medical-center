
const today = new Date();
const todayString = today.toISOString().split('T')[0];
export const AvailableAppointments =  {
    fromDate: todayString,
    toDate: todayString,
    department: "all"
}