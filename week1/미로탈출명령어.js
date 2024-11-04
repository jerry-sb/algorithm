function solution(n, m, x, y, r, c, k) {
    const distance = Math.abs(x - r) + Math.abs(y - c);
    if (distance > k || (k - distance) % 2 !== 0) {
        return "impossible";
    }

    let result = "";
    let ck = 0;

    


}
