function DocumentList() {
  return (
   <>
      <table className="overflow-auto w-full">
        
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3">REQUEST</th>
          <th className="px-4 py-3">STATUS</th>
          <th className="px-4 py-3">DATE</th>
          <th className="px-4 py-3">TIME</th>
        </tr>

        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">

              <div className="flex items-center text-sm">
                  <p className="font-semibold">HTTP GET</p>
              </div>
            </td>

            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Unread </span>
            </td>
            <td className="px-4 py-3 text-sm">15-01-2021</td>
            <td className="px-4 py-3 text-sm">12:02 PM</td>
          </tr>
        </tbody>

      </table>
   </>
  )
 }
 
 export default DocumentList