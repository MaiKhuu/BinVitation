CREATE TABLE IF NOT EXISTS bins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  name TEXT NOT NULL, 
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW() 
);
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bin_id UUID REFERENCES bins(id),
  method TEXT NOT NULL,
  received_at TIMESTAMP DEFAULT NOW(), 
  read BOOLEAN NOT NULL DEFAULT false,
  payload JSONB
);