"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { CommentProps, ReplyProps } from "@/libs/types";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner userImagePath="/profileImages/Sen.jpg" username="Noppong Anakhaphruek 660610750" commentText="Quiz ง่ายจังเลยครับ ขอยากๆ กว่านี้ได้ไหม #261207" likeNum={100}/>

        {/* Comment Example */}
        <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="จริงค่า" likeNum={99} 
        
        />
        
        {/* Reply Example */}
        
        <Reply username= "หมาน้อย"
        userImagePath= "/profileImages/puppy.jpg"
        replyText= "จริงค้าบบบบบบบบ"
        likeNum= {0} />

        <Reply username= "Cat Meme"
        userImagePath= "/profileImages/popcat.png"
        replyText= "ลิซ่าาาาาาา"
        likeNum= {2}
        />

<Comment username= "Charlie Brown"
    userImagePath= "/profileImages/charliebrown.jpg"
    commentText= "บ้าไปแล้ว"
    likeNum= {0}
    />

        {/* map-loop render Comment component here */}
       
      </div>
    </div>
  );
}
