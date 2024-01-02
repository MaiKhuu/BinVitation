import React from "react"
import DocumentList from "./DocumentList"
import Document from "./Document"


function MainArea() {
  const [showList, setShowList] = React.useState(true)


  return (
    <>
      <div className="fixed overflow-auto h-full ml-14 mt mb-10 md:ml-64">
        <div className=" mt-14 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              {/* <DocumentList /> */}
              <Document />
            </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default MainArea