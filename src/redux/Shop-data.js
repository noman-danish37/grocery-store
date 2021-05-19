const SHOP_DATA = {
  fruits: {
    id: 1,
    title: 'fruits',
    routeName: 'shop',
    items: [
        {
            id: 1,
            name: 'Apple',
            imageUrl: '/pics/apples.jpg',
            price: 100,
            weight: 'per-kg'
          },
          {
            id: 2,
            name: 'Banana',
            imageUrl: '/pics/banana.jpg',
            price: 35,
            weight: 'per-kg'
          },
          {
            id: 3,
            name: 'Mango',
            imageUrl: '/pics/mango.jpg',
            price: 200,
            weight: 'per-kg'
          },
          {
            id: 4,
            name: 'Strawberry',
            imageUrl: '/pics/strawberry.jpg',
            price: 70,
            weight: 'per-kg'
          },
          {
            id: 5,
            name: 'Orange',
            imageUrl: '/pics/orange.jpg',
            price: 40,
            weight: 'per-kg'
          },
          {
            id: 6,
            name: 'Papaya',
            imageUrl: '/pics/papaya.jpg',
            price: 50,
            weight: 'per-kg'
          },
          {
            id: 7,
            name: 'Grapes',
            imageUrl: '/pics/grapes.jpg',
            price: 30,
            weight: 'per-kg'
          },
          {
            id: 8,
            name: 'Watermelon',
            imageUrl: '/pics/watermelon.jpg',
            price: 20,
            weight: 'per-kg'
          }
        ]
      },
    veggies: {
        id: 2,
        title: 'Veggies',
        routeName: 'shop',
        items: [
          {
            id: 9,
            name: 'Spinach',
            imageUrl: '/pics/sp.jpg',
            price: 5,
            weight: 'per-pc'
          },
          {
            id: 10,
            name: 'Corn',
            imageUrl: '/pics/corn.png',
            price: 25,
            weight: 'per-pc'
          },
          {
            id: 11,
            name: 'Cauliflower',
            imageUrl: '/pics/cf.jpg',
            price: 50,
            weight: 'per-pc'
          },
          {
            id: 12,
            name: 'Brocolli',
            imageUrl: '/pics/broc.jpg',
            price: 60,
            weight: 'per-kg'
          }
        ]
      },
    dairy:{
        id: 3,
        title: 'Dairy',
        routeName: 'shop',
        items: [
          {
            id: 13,
            name: 'Milk',
            imageUrl: '/pics/milk.jpg',
            price: 40,
            weight: 'per-lit'  
          },
          {
            id: 14,
            name: 'Curd',
            imageUrl: '/pics/curd.png',
            price: 30,
            weight: 'per-lit'
          },
          {
            id: 15,
            name: 'Cheese-amul',
            imageUrl: '/pics/amul-cheese.png',
            price: 75,
            weight: 'pc'
          },
          {
            id: 16,
            name: 'Ghee-amul',
            imageUrl: '/pics/amul-ghee.jpg',
            price: 100,
            weight: 'per-kg'
          },
        ]
      },
    biscuits:{
        id: 4,
        title: 'Biscuits',
        routeName: 'biscuits',
        items: [
          {
            id: 17,
            name: 'Ferrero-Rocher',
            imageUrl: '/pics/frr.jpg',
            price: 200,
            weight: 'per-pc'
          },
          {
            id: 18,
            name: 'Snickers',
            imageUrl: '/pics/snickers.jpg',
            price: 20,
            weight: 'per-pc'
          },
          {
            id: 19,
            name: 'Parle-g',
            imageUrl: '/pics/parle-g.jpg',
            price: 20,
            weight: 'per-pc'
          },
          {
            id: 20,
            name: 'Cookies',
            imageUrl: '/pics/cookies.jpg',
            price: 80,
            weight: 'per-Pc'
          }
        ]
      },
     electronics: {
        id: 5,
        title: 'Electronics',
        routeName: 'electronics',
        items: [
          {
            id: 21,
            name: 'iPhone-12',
            imageUrl: '/pics/i-12.jpg',
            price: 99999
          },
          {
            id: 22,
            name: 'Samung s-20',
            imageUrl: '/pics/s-20.jpg',
            price: 59999
          },
          {
            id: 23,
            name: 'dell g-3',
            imageUrl: '/pics/d3.jpeg',
            price: 85999
          },
          {
            id: 24,
            name: 'asus-rog',
            imageUrl: '/pics/ar.jpeg',
            price: 83999
          }
        ]
      },
      kitchen:{
        id: 6,
        title: 'Kitchen',
        routeName: 'kitchen',
        items: [
          {
            id: 25,
            name: 'Grill',
            imageUrl: '/pics/grill.webp',
            price: 799
          },
          {
            id: 26,
            name: 'Prestige-induction',
            imageUrl: '/pics/induction.jpg',
            price: 2999
          },
          {
            id: 27,
            name: 'Kettle',
            imageUrl: '/pics/mp-kettle.jpg',
            price: 999
          },
          {
            id: 28,
            name: 'Egg-Boiler',
            imageUrl: '/pics/egg-boiler.jpg',
            price: 599
          }
        ]
      }
};
export default SHOP_DATA;
