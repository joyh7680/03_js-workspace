
/*
module
- 개발 규모가 커질수록 파일들이 분리되서 관리됨
분리된 파일 === 모듈
-각 파일에 정의되어 있는 함수, 변수, 객체 등등 내보낼 수 있음 (export)
-특정 모듈의 export하고 있는 값을 가져와서 사용할 수 있음 (import)
*/

// *named export : 외부에서 내보낸 "변수의 이름을 참조"해서 사용할 수 있도록 하는 구문 , 현재 모듈에서 여러개의 변수를 export할때 주로 사용

// 방법1) 선언문 앞에 export 붙이기 . 단점 양이 많을 때 매번 export를 붙여야함. 불편함/ 장점: 단순하다
export const name = "홍길동";
export const age = "40";
// 방법2) 미리 선언을 해두고 한꺼번에 export 하는 방법
const hobby = ["running", "cooking"];
const dream = "programmer";
export{hobby, dream}; //객체로 내보내진다고 보면 됌