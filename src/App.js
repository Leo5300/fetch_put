

export default function App(){

  const updateUsers = async () => {
    
    try {
      const response =  await fetch("http://localhost:3000/users/995e", 
        {
          method : "PUT",
          headers : {"Content-Type":"application/json"},
          body: JSON.stringify(
            {
            "name":"Felipe Augusto",
            "email":"lipe.augusto@gmail.com"
          }
          )
        }
      )
      
      const data = await response.json();
      console.log("Usuario atualizado!", data);

    } catch (error) {

      console.error("ERROR: Erro ao adicionar", error);

    }
    
  }

  return <button  onClick={updateUsers}>Atualizar</button>
}