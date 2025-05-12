import scala.io.StdIn.readLine

object Solution {
    def main(args: Array[String]) {
        val a = readLine().toInt
        
        if(a % 2 == 0)
            println(a + " is even")
        else
            println(a + " is odd")
    
    }
}