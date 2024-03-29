import axios from "axios";
import "./BlogDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const id = useParams().id;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const { data } = await axios.get(`https://shikharji-api.vercel.app/blog/${id}`);
        if (data?.success) {
          setBlog([data?.blog]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlogDetails();
  }, [id]);
  return (
    <>
      {blog &&
        blog.map((blog) => (
          <>
            <BlogDetailsPage />
          </>
        ))}
    </>
  );
}


export function BlogHeader(){
return(
  <>
   <div class="HeaderBlog-wrapper">
        <div class="">
          <h1>Andrew Wright</h1>
          <h2>Design • Lettering • Illustration</h2>
        </div>
        <p>
          I’m a designer who makes nice things for nice folks. My portfolio is
          currently baking at 350° for a few more weeks. Consectetur adipisicing
          elit.
        </p>
      </div>
  </>
)
}

export function BlogDetailsPage() {
  return (
    <>
    <BlogHeader/>
      <article id="Birds-article">
        <h2 id="one">You Gotta Love Birds</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam.
          Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt
          neque, in aliquam elit eros quis tortor. Sed id venenatis massa, ut
          malesuada sem. Nam lacinia sodales tellus nec efficitur. Vestibulum
          fringilla nisl ac iaculis ultricies. Sed commodo imperdiet metus vitae
          molestie. In laoreet rutrum pretium. Aenean a enim ac lacus tincidunt
          pellentesque ac a tellus.
        </p>


        <h2 id="two">Flapping Around, Flying All Over</h2>
        <p>
          Donec imperdiet efficitur risus in venenatis. Aenean ornare iaculis
          orci a condimentum. Praesent tincidunt, purus ac placerat posuere,
          lacus risus suscipit lacus, et sollicitudin turpis metus in enim.
          Vestibulum at imperdiet magna, ac vehicula magna. Praesent placerat
          sapien bibendum, faucibus lectus at, euismod elit. Nunc velit est,
          faucibus et faucibus eu, tempus non nisi. Fusce hendrerit auctor
          lectus non auctor. Vestibulum luctus metus eget sapien volutpat
          congue. Fusce eget augue mauris. Ut egestas mi et feugiat sagittis.
          Cras ac convallis elit.
        </p>

       
        <blockquote class="pullquote">
          "Be like the bird who, pausing in her flight awhile on boughs too
          slight, feels them give way beneath her, and yet sings, knowing she
          hath wings."
          <br />
          <span>&mdash; Victor Hugo</span>
        </blockquote>

        <p>
          Etiam ac pretium erat. Nullam mollis, enim sed pretium pellentesque,
          urna dolor faucibus nisi, interdum luctus neque eros blandit justo.
          Morbi non urna scelerisque, condimentum ex nec, bibendum sem.
          Pellentesque ullamcorper quis dui non condimentum. Ut aliquam neque
          metus, in suscipit lorem volutpat eget. Mauris ac dictum nulla, eu
          suscipit justo.
        </p>

        <h2 id="three">Building Nests, Eating Bugs</h2>
       

        <p>
          Nam tincidunt vel risus et dictum. Quisque efficitur quam vel libero
          pellentesque interdum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed iaculis ligula ut aliquam aliquet. Vivamus vel
          elementum lectus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Quisque vel erat leo. Donec rhoncus nec orci eget rutrum.
        </p>

        <h2 id="four">Singing Little Songs, Looking Fancy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam.
          Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt
          neque, in aliquam elit eros quis tortor. Sed id venenatis massa, ut
          malesuada sem. Nam lacinia sodales tellus nec efficitur. Vestibulum
          fringilla nisl ac iaculis ultricies. Sed commodo imperdiet metus vitae
          molestie. In laoreet rutrum pretium. Aenean a enim ac lacus tincidunt
          pellentesque ac a tellus.
        </p>
        <blockquote class="pullquote">
          "I'd rather learn from one bird how to sing than teach ten thousand
          stars how not to dance"
          <br /> <span>&mdash; e.e. cummings</span>
        </blockquote>
        <p>
          In hac habitasse platea dictumst. Aenean sit amet libero lorem.
          Quisque in sagittis nisl, placerat auctor tellus. Suspendisse
          scelerisque eget tortor eu porta. Nulla sollicitudin justo et ipsum
          placerat efficitur vel vel dui. Vestibulum placerat lorem ac leo
          mollis, et finibus nisl finibus. Pellentesque tempus ut ante non
          ullamcorper. Vivamus neque tellus, varius quis mi eu, fermentum
          laoreet orci. Quisque nisi elit, fringilla in ligula ut, molestie
          ultricies massa. Curabitur nec suscipit metus.
        </p>

        <h2 id="five">Birds: They're Great!</h2>

        <p>
          In hac habitasse platea dictumst. Aenean sit amet libero lorem.
          Quisque in sagittis nisl, placerat auctor tellus. Suspendisse
          scelerisque eget tortor eu porta. Nulla sollicitudin justo et ipsum
          placerat efficitur vel vel dui. Vestibulum placerat lorem ac leo
          mollis, et finibus nisl finibus. Pellentesque tempus ut ante non
          ullamcorper. Vivamus neque tellus, varius quis mi eu, fermentum
          laoreet orci. Quisque nisi elit, fringilla in ligula ut, molestie
          ultricies massa. Curabitur nec suscipit metus.
        </p>
      </article>
    </>
  );
}
