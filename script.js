document.getElementById("sign-out-btn").addEventListener("click",function(){
    alert("You have successfully logged out");
})


document.getElementById("edit-button").addEventListener("click",function(){
    document.getElementById("user-name").innerHTML="Jane Doe";
})


let connectionRequests = 2;
let friends = 418;


document.getElementById("accept-button-1").addEventListener("click",function(){
    alert("You accepted Todd's friend request!")
    document.getElementById("connection-1").remove();
    connectionRequests--;
    friends++;
    document.getElementById("friend-count").innerText = friends;
    document.getElementById("request-count").innerText = connectionRequests;
})

document.getElementById("decline-button-1").addEventListener("click",function(){
    alert("You declined Todd's friend request! (How rude :( )");
    document.getElementById("connection-1").remove();
    connectionRequests--;
    document.getElementById("request-count").innerText = connectionRequests;
})

document.getElementById("accept-button-2").addEventListener("click",function(){
    alert("You accepted Phil's friend request!");
    document.getElementById("connection-2").remove();
    connectionRequests--;
    friends++;
    document.getElementById("friend-count").innerText = friends;
    document.getElementById("request-count").innerText = connectionRequests;
})

document.getElementById("decline-button-2").addEventListener("click",function(){
    alert("You declined Phil's friend request! (How rude :( )");
    document.getElementById("connection-2").remove();
    connectionRequests--;
    document.getElementById("request-count").innerText = connectionRequests;

})


