
    document.querySelector('#form').addEventListener("submit",communityAdd)
    var arr =JSON.parse(localStorage.getItem("communityDetails")) || [];
    function communityAdd(event){
     event.preventDefault();
     var name =document.querySelector('#nameinput').value;
     var lastName =document.querySelector('#lastNameInput').value;
     var language =document.querySelector('#language1').value;
     var email = document.querySelector("#emailinput").value;
    
     var communityAObj={
        name:name,
        lastName:lastName,
        language:language,
        email:email,
     }
     arr.push(communityAObj);
     localStorage.setItem("communityDetails",JSON.stringify(arr));
    }
