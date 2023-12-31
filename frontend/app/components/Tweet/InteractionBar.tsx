import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";


function InteractionBar() {
    return (
        <div className="interactions flex justify-between text-zinc-500 mb-1">
            <div className="flex w-fit h-fit mt-3 items-center hover:text-blue-400">
                <div className="hover:bg-blue-950/50 rounded-full -m-1">
                    <div className=" rounded-full p-2 pr-3">
                        <FaRegComment size="16" />
                    </div>
                </div>
                <div className="-m-1">
                    <span className="text-sm">135</span>
                </div>
            </div>

            <div className="flex w-fit h-fit mt-3 items-center hover:text-green-400">
                <div className="hover:bg-green-950/50 rounded-full -m-1">
                    <div className=" rounded-full p-2 pr-3 ">
                        <FaRetweet size="16" />
                    </div>
                </div>
                <div className="-m-1">
                    <span className="text-sm">10</span>
                </div>
            </div>

            <div className="flex w-fit h-fit mt-3 items-center hover:text-pink-700">
                <div className="hover:bg-pink-950/25 rounded-full -m-1">
                    <div className=" rounded-full p-2 pr-3">
                        <FaRegHeart size="16" />
                    </div>
                </div>
                <div className="-m-1">
                    <span className="text-sm">15</span>
                </div>
            </div>

            <div className="flex w-fit h-fit mt-3 items-center hover:text-blue-400">
                <div className="hover:bg-blue-950/50 rounded-full -m-1">
                    <div className=" rounded-full p-2 pr-3">
                        <IoMdStats size="16" />
                    </div>
                </div>
                <div className="-m-1">
                    <span className="text-sm">10</span>
                </div>
            </div>

            <div className="flex w-fit h-fit mt-3 space-x-3 mr-3">
                <div className="hover:text-blue-400">
                    <div className="hover:bg-blue-950/50 rounded-full -m-1">
                        <div className="p-2 ">
                            <FaRegBookmark size="16" />
                        </div>
                    </div>
                </div>

                <div className="hover:text-blue-400">
                    <div className="hover:bg-blue-950/50 rounded-full -m-1">
                        <div className="p-2 ">
                            <div>
                                <FiShare size="16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InteractionBar;