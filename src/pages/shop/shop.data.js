const SHOP_DATA = [
  {
    id: 1,
    title: 'Dresses',
    routeName: 'dresses',
    items: [
      {
        id: 1,
        name: 'Ruffled Sleeves Sheath Dress',
        brand: 'DODO & MOA',
        imageUrl: 'https://i.postimg.cc/W4XS2F00/8903efd0-496f-407b-8fbf-82439d479ddc1618405437931-SWEETDREAMSGREENPRINTEDNIGHTDRESSNightdress-DREAMSSW.jpg',
        price: '2871'
      },
      {
        id: 2,
        name: 'Satin Finish A-Line Dress',
        brand: 'Ritu Kumar',
        imageUrl: 'https://i.postimg.cc/MTYYscpn/ebcd8e60-50df-425a-a680-f3ab790431ba1615378375612-Ritu-Kumar-Women-Green-Solid-Satin-Finish-A-Line-D.jpg',
        price: '6500'
      },
      {
        id: 3,
        name: 'Cotton Shift Dress with Belt',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/g2w6ww9v/4e589eb8-a768-4cc7-b5da-0399d0b773201611048378809-MANGO-Women-Navy-Blue-Solid-Pleated-Cotton-Shift-D.jpg',
        price: '4444'
      },
      {
        id: 4,
        name: 'Printed A-Line Dress',
        brand: 'JC Collection',
        imageUrl: 'https://i.postimg.cc/5y3kF7Ck/ce7f872b-c191-4659-98ba-bbce60cb70c41580474120301-Multicoloured-Printed-Shift-Dress-2081580474118259.jpg',
        price: '7090'
      },
      {
        id: 5,
        name: 'Floral Printed Maxi Dress',
        brand: 'Forever New',
        imageUrl: 'https://i.postimg.cc/RCydVJDz/e74067f8-3f62-45f1-a7bc-105e4b8f5ab51611724965262-1.jpg',
        price: '5760'
      },
      {
        id: 6,
        name: 'Colorblocked Maxi Dress',
        brand: 'DODO & MOA',
        imageUrl: 'https://i.postimg.cc/RVJPcLHF/1e506c19-83d2-49ef-a74f-070e2a0d70d51615954704024-1.jpg',
        price: '4499'
      },
      {
        id: 7,
        name: 'Floral Printed Maxi Dress',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/VsCGtFMN/079ff401-d78e-4a7f-a277-97ed9ec85ad71610946951864-MANGO-Women-Burgundy-Off-White-Floral-Printed-Max.jpg',
        price: '6472'
      },
      {
        id: 8,
        name: 'Checked Wrap Dress',
        brand: 'Texco',
        imageUrl: 'https://i.postimg.cc/9fBVchmv/1434a561-3810-47e9-91fc-e0a2c9c9f0251618657202158-1.jpg',
        price: '4199'
      },
      {
        id: 9,
        name: 'Tencel A-Line Midi Dress',
        brand: 'RAREISM',
        imageUrl: 'https://i.postimg.cc/vBcQhKyk/6c431e2c-6289-4ecd-aecb-daca607c89641626276362539-RAREISMBlue-A-Line-Maxi-Dress1.jpg',
        price: '3999'
      },
      {
        id: 10,
        name: 'Made to Measure Maxi Dress',
        brand: 'EthnoVogue',
        imageUrl: 'https://i.postimg.cc/LXTzknHN/9122820a-e543-468a-957b-dc11f6c956fe1581491553299-Bollywood-Vogue-Made-To-Measure-Teal-Green-N-White.jpg',
        price: '5774'
      },
      {
        id: 11,
        name: 'Off-Shoulder A-Line Dress',
        brand: 'Vero Moda',
        imageUrl: 'https://i.postimg.cc/YC6jLT2x/f67ba745-0f81-40f2-8a91-6d54838507c21618980323051-Vero-Moda-Women-Dresses-4291618980322182-1.jpg',
        price: '3599'
      },
      {
        id: 12,
        name: 'Solid Donna Denim Shirt Dress',
        brand: 'Forever New',
        imageUrl: 'https://i.postimg.cc/Kc1P3c6r/f69b4ab9-602a-4971-8ca9-2b19f7e4feb11615378449181-1.jpg',
        price: '5584'
      },
      {
        id: 13,
        name: 'Floral Flared Belted Dress',
        brand: 'Tokyo Talkies',
        imageUrl: 'https://i.postimg.cc/HsnCS2nC/7584b116-2a2c-4fb1-881c-af58cc484b181532944603854-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-47915.jpg',
        price: '1899'
      },
      {
        id: 15,
        name: 'Floral Empire Dress',
        brand: 'TERQUOIS',
        imageUrl: 'https://i.postimg.cc/SKydrZQ6/e48cf4ef-a562-46fd-937f-edcfb82ff12a1580104205123-SASSAFRAS-Women-Blue-Printed-A-Line-Dress-54315801.jpg',
        price: '2845'
      },
      {
        id: 16,
        name: 'Satin Finish A-Line Midi Dress',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/zD0yb04m/bdc26dd0-f99a-4240-aeba-9c8c8d4774ad1621832448522-MANGOWomen-White-Solid-Organic-Cotton-Boxy-Apron-Top-Tops-MA.jpg',
        price: '4872'
      },
      {
        id: 17,
        name: 'Floral Print Two Piece Dress',
        brand: 'Berrylush',
        imageUrl: 'https://i.postimg.cc/PqJj7Q2D/91e2708f-3b54-46b4-996b-244cb08c12331596752102127-1.jpg',
        price: '1984'
      },
      {
        id: 18,
        name: 'Solid Wrap Dress',
        brand: 'Mesmerize',
        imageUrl: 'https://i.postimg.cc/FRJxs19R/c789e84d-e329-46ee-a049-a69ff5d861bf1608035079188-1.jpg',
        price: '949'
      },
      {
        id: 19,
        name: 'Healter Neck Crepe Maxi Dress',
        brand: 'Berrylush',
        imageUrl: 'https://i.postimg.cc/nrrpD8PC/bb7f5d68-50d9-4c40-a4cb-c5f8243f01771620968531350-1.jpg',
        price: '3999'
      },
      {
        id: 20,
        name: 'Crepe Maxi Dress',
        brand: 'Berrylush',
        imageUrl: 'https://i.postimg.cc/xqDhTKv6/154d1dd5-9fd3-4439-bf83-67d526b2767a1621268868747-1.jpg',
        price: '1899'
      }
    ]
  },
  {
    id: 2,
    title: 'Winter Wear',
    routeName: 'winterwear_collection',
    items: [
      {
        id: 1,
        name: 'Checked Fuzzy Sweater',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/Hsk6gzvQ/a300e8f5-bfd5-4156-a48c-ffac7976e18c1571293806556-MANGO-Women-Sweaters-9681571293804892-1.jpg',
        price: '6990'
      },
      {
        id: 2,
        name: 'Printed Sweatshirt',
        brand: 'Canterbury',
        imageUrl: 'https://i.postimg.cc/XvqG82LY/0d6bdab6-ca93-4696-bbd7-4496e130b0a71541075625111-Uglies-Canterbury-oh-Hoody-1851541075625015-1.jpg',
        price: '2499'
      },
      {
        id: 3,
        name: 'Embroidered Sweatshirt',
        brand: 'H&M',
        imageUrl: 'https://i.postimg.cc/jdztpz2Q/53e5dbaa-05fb-4454-879a-9deb38df4be11537002950470-na-9971537002950237-1.jpg',
        price: '1599'
      },
      {
        id: 4,
        name: 'Solid Sweatshirt',
        brand: 'ether',
        imageUrl: 'https://i.postimg.cc/BvdqWNTp/11477395163452-ether-Women-Sweatshirts-2991477395163113-1.jpg',
        price: '1499'
      },
      {
        id: 5,
        name: 'Printed Sweatshirt',
        brand: 'Harvard',
        imageUrl: 'https://i.postimg.cc/wjMH7nFF/b68b6b55-5f3f-44c2-b562-72c1c7f817381573187375991-Harvard-Women-Sweatshirts-2351573187374081-1.jpg',
        price: '2399'
      },
      {
        id: 6,
        name: 'Hooded Sweatshirt',
        brand: 'Roadster',
        imageUrl: 'https://i.postimg.cc/sgk8sLLM/1c9fb8fc-80f2-4657-a25f-8e37237c2a201613026789044-Roadster-Women-Sweatshirts-5321613026787107-1.jpg',
        price: '1524'
      },
      {
        id: 7,
        name: 'Colorblocked Sweatshirt',
        brand: 'DOLCE CRUDO',
        imageUrl: 'https://i.postimg.cc/8CCqyvxH/37780ab6-780a-462d-a765-c19cba50cd451576140034221-DOLCE-CRUDO-Women-Navy-Blue-Red-Colourblocked-Swe.jpg',
        price: '1799'
      },
      {
        id: 8,
        name: 'Solid Sweatshirt',
        brand: 'Allen Solly',
        imageUrl: 'https://i.postimg.cc/HkbgQHmb/0e0a3dbc-4693-4cc1-8126-9fa3bc2b698e1574058986799-1.jpg',
        price: '2048'
      },
      {
        id: 9,
        name: 'Embroidered Sweatshirt',
        brand: 'Dorothy Perkins',
        imageUrl: 'https://i.postimg.cc/SsFVcFyY/0b658837-20b4-4c3b-8086-35432cabbb381618927406679-Tops-DOROTHYPERKINSWomen-Dresses-DOROTHYPERKINSWomen-Ja.jpg',
        price: '3245'
      },
      {
        id: 10,
        name: 'Colorblocked Sweatshirt',
        brand: 'Beverly Blues',
        imageUrl: 'https://i.postimg.cc/PJfWMd0J/ad5636e8-a1ce-4935-83e7-84c3a4cf3ee61615827629465-1.jpg',
        price: '3374'
      },
      {
        id: 11,
        name: 'Striped Sweatshirt',
        brand: 'Aeropostale',
        imageUrl: 'https://i.postimg.cc/JhWBq1k8/6a261f7e-43fe-47ad-b98f-dd60d5ad340f1579561927490-1.jpg',
        price: '1399'
      },
      {
        id: 12,
        name: 'Bio-wash Sweatshirt',
        brand: 'HRX',
        imageUrl: 'https://i.postimg.cc/130zyD8x/e3ae69d6-9257-48ef-ad8f-0c572342c9731607059684616-HRX-by-Hrithik-Roshan-Women-Sweatshirts-8921607059.jpg',
        price: '2899'
      }
    ]
  },
  {
    id: 3,
    title: 'Blazers',
    routeName: 'blazer_collection',
    items: [
      {
        id: 1,
        name: 'Checked Sustainable Blazer',
        brand: 'MANGO',
        imageUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13534878/2021/6/9/533ddf98-f1b3-4cc9-b98a-97be17ab648d1623233315249ShortsMANGOWomenShortsMANGOWomenSweatersMANGOWomenSweatersMA1.jpg',
        price: '6392'
      },
      {
        id: 2,
        name: 'Relaxed Fit Blazer',
        brand: 'Forever New',
        imageUrl: 'https://i.postimg.cc/QN9dxsLx/524f8971-0936-4cff-b047-4bd927e034e71612956370767-1.jpg',
        price: '3100'
      },
      {
        id: 3,
        name: 'Solid Beige Blazer',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/jSWKx4nw/c0772303-879d-4605-93fb-5e8a05e117011621832500126-MANGOWomen-White-Solid-Organic-Cotton-Boxy-Apron-Top-Tops-MA.jpg',
        price: '4942'
      },
      {
        id: 4,
        name: 'Open Front Blazer',
        brand: 'Dorothy Perkins',
        imageUrl: 'https://i.postimg.cc/4yJPPwRW/a80ca9dc-348f-48c6-b13e-7c7e205457b31618927403579-Tops-DOROTHYPERKINSW-omen-Dresses-DOROTHYPERKINSW-omen-Ja.jpg',
        price: '2495'
      },
      {
        id: 5,
        name: 'Formal Beige Blazer',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/HsFW7Ng4/99721fcf-1ba3-43c7-bbdf-a2b2e7e9f72a1592553313812-MANGOWomen-Beige-Solid-Top-Blazers-MANGOWomen1.jpg',
        price: '4295'
      },
      {
        id: 6,
        name: 'Front-Open Casual Blazer',
        brand: 'Vero Moda',
        imageUrl: 'https://i.postimg.cc/rmtKWBpS/a47147ea-f8fd-4b69-a752-b3765d45ab891614414157141-1.jpg',
        price: '2309'
      },
      {
        id: 7,
        name: 'Solid Formal Blazer',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/L8hfmwVt/faa33302-10a4-44ec-a86f-3b923317a46b1592553291350-MANGOWomen-T-shirt-Jeans-MANGOWomen-Trousers-MANGOWomen-W.jpg',
        price: '3954'
      },
      {
        id: 8,
        name: 'Solid Casual Blazer',
        brand: 'MANGO',
        imageUrl: 'https://i.postimg.cc/3NC5qtqV/cb57accf-2b9b-4e7c-81b7-81ddbf605da41621832399366-MANGOWomen-White-Solid-Organic-Cotton-Boxy-Apron-Top-Tops-MA.jpg',
        price: '5590'
      },
      {
        id: 9,
        name: 'Regular Fit Blazer',
        brand: 'Dorothy Perkins',
        imageUrl: 'https://i.postimg.cc/y6t2vw8D/51adb4f0-e45e-4575-ad19-d1ad83853f291596110111204-Tshirts-DOROTHYPERKINSWomen-Dresses-DOROTHYPERKINSWome.jpg',
        price: '5495'
      },
      {
        id: 10,
        name: 'Solid Tailored Fit Blazer',
        brand: 'Vero Moda',
        imageUrl: 'https://i.postimg.cc/3J9SzVKj/679b3037-df04-4d35-9140-173fd33b35b51623233376826-Shorts-MANGOWomen-Shorts-MANGOWomen-Sweaters-MANGOWomen-S.jpg',
        price: '6199'
      },
      {
        id: 11,
        name: 'Regular Fit Blazer',
        brand: 'Forever New',
        imageUrl: 'https://i.postimg.cc/3x8cf7mF/4423bfed-b545-4a3e-9f4e-05fb858a19211621832432920-MANGOWomen-White-Solid-Organic-Cotton-Boxy-Apron-Top-Tops-MA.jpg',
        price: '5590'
      },
      {
        id: 12,
        name: 'Regular Fit Blazer',
        brand: 'Van Heusen',
        imageUrl: 'https://i.postimg.cc/hGpgZpXf/a1e0b61a-9411-46ac-95b2-e5d7b2205c431617609487364-1.jpg',
        price: '3499'
      }
    ]
  }
]

export default SHOP_DATA;