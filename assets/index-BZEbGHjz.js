import{s as c,r as i,m as t,a as o}from"./baseinit-BA-1_Vc-.js";c();i();const u=()=>{var e=document.getElementById("un").value,s=document.getElementById("pw").value;if(console.log(t),e!==""&&s!=="")if(console.log(o),console.log(e),o.includes(e)){var m=t.get(e);if(s==m[3]){document.getElementById("demo").textContent="password ok";var a=t.get(e),r=JSON.stringify(a);window.localStorage.setItem("userInfo",r);var n=new Array;o.map(l=>{t.get(l)[1]==a[1]&&n.push(t.get(l)[5])});var g=JSON.stringify(n);window.localStorage.setItem("driverArr",g),console.log(n),window.close(),window.open("navbar.html")}else document.getElementById("demo").textContent="PassWord is Wrong"}else document.getElementById("demo").textContent="username is wrong";else console.log(o),document.getElementById("demo").textContent="UserName or PassWord is Empty"};var d;(d=document.getElementById("cpw"))==null||d.addEventListener("click",u);
