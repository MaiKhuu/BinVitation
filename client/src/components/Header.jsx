function Header() {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-20">
      <div className="flex items-center justify-start md:justify-center pl-3 w-30 md:w-64 h-14 bg-pink dark:bg-gray-800 border-none">
        <img className="w-15 h-15 md:w-20 md:h-20 mr-2 rounded-md overflow-hidden" src="https://svg-files.pixelied.com/e2535134-4c08-430a-8ed6-70b82c261bf4/thumb-256px.png" />
        <span className="font-bold open-sans-semibold hidden md:block">BinVitation</span>
      </div>
      
      <div className="flex justify-between items-center h-14 bg-pink dark:bg-gray-800 header-right">
        <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
        </div>
      </div>
    </div>
  )
}

export default Header