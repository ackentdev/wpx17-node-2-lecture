const express = require('express');
const app = express();
app.use(express.json());

const { getAllUsers, deleteUser, getById, addUser, editSchool, getAllStarWars } = require('./controller/usersCtrl')



app.get('/api/users', getAllUsers)
app.get('/api/user', getById)
app.get('/api/swapi', getAllStarWars)

app.post('/api/add_user', addUser)

app.put('/api/edit_school/:id', editSchool )

app.delete('/api/users/:id', deleteUser)

const port = 4000;
app.listen(port, () => console.log(`Hey! Listen! on 🌠${port}🌠`))