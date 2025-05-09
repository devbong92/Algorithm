import (
	"strconv"
)
 

func solution(a int, b int) int {
    
    strA := strconv.Itoa(a)
	strB := strconv.Itoa(b)

	ab, _ := strconv.Atoi(strA + strB)
	ba, _ := strconv.Atoi(strB + strA)
    
    if(ab > ba){
        return ab
    }else{
        return ba
    }
    
}