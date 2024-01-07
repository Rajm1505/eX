import Image from "next/image";
import Avatar from "../Avatar";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import InteractionBar from "@/app/components/Tweet/InteractionBar"



function Tweet(tweet: any) {
    console.log("tweet", tweet.tweet.user.name);

    return (

        <div className="block overflow-clip">
            <div className="w-full flex hover:bg-zinc-950 border-solid border-zinc-800 border-y border-r p-1" >
                <div className="avatar w-10  ml-3 mr-3 mt-2 ">
                    <div className="w-10">
                        <Image src={tweet.tweet.user.avatar} width={40} height={40} objectFit="cover" alt="avatar" />
                    </div>
                </div>
                <div className="tweet-section pt-2 w-full">
                    <div className="author-details flex ">
                        <a className="font-bold mr-1">{tweet.tweet.user.name}</a>
                        <a className="font-thin">@{tweet.tweet.user.username}</a>
                        <span className="font-thin px-1 py-auto">·</span>
                        <span className="font-thin">1h</span>
                        <div className="more-dropdown ml-auto mr-2">
                            <div className="hover:bg-slate-900 rounded-full ">
                                <div className="hover:text-blue-300 w-full rounded-full p-1">
                                    <HiOutlineDotsHorizontal />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content pr-10 mt-1">
                        {tweet.tweet.content}
                    </div>
                    <InteractionBar />
                </div>
            </div>
        </div>
    );
};

export default Tweet;