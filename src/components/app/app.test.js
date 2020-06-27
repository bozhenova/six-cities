// import React from 'react';
// import App from './app';
// import renderer from 'react-test-renderer';

// const createMapBlock = () => {
//   const div = global.document.createElement(`div`);
//   div.setAttribute(`id`, `map`);
//   global.document.body.appendChild(div);
// };

// describe('Main page', () => {
//   const props = {
//     offers: [
//       {
//         title: '',
//         previewPhoto: '',
//         isPremium: true,
//         isFavorite: true,
//         price: 116,
//         type: '',
//         rating: 80
//       },
//       {
//         title: '',
//         previewPhoto: '',
//         isPremium: true,
//         isFavorite: false,
//         price: 136,
//         type: '',
//         rating: 88
//       }
//     ]
//   };

//   it('should render a main page', () => {
//     createMapBlock();
//     const tree = renderer.create(<App {...props} />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
