CREATE TABLE bins (
  id serial PRIMARY KEY, 
  name text NOT NULL, 
  created_at TIME DEFAULT NOW(), 
)