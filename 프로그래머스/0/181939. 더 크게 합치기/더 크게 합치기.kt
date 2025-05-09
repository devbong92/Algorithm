class Solution {
    fun solution(a: Int, b: Int): Int {
        var answer: Int = Math.max("$a$b".toInt(), "$b$a".toInt())
        return answer
    }
}