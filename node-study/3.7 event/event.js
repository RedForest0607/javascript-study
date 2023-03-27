import {EventEmitter} from 'node:events';

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});

myEvent.on('event2', () => {
    console.log('이벤트 2');
});

// 이벤트 하나에 여러개의 콜백을 추가
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

// 한번만 실행되는 이벤트
myEvent.once('event3', () => {
    console.log('이벤트3');
});
myEvent.emit('event3');
myEvent.emit('event3');

// 이벤트 리스너 전부삭제
myEvent.on('event4', () => {
    console.log('이벤트4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

// 이벤트 리스너 하나 삭제
const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));