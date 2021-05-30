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
    email: 'karan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Abhisek Das',
    email: 'abhisek@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
