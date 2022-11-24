export default function SalonBooking(db) {




    async function findAllTreatments(){

        const allTreatments = db.many('Select * from treatment;')
        return allTreatments;
    }
    async function findClient(number){
        const findByNumber = db.oneOrNone('Select * from client where phone_number = $1;',number);
        return findByNumber;
    }
    async function findTreatment(code){
        const treatmentByCode = await db.oneOrNone('Select * from treatment where code = $1;',code)
        return treatmentByCode;
    }
    async function findStylist(number){
        const findByNumber = db.oneOrNone('Select * from stylist where phone_number = $1;',number);
        return findByNumber;
    }

    async function makeBooking(clientId, treatmentId, stylistId, date, time){
        await db.none('Insert into booking (client_id, treatment_id, stylist_id, booking_date, booking_time) values($1, $2, $3, $4, $5)',[clientId,treatmentId,stylistId,date,time])
    }
    async function findClientBookings(clientId){
        const clientBooking = await db.oneOrNone('Select * from booking where client_id = $1;',clientId);
        return clientBooking;
    }


    return {
        findAllTreatments,
        findClient,
        findTreatment,
        findStylist,
        makeBooking,
        findClientBookings
    }
}  