import React from "react"
import { getBin, openBin } from "../services/services"

function BinThumbnail({ binId, clickedBin, handleBinClicked }){
  const [name, setName] = React.useState("")
  const [newStatus, setNewStatus] = React.useState(false)
  const [unreadCount, setUnreadCount] = React.useState(0)

  React.useEffect(() => {
    getBin(binId)
      .then(data => {
        setName(data.name)
        setNewStatus(!data.read)
        setUnreadCount(Number(data.unread_docs))
      })
  }, [binId, name, newStatus, unreadCount])

  const handleClick = () => {
    handleBinClicked(binId)
    openBin(binId)
    setNewStatus(false)
  }

  const aClassNames = `relative flex flex-row items-center h-11 focus:outline-none hover:bg-pink dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-mauve dark:hover:border-gray-800 pr-6 ${clickedBin === binId ? "bg-pink" : "bg-coral"}`

  return (
    <a href="#" className={aClassNames} onClick={handleClick}>
      <span className="inline-flex justify-center items-center ml-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
      </span>
      
      <span className="ml-2 text-sm tracking-wide truncate">{name}</span>
      
      { newStatus === true && 
        <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-burgundy bg-red-50 rounded-full">
          New
        </span>
      }
      
      { unreadCount > 0 && 
        <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-burgundy bg-red-50 rounded-full">
          {unreadCount}
        </span>
      }
    </a>
  )
}

export default BinThumbnail