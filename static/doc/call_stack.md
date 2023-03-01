# JavaScript Call Stack

### What is Call Stack?

자바스크립트에서는 함수가 `호출될 때`, 함수를 `Call Stack`이라는 공간에 넣는다.  
`Call Stack`은 자바스크립트에서 호출된 함수들이 차례로 쌓이는 부분을 말한다. 호출된 함수들 내부에 다른 함수가 호출된다면 그 함수들도 `Call Stack`에 들어가게 된다.

### Example
```javascript
function a() {
	
    console.log('a');
	
    function b() {
            console.log('b');
    }

    b();
}

a();
```
다음과 같은 예시 코드의 경우 콜 스택은  
`[ a() , log() , b(), log() ]`로 쌓이게 되며
위에서 부터 차례로 실행되게 된다.  
  
자바스크립트는 다음과 같은 호출스택을 통해서 함수의 실행 순서를 관리하게된다.
