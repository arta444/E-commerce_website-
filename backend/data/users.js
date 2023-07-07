import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'user1@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'user3@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]

export default users;