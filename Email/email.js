const emailSent = ()=>{

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    // console.log("name...",name.value);
    // console.log("email...",email.value);
    // console.log("message...",message.value);

    const params = {
        name:name.value,
        email:email.value,
        message:message.value 
    }

    const serviceId = "service_u94ftu8";
    const templateId = "template_xkxwe24";


    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log("response....",res);

        if(res.status === 200)
        {
            alert("Sent mail successfully!!!")
        }
        
    }).catch((err)=>{
        console.log("error....",err);
        
    })
    
    
    

}