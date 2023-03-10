import Image from 'next/image'
import SidebarMenuItems from './SidebarMenuItems'
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardCopyIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserAddIcon, UserIcon } from '@heroicons/react/outline';
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = () => {
    const { data: session } = useSession();
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
            {/* Waterd Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image
                    width="60"
                    height="60"
                    src="/waterd.png"
                ></Image>
            </div>

            {/* Menu */}

            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItems text="Home" Icon={HomeIcon} active />
                <SidebarMenuItems text="Explore" Icon={HashtagIcon} />
                {session && (
                    <>
                        <SidebarMenuItems text="Notificaions" Icon={BellIcon} />
                        <SidebarMenuItems text="Messages" Icon={InboxIcon} />
                        <SidebarMenuItems text="Bookmark" Icon={BookmarkIcon} />
                        <SidebarMenuItems text="Lists" Icon={ClipboardCopyIcon} />
                        <SidebarMenuItems text="Profile" Icon={UserIcon} />
                        <SidebarMenuItems text="More" Icon={DotsCircleHorizontalIcon} />
                    </>
                )}
            </div>

            {/* Button */}

            {session ? (
                <>
                    <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Waterd</button>

                    {/* Mini Profile */}

                    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                        <img className="h-10 w-10 rounded-full xl:mr-2" src={session.user.image} alt="user-img" onClick={ signOut }/>
                        <div className="leading-5 hidden xl:inline">
                            <h4 className="font-bold">{ session.user.name}</h4>
                            <p className="text-gray-500">@{ session.user.username }</p>
                        </div>
                        <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
                    </div>
                </>
            ) : (
                <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Sign in</button>
            )}

        </div>
    )
}

export default Sidebar