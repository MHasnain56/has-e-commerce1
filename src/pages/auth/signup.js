import Form from "@/components/auth/form";

export default function SignUp () {
    const onSubmit = async (email, password) => {
    try{
         const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers:{
                "Content-Type":"application/json" 
            } 
     }); 
 if (response.ok){
        alert("singup Succesfull");
     } 
    }catch(err){
        console.log(err)
    }
    console.log(email, password)
        }; 
    return <Form signin={false} onFormSubmit={onSubmit} />
};
