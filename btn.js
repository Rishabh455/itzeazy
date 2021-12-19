function isEmpty(){
    let username= document.getElementById("username").value;
    let residence= document.getElementById("residence").value;
    if(username!=""&&residence!=""){
        document.getElementById("btn").removeAttribute("disabled");
    }
}