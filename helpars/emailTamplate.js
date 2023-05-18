function emailTamplate (token){
   return `<img style="width:100px" src="https://i.ibb.co/4jnHwWR/nierdjvagkmi8jmquyes.png" alt=""><h1 style="font-size:24px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-weight:500">Welcome To Creative it Website</h1><h2 style="font-size:18px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-weight:500">Verify Your Email</h2><button style="background:green;border-radius:20px;padding:10px 20px;border:none;color:#fff">Verify</button> ${token}`
}

module.exports=emailTamplate;