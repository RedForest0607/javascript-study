// How to create new promise object
let promise = new Promise(function (resolve, reject) {
  //executor
});

// Promise 내부의 executor는 결과적으로 둘 중에서 하나는 콜백해야함
// resolve(value), reject(error)
// 처음 생성된 상태는 pending이고 resolve가 호출되면 `fulfilled`, reject가 호출되면 `rejected`"로 변한다.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("3초후 실행"));

// Promise 체이닝
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });

// this is NOT how promise chaining works

let wrongPromiseChain = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

//암시적 try catch
let tryCatch = new Promise((resolve, reject) => {
  throw new Error("에러발생");
}).catch(alert);

// 다음과 같이 작동한다
let sameAsTryCatch = new Promise((resolve, reject) => {
  reject(new Error("에러발생"));
}).catch(alert);

// 다음처럼 에러를 핸들링하고 .then이 호출되도록 할 수 있다.
// 실행 순서: catch -> then
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .catch(function (error) {
    alert("에러가 잘 처리되었습니다. 정상적으로 실행이 이어집니다.");
  })
  .then(() => alert("다음 핸들러가 실행됩니다."));

// 실행 순서: catch -> catch
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .catch(function (error) {
    // (*)
    if (error instanceof URIError) {
      // 에러 처리
    } else {
      alert("처리할 수 없는 에러");

      throw error; // 에러 다시 던지기
    }
  })
  .then(function () {
    /* 여기는 실행되지 않습니다. */
  })
  .catch((error) => {
    // (**)

    alert(`알 수 없는 에러가 발생함: ${error}`);
    // 반환값이 없음 => 실행이 계속됨
  });

// 다음과 같이 발생하는 에러에 관해서 catch할 수 없는 경우는 에러처리가 불가능하게 된다.
new Promise(function () {
  noSuchFunction(); // 존재하지 않는 함수를 호출하기 때문에 에러가 발생함
}).then(() => {
  // 성공상태의 프라미스를 처리하는 핸들러. 한 개 혹은 여러 개가 있을 수 있음
}); // 끝에 .catch가 없음!

//try-catch가 해결하지 못하는 에러의 경우는 전역 에러를 발생시킴,
// 브라우저에서는 이러한 전역 에러를 unhandledrejection 이벤트로 처리할 수 있음
window.addEventListener("unhandledrejection", function (event) {
  // unhandledrejection 이벤트엔 두 개의 특수 프로퍼티가 있습니다.
  alert(event.promise); // [object Promise] - 에러를 생성하는 프라미스
  alert(event.reason); // Error: 에러 발생! - 처리하지 못한 에러 객체
});

new Promise(function () {
  throw new Error("에러 발생!");
}); // 에러를 처리할 수 있는 .catch 핸들러가 없음

// 프라미스 API
// 프라미스에는 5개의 정적 메서드가 존재한다.

let promiseAll = Promise.all([promise, tryCatch]);

// 이터러블 객체의 프라미스들을 가져와서 