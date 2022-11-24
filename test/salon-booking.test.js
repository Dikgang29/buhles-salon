import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://salon_admin:salon123@localhost:5432/salon_test";

const config = { 
	connectionString : DATABASE_URL
}

const pgp = pgPromise();
const db = pgp(config);

let booking = SalonBooking(db);

describe("The Booking Salon", function () {

    beforeEach(async function () {

        // await db.none(`delete from booking`);
        // await db.none('TRUNCATE TABLE treatment RESTART IDENTITY CASCADE;');

    });

    it("should be able to list treatments", async function () {

        const treatments = await booking.findAllTreatments();
        assert.deepEqual([{id:1, treatment_type:'Pedicure',code: 'pedi', price:175 },
        {id:2, treatment_type:'Manicure',code: 'mani', price:215 },
        {id:3, treatment_type:'Make up',code: 'make', price:185 },
        {id:4, treatment_type:'Brows & Lashes',code: 'b&l', price:240 }
        ], treatments);
    });


     it("should be able to find a client details using a phone number", async function () {

        const client = await booking.findClient('0797891005');
        assert.deepEqual({id:7, first_name:"Nare" ,last_name:'Moloto',phone_number:'0797891005'}, client);
    });

    // it("should be able to find a stylist", async function () {

    //     const stylist = await booking.findStylist("***");
    //     assert.equal('', stylist);
    // });



    // it("should be able to allow a client to make a booking", async function () {
    //     const client = await booking.findClient("***");

    //     const booking = await booking.makeBooking(treatmentId, client.id, date, time);

    //     const bookings = await booking.findClientBookings(client.id);
    //     assert.equal([], bookings);
    // });



    // it("should be able to get client booking(s)", async function () {

    //     const client1 = await booking.findClient("***");
    //     const client2 = await booking.findClient("***");
        
    //     const treatment1 = await booking.findTreatment("***");
    //     const treatment2 = await booking.findTreatment("***");

    //     await booking.booking(treatment1.id, client1.id, date, time);
    //     await booking.booking(treatment2.id, client1.id, date, time);
    //     await booking.booking(treatment1.id, client2.id, date, time);

    //     const bookings = await booking.findAllBookings(client);

    //     assert.equal([], clientBooking)
    // })



    // it("should be able to get bookings for a date", async function () {
    //     const client1 = await booking.findClient("***");
    //     const client2 = await booking.findClient("***");

    //     const treatment1 = await booking.findTreatment("***");
    //     const treatment2 = await booking.findTreatment("***");

    //     await booking.booking(treatment1.id, client1.id, date, time);
    //     await booking.booking(treatment2.id, client1.id, date, time);
    //     await booking.booking(treatment3.id, client2.id, date, time);

    //     const bookings = await booking.findAllBookings({date, time});

    //     assert.equal([], bookings);

    // });

    // it("should be able to find the total income for a day", function() {
    //     assert.equal(1, 2);
    // })

    // it("should be able to find the most valuable client", function() {
    //     assert.equal(1, 2);
    // })
    // it("should be able to find the total commission for a given stylist", function() {
    //     assert.equal(1, 2);
    // })

    after(function () {
        db.$pool.end()
    });

});