module.exports.console_object = console_object;

function console_object(){
    console.log("console 객체 사용하기\n");
    console.log("log 메소드\n");
    console.log("dir 메소드\n");
    console.log("   객체의 속성을 출력한다.\n");
    console.log("   console객체 속성 출력 : \n");
    console.dir(console);
    console.log("time 메소드\n");
    console.time();
    console.timeEnd();
    console.log("__filename : %s",__filename);
    console.log("__dirname : %s",__dirname);
}