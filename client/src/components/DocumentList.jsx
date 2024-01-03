import React from "react"
import DocumentThumbnail from "./DocumentThumbnail"
import { getDocuments } from "../services/services"

function DocumentList({ binId }) {
  const [documentIds, setDocumentIds] = React.useState([])

  React.useEffect(() => {
    getDocuments(binId)
      .then(data => data.docs)
      .then(docsId => setDocumentIds(docsId))
  }, [])

  return (
   <>
      <table className="overflow-auto w-full">
        
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3">REQUEST</th>
          <th className="px-4 py-3">STATUS</th>
          <th className="px-4 py-3">DATE</th>
          <th className="px-4 py-3">TIME</th>
        </tr>
        
        {documentIds.map(id => <DocumentThumbnail key={"doc_" + id} documentId={id}/>)}

      </table>
   </>
  )
 }
 
 export default DocumentList