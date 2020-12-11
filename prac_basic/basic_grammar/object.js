module.exports.dic_object = dic_object;
module.exports.func_object = func_object;

var dic_Person = {
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
function func_Person() {
    this.name = String;
    this.age = Number;
    this.tall = Number;
    
    this.SetValue = function(name, age, tall){
        console.log("이름 : %s", this.name);
        console.log("나이 : %d", this.age);
        console.log("키 : %d", this.tall);
    }

    this.profile = function(){
        console.log("이름 : %s", this.name);
        console.log("나이 : %d", this.age);
        console.log("키 : %d", this.tall);
    }
}

function dic_object(){
    dic_Person.SetValue("진현우", 24, 177);
    dic_Person.profile();
}
function func_object(){
    var a = new func_Person();
    a.SetValue("진현우", 24, 177);
    a.profile();
}