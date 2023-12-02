let ptb2 = function (a: number, b: number, c: number) {
    let d = b*b - 4*a*c;
    if (d <= 0) return [];
    else if (d == 0) {
        let n = -b / (2 * a);
        return [n];
    } else {
        let n1 = -b - Math.sqrt(d) / (2 * a);
        let n2 = -b + Math.sqrt(d) / (2 * a);
        return [n1, n2];
    }
}

var a;
a = 7;