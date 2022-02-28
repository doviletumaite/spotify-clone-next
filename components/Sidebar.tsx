import HomeIcon from "@heroicons/react/outline/HomeIcon"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import LIbraryIcon from "@heroicons/react/outline/LibraryIcon"
import HeartIcon from "@heroicons/react/outline/HeartIcon"
import RssIcon from "@heroicons/react/outline/RssIcon"
import PlusCircleIcon from "@heroicons/react/outline/PlusCircleIcon"

const Sidebar = () => {
    return(
        <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5"/>
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <LIbraryIcon className="h-5 w-5"/>
                <p>Your library</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5"/>
                <p>Create Playlist</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5"/>
                <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white">
                <RssIcon className="h-5 w-5"/>
                <p>Your episodes</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>
        
        </div>
    )
}
export default Sidebar