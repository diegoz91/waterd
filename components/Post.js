import { ChartBarIcon, ChatIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/solid"
import Moment from "react-moment"

const Post = ({ post }) => {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">
            {/* User Image */}
            <img className="h-12 w-12 rounded-full mr-4" src={post.data().userImage} alt="user-image" />
            {/* Right Side */}
            <div className="flex-1">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Post User Info */}
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name}</h4>
                        <span className="text-sm sm:text-[15px]">{post.data().username} - </span>
                        <span className="text-sm sm:text-[15px] hover:underline">
                            <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                        </span>
                    </div>
                    {/* Dot Icon */}
                    <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
                </div>
                {/* Post Text */}

                <p className="text-gray-800 text-[15px sm:text-[16px] mb-2 ">{post.data().text}</p>

                {/* Post Image */}

                <img className="rounded-2xl mr-2 " src={post.data().image} alt="" />

                {/* Icons */}

                <div className="flex justify-between text-gray-500 p-2">
                    <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                    <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
                    <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
                    <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                    <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                </div>
            </div>
        </div>
    )
}

export default Post