export const mockProduct = {
  data: {
    id: 1,
    name: 'name 1',
    description: 'desc 1',
    author: 'author 1',
    reviews: [{ id: 1, author: 'author A', content: 'content A' }],
  },
};

export const mockProducts = {
  data: [
    {
      id: 1,
      name: 'name 1',
      brand: 'brand 1',
      model: 'model 1',
      description: 'desc 1',
      author: 'author 1',
      reviews: [{ id: 1, author: 'author A', content: 'content A' }],
    },
    {
      id: 2,
      name: 'name 2',
      brand: 'brand 2',
      model: 'model 2',
      description: 'desc 2',
      author: 'author 2',
      reviews: [{ id: 8, author: 'author A', content: 'content A' }],
    },
  ],
};

export const mockAddProduct = {
  data: {
    name: 'name 1',
    description: 'desc 1',
    brand: 'brand 1',
    model: 'model 1',
  },
};

export const mockUpdateProduct = {
  data: {
    name: 'name 3',
    description: 'desc 3',
    brand: 'brand 3',
    model: 'model 3',
  },
};
