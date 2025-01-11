import { getClient } from "./service";

const getUsers = async () => {
    const client= await getClient();
    const users='SELECT * FROM TodoUsers';
    const res=await client.query(users);
    console.log("Users:");
    for(let user of res.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }

}



const getTodo=async(userId:number)=>{

    const todo='SELECT * FROM todo WHERE user_id=$1';
    const client = await getClient();
    const res=await client.query(todo,[userId]);
    console.log("Todos:");

    for(let todo of res.rows){
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.des}, Done: ${todo.done}`);
    }


}



const userById=async(email:string)=>{
    const client =await getClient();
    const user='SELECT * FROM TodoUsers WHERE email=$1';
    
    const res=await client.query(user,[email]);
    console.log("User:");

    for(let user of res.rows){
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}
getUsers();
getTodo(4);
userById("johndoe.gmail.com")