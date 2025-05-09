object Solution {
    def solution(a: Int, b: Int): Int = {
        return Math.max( (a.toString+b.toString).toInt, (b.toString+a.toString).toInt)
    }
}