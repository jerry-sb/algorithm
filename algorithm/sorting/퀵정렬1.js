function middle_index(arr, low, high) {
    if (high - low < 2) return low;

    const mid = Math.floor((low + high) / 2);
    const [a, b, c] = [arr[low], arr[mid], arr[high]];

    if ((a >= b && a <= c) || (a >= c && a <= b)) return low;
    if ((b >= a && b <= c) || (b >= c && b <= a)) return mid;
    return high;
}

function partition(arr, low, high) {
    const pivot_index = middle_index(arr, low, high);
    const pivot_value = arr[pivot_index];

    // 피벗을 맨 뒤로 보냄 (스왑)
    [arr[pivot_index], arr[high]] = [arr[high], arr[pivot_index]];

    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot_value) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // 스왑
        }
    }

    // 피벗을 올바른 위치로 이동
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

function quick_sort(arr, low, high) {
    if (low < high) {
        const pivot_index = partition(arr, low, high);

        // 좌측 정렬
        quick_sort(arr, low, pivot_index - 1);
        // 우측 정렬
        quick_sort(arr, pivot_index + 1, high);
    }
}

// 테스트
const arr = [8, 3, 7, 4, 9, 2, 6, 5];
quick_sort(arr, 0, arr.length - 1);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]
