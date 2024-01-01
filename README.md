# BinVitation
A simple Request Bin that generates URL to be used for webhook testing

# .ENV file
lives in root dir
contains SERVER_PORT, SERVER_HOST, DATABASE_URL
make sure database is specified (i use binvitation)

# API 
`GET /` => welcome message
`POST /init` => init sql tables, return message: failed or successful
`GET /bins` => returns all bins info
`POST /bins` => require (name), make a new bin, returns that bin info with URL 
