// Question #1
let a = 11;
document.write("The value of ++a is " + a ,'<br>')
document.write("Now the value of a is " + a ,'<br>')
document.write("The value of a++ is " + a,'<br>')
document.write("Now the value of a is " , ++a,'<br>')
document.write("The value of --a is " , --a ,'<br>')
document.write("Now the value of a is " , a ,'<br>')
document.write("The value of a-- is " , a ,'<br>')
document.write("Now the value of a is " , --a,'<br>' ,'<br>' ,'<br>')

// Question #2
let a1 =2;
let b1 =1;
let result =--a1- --b1+ ++b1+ b1--
document.write("a1 is "+ a1 ,'<br>')
document.write("b1 is " + b1,'<br>')
document.write("result = " + --a1 ,'<br>')
document.write("result = " + --b1 ,'<br>')
document.write("result = " + ++b1 ,'<br>')
document.write("result = " + a1-- ,'<br>' ,'<br>' ,'<br>')

// Question #3
let userName =prompt("Write a username: ")

// Question #5
let num = prompt("Enter Number", "5")
let num1  = parseInt(num);
let i = 0;
document.write( num + " * 1 = ",num*1 ,'<br>');
document.write( num + " * 2 = ",num*2 ,'<br>');
document.write( num + " * 3 = ",num*3 ,'<br>');
document.write( num + " * 4 = ",num*4 ,'<br>');
document.write( num + " * 5 = ",num*5 ,'<br>');
document.write( num + " * 7 = ",num*7 ,'<br>');
document.write( num + " * 8 = ",num*8 ,'<br>');
document.write( num + " * 9 = ",num*9 ,'<br>');
document.write( num + " * 10 = ",num*10 ,'<br>' ,'<br>' ,'<br>');

// Question #6
let sub="Subject"
let tMarks="Total Marks"
let oMarks ="Obtain Marks"
let per= "Percentage"
let english= "English"
let math = "Math"
let urdu = "Urdu"
let totalMarks = 100
let mathObtain = 54
let englishObtain = 54
let urduObtain =48
document.write(sub,"\t") 
document.write(tMarks,"\t") 
document.write(oMarks,"\t") 
document.write(per,'<br>') 
document.write(english, "\t")
document.write(totalMarks , "\t")
document.write(englishObtain,"\t" )
document.write((englishObtain / totalMarks*100) ,"%" ,'<br>')
document.write(math,"\t")
document.write(totalMarks,"\t")
document.write(mathObtain ,"\t")
document.write((mathObtain / totalMarks)*100, "%" ,'<br>')
document.write(urdu, "\t")
document.write(totalMarks,"\t" )
document.write(urduObtain,"\t" )
document.write((urduObtain / totalMarks)*100,"%" ,'<br>' ,'<br>' ,'<br>')









