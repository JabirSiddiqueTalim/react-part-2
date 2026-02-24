export default function Post({post})
{
  // console.log(Post)
  console.log("In post.jsx");
  const {userId,id,title,body}=post;
  return(
     <div className="uses">
        <h4>Post id:{id}</h4>
        <p>Title : {title}</p>
        <p>Body : {body}</p>

     </div>
  )
}