const num = [1,4,9,16];
// map : 배열의 요소를 가져와서 결과(return)값을 배열로 반환
const map1 = num.map(n=>n*2);
const map2 = num.map(n=>{n*2;}); // {}로 묶을시 return이 없으면 undefined로 들어감


// 배열 메소드.map 실습1
const num1 = [1,16,49,121];

const map3 = num1.map(n=>Math.sqrt(n));

// 짝수인 경우에는 나누기 2의값, 홀수인 경우에는 제곱근
const numresult = num1.map(x=>{
    if (x/2 == 0) {
        return x/2;
    }
    else {
        return Math.sqrt(x);
    }
});
// 위의 내용을 삼항 연산자로 바꿔서 실행하세요
// num1의 배열을 하나씩 빼와서 x로서 대입 2로 나눠서 나머지가 0이라면
// 2로나눈값을, 나머지가 0이 아니라면 제곱근 값을 리턴받아서
// 새로 배열 생성
let numresult2 = num1.map(x=>{
    return x%2==0 ? x/2 : Math.sqrt(x)
});
console.log(numresult2);

// 삼항 연산자
let a = 10;
let b = 5;
let max = a>b ? a : b;

if (a>b) {
    max = a;
}
else {
    max = b;
}

// 삼항연산자 실습1
let accessAllowed;
let age = 30;

if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}

accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

// 스프레드 연산자 ... : 배열 혹은 객체의 값들을 하나씩 빼와서 사용
const spread1 = [1,2,3];
const spread2 = [4,5,6];
const spread_1 = [spread1, spread2];
const spread_2 = [...spread1, ...spread2];
console.log(spread_1);
console.log(...spread_1);
console.log(spread_2);
// concat 메소드를 쓰면 두개의 배열을 더하게된다.
const numplus = spread1.concat(spread2);
console.log(numplus);

// 스프레드 연산자와 구조화
// 위에 작성한 spread_2 배열을 구조화
// ...rest를 적으면 배열안의 남은것들은 자기가 들고감
const [one, two, ...rest] = spread_2;
console.log(rest);

// 스프레드 연산자 실습 1
const myVehicle = {
    brand : 'Ford',
    model : 'Mustang',
    color : 'red'
}
const updateMyVehicle = {
    type : 'car',
    year : 2021,
    color : 'yellow'
}

const myUpdateVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdateVehicle);