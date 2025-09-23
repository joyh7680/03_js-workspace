/**
 * 📌 암묵적 타입 변환 vs 명시적 타입 변환
 * 1. 암묵적 타입 변환 (implicit-coercion)
 *   1) 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것
 *   2) 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능
 * 2. 명시적 타입 변환 (explicit-coercion)
 *   1) 개발자의 의도에 따라 값의 타입을 변환시키는 것
 *   2) 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
 *      빌트인 메소드를 사용하는 방법이 있음
 */


// 1.문자열타입(string)으로 변환

// 1) 문자열 연결 연산자(+) : 암묵적 변환
console.log(10 + '20'); //'1020' (숫자 10이 문자열 '10'으로 변환되어 연결됨)
console.log(true + 'hi!!'); //'truehi!!' (불리언 true가 문자열 'true'로 변환되어 연결됨)

// 2) 템플릿 리터럴의 표현식 삽입 : 암묵적 변환
console.log(`결과: ${10 + 20}`); //'결과: 30' (숫자 30이 문자열 '30'으로 변환되어 삽입됨)

// 3) String() 생성자 함수 이용 : 명시적 변환
// console.log(10.length); //undefined (숫자에는 length 속성이 없음)
console.log(String(10)); //'10' (숫자 10이 문자열 '10'으로 변환됨)
console.log(String(10).length); //2 (문자열 '10'의 길이 2 반환됨)
console.log(String(true)); //'true' (불리언 true가 문자열 'true'로 변환됨)


// 4) toString() 메소드 이용 : 명시적 변환
console.log((10).toString()); //'10' (숫자 10이 문자열 '10'으로 변환됨)

// 2. 숫자타입 (number)으로 변환

//1) 산술 연산자(-, *, /, %)에 의한 변환 : 암묵적 변환
// 산술 연산자에서의 피연산자는 모두 숫자여야됨
// 숫자가 아닌 피연산자는 숫자타입으로 암묵적으로 변환
console.log(10 - '5'); // 10 - 5
console.log(10 * '5'); // 10 * 5
console.log(10 / '5'); // 10 / 5
console.log(10 % '5'); // 10 % 5

console.log(10 % `JavaScript`); //NaN (JavaScript -> NaN -> 숫자로 변환 불가)

// 2) 비교연산자에 의한 변환 - 암묵적 변환
console.log(10 > '5'); // 10 > 5
console.log(`a` < 'b'); // 'a' < 'b' (문자열은 사전순으로 비교됨)

// 3) Number() 생성자 함수 이용 - 명시적 변환
console.log(Number('10')); // 10 (문자열 '10'이 숫자 10으로 변환됨)
console.log(Number(`10.53`)); // 10.53 (문자열 '10.53'이 숫자 10.53으로 변환됨)
console.log(Number(`javascript`)); // NaN (문자열 'javascript'는 숫자로 변환 불가)
console.log(Number(true)); // 1 (불리언 true가 숫자 1로 변환됨)
console.log(Number(false)); // 0 (불리언 false가 숫자 0로 변환됨)


// 4) parseInt(), parseFloat() 함수 이용 - 명시적 변환
console.log(parseInt('10')); 
console.log(parseFloat(`10`)); 

console.log(parseInt('10.01')); // 무조건 정수 형태 , 소수점 버림
console.log(parseFloat(`10.01`)); // 실수 그대로 유지 시켜줌 

console.log(parseInt(`10000.1원`)); 
console.log(parseFloat(`10000.1원`)); //parseInt,parseFloat : 문자열 맨 앞부터 숫자로 변환 가능한 부분까지만 변환
console.log(Number(`10000.1원`)); //문자열 전체가 숫자로 변환 가능한 형태여야 변환됨

// 3. 논리 타입 (boolean)으로 변환

// 1) 암묵적 변환

/*
  if (조건식 => 참/거짓) {
    참일 경우에만 실행할 구문
  }
*/

if(true) {
  console.log('if(true)'); 
}

if(false) {
  console.log('if(false)'); 
}

/*
  자바스크립트엔진에서는 boolean 타입(true/false)이 아닌 값들을
  true값 (참으로 평가되는 값), false값 (거짓으로 평가되는 값)으로 구분
  true값은 암묵적으로 true로 변환, false값은 암묵적으로 false로 변환
*/

if(undefined) console.log('if(undefined)'); // false
if(null) console.log('if(null)'); // false
if(10) console.log('if(10)'); // true
if(0) console.log('if(0)'); // false
if(NaN) console.log('if(NaN)'); // false
if('안녕') console.log("if('안녕')"); // true
if('') console.log("if('')"); // false (빈 문자열)

// 정리. false, undefined, null, 0, NaN, '' 은 false값
// 그 외의 값들은 모두 true값
