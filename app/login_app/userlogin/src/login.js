

export default function LOGIN(){

    async function validate(){
        const user = document.getElementById('uname').value;
        const pass1 = document.getElementById('pass').value;
        if(user === ""){
            alert('Enter username !');
        }else if(pass1 === ""){
            alert('Enter your password');
        }else{
        let data ={
            email:user,
            password:pass1
        };
    
        let Response = await fetch("https://reqres.in/api/users/login",
        {"method":"POST",
            "body":JSON.stringify(data),
            "headers":{"content-type":"application/json"}
        });
        let userdata = await Response.json();
        if(userdata.ok){
            alert('you are correct');
        }else{
            alert('you are wrong');
        }

    }
}

    
    return(
        <div className ="login">
        <h2>LOGIN</h2>
        <label for="email">Email: </label>
        <input type="text" id="uname" /><br />
    
        <label for="pass">Password: </label>
        <input type="text" id="pass" /><br />
    
      <button type="button" onClick = {validate}>Login</button><br />
      </div>
    )
}