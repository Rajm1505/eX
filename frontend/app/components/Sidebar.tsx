import { BsTwitterX, BsPeople, BsPerson } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { VscListSelection } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Avatar from 'react-avatar';
import Image from "next/image";



import Icon from "./Icons";

function Sidebar() {
    return (
        <div className="flex">
            <div className="w-fit ml-auto pr-10">

                <Icon icon={<BsTwitterX size="26" />} />
                <Icon icon={<GoHomeFill size="26" />} text="Home" />
                <Icon icon={<HiMiniMagnifyingGlass size="26" />} text="Explore" />
                <Icon icon={<PiBell size="26" />} text="Notifications" />
                <Icon icon={<HiOutlineEnvelope size="26" />} text="Messages" />
                <Icon icon={<VscListSelection size="26" />} text="Lists" />
                <Icon icon={<FaRegBookmark size="26" />} text="Bookmarks" />
                <Icon icon={<BsPeople size="26" />} text="Communities" />
                <Icon icon={<BsTwitterX size="26" />} text="Premium " />
                <Icon icon={<BsPerson size="26" />} text="Profile" />
                <Icon icon={<CiCircleMore size="26" />} text="More" />

                <button className="bg-blue-500 hover:bg-blue-500/75
                font-bold w-full rounded-full p-3 mt-3">
                    Post
                </button>

                {/* <Avatar name="Foo Bar" /> */}
                <button className="flex fixed bottom-0 mb-3 p-3">
                    <Image src={"/twitter-dp.jpg"} width={40} height={40} alt="" className="mr-2" />
                    <div>
                        <span className="block font-bold text-sm">Raj Mandaviya</span>
                        <span className="font-thin text-sm ">@Rajm150503</span>
                    </div>
                    <div className=" h-fit ml-10">
                        <HiOutlineDotsHorizontal size="19" className="" />
                    </div>
                </button>


            </div>
        </div>
    )
}


export default Sidebar;