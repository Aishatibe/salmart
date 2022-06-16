//an object to return sample products
import bcrpt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Aishat',
      email: 'ibe990@gmail.com',
      password: bcrpt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Kunle',
      email: 'kunledada@gmail.com',
      password: bcrpt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //set ID as _id to make it compatible with mongoDB
      //_id: '1',
      name: 'Igala Wrapper',
      slug: 'igala-wrapper',
      category: 'Traditional Wears',
      image: '/images/igala.jpg',
      price: 120,
      countInStock: 40,
      brand: 'Igala Wears',
      rating: 4.9,
      numReviews: 9,
      description: 'High quality wears worn by the Igala nation',
    },
    {
      // _id: '2',
      name: 'Tiv Wrapper',
      slug: 'Tiv-wrapper',
      category: 'Traditional Wears',
      image: '/images/tiv.jpg',
      price: 90,
      countInStock: 40,
      brand: 'Tiv Wears',
      rating: 4.9,
      numReviews: 11,
      description: 'High quality wears worn by the Tiv nation',
    },
    {
      // _id: '3',
      name: 'Idoma Wrapper',
      slug: 'idoma-wrapper',
      category: 'Traditional Wears',
      image: '/images/idoma.jpg',
      price: 45,
      countInStock: 40,
      brand: 'Idoma Wears',
      rating: 3.9,
      numReviews: 8,
      description: 'High quality wears worn by the Idoma nation',
    },
    {
      // _id: '4',
      name: 'Igede Wrapper',
      slug: 'igede-wrapper',
      category: 'Traditional Wears',
      image: '/images/igede.jpg', //679px x 829px
      price: 150,
      countInStock: 0,
      brand: 'Igede Wears',
      rating: 3.9,
      numReviews: 12,
      description: 'High quality wears worn by the Igede nation',
    },
  ],
};

export default data;
