import React from "react"
import { getDocument } from "../services/services"

function DocumentThumbnail({documentId}) {
  const [info, setInfo] = React.useState({})

  React.useEffect(() => {
    getDocument(documentId)
      .then(data => setInfo(data))
  }, [])

  const getReceivedTime = (info) => {
    const hour = Number((info.received_at || "").slice(11, 13))
    const minAndSec = (info.received_at || "").slice(13, 19)
    console.log(info.received_at)
    if (hour > 12) {
      return `${hour - 12}${minAndSec} PM`
    } else {
      return `${hour}${minAndSec} AM`
    }
  }

  const getReceivedDate = (info) => {
    return (info.received_at || "").slice(0, 10)
  }

  return (
    <>
      {console.log(info)}
      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
          <td className="px-4 py-3">

            <div className="flex items-center text-sm">
                <p className="font-semibold"> HTTP {info.method} </p>
            </div>
          </td>

          <td className="px-4 py-3 text-xs">
            { info.read === false 
              ? <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> 
                  Unread 
                </span> 
              : ""
            }
            
          </td>
          <td className="px-4 py-3 text-sm"> {getReceivedDate(info)} </td>
          <td className="px-4 py-3 text-sm">{getReceivedTime(info)}</td>
        </tr>
      </tbody>
    </>
  )
}

export default DocumentThumbnail