function Document() {
  const obj = {
    "text": "Hello, this is a message from your webhook!",
    "attachments": [
      {
        "text": "Optional text that appears above the attachment block",
        "color": "#36a64f",
        "fields": [
          {
            "title": "Field 1",
            "value": "This is the value of Field 1",
            "short": true
          },
          {
            "title": "Field 2",
            "value": "This is the value of Field 2",
            "short": true
          }
        ]
      }
    ]
  }
  
  return (
    <>
      <div className="flex-grow">
        <h4 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h4>
        <p className="pl=10 leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
      </div>
      
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </>
  )
}

export default Document