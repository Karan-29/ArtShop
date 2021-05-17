import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Karan Udayan Das',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Abhisek Das',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
