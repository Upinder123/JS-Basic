// speed limit = 70
// 5 ->1 point
// math.floor(1.3)=1
// 12 points suspended

function checkSpeed(a){
    let c;
if(a>70){
    let b=(a-70);
    if(b%5==1){
    for(let i=0;i<b/5;i++){
        let c;
        c=c+1;
    }
}else{console.log("ok")}
}
if(c>=12){
    console.log("your lisence is suspended")
}else{console.log(c)}
}
checkSpeed(180)