import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Product: {
        WomensFashion: {
            name: '여성패션',
            product: [
                {
                    product_id: 1,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/6f93/146b892b2d5432709e25f34d1ce665363280495fd0a3e3509534357b15d0.jpg',
                    product_info_img: [
                        'https://image1.coupangcdn.com/image/vendor_inventory/43b7/3dcdfa384b9f189f100d2620b034335e78faeec41d652502da70768a5728.jpg',
                    ],
                    product_name:
                        '제니트 여성 기본핏 브이넥 데일리룩 슬림포인트 비스코스 혼방 세미크롭 니트 꾸이크롭브이',
                    product_price: 32900,
                    product_sale_price: 18900,
                    product_in_cnt: 1,
                    product_review_percent: 100,
                    product_review: 1018,
                    product_seller: '니트있지',
                    sale_type: '',
                    product_category: 'WomensFashion',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://image10.coupangcdn.com/image/vendor_inventory/78a0/b5c1c40049b1a88f964e7064225b127a3023bcf13dc20786b2c82bfe168d.jpg',
                    product_info_img: [
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/8bfd/2a26c4479157d5d48feb8ecca44a231cb0f5ad2dda3fc976e8533a19fcdf.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/9faa/9f79e50f1707ffa4c32f1f4ad5ae95d9f5007213dceaa852266c4c2b5a3a.jpg',
                    ],
                    product_name: '제이로그 루즈핏 베이직 니트 베루즈 가디건',
                    product_price: 17900,
                    product_sale_price: 16900,
                    product_in_cnt: 1,
                    product_review_percent: 87,
                    product_review: 615,
                    product_seller: '주식회사 어바웃스타일',
                    sale_type: '',
                    product_category: 'WomensFashion',
                },
                {
                    product_id: 3,
                    product_img:
                        'https://image6.coupangcdn.com/image/vendor_inventory/a4fb/ff631e9496d02947a4a195789ab4e51608cddf22b0e30fd6e5686f0bcf78.jpg',
                    product_info_img: [
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/0d13/1b0dfddd93d86e66e5e90c11fa57a9e91bdc88e8256cae90b9d735de5a1e.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/d670/abc1cbf94acf8cb6449194ecd437b46cc4103af977b6735834325b30c8df.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/43cd/1fc50c0815e7c665767f42a8f6b6eaed887c67b4724016bb874fbf138c25.jpg',
                    ],
                    product_name: '주디앤 여성 아르코 단가라 긴팔 티셔츠 2P',
                    product_price: 30900,
                    product_sale_price: 11900,
                    product_in_cnt: 2,
                    product_review_percent: 72,
                    product_review: 405,
                    product_seller: '주식회사 더이팩토리',
                    sale_type: '',
                    product_category: 'WomensFashion',
                },
                {
                    product_id: 4,
                    product_img:
                        'https://image8.coupangcdn.com/image/vendor_inventory/431f/5aa9720adb3ac218fe34eb9a6e395fc483a82d136ac46cf55ba3cd82a9c1.jpg',
                    product_info_img: [
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/310e/14e45b974fd942c8c04e6ba12c1eca03c89aa21bfac30dd1ca85c28d8cc5.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/fd88/300817e69189db347448b0457b223f1d5eb0ed4c2e1185cbd635636c8a91.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/f331/9adabe744d3ae157d161c8a92eb1c636d4c8c6de8132cd60646546d550a7.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/22a0/fc7b3f890e776fc884c9622bc5ab12fbdafd9a7c85f555c7b4d6c12ff453.jpg',
                    ],
                    product_name: '엘블로썸 스판 인밴드 워싱 배기 청바지',
                    product_price: 22000,
                    product_sale_price: 16500,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 5075,
                    product_seller: '주식회사 미글커뮤니케이션',
                    sale_type: '',
                    product_category: 'WomensFashion',
                },
                {
                    product_id: 5,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/606f/0e36a15472d55b500e08fa54f33b68fc7816b51b46a6b829d8dcb9f03ed3.jpg',
                    product_info_img: [
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/5e62/62b4b9e867e21d71420b47ef0e5f1c250c72ddb7c5777884282c1caad93b.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/b298/84d7620231bc537d2f68d3a9ce1e72af230fb51c84c22cebbf8bcf03f9b1.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/7eae/ae0646f68bd2db9eb30aff2097436968b23ba43e4f12b120d2a96f105534.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/99e0/f186a0e80118e9f37e9b5c7788b7686a64f1df3f05560c6cc29e5f3ac3e2.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/2a66/fc4e1c21b2cb0517aabf97a5cb5bc9d3c7c203cf511e5937fe7443baf7c1.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/db6d/240b7893ae74b87662e6cd4577dff4291826e412b1e76ae11a9425a77719.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/b652/912d2424210b8650ecd5ff6b30e00f8f8b10f238af025a40a5ba1565f44d.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/5ba5/8565022153e200e191bd260a0e0c42684412619b754f8996049011e39f20.jpg',
                    ],
                    product_name: 'POPSONIC 여성 코튼 방수 생리 팬티 샘방지 위생팬티 6P',
                    product_price: 22900,
                    product_sale_price: 18900,
                    product_in_cnt: 1,
                    product_review_percent: 100,
                    product_review: 76,
                    product_seller: '지아슈오무역 유한회사',
                    sale_type: '',
                    product_category: 'WomensFashion',
                },
            ],
        },
        MensFashion: {
            name: '남성패션',
            product: [
                {
                    product_id: 1,
                    product_img:
                        'https://image8.coupangcdn.com/image/retail/images/7803129586879781-1393832c-6cb5-4d43-9f61-f09cdffded55.jpg',
                    product_info_img: [
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/retail/images/616722611578500-61d379f0-4a51-4243-893b-893057a86d00.jpg',
                    ],
                    product_name: '가이스토리 남성용 사계절 피셔 포켓 긴팔 빅사이즈 캐주얼 셔츠',
                    product_price: 52750,
                    product_sale_price: 24900,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 5237,
                    product_seller: '쿠팡',
                    sale_type: '',
                    product_category: 'MensFashion',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://image9.coupangcdn.com/image/rs_quotation_api/gvamkpvh/cd1dae670c9d4bd290440ed08b7a37c6.jpg',
                    product_info_img: [
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/retail/images/5202200067341986-3037d7d3-2080-48e6-b3e4-ce9aa1cf4504.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/bbv7kbwy/d7ce15fd9e714b90b02eceb02e32bf9e.jpg',
                    ],
                    product_name: '엘엑스티 남성용 링클프리 엠보 구김방지 브이 슬릿넥 티셔츠',
                    product_price: 14900,
                    product_sale_price: 10900,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 4759,
                    product_seller: '쿠팡',
                    sale_type: '',
                    product_category: 'MensFashion',
                },
                {
                    product_id: 3,
                    product_img:
                        'https://image8.coupangcdn.com/image/rs_quotation_api/shoxonsg/a3ebc93be53d4663a6b567d62fe46355.jpg',
                    product_info_img: [
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/yqh4aleo/2530927343ce44f5bb472a6f9ad38ba6.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/retail/images/2023/12/12/17/7/a68c7e5b-82db-43f5-be3b-8eef1c3fa6b4.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/78pdzheo/980f3509ed634378a4301a595dae9f85.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/syy7xymm/793a0d7a86ed469c8ee17cbad8a87a4d.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/1hpzeiud/b04066a2a33046529f67bc03bbe96b2b.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/bbpa3qgu/a7996cbebfa64ce68e6d06c40cf2f971.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/rs_quotation_api/ma3trveh/2df3a310fa9f43179ee63554fd9fbe64.jpg',
                    ],
                    product_name: '남성용 포시즌 밴딩 와이드 데님팬츠 PDS209',
                    product_price: 15890,
                    product_sale_price: 14380,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 112,
                    product_seller: '쿠팡',
                    sale_type: '',
                    product_category: 'MensFashion',
                },
                {
                    product_id: 4,
                    product_img:
                        'https://image10.coupangcdn.com/image/vendor_inventory/5135/bb37abf67f3f046d302cbe5a0dbf70d9880d9750f89fb9b8a5cc101e3b0b.jpg',
                    product_info_img: [
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/c7a8/4676e7d1812de5b3905d80333331a92903026187c8b0a6316f860933de7f.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/f169/c8635c07b60167787a9d2f1af3f59f4b0e8bbdfb8f5b341dac37de44d86e.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/47b9/ced8243850f2fe8e72d49547bf0864836115b73827d4b99270aaf9345c26.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/e649/e475a47edc11807fcbbf664495c816ee9f42a522a983a3495de7f2b15cf9.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/79d3/d726d66ac0d752fce4f705266140c31a4efa7ab4a478a5e1e680be09ea88.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/565e/3564a18119b7974587630045922227ffbac7ce8398c8a8975e09e566dab6.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/cccf/a5404246fec6fb2b87506fe2cdc716be3516f4a19b3e33b5796ad3115093.jpg',
                    ],
                    product_name:
                        '와플 긴팔 트레이닝복 라운드넥 맨투맨 티셔츠 + 허리밴딩 팬츠 봄가을 캐주얼 루즈핏 상하의세트 남성의류',
                    product_price: 25900,
                    product_sale_price: 20900,
                    product_in_cnt: 1,
                    product_review_percent: 80,
                    product_review: 34,
                    product_seller: '주식회사 가촌국제무역',
                    sale_type: '',
                    product_category: 'MensFashion',
                },
                {
                    product_id: 5,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/6ed7/9151ac5d4fe0308c1df9c72f64aec68217b6cb886578b0ba8727256091d0.jpg',
                    product_info_img: [
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/39f5/adecf2604cb017efed4c1e2ec87ab4f296e211417dfed54038e01b732038.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/8804/7059faaf68432f041c10f8670ff2dae14b2932aec9ad0128282f5eb39655.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/82be/55f04550e1b03508ebac8f1803a5c14f10c5116ec25742c91c4618654240.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/9027/8d71beb774efb14402df34e037fda99a0d859eae648e37b4c0051bdf53d2.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/7774/4aeb36512ae3f0b4e8b672042974bb63d4537bfa2e15e1884ab54fcbe3b4.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/59e2/b695ef5617ca1e7753a1ab002033c1539a799c2ca1b9ce40f8ebcd8d1560.jpg',
                    ],
                    product_name: '일칠사 편한 스판 밴딩 슬랙스 면바지',
                    product_price: 53800,
                    product_sale_price: 22800,
                    product_in_cnt: 1,
                    product_review_percent: 85,
                    product_review: 599,
                    product_seller: 'KENZI (켄지)',
                    sale_type: '',
                    product_category: 'MensFashion',
                },
            ],
        },
        Beauty: {
            name: '뷰티',
            product: [
                {
                    product_id: 1,
                    product_img:
                        'https://image8.coupangcdn.com/image/vendor_inventory/8972/c81093fdedfb75e47957673ad324fe5e9f61f8cc1ec59f393ca9507af846.jpg',
                    product_info_img: [
                        'https://image1.coupangcdn.com/image/vendor_inventory/8efe/e641c3241b5d2adc020a395289669a84bff55797467b85e6c7ef5987e3c3.jpg',
                    ],
                    product_name: '아모스프로페셔널 컬링에센스 2X 헤어에센스, 150ml',
                    product_price: 29120,
                    product_sale_price: 20920,
                    product_in_cnt: 4,
                    product_review_percent: 90,
                    product_review: 94181,
                    product_seller: '주식회사 에이블',
                    sale_type: '',
                    product_category: 'Beauty',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://image10.coupangcdn.com/image/retail/images/982041949437370-63e3f248-aef4-4553-95fd-d70ce5f02ca8.jpg',
                    product_info_img: [
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/1319704104992401-20a0ead8-60e6-4046-b3ce-01aadef81f1a.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/retail/images/463309524156673-0dbd04b0-0d81-430d-8120-fa2c4f512497.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/464814547772159-bd00d8d3-4986-4317-8822-ce58e69089a9.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/retail/images/1089176902489267-8350008c-fc6f-4382-b91b-7e1b1a0f66db.jpeg',
                    ],
                    product_name:
                        '에이지투웨니스 시그니처 에센스 커버 팩트 인텐스 케이스 1개 + 리필 2개, 21호',
                    product_price: 40000,
                    product_sale_price: 22400,
                    product_in_cnt: 1,
                    product_review_percent: 82,
                    product_review: 35138,
                    product_seller: '에이지투웨니스',
                    sale_type: '',
                    product_category: 'Beauty',
                },
                {
                    product_id: 3,
                    product_img:
                        'https://image6.coupangcdn.com/image/vendor_inventory/cfca/3bd3a35b0f2d7c946a8815394e0c264a4e122f53e1b230ac0f341ce844c6.png',
                    product_info_img: [
                        'https://image1.coupangcdn.com/image/vendor_inventory/eb82/5dfc14ffeca156ab1c277450205699f8322ed097d75a961509d2e6a8406a.jpg',
                        'https://image1.coupangcdn.com/image/vendor_inventory/5814/a18682e8ab06ef65d6eea8d184787946160b3ddd9fddbff36ce7f8ceec34.jpg',
                        'https://image1.coupangcdn.com/image/vendor_inventory/c866/adc69190af6cf2b19465c3d9739b60153327d71171dad5fe95d1aad63aa7.jpg',
                    ],
                    product_name: '뉴트로지나 딥클린 포밍 클렌저, 100g',
                    product_price: 25500,
                    product_sale_price: 12910,
                    product_in_cnt: 3,
                    product_review_percent: 95,
                    product_review: 89229,
                    product_seller: '(주)유니토아',
                    sale_type: '',
                    product_category: 'Beauty',
                },
                {
                    product_id: 4,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/24c0/3add1c92cc862d1c970844bd504779c6c38cc877b93d7660b286f5c69054.jpg',
                    product_info_img: [
                        'https://image1.coupangcdn.com/image/vendor_inventory/677d/6f8920f0cd8f211c8692a39134f9669f280cb2aec7d085b6805be470ef93.png',
                        'https://image1.coupangcdn.com/image/vendor_inventory/b6b9/06ba6f1e3c345af4fbdf63bdf3910dfb423b66ed9b0b412a7b4492b90bbe.jpg',
                        'https://image1.coupangcdn.com/image/vendor_inventory/959c/927a07f6e89f36f1e72d1f8dccab7db30d2b5f1503d419255bda7eb23ce3.jpg',
                        'https://image1.coupangcdn.com/image/vendor_inventory/0aa7/8dcb2237d179bdbd91b4c7941c780a60684ceb997b1919f33fdb7c0c3433.jpg',
                        'https://image1.coupangcdn.com/image/vendor_inventory/1be4/2e46fe33a6859802ceef381e4616d73da71da74534f6ca1e193c62d0fb78.jpg',
                    ],
                    product_name: '[본사 정품] 아로셀 슈퍼 콜라겐 마스크 1박스 (마스크팩 12매)',
                    product_price: 108000,
                    product_sale_price: 75050,
                    product_in_cnt: 12,
                    product_review_percent: 90,
                    product_review: 14,
                    product_seller: '에프아이씨씨주식회사(FICC CO. ,Ltd)',
                    sale_type: '',
                    product_category: 'Beauty',
                },
                {
                    product_id: 6,
                    product_img:
                        'https://image9.coupangcdn.com/image/retail/images/1255632093436647-8b24056e-cbc3-41a2-b1d4-a0724b10120b.jpg',
                    product_info_img: [
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/retail/images/4375117769464687-07b210d1-ce94-4133-a06f-81facc991c7b.jpg',
                    ],
                    product_name: '미샤 비타씨플러스 잡티씨 2종 세트',
                    product_price: 67000,
                    product_sale_price: 32400,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 118,
                    product_seller: '미샤',
                    sale_type: '',
                    product_category: 'Beauty',
                },
                {
                    product_id: 5,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/2ae4/6dec80f2a6027525df8cdceca40e38c839b03065b093d306bb067f728cdc.jpg',
                    product_info_img: [
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/6347/60971560e5472826364ce6469da527a3c667bb290034559ab91349ccaff9.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/5a6d/498e3a100b95f1bbb64d2a93efb089822f707f8e2a71f9614d8f0bdf6b53.jpg',
                    ],
                    product_name: '세레이오 손 발톱무좀레이저 발톱레이저 문제성발톱, 흰색',
                    product_price: 500000,
                    product_sale_price: 158000,
                    product_in_cnt: 1,
                    product_review_percent: 95,
                    product_review: 968,
                    product_seller: '궈유무역 유한회사',
                    sale_type: '',
                    product_category: 'Beauty',
                },
            ],
        },
        Food: {
            name: '식품',
            product: [
                {
                    product_id: 1,
                    product_img:
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/39895399538651-5c48dbab-2331-4f86-8344-ed7d1d6e1e64.jpg',
                    product_info_img: [
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/retail/images/2993996677944915-083a3391-3bd8-47e0-b9f3-fc98149b95e6.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/42639672340696-295e2f62-63ef-4185-9719-61ffcb5c444d.JPG',
                    ],
                    product_name: '동원 라이트 스탠다드 참치, 85g',
                    product_price: 13500,
                    product_sale_price: 12140,
                    product_in_cnt: 8,
                    product_review_percent: 90,
                    product_review: 264069,
                    product_seller: '동원',
                    sale_type: '',
                    product_category: 'Food',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/9097169936402870-b0802666-2b21-4254-886b-f6d82c1f46bc.jpg',
                    product_info_img: [
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/552427760472679-2988ac97-fe1b-4416-93a6-e43e0972095c.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/retail/images/552429047486169-ab0b963b-88a7-46f5-a208-baf7eb17846d.jpg',
                    ],
                    product_name:
                        '농심 신라면 120g x 5p + 안성탕면 125g x 5p + 얼큰 너구리 120g x 5p + 짜파게티 140g x 5p',
                    product_price: 16610,
                    product_sale_price: 15940,
                    product_in_cnt: 1,
                    product_review_percent: 99,
                    product_review: 159722,
                    product_seller: '농심',
                    sale_type: '',
                    product_category: 'Food',
                },
                {
                    product_id: 3,
                    product_img:
                        'https://image8.coupangcdn.com/image/vendor_inventory/f3eb/9f762b8ac97928f9c4d2eff09df31c3c8e7f8362626416bb540d3adfda37.jpg',
                    product_info_img: [
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/d9db/e487d1a57ca8a58c9914f58c62e56de36ea0d4756e194aa44fe4e435e981.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/e447/a495706886463b6f921be1c1f916a2f9dbd284722e956a9387d8d8b833c7.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/8764/f22cd41a269bc843027b3bd7df7698345e9b6c31971ede85e40ddd4c4cbc.jpg',
                    ],
                    product_name: '당도폭발 달콤탱글 씨없는 청도반시 연시감 홍시 2.5kg, 소과',
                    product_price: 15800,
                    product_sale_price: 12800,
                    product_in_cnt: 1,
                    product_review_percent: 100,
                    product_review: 1,
                    product_seller: '유니랩',
                    sale_type: '',
                    product_category: 'Food',
                },
            ],
        },
        Kitchen: {
            name: '주방용품',
            product: [
                {
                    product_id: 1,
                    product_img:
                        'https://image8.coupangcdn.com/image/vendor_inventory/404a/58bf77ed41bdcc7b0874c368ce1971f586d065ffef29cf73534411347d5a.jpg',
                    product_info_img: [
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/f8a2/c450ade6fd0a0e74f25b7d4dedf450e6f699733e10db07c356ad928d17b8.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/797c/d2c79f16a1bfe64ed35b3a2298eab923c8a6059a41b483113e19546ab4de.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/5636/b9a8cf94b6289e3e3c23426807937d95a7e38c51b8061da6232cfbb1fa20.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/b4a1/7dabfb8dfaf90e5353b1adf2edb88d5525b474da05031387e43ed1b787ee.jpg',
                    ],
                    product_name:
                        '휴대용 믹서기 사무실이나 야외에서 모두 휴대하고 사용할 수 있어 편리하고 빠르다 파란색',
                    product_price: 11400,
                    product_sale_price: 9300,
                    product_in_cnt: 1,
                    product_review_percent: 80,
                    product_review: 472,
                    product_seller: 'Hangzhou Dongye Information Technology Co., Ltd',
                    sale_type: 'globalSale',
                    product_category: 'Kitchen',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://image9.coupangcdn.com/image/vendor_inventory/7a70/dd75c1265585d93b9923335ed0d608d460150a4ad73678626bf877758a15.jpg',
                    product_info_img: [
                        'https://image1.coupangcdn.com/image/vendor_inventory/3243/fcf188ae48631901d204a3656caa1a1af40888552f55a028b106bdbd9507.jpg',
                    ],
                    product_name: '[독일 콕스타 ]스타크 올스텐 멀티 다지기 1.8L / 마늘박피기',
                    product_price: 90300,
                    product_sale_price: 44820,
                    product_in_cnt: 1,
                    product_review_percent: 100,
                    product_review: 4,
                    product_seller: '주식회사케이티엠그룹',
                    sale_type: 'panSale',
                    product_category: 'Kitchen',
                },
            ],
        },
        Household: {
            name: '생활용품',
            product: [
                {
                    product_id: 1,
                    product_img: '/images/PanSale/img1.jpg',
                    product_info_img: [
                        '/images/PanSale/img1_info_1.jpg',
                        '/images/PanSale/img1_info_2.jpg',
                        '/images/PanSale/img1_info_3.jpg',
                        '/images/PanSale/img1_info_4.jpg',
                    ],
                    product_name: '오스템 뷰센 더블와이드 칫솔 12개입',
                    product_price: 31500,
                    product_sale_price: 24210,
                    product_in_cnt: 12,
                    product_review_percent: 85,
                    product_review: 3033,
                    product_seller: '오스템파마㈜ 오랄케어사업부',
                    sale_type: 'panSale',
                    product_category: 'Household',
                },
                {
                    product_id: 2,
                    product_img:
                        'https://image7.coupangcdn.com/image/vendor_inventory/8735/19a4246f732fcb35a96e9f2e7059f9af929786e2af89675bd8eb9c17a929.jpg',
                    product_info_img: [
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/cab3/cee1ab3bc7622c8e2c22d992438db2d519aabef8f819ea49898ee02ee930.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/8c8e/77f0cbf04f5feffda2611ab2e3b329b04837dd0610f5604119c75d62f739.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/393e/8ab0345444bbf24c98b0e8c810c95314f38b996ed0aca30e64038c4bcf44.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/fd57/2a3858fd0bf15b5ecd4e8fb6dd0c84fbcf1a4d79863d5f9a1bdeb726249b.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/5a40/e8194a64d7ecd7976c43b74f715e3ffa64e60ed1bc545b6596359015e48d.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/fb0d/4a319dc07cc2c235a65736f2951f3180de31a1eb55c777c4f3b39023be8f.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/c784/2d4b44e2dc6d7149494aad76f24744be0f9e276baf47e38d952420df4bee.jpg',
                    ],
                    product_name: '예밀 통돌이 회전 걸레 세트(걸레3장) 리필 걸레',
                    product_price: 21800,
                    product_sale_price: 19620,
                    product_in_cnt: 1,
                    product_review_percent: 90,
                    product_review: 1257,
                    product_seller: '주식회사 와이케이버스',
                    sale_type: 'panSale',
                    product_category: 'Household',
                },
                {
                    product_id: 3,
                    product_img:
                        'https://image10.coupangcdn.com/image/vendor_inventory/6226/82912d3d55e1657617e49718bd6784b0e095bdaa5125c5bc8c50bc616703.jpg',
                    product_info_img: [
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/fce3/c16c1d76e71302d5e0d8406c5dea03baafb5b876308d2c4df11e9e9c4dda.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/2e17/627710df8145d8af34d3d5cc9a44a189cac4d2b2b5924936fc2f865c67ca.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/f8f8/5f648c8dfebed7f9dfaab057ad9b7cd91f64ed67c5716dd03c2635ba9a6a.jpg',
                        'https://thumbnail6.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/c8c5/604022625149141129e34c206b8e8c4e50046647b36cbd9020a2865007f8.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/28c2/625f755dca21808da25d20311413a0679947746fe2451d8b9d2c148e7b59.jpg',
                        'https://thumbnail10.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/608b/97da49525c1d4f11867c71c633b5bf07cdefcc44f61a3565db6878ae2984.jpg',
                        'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/db77/2d5b5de867018eec54775709e5c4b2d58c2d1cc6592897c6ecbc457ecf63.jpg',
                        'https://thumbnail9.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/58d0/5f86cba41109e747177dcff99992d35929092633b313c5670c65e02fde28.jpg',
                        'https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/fcc7/5db8ee1226abe8f1d380f6fe1f0f9f3f6b97669913870c29733639739187.jpg',
                    ],
                    product_name:
                        '엔젤가드 1+1 미니밀대걸레 스펀지 청소 스퀴지 물밀대 물걸레 주방 욕실 물기제거 v1',
                    product_price: 14900,
                    product_sale_price: 9000,
                    product_in_cnt: 1,
                    product_review_percent: 60,
                    product_review: 4,
                    product_seller: '주식회사 엔젤가드',
                    sale_type: 'panSale',
                    product_category: 'Household',
                },
            ],
        },
        HomeInterior: { name: '홈인테리어', product: [] },
        Electronics: { name: '가전디지털', product: [] },
        AutoAccessories: { name: '자동차용품', product: [] },
        Office: { name: '문구/오피스', product: [] },
        Health: { name: '헬스/건강식품', product: [] },
        SingleLife: { name: '싱글라이프', product: [] },
        WeddingPrep: { name: '결혼준비', product: [] },
        ArtCrafts: { name: '아트/공예', product: [] },
    },
    selProduct: {},
    allProducts: [],
};

export const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        isSelProduct: (state, action) => {
            state.selPanSale = state.PanSale.find((item) => item.id === action.payload);
        },
        getAllProducts: (state) => {
            Object.keys(state.Product).forEach((category) => {
                state.allProducts.push(...state.Product[category].product);
            });
        },
        DelAllProducts: (state) => {
            state.allProducts = [];
        },
    },
});

export const { isSelProduct, getAllProducts, DelAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
