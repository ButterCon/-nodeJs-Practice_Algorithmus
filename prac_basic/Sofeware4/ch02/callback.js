module.exports.ch02_callback = ch02_callback02;

function prac(a,b,c){
    //ㅅㅂ매개변수가 없는데 실행이되는게 레전드네 씨발
    return console.log(a+b);
}

function ch02_callback01(a, b, callback){
    var result = a + b;
    callback(result);
}

function ch02_callback02(){
    var number = [1,3,4,2,5,6,7,9,10,20,30,52,11];
    console.log(number.sort((a,b) => a-b));
}