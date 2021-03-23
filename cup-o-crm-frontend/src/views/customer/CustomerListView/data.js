import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Pennsylvania',
      city: 'Mt. Carmel',
      street: '11 S Oak St'
    },
    avatarUrl: 'https://catinollc.com/wp-content/uploads/2020/12/cropped-Catino-Vino-Logo-Mock-2-155x139.png',
    createdAt: 1555016400000,
    email: 'info@catinovino.com',
    name: 'Catino',
    phone: '570-898-3827'
  },
];
