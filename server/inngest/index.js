
import { Inngest } from "inngest";
import User from '../modals/User.js'
export const inngest = new Inngest({ id: "movie-ticket-booking" });

 //ingest function to save user data to DB

 const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const {id,first_name,last_name,email_addresses,image_url}=event.data

    const userData={
        _id:id,
        email:email_addresses[0].email_addresses,
        name:first_name+' '+last_name,
        image:image_url
    }
    await User.create(userData)
    
  },
);

//ingest function to delete user from database
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    

    
       const {id}=event.data
       await User.findByIdAndDelete(id)
  }
);
 //ingest function to update user data from DB


 const syncUserUpdation = inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
     const {id,first_name,last_name,email_addresses,image_url}=event.data


       const userData={
        _id:id,
        email:email_addresses[0].email_addresses,
        name:first_name+' '+last_name,
        image:image_url
    }
    await User.findByIdAndUpdate(id,userData)
    
  },
       
  
  
);





// Add the function to the exported array:


export const functions = [syncUserCreation,
    syncUserDeletion,
    syncUserUpdation

];