import { GetStaticPaths } from "next";
import React from "react";
import { getAllPostIds } from "../../lib/post";

const Post = () => {
  return (
    <div>
        안녕
    </div>
  )
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    // [{ params: { id: 'pre-randering' }. {param...} }]
    return {
        paths,
        fallback: false
    }
}