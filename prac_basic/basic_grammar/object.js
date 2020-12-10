module.exports.object = object;

var Person = {
    name: String,
    age: Number,
    tall: Number,
    SetValue : function(name, age, tall) {
        this.name = name;
        this.age = age;
        this.tall = tall;
    },
    profile : function(){
        console.log("이름 : %s", this.name);
        console.log("나이 : %d", this.age);
        console.log("키 : %d", this.tall);
    }
}
function name(params) {
    
}

function object(){
    Person("진현우", 24, 177);
    Person.profile();
}