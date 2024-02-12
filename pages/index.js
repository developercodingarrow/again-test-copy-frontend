import React, { useContext, useEffect, useState } from "react";
import { allBlog } from "../Actions/blogActions";

export default function HomePage() {
  const [list, setlist] = useState([]);

  useEffect(() => {
    handelFetch();
  }, []);

  const handelFetch = async () => {
    try {
      const res = await allBlog();
      console.log(res.data.result);
      setlist(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Saransh</h1>
        {list.map((el, i) => {
          return (
            <div>
              {" "}
              <p>{el.blogTitle}</p>
              <p>{el.slug}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
