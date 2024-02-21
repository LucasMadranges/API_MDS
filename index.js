const express = require('express')
const app = express();
const port = 8000;

const {
    userList,
    foundUser,
    createUser,
    updateUser,
    resaChamber,
    deleteResa
} = require('./controllers/usersControllers')

const {hotelInfo, hotelRooms, hotelRoom, hotelResa, clientRemoveResa} = require('./controllers/hotelController')

app.get("/clients", userList);
app.get('/clients/:id', foundUser);
app.get('/hotel/info', hotelInfo);
app.get('/hotel/rooms', hotelRooms);
app.get('/hotel/rooms/:id', hotelRoom);

app.post('/clients/:id', createUser);
app.post('/reservation/:id', resaChamber);
app.post('/reservation/room/:id', hotelResa);
app.delete("/annuler/room/:id", clientRemoveResa)

app.patch('/clients/:id', updateUser);

app.delete('/reservation/:id', deleteResa);

app.listen(port, () => {
    console.log(`App started, listening to ${port}!`)
});

