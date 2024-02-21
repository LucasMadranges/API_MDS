const dataClient = require("../data/clients.json");

async function userList(req, res) {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                dataClient,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function foundUser(req, res) {
    const id = req.params.id;
    const client = dataClient.clients[id - 1]

    try {
        res.status(200).json({
            status: 'success',
            data: {
                client,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data sent: ${error}`
        })
    }
}

async function createUser(req, res) {
    const id = req.params.id;
    const client = dataClient.clients[id - 1]

    try {
        res.status(201).json({
            status: 'success',
            data: {
                message: "Un nouveau client vient d'être créé",
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data create: ${error}`
        })
    }
}

async function resaChamber(req, res) {
    const id = req.params.id;
    const client = dataClient.clients[id - 1]

    try {
        res.status(201).json({
            status: 'success',
            data: {
                message: `La chambre pour le client (${id}) vient d'être réservé`,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data create: ${error}`
        })
    }
}


async function updateUser(req, res) {
    const id = req.params.id;
    const client = dataClient.clients[id - 1]

    try {
        res.status(202).json({
            status: 'success',
            data: {
                message: `Le client (${id}) vient d'être modifié`,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data create: ${error}`
        })
    }
}

async function deleteResa(req, res) {
    const id = req.params.id;
    const client = dataClient.clients[id - 1]

    try {
        res.status(203).json({
            status: 'success',
            data: {
                message: `La réservation pour le client (${id}) vient d'être supprimé`,
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid data create: ${error}`
        })
    }
}


module.exports = {
    userList,
    foundUser,
    createUser,
    resaChamber,
    updateUser,
    deleteResa
}