/**
 * 📌 ES11에 추가된 연산자
 * 1. null 병합 연산자 (??)
 *   1) nullish coalescing operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 평가하여 반환 
 *   3) 기존에 좌항이 falsy 값일 경우 오른쪽 피연산자를 평가했던 || 와 달리 
 *      0, '', false 값은 유효한 값으로 처리함 
 * 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])
 *   1) optional chaining operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환, 
 *      그렇지 않으면 우항의 프로퍼티 참조를 이어감 
 *   3) null 병합 연산자와 동일하게 0, '', false 값은 유효한 값으로 처리함
 *   4) 주로 객체의 프로퍼티 참조할때 사용 
 */

// 1. null 병합 연산자 (??)
// 좌항이 null 또는 undefined 일 때만 우항 반환
// 좌항이 0, '', false 등 다른 falsy 값이면 좌항 그대로 사용
// 즉, ||와 달리 0이나 빈 문자열도 유의미한 값으로 판단
const grade = 0 ?? 50; // 좌항 0 → falsy이지만 ??는 null/undefined만 체크
// 따라서 좌항 0 그대로 사용
console.log(grade);   // 출력 : 0


// 사용자 입력값(선택사항) 기록
//const input = '' || 'hello';
const input = undefined ?? 'hello'; //좌항: undefined → nullish 값 (null 또는 undefined)
console.log(input); //출력: 'hello'
/*
?? 연산자 규칙:
좌항이 null 또는 undefined → 우항 반환
좌항이 다른 값(0, '', false 등) → 좌항 그대로 사용
여기서 좌항이 undefined → 우항 'hello' 반환
input에 'hello' 할당
*/


// 2. 옵셔널 체이닝 연산자 

// 사용자가 입력한 문자열의 길이(문자열.length) 출력 
// 'apple'  =>  5
// ''       =>  0
// null,undefined => undefined

let str = null; //변수 str에 null 할당
//console.log(str.length);       // 1) str이 null → str.length 접근 시 TypeError 발생
                                // null이나 undefined는 프로퍼티 접근 불가

//console.log(str && str.length); // 2) 단축평가(&&) 사용 : 빈문자열이 falsy 값으로 취급되서 length 값 확인 불가

//3) 옵셔널 체이닝(?.) 사용
console.log(str ?. length);  // 출력: undefined
// 규칙: ?. 왼쪽이 null 또는 undefined면 → undefined 반환, 오류 발생 X
// str이 null → str?.length → undefined
// 장점: null/undefined 안전하게 접근 가능