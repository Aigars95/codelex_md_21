const buttonData = [
  {
    name: 'all',
    clickHundler: () => {
      alert('Filter: All');
    },
  },
  {
    name: 'cakes',
    clickHundler: () => {
      alert('Filter: Cakes');
    },
  },
  {
    name: 'cupcakes',
    clickHundler: () => {
      alert('Filter: Cupcakes');
    },
  },
  {
    name: 'sweets',
    clickHundler: () => {
      alert('Filter: Sweets');
    },
  },
  {
    name: 'doughnuts',
    clickHundler: () => {
      alert('Filter: Doughnuts');
    },
  },
];

export default buttonData;
