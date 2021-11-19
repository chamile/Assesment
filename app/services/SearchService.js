export default class SearchService {
  static async search(searchText) {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53eabb28ba1',
        title: 'Cappatino',
        price: 900,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd913aa97f632',
        title: 'decaffeinato',
        price: 800,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53eeabb28ba3',
        title: 'doppio',
        price: 700,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad5d3abb28ba4',
        title: 'ristretto',
        price: 650,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-14557ww1e29d725',
        title: 'lungo',
        price: 580,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-14557wwee1e29d7236',
        title: 'macchiato caldo',
        price: 570,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d7237',
        title: 'freddo',
        price: 560,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d72378',
        title: 'Macchiatone',
        price: 550,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d72387',
        title: 'corretto',
        price: 540,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d72354',
        title: 'Cappuccino',
        price: 530,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d72343',
        title: 'Latte',
        price: 520,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455w7xcdsd1e29d723222',
        title: 'Pedrocchi',
        price: 510,
        imgUrl: 'coffee1.jpeg',
        rating:'4.0',
        ingredients:'coffee,sugar',
        description:
          'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ];
    // API Call goes here
    const __FOUND = DATA.find(function(post, index) {
      if (post.title.toLowerCase() === searchText.toLowerCase()) return true;
    });
    if (__FOUND !== undefined) {
      var result = new Array();
      result.push(__FOUND);
    }

    return Promise.resolve({data: searchText === '' ? DATA : result});
  }
}
