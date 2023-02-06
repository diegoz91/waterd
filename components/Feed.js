import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'

const Feed = () => {
    const posts = [{
        id: "1",
        name: "Gaia Riccardi",
        username: "alealilluput",
        userImage: "/lilliput.jpeg",
        img: "https://images.unsplash.com/photo-1673454753170-83c796e48bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        text: "nice view!",
        timestamp: "2 hour ago"
    },
    {
        id: "2",
        name: "Nyco Zago",
        username: "nyoorz",
        userImage: "/Anoup.PNG",
        img: "https://images.unsplash.com/photo-1675068766426-eb0f1a065314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Wow!",
        timestamp: "2 days ago"
    },]
    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5 top-0 z-50 bg-white border-b border-gray-200" />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Feed