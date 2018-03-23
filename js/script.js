var button = document.getElementById('open').addEventListener('click', function(){
    document.getElementById('main').style.display='block';
  
})
document.getElementById('close').addEventListener('click',function(){
document.getElementById('main').style.display='none';
});

function ValidationEvent() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    if (name != '' && email != '' && contact != '') {
    alert("You have successfully registered");
    return true;
    } else {
    alert("Please fill all details.....!");
    return false;
    }
    }
    //end of file