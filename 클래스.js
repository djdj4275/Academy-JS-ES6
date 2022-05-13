console.log('hello world');

// for문
// var = 전역범위
// let = 스코프(유효범위)가 존재하고 값을 재할당 할수있다
// const = 스코프(유효범위)가 존재하고 값을 재할당 할수없다
for (let i=0; i<3; i++) {
    console.log(i);
}

// 자바스크립트 객체
let user = {
    name : 'John',
    age : '30'
};
// 함수 프로토타입
function User(name, age) {
    this.name = name;
    this.age = age;
}
// 함수로 생성한 새로운 객체(인스턴스)
let user1 = new User('jane', 30);
console.log(user);
console.log(user1);

// 클래스로 생성한 객체
class Car {
    // 클래스에서 속성 값을 할당할때 사용하는 메소드
    constructor(name) {
        this.brand = name;
    }
    // 메소드는 동일하게 작성
    printbrand() {
        console.log(this.brand);
    }
}
let mycar = new Car('Ford');
mycar.printbrand();

// 클래스 실습1
class UserClass {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name + '님';
    }
    set name(value) {
        if(value.length < 1) {
            console.log('이름에 빈값은 안됩니다');
            return;
        }
        this._name = value;
    }
    sayhi(name, age) {
        console.log(`반갑습니다 ${this.name}입니다`);
    }
}
let user2 = new UserClass('홍길동', 30);
user2.sayhi();
user2.name = '';
console.log(user2.name);

// 클래스실습2
class Dog {
    constructor(breed, name, age) {
        this.breed = breed;
        this.name = name;
        this.age = age;
    }
    sayhi() {
        console.log(`${this.breed}인 ${this.name}입니다`);
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const mydog = new Dog('진돗개', '백구', 1)
mydog.sayhi()
mydog.setName('마루');
console.log(mydog.getName());

// 클래스의 상속
// 부모 클래스
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은 ${this.speed}로 달립니다`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}가 멈췄습니다`);
    }
}

// extends를 이용해서 상속받는 자식 클래스
class Rabbit extends Animal{
    constructor(name, earLength) {
        // 부모클래스에서 받아온 name값은 super를 이용하여 생성.
        super(name);
        // 추가된 속성은 this를 이용하여 생성
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name}가 숨었습니다`);
    }
    // 부모클래스에서도 있는 stop 메소드를 오버라이딩
    stop() {
        // 부모에 있는 stop을 가져와서 출력 - super 키워드 사용
        super.stop();
        // 자기 자신에 있는 hide를 가져와서 출력 - this키워드 사용
        this.hide();
    }
}

let rabbit = new Rabbit('흰 토끼',10);
rabbit.run(5); // 부모클래스의 메소드 사용
rabbit.hide(); // 자식클래스의 메소드 사용
rabbit.stop(); // 자식클래스에서 오버라이딩한 메소드가 출력
console.log(rabbit.earLength);

// 클래스 상속 실습문제 1
class Student extends UserClass {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    study() {
        console.log(`${this.major}를 공부합니다`);
    }
    sayhi() {
        console.log(`${this.major}를 공부하는 ${this.name}학생입니다`);
    }
}

let student = new Student('홍길동',30,'코딩');
student.study();
student.sayhi();

// 클래스 상속 실습 문제 2 (Dog을 상속받는 HouseDog)
class HouseDog extends Dog {
    constructor (breed,name,age,address) {
        super(breed,name,age);
        this.address = address;
    }
    intro() {
        super.sayhi();
        console.log(`${this.address}에 살고 있습니다`);
    }
}

let housedog = new HouseDog('진돗개','마루',30,'부산');
housedog.intro();