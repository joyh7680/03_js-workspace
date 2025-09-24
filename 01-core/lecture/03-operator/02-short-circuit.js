/**
 * 📌 단축 평가
 * 1. Short-Circuit Evaluation
 * 2. 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
 *     → 논리 연산자의 평가 결과가 확정 된 경우 나머지 평가 과정이 생략됨 
 * 3. 종류
 *   1) 논리 AND (&&)  
 *       → 왼쪽 피연산자가 falsy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 truthy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 *   2) 논리 OR (||)
 *       → 왼쪽 피연산자가 truthy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 falsy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 */

// && 연산자 (논리 AND)
// 규칙: 좌항이 falsy → 좌항 반환, 좌항이 truthy → 우항 반환
console.log(false && 'banana'); // false
console.log(0 && 'banana'); // 0
console.log('' && 'banana');// ''
// 좌항이 falsy (false, 0, '', null, undefined, NaN)라서 좌항 그대로 반환

/*규칙: && (AND 연산자)
좌항이 falsy → 좌항 반환, 우항은 평가하지 않음
좌항이 truthy → 우항 반환
여기서 falsy 값: false, 0, '', null, undefined, NaN
truthy 값: 그 외 나머지 값
*/

console.log(true && 'banana');    //좌항 true → truthy
                                  //따라서 우항 'banana'가 반환
                                  //출력: 'banana'
console.log(10 && 'banana');      //출력: 'banana'
console.log('apple' && 'banana'); //출력: 'banana'


/*
규칙: || (OR 연산자)
좌항이 truthy → 좌항 반환, 우항은 평가하지 않음
좌항이 falsy → 우항 반환
여기서 falsy 값: false, 0, '', null, undefined, NaN
truthy 값: 그 외 나머지 값
*/

// || - 좌항이 truthy 값일 경우 
console.log(true || 'banana');     //true 출력
console.log(10 || 'banana');       //10 출력
console.log('apple' || 'banana');  //apple 출력

// || - 좌항이 falsy 값일 경우 
console.log(false || 'banana');  //banana 출력
console.log(0 || 'banana');      //banana 출력
console.log('' || 'banana');     //banana 출력

// 적용 사례1. 조건문을 간결하게 표현할 때 사용 
// 로딩중 상태일 경우 "로딩중입니다..." 출력
let isLoading = true;  //isLoading 변수에 true 할당 → 로딩 중 상태
/*
if(isLoading) {
  console.log('로딩중입니다...');
}
*/
isLoading && console.log('로딩중입니다...');
/**&& 연산자 사용
규칙:좌항이 falsy → 좌항 반환, 우항 평가 안 함
     좌항이 truthy → 우항 반환/실행
여기서 좌항 isLoading = true → truthy
따라서 우항 console.log('로딩중입니다...') 실행
출력: '로딩중입니다...'
*/

// 사용자 입력값이 존재할 경우 해당 값 출력
let input = '안녕';
input && console.log(`사용자 입력값: ${input}`); // 출력) 사용자 입력값: 안녕

// 적용사례2. 기본값 설정 
// 변수 = 입력값 || default값;
// 입력값이 존재하지 않을 경우 시스템 상의 기본값 대입 
let value = '' || '입력안됨'; //좌항 '' → falsy
//좌항이 falsy이므로 우항 '입력안됨' 반환
console.log(value);  //출력: '입력안됨'

let age = 0 || 20;
console.log(age); //출력: 20