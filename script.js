var lb1=label1("label","for","fn","FirstName");
var br=brea("br");
var in1=input1("input","type","text","name","","id","first-name","value","");
var br1=brea("br");

var lb2=label1("label","for","ln","LastName");
var br2=brea("br");
var in2=input1("input","type","text","name","","id","last-name","value","");
var br3=brea("br");

var lb3=label1("label","for","ad","Address");
var br4=brea("br");
var in3=input1("input","type","text","name","","id","address","value","");
var br5=brea("br");

var lb4=label1("label","for","pn","Pincode");
var br6=brea("br");
var in4=input1("input","type","number","name","","id","pincode","value","");
var br7=brea("br");

var lb15=label1("label","for","gender","Gender");
var br21=brea("br");
var in5=input1("input","type","radio","name","gender","id","male","value","");
var lb5=label1("label","for","male","Male");
var in6=input1("input","type","radio","name","gender","id","female","value","");
var lb6=label1("label","for","female","Female");
var br0=brea("br");

var lb16=label1("label","for","food","Choose atleast 2 out of 5 options");
var br20=brea("br");
var in7=input1("input","type","checkbox","name","food","id","idly","value","idly");
var lb7=label1("label","for","idly","idly");
var br10=brea("br");
var in8=input1("input","type","checkbox","name","food","id","dosai","value","dosai");
var lb8=label1("label","for","dosai","dosai");
var br11=brea("br");
var in9=input1("input","type","checkbox","name","food","id","poori","value","poori");
var lb9=label1("label","for","poori","poori");
var br12=brea("br");
var in11=input1("input","type","checkbox","name","food","id","chappathi","value","chappathi");
var lb11=label1("label","for","chappathi","chappathi");
var br13=brea("br");
var in12=input1("input","type","checkbox","name","food","id","biriyani","value","biriyani");
var lb12=label1("label","for","biriyani","biriyani");
var br14=brea("br");
var br19=brea("br");

var lb13=label1("label","for","st","State");
var br15=brea("br");
var in13=input1("input","type","text","name","","id","st","value","");
var br16=brea("br");

var lb14=label1("label","for","cn","Country");
var br17=brea("br");
var in14=input1("input","type","text","name","","id","cn","value","");
var br18=brea("br");

var bu1=document.createElement("button");
bu1.setAttribute("type",'button')
//bu1.setAttribute("id","submit")
bu1.innerHTML="submit"
bu1.classList.add("btn", "btn-primary")
bu1.addEventListener("click",foo)

var divi=document.createElement("form");
divi.append(lb1,br,in1,br1,lb2,br2,in2,br3,lb3,br4,in3,br5,lb4,br6,in4,br7,lb15,br21,in5,lb5,in6,lb6,br0,lb16,br20,in7,lb7,br10,in8,lb8,br11,in9,lb9,br12,in11,lb11,br13,in12,lb12,br14,br19,lb13,br15,in13,br16,lb14,br17,in14,br18,bu1);
//document.body.append(divi);



function label1(tagname,attr,attr1,content){
    var lab1=document.createElement(tagname);
    lab1.setAttribute(attr,attr1);
    lab1.innerHTML=content;
    return lab1;
}
function input1(tag1,attr2,val1,attr3,val2,attr4,val3,a1,v1){
    var inp=document.createElement(tag1);
    inp.setAttribute(attr2,val1);
    inp.setAttribute(attr3,val2);
    inp.setAttribute(attr4,val3);
    inp.setAttribute(a1,v1);
    return inp;
}
function brea(tagname1){
    var br=document.createElement(tagname1);
    return br;
}

function but(tagname2,attr5,val5,content1){
    var bu=document.createElement(tagname2);
    bu.setAttribute(attr5,val5,content1);
    bu.innerHTML=content1;
    return bu;
}

function p(tagname3,content2){
    var p1=document.createElement(tagname3);
    p1.innerHTML=content2;
    return p1;
}




var t1=th1("th","FirstName");
var t2=th1("th","LastName");
var t3=th1("th","Address");
var t4=th1("th","Pincode");
var t5=th1("th","Gender");

var t7=th1("th","State")
var t8=th1("th","Country")
var t6=th1("th","Choose food")


var ta = document.createElement("table");
ta.setAttribute("class","tabb")
var tr1 = document.createElement("tr");

tr1.append(t1,t2,t3,t4,t5,t7,t8,t6);
ta.append(tr1);
//document.body.append(ta);

function th1(tagi,con){
    var t=document.createElement(tagi);
    t.innerHTML=con;
    return t;
}

function td1(tagname4,content3){
    var tdb =document.createElement(tagname4);
    tdb.innerHTML=content3;
    return tdb;
}

function foo(){
    var tr2=document.createElement("tr");
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var textarea = document.getElementById('address').value;
    var pinCode = document.getElementById('pincode').value;
 
   //var v6=document.getElementsById("food").value;
    var v9=document.getElementById("st").value;
    var v10=document.getElementById("cn").value;
var td6=td1("td",`${firstName}`)
var td7=td1("td",`${lastName}`)
var td8=td1("td",`${textarea}`)
var td9=td1("td",`${pinCode}`)


tr2.append(td6,td7,td8,td9);


if(document.getElementById("male").checked){
    var v5=td1("td","Male");
   tr2.append(v5);
}
else if(document.getElementById("female").checked){
    var v6=td1("td","female");
    tr2.append(v6);
}


var td12=td1("td",`${v9}`)
var td13=td1("td",`${v10}`)
tr2.append(td12,td13);


var markedCheckbox = document.getElementsByName('food');
var marked=0;
var slt="";
for (var count=0;count<markedCheckbox.length;count++) {

  if (markedCheckbox[count].checked===true){
        slt+=markedCheckbox[count].value+",";
        marked+=1;
    }

}

if(marked<2){
    alert("please select atleast 2 fooditems")
}

s1= td1("td",`${slt}`);
tr2.append(s1);
ta.append(tr2); 
}
   

var container=document.createElement("div");
container.setAttribute("class","p-3 mb-2 bg-warning text-dark")
container.setAttribute("id","container")
container.append(divi,ta)
document.body.append(container)
   

