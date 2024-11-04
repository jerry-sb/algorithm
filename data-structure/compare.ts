import { Linked } from "./linked";

function measureInsertionSpeed(arraySize: number) {
    console.log(`\n=== Array vs Linked List Insertion Speed for ${arraySize} elements ===`);

    // 배열 시작 부분에 요소 추가 시간 측정
    let array: number[] = [];
    console.time("Array Start Insertion");
    for (let i = 0; i < arraySize; i++) {
        array.unshift(i);
    }
    console.timeEnd("Array Start Insertion");

    // 링크드 리스트 시작 부분에 요소 추가 시간 측정
    let linkedList = new Linked<number>();
    console.time("Linked List Start Insertion");
    for (let i = 0; i < arraySize; i++) {
        linkedList.insertAt(i, 0);
    }
    console.timeEnd("Linked List Start Insertion");

    // 배열 중간에서 요소 삭제 시간 측정
    array = Array.from({ length: arraySize }, (_, i) => i);
    console.time("Array Middle Deletion");
    for (let i = 0; i < arraySize / 2; i++) {
        array.splice(array.length / 2, 1);
    }
    console.timeEnd("Array Middle Deletion");

    // 링크드 리스트 중간에서 요소 삭제 시간 측정
    linkedList = new Linked<number>();
    for (let i = 0; i < arraySize; i++) {
        linkedList.add(i);
    }
    console.time("Linked List Middle Deletion");
    for (let i = 0; i < arraySize / 2; i++) {
        linkedList.deleteAt(Math.floor(linkedList.size / 2));
    }
    console.timeEnd("Linked List Middle Deletion");
}

measureInsertionSpeed(10000);
