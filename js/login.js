$(document).ready(function (){
    let submitBtn = $('#submitBtn');
    submitBtn.on('click',function (e){
        e.preventDefault();
        e.stopPropagation();
        let account = $("#account").val();
        let password = $("#password").val();

        let accPtn = /[A-Z]\S*/;
        let pswPtn = /[a-z0-9]+/
        if(accPtn.test(account) && pswPtn.test(password)){
            window.location.href = "./index.html"
        }
        else{
            if(!accPtn.test(account)){
                $("#account").addClass("is-invalid");
                setTimeout(()=>{
                    $("#account").removeClass("is-invalid")
                },2000)
            }

            if(pswPtn.test(password)){
                $("#password").addClass("is-invalid");
                setTimeout(()=>{
                    $("#password").removeClass("is-invalid")
                },2000)
            }

        }
        //window.location.href = "./index.html"
    })
})