import BinThumbnail from "./BinThumbnail"

function Sidebar() {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-coral-pink dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-bold tracking-wide text-yellow uppercase">BINS</div>
            </div>
          </li>
          <li>
            <BinThumbnail></BinThumbnail>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar