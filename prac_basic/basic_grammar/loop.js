module.exports.while_prac = while_prac;

function while_prac(){
    console.time('while');
    var i = 1;
    while (true){
        if(i == 5001){
            console.timeEnd('while');
            break;
        } else {
            console.log(i);
            i++;
        }
    }
}