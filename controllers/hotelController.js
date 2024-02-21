const hotelData = require("../data/hotel.json");

async function hotelInfo(req, res) {
    const hotelName = hotelData.name;
    const hotelLocation = hotelData.location;
    const hotelContact = hotelData.contact;
    const hotelFacilities = hotelData.facilities;

    try {
        res.status(200).json({
            status: 'success',
            data: {
                hotelName,
                hotelLocation,
                hotelContact,
                hotelFacilities
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function hotelRooms(req, res) {
    const hotelRoomsData = hotelData.rooms;

    try {
        res.status(200).json({
            status: 'success',
            data: {
                hotelRoomsData,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function hotelRoom(req, res) {
    const idRooms = req.params.id;
    const hotelRoomData = hotelData.rooms[idRooms - 1];

    try {
        res.status(200).json({
            status: 'success',
            data: {
                hotelRoomData,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function hotelResa(req, res) {
    const idRooms = req.params.id;

    try {
        res.status(200).json({
            status: 'success',
            data: {
                message: `La chambre (${idRooms}) à bien été réservé.`,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function clientRemoveResa(req, res) {
    const idRooms = req.params.id;

    try {
        res.status(200).json({
            status: 'success',
            data: {
                message: `La réservation de la chambre (${idRooms}) à bien été annulé.`,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

module.exports = {
    hotelInfo,
    hotelRooms,
    hotelRoom,
    hotelResa,
    clientRemoveResa
}