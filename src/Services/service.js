

export const Base_URL = 'https://mlh-175797-ruby.b175797.dev.eastus.az.svc.builder.cafe';
export const header = {'Content-Type': 'application/json'}

export const submitmail = async (email) => {
  const data={
  "data":
  {
   "type": "email_account",
   "attributes":
   {
       "email":email
       // "password": "Mlh@123"
   }
  }
}
  console.log('data>>>',data)
  try {
    let response = await fetch(Base_URL+'/bx_block_forgot_password/otps',{
      method: 'POST',
      headers: header,
      body:JSON.stringify(data)
      }
    );
    let json = await response.json();
    console.log('json',json)
    return json;
  } catch (error) {
     console.error(error);
  }
};


 



  export const Otpsend=async(token,otpcode)=>{
    const data={
    "data":
    {
      "token": token,
        "otp_code":otpcode
    }
  }
    console.log('data>>>',data)
    try {
      let response = await fetch(Base_URL+'//bx_block_forgot_password/otp_confirmations',{
        method: 'POST',
        headers: header,
        body:JSON.stringify(data)
        }
      );
      let json = await response.json();
      console.log('json',json)
      return json;
    } catch (error) {
       console.error(error);
    }
  };
     
  

  export const setpassword=async(token,password)=>{
    const data={
    "data":
    {
      "token": token,
        "new_password": password
    }
  }
    console.log('data>>>',data)
    try {
      let response = await fetch(Base_URL+'//bx_block_forgot_password/passwords',{
        method: 'POST',
        headers: header,
        body:JSON.stringify(data)
        }
      );
      let json = await response.json();
      console.log('json',json)
      return json;
    } catch (error) {
       console.error(error);
    }
  };
     