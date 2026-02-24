import { use } from "react";
import Friend from "./Friend";
export default function Friends({friendsPromise})
{
  const Friends=use(friendsPromise);
  console.log(Friends);

  return(
    <div className="uses">
        <h2>Friends :{Friend.length} </h2>
        {
          Friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
        }
    </div>
  )
}