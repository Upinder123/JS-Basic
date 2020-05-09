function showNumbers(a){
    for(let i=0;i<=a;i++){
    if(i%2==0){
        console.log(i);
        console.log('"even"')
    }else{
        console.log(i);
        console.log('"odd"')
    }
    }
}
showNumbers(10)