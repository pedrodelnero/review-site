export const mockReview = {
  data: {
    id: '1',
    content: 'content 1',
    author: 'author 1',
  },
};

export const mockAddReview = {
  data: {
    content: 'content 2',
    author: 'author 2',
  },
};

export const mockDeleteReview = {
  product: {
    id: '2',
    reviews: [
      { id: 1, content: 'content 1' },
      { id: 2, content: 'content 2' },
    ],
  },
};
// export const mockDeleteReview = [
//   {
//     data: {
//       id: '1',
//       content: 'content 1',
//       author: 'author 1',
//     },
//     data: {
//       id: '2',
//       content: 'content 2',
//       author: 'author 2',
//     },
//   },
// ];
