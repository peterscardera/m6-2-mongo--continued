const router = require('express').Router();
const { getSeats, bookSeats } = require("./handlers")

// Code that is generating the seats.
// ----------------------------------
// const seats = {};
// const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// for (let r = 0; r < row.length; r++) {
//   for (let s = 1; s < 13; s++) {
//     seats[`${row[r]}-${s}`] = {
//       price: 225,
//       isBooked: false,
//     };
//   }
// }
// ----------------------------------

router.get('/api/seat-availability', getSeats)
 






router.put('/api/book-seat', bookSeats)


module.exports = router;





// const { seatId, creditCard, expiration } = req.body;

// if (!creditCard || !expiration) {
//   return res.status(400).json({
//     status: 400,
//     message: 'Please provide credit card information!',
//   });
// }

// return res.status(200).json({
//   status: 200,
//   success: true,
// });
// });