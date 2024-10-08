// Signin function
export const signin = async (email: string, password: string) => {
  try {
    
    return {email:email,password:password};
    // const response = await axios.post('/api/auth/signin', {
    //   email,
    //   password,
    // });
    // return response.data;
  } catch (error) {
    throw error;
  }
};