const feed = [
  {
    imgUrl:
      "https://pbs.twimg.com/profile_images/1199022496521080832/tBx9LPh8_400x400.png",
    profile: "AJ + Español",
    username: "ajplusespanol",
    content: `Laika fue elegida para viajar al espacio sabiendo que no resistiría.
        ¿Son éticas nuestras maneras de hacer ciencia? 
        Queremos saber qué opinas.
        `,
    interaction: {
      comments: 5,
      retweets: {
        numbers: 66,
        selected: false,
      },
      likes: {
        numbers: 126,
        selected: false,
      },
    },
    verified: false,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
    profile: "Elon Musk",
    username: "elonmusk",
    content: `Several thousand more Starlink beta participation invitations going out this week.
        `,
    interaction: {
      comments: 6700,
      retweets: { numbers: 3700, selected: false },
      likes: { numbers: 84000, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://informaticaynadamas.com/wp-content/uploads/2019/03/chrome-logo.png",
    profile: "Google",
    username: "google",
    content: `20 years ago today the first crew of astronauts and researchers arrived at the International Space Station, forever changing how we explore space. Cohete Celebrate #SpaceStation20th with @NASA
        & @GoogleArts by exploring a 3D model of the`,
    interaction: {
      comments: 26,
      retweets: { numbers: 100, selected: false },
      likes: { numbers: 693, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
    profile: "LeBron James",
    username: "KingJames",
    content: `Y’all see the setup right???!!!`,
    interaction: {
      comments: 17600,
      retweets: { numbers: 13000, selected: false },
      likes: { numbers: 78800, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    profile: "BBC Breaking News",
    username: "BBCBreaking",
    content: `Prince William contracted Covid-19 in April at a similar time to his father Prince Charles, palace sources tell BBC
        `,
    interaction: {
      comments: 1300,
      retweets: { numbers: 2200, selected: false },
      likes: { numbers: 4200, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://hardzone.es/app/uploads-hardzone.es/2011/09/nvidia-logo.png",
    profile: "NVIDIA GeForce",
    username: "NVIDIAGeForce",
    content: `Hitch a ride on the RTX Battle Bus!
        Experience Fortnite in a new light with NVIDIA ray traced shadows, global illumination and ambient occlusion. 
        Learn more about RTX, DLSS, and NVIDIA Reflex in Fortnite: https://nvidia.com/en-us/geforce/campaigns/play-fortnite-with-rtx/`,
    interaction: {
      comments: 56,
      retweets: { numbers: 34, selected: false },
      likes: { numbers: 524, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://pbs.twimg.com/profile_images/1255777336651325440/PO64AR-O_400x400.jpg",
    profile: "National Geographic",
    username: "NatGeo",
    content: `What's the most soothing experience you've had in nature? (Bonus points if you have a photo or video)`,
    interaction: {
      comments: 128,
      retweets: { numbers: 76, selected: false },
      likes: { numbers: 434, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl: "https://hipertextual.com/files/2017/01/HPTX_ICONO.png",
    profile: "Hipertextual",
    username: "Hipertextual",
    content: `Cinco recomendaciones, y una sorpresa, para ver en Netflix en noviembre`,
    interaction: {
      comments: 0,
      retweets: { numbers: 1, selected: false },
      likes: { numbers: 4, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://hipertextual.com/files/2020/06/hipertextual-2020380252-270x270.png",
    profile: "Hipertextual",
    username: "Hipertextual",
    content: `Cinco recomendaciones, y una sorpresa, para ver en Netflix en noviembre`,
    interaction: {
      comments: 0,
      retweets: { numbers: 1, selected: false },
      likes: { numbers: 4, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/000/064/592/non_2x/real-madrid-cf-vector.jpg",
    profile: "Real Madrid C.F.",
    username: "realmadrid",
    content: `¡El capitán, @SergioRamos, alcanza la cifra de 1️⃣0️⃣0️⃣ goles con la camiseta del 
        @RealMadrid! #RealFootball | #HalaMadrid`,
    interaction: {
      comments: 210,
      retweets: { numbers: 3700, selected: false },
      likes: { numbers: 14900, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/4e/e8/e9/4ee8e9139110201b6e17ac878d1250fd.jpg",
    profile: "UEFA Champions League",
    username: "ChampionsLeague",
    content: `Bayern have won their last 13 Champions League games... #UCL`,
    interaction: {
      comments: 19,
      retweets: { numbers: 54, selected: false },
      likes: { numbers: 818, selected: false },
    },
    verified: true,
    blocked: false,
    showContextM: false,
  },
  {
    imgUrl:
      "https://pbs.twimg.com/profile_images/1291131598218366976/wS2bgD6O_400x400.jpg",
    profile: "FC Barcelona",
    username: "FCBarcelona_es",
    content: `¡La 
        @LigadeCampeones no se detiene!
        Preparados para una nueva noche europea. 
        Este miércoles, #BarçaDynamo`,
    interaction: {
      comments: 6,
      retweets: { numbers: 30, selected: false },
      likes: { numbers: 723, selected: false },
    },
    verified: true,
    blocked: true,

showContextM: false,  
},
  {
    imgUrl:
      "https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
    profile: "Youtube",
    username: "Youtube",
    content: `Drop links to the videos that are helping you right now`,
    interaction: {
      comments: 4900,
      retweets: { numbers: 878, selected: false },
      likes: { numbers: 878, selected: false },
    },
    verified: true,
    blocked: true,

showContextM: false,  
},
];

export { feed };
