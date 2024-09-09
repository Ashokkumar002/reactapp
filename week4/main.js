const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {
        "name": "Ashok ",
        "city": "Chennai",
        "mobile": "6374059727",
        "email": "ashok@gmail.com",
        "password": "1234"
    }
];

app.post('/register', (req, res) => {
    const { name, city, mobile, email, password } = req.body;

    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    const newUser = { name, city, mobile, email, password };
    users.push(newUser);

    return res.status(201).json({ message: 'Registration successful', user: newUser });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
});

app.get('/user/filter', (req, res) => {
    const { name, city, mobile, email } = req.query;

    let filteredUsers = users;

    if (name) {
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (city) {
        filteredUsers = filteredUsers.filter(user => user.city.toLowerCase() === city.toLowerCase());
    }
    if (mobile) {
        filteredUsers = filteredUsers.filter(user => user.mobile === mobile);
    }
    if (email) {
        filteredUsers = filteredUsers.filter(user => user.email.toLowerCase() === email.toLowerCase());
    }

    if (filteredUsers.length === 0) {
        return res.status(404).json({ message: 'No users found matching the criteria' });
    }

    return res.status(200).json(filteredUsers);
});


app.listen(8080, () => {
    console.log('server started')
})