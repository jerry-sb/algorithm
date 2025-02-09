function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    // 1. 피벗을 Median of Three 방식으로 선택
    const pivotIndex = medianOfThree(arr, left, right);
    const pivot = arr[pivotIndex];

    // 2. 피벗을 가장 오른쪽으로 이동
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    // 3. 분할 수행
    const partitionIndex = partition(arr, left, right, pivot);

    // 4. 재귀적으로 왼쪽과 오른쪽 부분 정렬
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
}

// Median of Three: 첫 번째, 중앙, 마지막 요소 중 중간값 선택
function medianOfThree(arr, left, right) {
    const mid = Math.floor((left + right) / 2);
    const a = arr[left], b = arr[mid], c = arr[right];

    // 중간값 찾기
    if ((a > b) !== (a > c)) return left;
    if ((b > a) !== (b > c)) return mid;
    return right;
}

// Partition 함수 (로무토 방식)
function partition(arr, left, right, pivot) {
    let low = left;
    let high = right - 1; // 피벗을 제외한 마지막 위치까지 확인

    while (low <= high) {
        while (arr[low] < pivot) low++; // 피벗보다 큰 값을 찾을 때까지 증가
        while (arr[high] > pivot) high--; // 피벗보다 작은 값을 찾을 때까지 감소

        if (low <= high) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
    }

    // 마지막으로 피벗을 제자리에 배치
    [arr[low], arr[right]] = [arr[right], arr[low]];
    return low;
}

// 테스트 실행
const array = [8, 3, 7, 4, 9, 2, 6, 5];
quickSort(array);
console.log(array); // [2, 3, 4, 5, 6, 7, 8, 9]
