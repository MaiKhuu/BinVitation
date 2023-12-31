CREATE TABLE IF NOT EXISTS bins (
  id UUID PRIMARY KEY, 
  name TEXT NOT NULL, 
  created_at TIMESTAMP DEFAULT NOW() 
);
CREATE TABLE IF NOT EXISTS webhooks_data (
  id UUID PRIMARY KEY,
  bins_id UUID REFERENCES bins(id),
  created_at TIMESTAMP DEFAULT NOW(), 
  payload JSONB
);