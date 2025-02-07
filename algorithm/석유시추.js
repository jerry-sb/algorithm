function solution(land) {
    const [n, m] = [land.length, land[0].length];
    const oilCluster = []
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited = Array.from({length: n}, () => Array(m).fill(false));

    const bfs = (startRow, endRow) => {
        const queue = [[startRow, endRow]];
        visited[startRow][endRow] = true;
        let clusterSize = 0;
        let columnsCovered = new Set();

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            clusterSize += 1;
            columnsCovered.add(c);

            for (let [dr,dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc] && land[nr][nc] === 1) {
                    queue.push([nr, nc]);
                    visited[nr][nc] = true;
                }
            }
        }

        return {
            columnsCovered, clusterSize
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const {clusterSize, columnsCovered} = bfs(i,j)
                oilCluster.push({clusterSize, columnsCovered})
            }
        }
    }


    let max = 0;
    for (let col = 0; col < m; col++) {
        let totalOil = 0;

        for (let {clusterSize, columnsCovered} of oilCluster) {
            if (columnsCovered.has(col)) {
                totalOil += clusterSize;
            }
        }

        max = Math.max(max, totalOil);
    }

    return max

}
