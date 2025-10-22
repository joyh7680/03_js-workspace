// *default export한 걸 import하기 -중괄호 없이 아무이름이나 붙여서 가져올 수 있음
// import returnMessage  from './09-module-message.js'
import getMessage from './09-module-message.js'; 
//vsc에서 희미하게 보이는경우 : 너 가져왔는데 왜 사용안해 이런뜻 -> console쳐주면됌
// * named export한거 import 
import {person} from './09-module-message.js'; 

console.log(person);
console.log(getMessage());