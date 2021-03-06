export default this;
export var users = [
  {
    UserId: 1,
    Username: "vitcon2000",
    RoleIds: [1],
    RoleNames: ["admin"],
    Name: "Ngô Thế Anh",
    Email: "timer217@gmail.com",
  },
  {
    UserId: 2,
    Username: "anhnt",
    RoleIds: [2],
    RoleNames: ["manager"],
    Name: "Ngô Thế Anh",
    Email: "timer218@gmail.com",
  },
  {
    UserId: 3,
    Username: "duy99",
    RoleIds: [3],
    RoleNames: ["staff"],
    Name: "Duy",
    Email: "timer218@gmail.com",
  },
];
export var categories = [
  {
    id: 1,
    name: "Mẹ - Bé",
    level: 1,
    superCateId: 0,
    hasSub: true,
  },
  {
    id: 2,
    name: "Đồ điện tử",
    level: 1,
    superCateId: 0,
    hasSub: true,
  },
  {
    id: 3,
    name: "Đồ gia dụng",
    level: 1,
    superCateId: 0,
    hasSub: false,
  },
  {
    id: 4,
    name: "Thực phẩm",
    level: 1,
    superCateId: 0,
    hasSub: false,
  },
  {
    id: 5,
    name: "Sữa",
    level: 2,
    superCateId: 1,
  },
  {
    id: 6,
    name: "Dụng cụ",
    level: 2,
    superCateId: 1,
    hasSub: false,
  },
  {
    id: 7,
    name: "Quần áo",
    level: 2,
    superCateId: 1,
    hasSub: false,
  },
  {
    id: 8,
    name: "Trang trí",
    level: 2,
    superCateId: 2,
    hasSub: false,
  },
  {
    id: 9,
    name: "Sữa",
    level: 3,
    superCateId: 2,
    hasSub: true,
  },
  {
    id: 10,
    name: "Dụng cụ",
    level: 3,
    superCateId: 2,
    hasSub: false,
  },
  {
    id: 11,
    name: "Quần áo",
    level: 3,
    superCateId: 2,
    hasSub: false,
  },
  {
    id: 12,
    name: "Trang trí",
    level: 3,
    superCateId: 2,
    hasSub: false,
  },
  {
    id: 13,
    name: "Sữa ông thọ",
    level: 4,
    superCateId: 9,
    hasSub: false,
  },
];
export var products = [
  {
    id: 1,
    code: "P001",
    name: "Siêu product 1",
    price: 100000,
    size: 444.5,
    quantity: 100,
    origin: "Nhật Bổn",
    originId: 1,
    packingMethod: "Đóng gói",
    packingMethodId: 1,
    shortDescription: "Đây là một sản phẩm nhập từ Nhật Bản",
    description:
      "Đây là một siêu sản phẩm lấy từ siêu cường quốc Nhật Bản ở khu vực Đông Á.",
    manufacturer: "Nhà máy hạng A",
    brand: "Suzuki",
    productStatus: "Available",
    displayImage:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    images: [
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    ],
  },
  {
    id: 2,
    code: "P002",
    name: "Siêu product 2",
    price: 100000,
    size: 444.5,
    quantity: 100,
    origin: "Nhật Bổn",
    originId: 3,
    packingMethod: "Đóng gói",
    packingMethodId: 2,
    shortDescription: "Đây là một sản phẩm nhập từ Nhật Bản",
    description:
      "Đây là một siêu sản phẩm lấy từ siêu cường quốc Nhật Bản ở khu vực Đông Á.",
    manufacturer: "Nhà máy hạng A",
    brand: "Suzuki",
    productStatus: "Available",
    displayImage:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    images: [
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    ],
  },
  {
    id: 3,
    code: "P001",
    name: "Siêu product 3",
    price: 100000,
    size: 444.5,
    quantity: 100,
    origin: "Nhật Bổn",
    originId: 1,
    packingMethod: "Đóng gói",
    packingMethodId: 3,
    shortDescription: "Đây là một sản phẩm nhập từ Nhật Bản",
    description:
      "Đây là một siêu sản phẩm lấy từ siêu cường quốc Nhật Bản ở khu vực Đông Á.",
    manufacturer: "Nhà máy hạng A",
    brand: "Suzuki",
    productStatus: "Available",
    displayImage:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    images: [
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    ],
  },
];
export var user2 = [
  {
    userid: 1,
    username: "duy123",
    password: "admin",
    name: "Ngô Thế Anh",
    phone: "09626128151",
    email: "timer217@gmail.com",
    address: "2174 Đại Lộ Hùng Vương",
    avatar:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    villageId: 1,
    village: "Dong Anh",
    wardId: 1,
    ward: "Hoan Kiem",
    districId: 1,
    distric: "Hai Ba Trung",
    provinceId: 1,
    province: "TpHoChiMinh",
  },
  {
    userid: 2,
    username: "duy12345",
    password: "admin1",
    name: "Ngô Thế Anh1",
    phone: "09626128151",
    email: "timer217@gmail.com",
    address: "Ha Noi",
    avatar:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    villageId: 2,
    village: "Dong Anh",
    wardId: 2,
    ward: "Hoan Kiem",
    districId: 2,
    distric: "Hai Ba Trung",
    provinceId: 2,
    province: "TpHoChiMinh",
  },
  {
    userid: 3,
    username: "duy1233567",
    password: "admin346",
    name: "Ngô Thế Anh678",
    phone: "09626128151",
    email: "timer217@gmail.com",
    address: "Ha Noi",
    avatar:
      "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    villageId: 3,
    village: "Dong Anh",
    wardId: 3,
    ward: "Hoan Kiem",
    districId: 3,
    distric: "Hai Ba Trung",
    provinceId: 3,
    province: "TpHoChiMinh",
  },

 
  

];
export var storages = [
  {
    id: 1,
    name: "Siêu product 1",
    address: "16 dong da",
    wardId: 3,
    ward: "Hoan Kiem",
    districId: 3,
    distric: "Hai Ba Trung",
    provinceId: 3,
    province: "TpHoChiMinh",
   
  },
  {
    id: 2,
    name: "Siêu product 2",
    address: "16 dong da",
    wardId: 3,
    ward: "Hoan Kiem",
    districId: 3,
    distric: "Hai Ba Trung",
    provinceId: 3,
    province: "TpHoChiMinh",
   
  },
  {
    id: 3,
    name: "Siêu product 3",
    address: "16 dong da",
    wardId: 3,
    ward: "Hoan Kiem",
    districId: 3,
    distric: "Hai Ba Trung",
    provinceId: 3,
    province: "TpHoChiMinh",
   
  },
 ];

 export var cart = 
 [
  {
    id: 1,
    name: "sieuproduct1",
    price: "123123",
    quantity:"50",
  },
  {
    id: 1,
    name: "sieuproduct2",
    price: "34545",
    quantity:"16",
  } ,
  {
    id: 1,
    name: "sieuproduct3",
    price: "123123",
    quantity:"19",
  } ,


 ];