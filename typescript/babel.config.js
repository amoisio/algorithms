// ES6
// babel.config.js
// export const presets = [
//   [
//     '@babel/preset-env',
//     {
//       targets: {
//         node: 'current',
//       },
//     },
//   ], 
//   '@babel/preset-typescript'
// ];

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript'
  ]
};

// commonJS
// // babel.config.js
// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           node: 'current',
//         },
//       },
//     ],
//   ],
// };