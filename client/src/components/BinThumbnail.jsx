function BinThumbnail(){
  return (
    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-pink dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-mauve dark:hover:border-gray-800 pr-6">
      <span className="inline-flex justify-center items-center ml-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">Board</span>
      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-burgundy bg-red-50 rounded-full">New</span>
      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-burgundy bg-red-50 rounded-full">2</span>
    </a>
  )
}

export default BinThumbnail