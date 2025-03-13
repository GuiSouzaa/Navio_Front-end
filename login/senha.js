function validarLogin(){
    console.log("Botão clicado!"); 
    const email = document.getElementById("emailID").value; //Aqui pega o id do input que eu defini
    const senha = document.getElementById("senhaID").value;

    emailCorreto = "g";
    senhaCorreta = 1

    if(email == emailCorreto && senha == senhaCorreta){
        window.location.href = "../Dashboard/index.html"
    }
    else{
        alert("Email ou senha incorretos!");
    }
}