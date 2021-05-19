const INITIAL_STATE = {
  sections: [
    {
      title: 'fruits',
      imageUrl: 'pics/fruits.jpg',
      id: 1,
      linkUrl: 'shop'
    },
    {
      title: 'veggies',
      imageUrl: 'pics/veggies.jpg',
      id: 2,
      linkUrl: 'shop'
    },
    {
      title: 'dairy',
      imageUrl: 'pics/dairy.jpg',
      id: 3,
      linkUrl: 'shop'
    },
    {
      title: 'biscuits&chocolates',
      imageUrl: 'pics/biscuits.jpg',
      id: 4,
      linkUrl: 'shop'
    },
    {
      title: 'electronics',
      imageUrl: 'pics/electronics.jpg',
      id: 5,
      linkUrl: 'shop'
    },
    {
      title: 'kitchen-appliances',
      imageUrl: 'pics/kitchen.jpg',
      id: 5,
      linkUrl: 'shop'
    },
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;