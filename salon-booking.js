export default function SalonBooking(db) {




    async function findAllTreatments(){

        const allTreatments = db.many('Select * from treatment;')
        return allTreatments;
    }
    async function findClient(number){
        const findByNumber = db.oneOrNone('Select * from client where phone_number = $1;',number);
        return findByNumber;
    }


    return {
        findAllTreatments,
        findClient
    }
}  