CREATE TABLE IF NOT EXISTS bins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  name TEXT NOT NULL, 
  created_at TIMESTAMP DEFAULT NOW() 
);
CREATE TABLE IF NOT EXISTS data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bins_id UUID REFERENCES bins(id),
  created_at TIMESTAMP DEFAULT NOW(), 
  payload JSONB
);