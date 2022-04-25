function ajax(){
    //creating an XHR Request
    var xhttp=new XMLHttpRequest();
    //Eventlistener
    xhttp.onreadystatechange = function() {
        //condition
        if (this.readyState==4 && this.status==200){
              var response =JSON.parse(this.responseText);
            
                   var output=" ";
                   var  todocomplete="";

            for(var i=0;i<response.length;i++){
                
                todocomplete = response[i].completed; 
                
                if(!todocomplete){
                    output+= `<input type="checkbox"  name= `+ response[i].title+` id="mycheck" onclick="Checkcount(this)"><label for =`+ response[i].title+`>`+ response[i].title+` </label><br>`;
                   }
                else {

                 output+= `<input type="checkbox"  name= `+ response[i].title+` checked disabled ><label for =`+ response[i].title+`>`+ response[i].title+` </label><br>`;
                    }                
                }             
                
                document.getElementById("demo").innerHTML= output;
                          
               
        }
    };
   
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
    }


    //alert(this.checked)

//     var count=0;
// // // var promise= new Promise(function(resolve,reject){})    
// //   function Checkcount(cb,callback)
// //    {
   
// //     if (cb.checked)
// //          {
// //         count++;
// //      }
// //      else{
// //          count--;
// //      }
     
// //      callback(count);
// //     }
   
// // function disply(checkcount){
// //     // alert(count);
// //     if (checkcount ==5){
// //         alert("Congrats... 5 Tasks have been Successfully Completed");
// //     }
// // }



var count=0;
// var promise= new Promise(function(resolve,reject){})    
  function Checkcount(cb)
   {
   return new Promise(function(resolve,reject){ 
       if (cb.checked)
         {
              count++;
         }
        else{
               count--;
        }
    
       if(count== 5)
        {
      alert("Congrats... 5 Tasks have been Successfully Completed");
      resolve("Congrats... 5 Tasks have been Successfully Completed");
        }
      
 } )  
   }
   

promise
.then (function(message){
 alert(message);
});
        

