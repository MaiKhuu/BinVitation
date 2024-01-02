function Header() {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-20 ">
      <div className="flex items-center justify-start md:justify-right pl-3 w-full h-14 bg-pink dark:bg-gray-800 border-none">
        <img className="w-15 h-15 md:w-20 md:h-20 mr-2 rounded-md overflow-hidden" src="https://svg-files.pixelied.com/e2535134-4c08-430a-8ed6-70b82c261bf4/thumb-256px.png" />
        <span className="w-fullfont-bold open-sans-semibold hidden md:block">BinVitation</span>
      </div>
    </div>
  )
}

export default Header