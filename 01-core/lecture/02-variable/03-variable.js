/**
 * 📜 개발시 사용하는 4가지 이름 규칙 
 * 1. Camel Case
 *   1) 각 단어의 시작 문자를 대문자로 작성해서 연결하는 방식
 *   2) 단, 첫 단어의 시작 문자는 소문자로 작성
 *   2) 예시 : userProfileImage
 * 2. Pascal Case
 *   1) Camel Case와 동일하나 첫 단어의 시작 문자도 대문자로 작성하는 방식
 *   2) 예시 : UserProfileImage
 * 3. Snake Case
 *   1) 언더스코어(_)를 이용해서 각 단어를 연결하는 방식
 *   2) 주로 상수에 대한 이름 작성시 사용 (대문자와 함께)
 *   2) 예시 : user_profile_image, USER_PROFILE_IMAGE
 * 4. Kebab Case
 *   1) 하이픈(-)을 이용해서 각 단어를 연결하는 방식
 *   2) Dash Case라고도 함
 *   3) 주로 프론트 웹 개발(HTML, CSS)시 사용
 *   2) 예시 : user-profile-image
 */

/**
 * 📌 JavaScript 변수 
 * 1. 특정 값을 저장하는 저장소
 * 2. 변수 선언 위치에 따라 해당 변수의 사용 가능 범위가 다름
 * 3. 변수 명명 규칙 (Naming Convention)
 *   1) 직관적으로 변수의 역할이 명확하게 드러나도록 작성 
 *   2) 여러 단어로 구성 시 카멜 케이스(camelCase)로 작성
 *   3) 영문자, 숫자, 특수문자($,_)만 사용 가능
 *   4) 변수명은 영문자로 시작하는 것이 일반적 (숫자로 시작하는 것은 불가능)
 *   5) 예약어 사용 불가능 (예 : for, if, class, ..)
 * 4. 변수 선언 방법
 *   1) var
 *   2) let
 *   3) const
 * 5. 작성법
 *   1) 초기화 없이 선언만 할 경우 
 *       var|let|const 변수명;
 *   2) 선언과 동시에 초기화 할 경우 
 *       var|let|const 변수명 = 값;
 * 
 * ‼️ 세가지 선언 방법 특징
 * ┌───────┬─────────────┬────────┬─────────────┬────────┬───────────┐
 * │       │    scope    │ 재선언 │   할당전    │ 재할당 │   용도    │
 * ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
 * │  var  │ 함수 스코프 │  가능  │  undefined  │  가능  │ 함수 변수 │
 * ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
 * │  let  │ 블럭 스코프 │ 불가능 │  undefined  │  가능  │ 지역 변수 │
 * ├───────┼─────────────┼────────┼─────────────┼────────┼───────────┤
 * │ const │ 블럭 스코프 │ 불가능 │ 사용 불가능 │ 불가능 │   상수    │
 * └───────┴─────────────┴────────┴─────────────┴────────┴───────────┘
 */


// 1. var 

 // 특징1: 할당전 - undefined (초기화없이 선언 가능)
var userId; //변수를 선언만 했음. 
console.log(userId);  //초기화하지 않았기 때문에 값은 undefined.

 // 특징2: 재선언 - 가능 (동일 스코프에서 중복 선언 가능)
var userId = 'user01';
//var는 같은 스코프 안에서 중복 선언 가능.
// userId에 'user01'을 할당함.

 // 특징3: 재할당 - 가능 
userId = 'user02';    //var로 선언한 변수는 재할당 가능.
console.log(userId);  //출력: 'user02'


// 특징4. scope - 함수 스코프 (선언된 위치가 속해있는 function에서 사용 가능)
function varScopeTest() {
  var userPwd = 'pass02'; //userPwd → 함수 안에서 선언된 변수, 함수 안 어디서든 사용 가능.

  if(true) {
    var userAge = 10; //userAge → if 블록 안에서 선언했지만, var는 함수 스코프라서 블록이 아니라 함수 전체에서 접근 가능.
  }

  console.log(userPwd);
  console.log(userAge); 
}
varScopeTest();  

/*출력
pass02
10
*/


/**
 * 📌 var
 * 1. 자유롭게 변수 선언 및 사용할 수 있는 장점이 있음 (자유도가 높음)
 * 2. 중복된 변수가 남발할 수 있고 의도치 않게 값이 변경 될 수 있음
 * 3. 내가 이미 선언해둔 변수인데 다른 팀원이 동일한 이름의 변수를 모르고 사용해버리면
 *    의도치 않게 내 변수의 값이 바뀜 (오류도 안남)
 * 4. 보완되서 ES6부터 도입된게 let, const (권장)
 */


// 2. let
// 특징1. 할당전 - undefined (초기화없이 선언 가능)
let userName; //변수 선언만 함. 
console.log(userName);     // 초기화하지 않았으므로 undefined
                           //  출력: undefined.

// 특징2. 재선언 - 불가능 (동일 스코프에 중복 선언 불가능)
//let userName = '홍길동'; //let은 같은 스코프 안에서 중복 선언 불가능.
                            //만약 주석을 제거하면 에러 발생

// 특징3. 재할당 - 가능
userName = '홍길동'; //let 변수는 재할당 가능.
userName = '고길동';        
console.log(userName); //출력: '고길동'

// 특징4. scope : 블럭스코프 (선언된 블럭에서만 사용 가능)
function letScopeTest() {
  let userAddr = '서울'; //userAddr → 함수 내 어디서든 사용 가능 (함수 안에서 선언됐으니까).
  if(true) {
    let userAge = 10; //userAge → if 블록 안에서 선언. let은 블록 스코프, 그래서 블록 밖에서 접근 불가.
  }
  console.log(userAddr);
  //console.log(userAge);  //만약 console.log(userAge) 주석 제거하면 에러 발생
}
letScopeTest();


// 3. const - 상수(변경이 불가능한 값)를 선언하기 위해 사용되는 키워드

 // 특징1. 할당전 - 사용 불가능 (초기화를 해야만 사용 가능)
//const userHobby;       //const 변수는 선언과 동시에 초기화가 필수.
                        // 초기화하지 않고 사용하면 에러 발생   
                        
const userHobby = '요리';   //userHobby라는 상수를 '요리'로 선언하고 초기화함.

 // 특징2. 재선언 - 불가능
//const userHobby = '등산';  //같은 스코프에서 const는 재선언 불가능.
                            // 제거하면 에러 발생

// 특징3. 재할당 - 불가능
//userHobby = '등산';         //const 변수는 재할당 불가능.
                              // 제거하면 에러 발생
console.log(userHobby); //출력: '요리'


// 특징4. scope - 블럭스코프

 
/**
 * 📌 let, const 
 * 1. ES6 문법으로 작성시 var 키워드 대신 사용하는 키워드 
 * 2. 재할당이 필요한 경우에 한해 let 키워드를 사용하고 변수의 스코프는 최대한 좁게 만들어 쓰는걸 권장
 * 3. 변경이 발생하지 않고 읽기 전용으로 사용하는 원시값과 객체에는 const 키워드를 사용하는걸 권장
 *    (const 키워드는 재할당을 금지하기 때문에 var, let 보다 안전함 )
 */
 

/**
 * 📌 호이스팅(hoisting)
 * 1. 끌어올린다고 표현
 * 2. JavaScript 엔진이 해당 코드를 실행하기 전에
 *    var로 선언된 변수나 함수 선언문 등을 해당 scope내의 맨 상단으로 끌어올리는 것처럼 보이는 현상 
 * 3. 특징
 *   1) 특정 범위 내에서 변수가 선언된 줄 이전에 해당 변수값을 사용할 수 있음 
 *   2) 특정 범위 내에서 변수가 선언된 줄 이전에 해당 변수를 참조할 수 있음 (만일 초기화가 되어있지 않을 경우 undefined)
 *   3) 변수 선언과 동시에 초기화 하는 구문에서 변수 선언문만 분리해서 먼저 처리함 
 *   4) 함수가 선언된 줄 이전에 해당 함수를 호출 할 수 있음 
 */

// 1) var 변수 호이스팅 

                  // 실행순서    값
console.log(x);   //   2       undefined
var x;            //   1
x = 10;           //   3
console.log(x);   //   4         10
//첫 번째 console.log(x) → 선언은 되었지만 아직 값 할당 전 → undefined.
// 두 번째 console.log(x) → 값 할당 후 → 10.

console.log(y);           //  2 (undefined)
var y = 20;  // var y;    //  1
             // y = 20;   //  3
console.log(y);           //  4 (20)
//var y = 20는 내부적으로 var y; (선언) + y = 20; (할당)로 분리되어 처리됨.

function hoistingTest(){
  console.log(a);   // undefined (a 선언만 호이스팅, 값 할당 전)
  b = 20;           // b가 이미 함수 최상단 var b로 선언되어 있음 → 재할당
  console.log(b);  // 20
  var a = 100;
  console.log(a);  // 100
  if(true) {
    console.log(b); // 20 (아직 if 안에서 b 재할당 전)
    var b = 200;    // if 블록 안 var b → 함수 스코프이므로 실제로는 이미 함수 최상단 b
  }
  console.log(b);  // 200
}
hoistingTest();

// 2) 함수 호이스팅
let userName = "홍길동"; //userName을 선언하고 "홍길동"으로 초기화.
                        // let은 블록 스코프 변수이며 선언 전에 접근하면 ReferenceError (Temporal Dead Zone 발생).
fnHoistingTest(); //함수 선언문(Function Declaration) 은 호이스팅되므로, 선언 전에 호출 가능.
                  // 따라서 에러 없이 함수가 실행됨.
function fnHoistingTest() {       //함수 내부:
  console.log(userName);          //console.log(userName); → 전역 변수 userName이 이미 선언 및 초기화되어 있으므로 접근 가능. 출력: "홍길동"
  console.log("함수 호이스팅");   //console.log("함수 호이스팅"); → 정상 출력: "함수 호이스팅"
}


/**
 * 📌 전역 변수 vs 지역 변수
 * 1. 전역 변수
 *   1) 특정 함수 밖에 선언된 변수
 *   2) 전역에서 해당 변수를 사용할 수 있음 
 * 2. 지역 변수
 *   1) 특정 블럭(함수, 제어문 등)에서 선언된 변수
 *   2) 선언된 영역에서만 해당 변수를 사용할 수 있음 (var는 제외)
 */

// 전역변수 : 함수 밖에서 선언된 변수
console.log(x);
console.log(y); 
console.log(userId);
console.log(userName);

// 지역변수 : 함수나 블록 안에서 선언된 변수
function test() {
  let userAddr = "서울";
  console.log(userAddr); // 지역변수 : 함수 안에서 접근 가능
}

test();