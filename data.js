const HUBEI_ATTRACTIONS = [
  // 1. 黄鹤楼
  {
    id: 1,
    name: "黄鹤楼",
    city: "武汉",
    grade: "5A",
    category: "人文景观",
    opening: { day: "08:00-18:00", night: "19:30-22:00" },
    price: { day: 70.0, night: 120.0 },
    features: ["夜游灯光秀《鹤舞千秋》", "AR诗词互动", "汉服诗会"],
    culture: {
      desc: "江南三大名楼之一，承载李白、崔颢等千首诗词文化",
      citations: [1, 7],
    },
    coordinates: { lat: 30.5427, lng: 114.3055 },
  },

  // 2. 武当山
  {
    id: 2,
    name: "武当山",
    city: "十堰",
    grade: "5A",
    category: "宗教文化",
    opening: { day: "07:30-17:30" },
    price: 243.0,
    features: ["金顶朝圣", "紫霄宫武术表演", "太极养生课程"],
    culture: {
      desc: "世界最大道教建筑群，现存7400余件道教文物",
      citations: [2, 9],
    },
    coordinates: { lat: 32.466, lng: 111.004 },
  },

  // 3. 三峡大坝
  {
    id: 3,
    name: "三峡大坝",
    city: "宜昌",
    grade: "5A",
    category: "工程景观",
    opening: { day: "08:00-17:30" },
    price: 0.0,
    features: ["坛子岭俯瞰五级船闸", "截流纪念园实景展示"],
    culture: {
      desc: "世界最大水利工程，年发电量超千亿千瓦时",
      citations: [2, 6],
    },
    coordinates: { lat: 30.8236, lng: 111.0031 },
  },

  // 4. 恩施大峡谷
  {
    id: 4,
    name: "恩施大峡谷",
    city: "恩施",
    grade: "5A",
    category: "地质奇观",
    opening: { day: "08:30-16:00" },
    price: 155.0,
    features: ["绝壁栈道徒步", "云龙地缝无人机航拍", "土家摆手舞"],
    culture: {
      desc: "喀斯特地貌博物馆，含200+溶洞和700米垂直断崖",
      citations: [10, 9],
    },
    coordinates: { lat: 30.745, lng: 109.336 },
  },

  // 5. 神农架
  {
    id: 5,
    name: "神农架",
    city: "神农架",
    grade: "5A",
    category: "生态保护区",
    opening: { day: "06:30-17:30" },
    price: 299.0,
    features: ["神农顶观云海", "大九湖湿地晨雾摄影", "滑雪场冬季开放"],
    culture: {
      desc: "北纬31°唯一亚高山湿地，野人传说发源地",
      citations: [5, 7],
    },
    coordinates: { lat: 31.745, lng: 110.336 },
  },

  // 6. 襄阳古城
  {
    id: 6,
    name: "襄阳古城",
    city: "襄阳",
    grade: "4A",
    category: "历史遗迹",
    opening: { default: "全天开放" },
    price: 0.0,
    features: ["明代城墙骑行（全长7.3公里）", "夜游临汉门"],
    culture: {
      desc: "全国保存最完整的古城池之一，含3处国保单位",
      citations: [6],
    },
    coordinates: { lat: 32.042, lng: 112.135 },
  },

  // 7. 荆州海洋世界
  {
    id: 7,
    name: "荆州海洋世界",
    city: "荆州",
    grade: "4A",
    category: "主题乐园",
    opening: { day: "09:00-17:30" },
    price: 198.0,
    features: ["海底隧道潜水体验", "卡丁车竞速", "巨幕影院"],
    culture: {
      desc: "华中最大海洋主题综合体，含500+海洋生物",
      citations: [6],
    },
    coordinates: { lat: 30.325, lng: 112.231 },
  },

  // 8. 太和梅花谷
  {
    id: 8,
    name: "太和梅花谷",
    city: "十堰",
    grade: "4A",
    category: "康养度假",
    opening: { day: "08:00-17:30" },
    price: 80.0,
    features: ["冬季踏雪寻梅", "丛林飞跃", "腊梅精油制作"],
    culture: {
      desc: "拥有华中最大野生腊梅群，国家森林康养基地",
      citations: [6],
    },
    coordinates: { lat: 32.568, lng: 110.782 },
  },

  // 9. 三峡龙隐谷
  {
    id: 9,
    name: "三峡龙隐谷",
    city: "宜昌",
    grade: "4A",
    category: "研学旅行",
    opening: { day: "08:30-17:00" },
    price: 120.0,
    features: ["溶洞地质考察", "嫘祖养蚕体验", "丹霞地貌研学"],
    culture: {
      desc: "融合太清洞亿年钟乳石与嫘祖文化遗址",
      citations: [6],
    },
    coordinates: { lat: 30.912, lng: 111.084 },
  },

  // 10. 郧阳恐龙蛋化石群
  {
    id: 10,
    name: "郧阳恐龙蛋化石群",
    city: "十堰",
    grade: "4A",
    category: "科普教育",
    opening: { day: "09:00-16:30" },
    price: 65.0,
    features: ["恐龙蛋化石挖掘体验", "AR古生物复原展示"],
    culture: {
      desc: "全球最密集恐龙蛋化石群，超3000枚裸露化石",
      citations: [6],
    },
    coordinates: { lat: 32.856, lng: 110.812 },
  },

  // 11. 卓尔木桥溪
  {
    id: 11,
    name: "卓尔木桥溪",
    city: "宜昌",
    grade: "4A",
    category: "户外探险",
    opening: { day: "08:00-18:00" },
    price: 98.0,
    features: ["溯溪攀岩", "土家吊脚楼民宿", "星空露营"],
    culture: {
      desc: "喀斯特地貌+土家族非遗文化融合示范区",
      citations: [6],
    },
    coordinates: { lat: 30.672, lng: 110.973 },
  },

  // 12. 龙凤山景区
  {
    id: 12,
    name: "龙凤山景区",
    city: "黄石",
    grade: "4A",
    category: "农旅融合",
    opening: { day: "08:30-17:00" },
    price: 60.0,
    features: ["无土栽培体验", "红色纪念馆", "四季节庆活动"],
    culture: {
      desc: "入选世界旅游联盟减贫案例，月月有主题节庆",
      citations: [6],
    },
    coordinates: { lat: 30.201, lng: 115.013 },
  },

  // 13. 清江画廊
  {
    id: 13,
    name: "清江画廊",
    city: "宜昌",
    grade: "5A",
    category: "山水观光",
    opening: { day: "08:00-17:30" },
    price: 145.0,
    features: ["武落钟离山登顶", "土家山歌对唱", "清江鱼宴"],
    culture: {
      desc: "巴人发源地，土家族母亲河文化长廊",
      citations: [9, 10],
    },
    coordinates: { lat: 30.413, lng: 111.128 },
  },

  // 14. 赤壁古战场
  {
    id: 14,
    name: "赤壁古战场",
    city: "咸宁",
    grade: "5A",
    category: "历史遗址",
    opening: { day: "08:00-17:30" },
    price: 135.0,
    features: ["赤壁摩崖石刻拓印", "三国战船模拟", "VR赤壁之战"],
    culture: {
      desc: "中国唯一保存完好的三国古战场遗址",
      citations: [2],
    },
    coordinates: { lat: 29.712, lng: 113.901 },
  },

  // 15. 东湖生态区
  {
    id: 15,
    name: "东湖生态区",
    city: "武汉",
    grade: "5A",
    category: "城市公园",
    opening: { default: "全天开放" },
    price: 0.0,
    features: ["101公里绿道骑行", "樱园夜赏", "帆船体验"],
    culture: {
      desc: "中国最大城中湖，楚文化建筑群集中地",
      citations: [1, 7],
    },
    coordinates: { lat: 30.559, lng: 114.368 },
  },

  // 16. 壁挂公路
  {
    id: 16,
    name: "壁挂公路",
    city: "恩施",
    grade: null,  // Python None 转换为 JS null
    category: "公路奇观",
    opening: { default: "全天开放" },
    price: 0.0,
    features: ["自驾318国道精华段", "Z字弯道摄影打卡"],
    culture: {
      desc: "十大最美公路之一，海拔落差800米",
      citations: [1],
    },
    coordinates: { lat: 30.332, lng: 109.472 },
  },

  // 17. 四渡河大桥
  {
    id: 17,
    name: "四渡河大桥",
    city: "恩施",
    grade: null,
    category: "超级工程",
    opening: { default: "全天开放" },
    price: 0.0,
    features: ["桥面观景台拍摄", "峡谷索降体验"],
    culture: {
      desc: "世界最高悬索桥（桥面距谷底560米）",
      citations: [1],
    },
    coordinates: { lat: 30.615, lng: 110.376 },
  },

  // 18. 归元寺
  {
    id: 18,
    name: "归元寺",
    city: "武汉",
    grade: "4A",
    category: "宗教场所",
    opening: { day: "08:00-17:00" },
    price: 20.0,
    features: ["数罗汉占卜", "除夕敲钟祈福"],
    culture: {
      desc: "武汉四大丛林之一，藏有北魏石刻佛像",
      citations: [1],
    },
    coordinates: { lat: 30.562, lng: 114.266 },
  },

  // 19. 木兰文化旅游区
  {
    id: 19,
    name: "木兰文化旅游区",
    city: "武汉",
    grade: "5A",
    category: "综合度假",
    opening: { day: "08:30-17:30" },
    price: 80.0,
    features: ["草原骑马", "云雾山杜鹃花海", "木兰将军祠"],
    culture: {
      desc: "木兰传说非遗文化核心展示区",
      citations: [9],
    },
    coordinates: { lat: 31.128, lng: 114.372 },
  },

  // 20. 仙岛湖
  {
    id: 20,
    name: "仙岛湖",
    city: "黄石",
    grade: "4A",
    category: "湖泊风光",
    opening: { day: "08:00-17:00" },
    price: 110.0,
    features: ["悬崖秋千", "玻璃观景平台", "皮划艇环岛"],
    culture: {
      desc: "与千岛湖齐名的世界三大千岛湖之一",
      citations: [3, 10],
    },
    coordinates: { lat: 29.876, lng: 115.213 },
  }
];
// 景点类
class Attraction {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.city = data.city;
    this.grade = data.grade;
    this.category = data.category;
    this.opening = data.opening;
    this.price = data.price;
    this.features = data.features;
    this.culture = data.culture;
    this.coordinates = data.coordinates;
  }
}
