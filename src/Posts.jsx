import { use } from "react";
import Post from './Post';

export default function Posts({postsPromise})
{
  const Posts=use(postsPromise);
  // console.log(Posts);
  console.log("in Posts")
  return(
     <div>
        {
          
          Posts.map(post=> <Post post={post}></Post>)
        }
     </div>
  )
}