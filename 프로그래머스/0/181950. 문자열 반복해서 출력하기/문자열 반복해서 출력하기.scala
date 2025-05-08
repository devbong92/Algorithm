import scala.io.StdIn.readLine

object Solution {
    def main(args: Array[String]) {
        val inp = readLine().split(" ")
        val (s1, a) = (inp(0), inp(1).toInt)
        
        var str = "";
        for(i <- 0 until a ){
            str += s1;
        }
        print(str);
    }
}