module.exports.ch02_dic = ch02_dic;
module.exports.ch02_arr = ch02_arr;
module.exports.ch02_foreach = ch02_foreach;
module.exports.ch02_arr_control = ch02_arr_control;

function User(){
    this.User_list =  User_list = [
        {name:"진현우", age:20},
        {name:"백종민", age:22}
    ];
    this.User_output = function(){
        this.User_list.forEach(function(item, index){
            console.log('User #' + index + ' : %s', item);
        })
    }
}

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

function ch02_arr(){
    var a = new User();
    a.User_list.push({name:'전지훈', age:24});
    console.log("User배열 사용자 수 : %d", a.User_list.length);
    console.log("두번째 사용자 출력 : %s", a.User_list[1].name);
}

function ch02_foreach(){
    var a = new User();
    a.User_output();
}

function ch02_arr_control(){
    var a = new User();
    //배열 끝 데이터 추가 삭제
    console.log("push");
    a.User_list.push({name: "공성진", age:24});
    a.User_output();
    console.log("pop");
    a.User_list.pop();
    a.User_output();
    //배열 앞 데이터 추가 삭제
    console.log("unshift");
    a.User_list.unshift({name: "공성진", age:24});
    a.User_output();
    console.log("shift");
    a.User_list.shift();
    a.User_output();
    //splice
    console.log("splice 요소 추가");
    a.User_list.splice(0, 0, {name:"박성준", age: 24});
    a.User_output();
    console.log("splice 요소 제거");
    a.User_list.splice(0, 2);
    a.User_output();
    console.log("splice 요소 제거 후 start에 요소 추가");
    a.User_list.splice(0, 2, {name:"박성준", age: 24});
    a.User_output();
    //slice
    var b = new User();
    console.log("slice 전");
    b.User_output();
    console.log("slice 후");
    console.log(b.User_list.slice(0,1));
}