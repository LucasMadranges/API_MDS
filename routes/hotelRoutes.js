const {
    hotelInfo,
    hotelRooms,
    hotelRoom,
    hotelResa,
    clientRemoveResa
} = require("../controllers/hotelController");
const express = require("express");
const router = express.Router();

// Routes clients
router.get("/hotel/info", hotelInfo);
router.get("/hotel/rooms", hotelRooms);
router.get("/hotel/rooms/:id", hotelRoom);

router.post("/reservation/room/:id", hotelResa);

router.delete("/annuler/room/:id", clientRemoveResa)