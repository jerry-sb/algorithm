const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.rear - this.front;
    }

    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        let removed = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        return removed;
    }
}

function solution(N, M, map) {
    const visited = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => [false, false])
    );
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue = new Queue();
    queue.enqueue([0, 0, 1, 0]);
    visited[0][0][0] = true;

    while (queue.size() > 0) {
        const [r, c, distance, isBreak] = queue.dequeue();

        if (r === N - 1 && c === M - 1) {
            return distance;
        }

        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nc < 0 || nr >= N || nc >= M) continue;

            if (map[nr][nc] === 0 && !visited[nr][nc][isBreak]) {
                visited[nr][nc][isBreak] = true;
                queue.enqueue([nr, nc, distance + 1, isBreak]);
            }

            if (map[nr][nc] === 1 && isBreak === 0 && !visited[nr][nc][1]) {
                visited[nr][nc][1] = true;
                queue.enqueue([nr, nc, distance + 1, 1]);  // 벽을 부순 상태로 탐색
            }
        }
    }

    return -1;
}

console.log(solution(N, M, map));
