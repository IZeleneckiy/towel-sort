module.exports = function towelSort (matrix) {
    return matrix !== undefined && matrix.length > 0 ? matrix.reduce((a, b, i) => a.concat(i % 2 === 1 ? b.reverse() : b)) : [];
}
