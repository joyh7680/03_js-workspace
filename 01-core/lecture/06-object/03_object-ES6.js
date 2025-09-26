
/*
  * 프로퍼티 값 단축 구문 
  1) ES6에서는 특정 변수를 객체의 프로퍼티로 바로 정의할 수 있음
  2) 단, 프로퍼티명(키)은 변수 이름으로 부여됨 
*/

let id = 'p-0001';
let price = 30000;

// 프로퍼티 값 단축 구문 x
let product1 = {
  id: id,
  price: price
};
console.log(product1);

// 프로퍼티 값 단축 구문 o
let product2 = {id, price};
console.log(product2);


/*
  * 구조 분해 할당 
  1) Destructuring Assignment
  2) 객체의 각 프로퍼티를 해체하여 그 값을 개별 변수에 담을 수 있게 하는 문법 
  3) 단, 변수명을 객체의 프로퍼티명과 동일하게 맞춰야됨 (순서는 상관 없음)
  4) 형식
     {변수1, 변수2, ..} = 객체;
*/
const car = {
  maker: 'bmw',
  model: 'X6',
  year: 2025,
};

// 직접 대입 방법
/*
const maker = car.maker; // 'bmw'
const model = car.model; // 'X6'
*/

// 구조 분해 할당 ****
const { model, maker } = car;
console.log(model);
console.log(maker);


/*
  * 메소드 단축 
  ES6에서는 객체 내의 메소드 정의시 function 키워드를 생략한 축약 표현을 사용할 수 있음
*/
let dog1 = {
  name: '뽀삐', 
  eat: function(food) {

  }
}

let dog2 = {
  name: '두부',
  eat(food) { // 메소드 단축 구문

  }
}
