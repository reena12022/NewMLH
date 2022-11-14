export const Base_URL = 'https://mlh-175797-ruby.b175797.dev.eastus.az.svc.builder.cafe';
export const header = {'Content-Type': 'application/json'}

export const signup = async (data) => {
  console.log('data>>>',data)
  try {
    let response = await fetch(Base_URL+'/account/accounts',{
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
   
   
     
   export const LoginServices = async (data) => {
    console.log('data>>>',data)
    try {
      let response = await fetch(Base_URL+'/login/login',{
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
          
      

   