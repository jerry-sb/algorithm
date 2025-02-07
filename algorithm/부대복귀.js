function solution(n, roads, sources, destination) {
    const answer = []
    const connect = Array.from({length: n + 1}, () => []);
    for (let road of roads) {
        const [r1, r2] = road;
        connect[r1].push(r2);
        connect[r2].push(r1);
    }

    const distance = Array.from({length: n + 1}, () => -1);
    const queue = [destination];
    distance[destination] = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        for (const cr of connect[node]) {
            if (distance[cr] === -1) {
                distance[cr] = distance[node] + 1;
                queue.push(cr);
            }
        }
    }

    for (const source of sources) {
        answer.push(distance[source]);
    }

    return answer;
}

console.log(solution(	3, [[1, 2], [2, 3]], [2, 3], 1))
