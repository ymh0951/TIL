import { Stack } from './Stack.mjs';

let stack = new Stack();

console.log('===== 첫번째 출력 =====');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log('===== 두번째 출력 =====');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
console.log(`empty: ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`empty: ${stack.isEmpty()}`);
console.log(stack.pop());