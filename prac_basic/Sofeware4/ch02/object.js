module.exports.ch02_dic = ch02_dic;

function ch02_dic(){
    var Person = {
        age : 20,
        name : '소녀시대',
        add : function(a,b){
            return a + b;
        }
    };
    console.log(Person.add(10,10));
}