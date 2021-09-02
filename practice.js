var myArr2 = [1, 3, 4, 8, 5, true, -3.5, [3, 5, 7]];
// console.log(myArr2[7]);
// console.log(myArr2[])
// console.log(myArr2[7][1]) //give us the value of 5 from array [3, 5, 7]

// myArr = [];
// myArr.push(10);
// myArr.push(15);
// myArr.push(25);
// console.log(myArr)
// var poppeditem = myArr.pop();
// console.log(poppeditem);
// console.log(myArr.length);

//object
var myobj = {
    'number': 18,
    'food': 'pizza',
    'array1': [3,6,9],
    'name': 'Jeremy',
    'anotherobj': {
        'car': 'corvette',
        'color': 'red',
    }
}
// console.log(myobj.number);
// console.log(myobj.food);
// console.log(myobj['name']);
// console.log(myobj.anotherobj.car);
// console.log(myobj['anotherobj']['color']);
// console.log('name' in myobj);
// console.log(Object.keys(myobj));
// console.log(Object.values(myobj));

function sayhi(name="anonymous") { //creating a default value
    console.log("Hi " + name + "!");
}

// sayhi("Jeremy")
// sayhi() // will print default value

function isbetween(value, value1=-Infinity, value2=Infinity) {
    return value > value1 && value < value2;
}

// console.log(isbetween(10));
// console.log(isbetween(10, 5, 8));

//for loops
for (var x=0; x < 10; x++){
    // console.log(x);
}

var z = -4;
z++; //increment by 1
z += 10; //increment by 10
z -= 3; //decrease by 3
z --; //decrease by 1

// if (z > 10){ //&& for "and" and || for "or"
//     console.log("z is bigger than 10");
// }else if(z < 5){
//     console.log("z is less than 5");
// }else{
//     console.log("z is between 5 and 10");
// }

//while loops - useful if you don't know how long the code should run

// function staircase(n){
    //outer loop is for each step in the staircase
    // for(var k = 1; k <= n; k++ ){
        // var curstr = ""; //string that will hold the spaces and #'s
        //inner loop is for determining weather to hold a space or a #
//         for(var p = 1; p<=n; p++){
//             if (p < k){
//                 curstr ='#' + curstr;
//             } else {
//                 curstr = " " + curstr;
//             }
//         }
//         console.log(curstr);
//     }
// }
// staircase(3)

//class
class Car {
    constructor(numdoors, maxspeed, nameofcar, colorofcar, coolnessNum = 1000,) { //equivilant to "__init__" in Python "public ClassName()"
        this.doors = numdoors;//"this" equvilant to "self", in this case "myCar" var below.
        this.speed = maxspeed;
        this.model = nameofcar;
        this.color = colorofcar;
        this.coolfactor = coolnessNum;
    }
    //define methods that belong to the car class here
    repaintcar(newcolor){//no "function" word needed here
        this.color = newcolor;
    }
    getModel(){
        return this.model;
    }
}
var myCar = new Car(2, 160, "Chevrolet Corvette", "Red", 10000);
// console.log("Color before:");
// console.log(myCar.color);
// myCar.repaintcar("black");
// console.log("Color after:");
// console.log(myCar.color);

// console.log(myCar.getModel());
// console.log(myCar.model);
// console.log(myCar);

class SLLnode {//singly linked list node
    constructor(val){
        this.value = val;//value saved for this node
        this.next = null;//currently this node is not connected to any other nodes
    }
}

var somenode = new SLLnode(10);
// console.log(somenode);
var somenode2 = new SLLnode(20);
somenode.next = somenode2;
// console.log(somenode);

// singly linked list
class SLL {
    constructor(){
        this.head = null;//start with an empty list
    }
    //where you define methods for your SLL class
    addNodeTofront(val){ 
        //create the node
        var newnode = new SLLnode(val);
        newnode.next = this.head;
        this.head = newnode;
    }
    //contains - determine if a given value can be found in the list. Return true if it is, and false if iit isn't
    contains(val){
        var runner = this.head;//start runner (pointer to a node) at the beginning of the list
        //while loop to travel through the list
        while(runner != null){
            if(runner.value == val){
                return true;//value found - we'll return true
            }
        runner = runner.next;//moves the runner to the next node in the list    
        }
        return false;//value is not in the list
    }
    addNodeToback(val){
        var newnode = new SLLnode(val);//Create the node
        if(this.head == null){
            this.head = newnode;
        }else{
            var runner = this.head;
            while (runner.next != null ){
                runner = runner.next;//move runner to next node
            }
            runner.next = newnode;//connects this newnode to the last node in the list
        }
    }
}
var mySLL = new SLL();
// mySLL.addNodeTofront(10);
// console.log(mySLL);
// mySLL.addNodeTofront(20);
// var myFirstnode = new SLLnode(10);
// console.log(mySLL);
mySLL.addNodeToback(3);
mySLL.addNodeToback(6);
mySLL.addNodeToback(9);
mySLL.addNodeToback(18);
// console.log(mySLL);
// console.log(mySLL.contains(4));

/*
Big O:
o(1)=instantaneous
o(n)= linear time-the amount of time depends on the  size of the input or object
o(n^2)= quadratic time-basically a nested for loop; some sorts are o(n^2) like bubble, insertion, and selections
0(n^3)= cubic time-basically 3 total nested for loops
o(log n)= logarithmic time -binary search
o(n log n)= is ??? time-worse than linear but better than quadratic, examples are merge and quick sort

/*
parens valid
valid sets of parentheses always open before they close, for example: For "Y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false: not every parenthesis is closed.  Given "h(0)t )0(k", return flase, because the underlined ")" is premature: there is nothing open for it to close.
*/

var test1 = "Y(3(p)p(3)r)s", expected1 = true;
var test2 = "N(0(p)3", expected2 = false;
var test3 = "N(0)t )0(k", expected3 = false;
var test4 = ")(", expected4 = false;

/*
INPUT: string, OUTPUT: boolean (true/false)
1. Check each character starting at the beginning of the string.
2. If it is a "(", add that on.
3. If it is a ")", remove one of the "(", immediately end and return false.
4. If we reach end of the string and still have leftover "(", return false. Otherwise return true.


Psuedocode:
    unpairdleftParens = 0; //number of "(" that haven't been paired up with a closing ")"
    for (each character in the string){
        if (the character is a "("){
            increase the unpairedleftPrens
        } else if (the character is a ")"){
            decrease unpairedleftParens
            if (unpairedleft Parens < 0) {//unpaired "(" cannot be paired with a left "(" since there are no "("
            return false;
            }
        }
    }
    check to see if we still have any upaired "(" here - if that number is exactly 0 return true if there aren't (0 exactly), false if there are (>0)
    */
function validParens(str){
    var unpairedleftParens = 0;
    //loop through the string
    for (var i = 0; i < str.length; i++){
        if(str[i] == "("){// OR str.charAt(i) == "("
            unpairedleftParens++;
        } else if(str[i] == ")"){
            unpairedleftParens--;
            if (unpairedleftParens < 0){// if there is NO way to pair a ")" up with a "("
                return false;
            }
        }
    }
    // now check to see if there are any unpaired left parenteses left ("(")
    if (unpairedleftParens == 0){
        return true;
    } else {
        return false;
    }
    // one-line version: return upairedleftParens == 0
}

var test1 = "Y(3(p)p(3)r)s", expected1 = true;
var test2 = "N(0(p)3", expected2 = false;
var test3 = "N(0)t )0(k", expected3 = false;
var test4 = ")(", expected4 = false;

// console.log(validParens(test1));
// console.log(validParens(test2));
// console.log(validParens(test3));
// console.log(validParens(test4));

// two challenges: 1. contians() - whether a value can be found in the list, and 2. Adding a node to the END of the list