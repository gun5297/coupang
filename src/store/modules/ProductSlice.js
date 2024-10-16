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
                },
                {
                    product_id: 3,
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
                },
                {
                    product_id: 4,
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
                },
                {
                    product_id: 5,
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
                },
            ],
        },
        UnisexClothing: { name: '남녀 공용 의류', product: [] },
        KidsFashion: { name: '유아동패션', product: [] },
        Beauty: { name: '뷰티', product: [] },
        MaternityBaby: { name: '출산/유아동', product: [] },
        Food: { name: '식품', product: [] },
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
                },
            ],
        },
        HomeInterior: { name: '홈인테리어', product: [] },
        Electronics: { name: '가전디지털', product: [] },
        SportsLeisure: { name: '스포츠/레저', product: [] },
        AutoAccessories: { name: '자동차용품', product: [] },
        BooksMedia: { name: '도서/음반/DVD', product: [] },
        ToysHobbies: { name: '완구/취미', product: [] },
        Office: { name: '문구/오피스', product: [] },
        PetSupplies: { name: '반려동물용품', product: [] },
        Health: { name: '헬스/건강식품', product: [] },
        DomesticTravel: { name: '국내여행', product: [] },
        OverseasTravel: { name: '해외여행', product: [] },
        RocketLuxury: { name: '로켓럭셔리', product: [] },
        RocketInstall: { name: '로켓설치', product: [] },
        CoupangPremium: { name: '쿠팡 프리미엄', product: [] },
        HomeDecor: { name: '공간별 집꾸미기', product: [] },
        Healthcare: { name: '헬스케어 전문관', product: [] },
        CoupangOnly: { name: '쿠팡 Only', product: [] },
        SingleLife: { name: '싱글라이프', product: [] },
        MusicalInstruments: { name: '악기전문관', product: [] },
        WeddingPrep: { name: '결혼준비', product: [] },
        ArtCrafts: { name: '아트/공예', product: [] },
        DustProducts: { name: '미세먼지용품', product: [] },
        HomeCafe: { name: '홈카페', product: [] },
        SilverStore: { name: '실버스토어', product: [] },
        PetDoctor: { name: '로켓펫닥터', product: [] },
    },
    selProduct: {},
};
/* 
    {
            id: 1,
            img: '/images/PanSale/img1.jpg',
            category: '',
            name: '오스템 뷰센 더블와이드 칫,product:[]솔',
        },
        { id: 2, img: '/images/PanSale/img2.jpg', category: '', name: '' },
        { id: 3, img: '/images/PanSale/img3.png', category: '', name: '' },
        { id: 4, img: '/images/PanSale/img4.jpg', category: '', name: '' },
        { id: 5, img: '/images/PanSale/img5.jpg', category: '', name: '' },
*/

export const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        isSelProduct: (state, action) => {
            state.selPanSale = state.PanSale.find((item) => item.id === action.payload);
        },
    },
});

export const { isSelProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
