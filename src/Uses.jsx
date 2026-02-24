import { use } from "react";

export default function Users({fetchUses}){
  const users=use(fetchUses);

  console.log(users);
  return(
     <div className="uses">
       <h2>User : {users.length}</h2>
     </div>
  )
}