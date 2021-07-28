// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount){
    let goodsPrice = 0; // 0원으로 초기화
    let goodsName;
    for(let i = 0; i < data.length; i++){ // data 만큼 반복문 실행
        if(data[i].price <= amount) // 입력한 값보다 작거나 같은 가격 중에서
            if(data[i].price > goodsPrice) // 이전 가격보다 값이 크면
                goodsPrice = data[i].price; // 대입
    }

    if(goodsPrice === 0) { // 만약 처음그대로 0원이면
        return; // 아무것도 반환하지 않음
    }

    for(let i = 0; i < data.length; i++){
        if(data[i].price === goodsPrice){
            goodsName = data[i].name;
        }
    }

    return {name: goodsName, price: goodsPrice};
}