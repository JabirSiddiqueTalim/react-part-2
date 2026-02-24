export default function Friend({friend})
{
  const {email,username}=friend;
  return(
     <div className="uses">
         <h3>Id : {friend.id}</h3>
        <h3>Name : {friend.name}</h3>
        <h3>Username : {username}</h3>
        <h3>Email : {email}</h3>
        <h4>Address : {friend.address.city}</h4>
       
     </div>
  )
}