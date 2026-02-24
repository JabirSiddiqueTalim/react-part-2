import { use } from "react";

export default function Friends({friendsPromise})
{
  const Friend=use(friendsPromise);
  console.log(Friend);

  return(
    <div>
        <h2>Friends :{Friend.length} </h2>
    </div>
  )
}