function solution(park, routes) {
    const maxY = park.length-1;
    const maxX = park[0].length-1; 
    
    let startY = park.findIndex((s) => s.includes('S'));
    let startX = park[startY].indexOf('S');
    
    let currY = startY;
    let currX = startX;
    
    routes.forEach(e => {
        let direction = e.split(' ')[0];
        let move = Number(e.split(' ')[1]);
        
        let tmpX = currX;
        let tmpY = currY;
        for(let i = 1 ; i <= move; i++){
            if(direction === 'E'){
                currX ++;
                if(park[currY][currX] === undefined || park[currY][currX] === 'X'){
                    currX = tmpX;
                    break;
                }
            }else if(direction === 'W'){
                currX --;
                if(park[currY][currX] === undefined || park[currY][currX] === 'X'){
                    currX = tmpX;
                    break;
                }
            }else if(direction === 'S'){
                currY ++;
                if( park[currY] === undefined || park[currY][currX] === 'X'){
                    currY = tmpY;
                    break;
                }
            }else if(direction === 'N'){
                currY --;
                if(park[currY] === undefined || park[currY][currX] === 'X'){
                    currY = tmpY;
                    break;
                }
            }
        }
        
       
    });
 
    return [currY,currX];
}