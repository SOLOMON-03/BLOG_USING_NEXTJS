import styles from "@/app/globals.css";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import img from '@/../../public/noimage.svg'

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col p-2 ">
      <div className="flex bg-white rounded-lg">
        {<div className=" relative w-[300px] h-[300px] z-[1] object-cover">
          <Suspense
            fallback={
              <div className="flex self-center">
                <div className={styles.loader} />
              </div>
            }
          >
            <Image src={post.img || img} alt="" fill className=" rounded-tl-lg rounded-bl-lg" />
          </Suspense>
        </div>
        }
        <span className="-rotate-90 m-auto text-[12px] text-nowrap text-[#6C63FF] font-semibold">
        {post.createdAt.toString().slice(4,16)}
        </span>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h1 className="text-2xl text-[#6C63FF] group-hover:text-black font-bold">{post.title}</h1>
        <p className="w-[90%] text-sm text-justify">{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className="underline text-[#a19df1]">
          Read More..
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
