-- Create tables for KYUMSA Website

-- 1. DONATION DETAILS (for the donation section)
CREATE TABLE IF NOT EXISTS donation_details (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  donation_method TEXT NOT NULL, -- 'airtel', 'mtn', 'bank'
  number_or_account TEXT,
  account_holder_name TEXT,
  bank_name TEXT,
  account_number TEXT,
  routing_number TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 2. CONTACT INFORMATION
CREATE TABLE IF NOT EXISTS contact_info (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  contact_type TEXT NOT NULL, -- 'email', 'phone', 'address'
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 3. CHAIRMAN MESSAGE
CREATE TABLE IF NOT EXISTS chairman_message (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  chairman_name TEXT,
  chairman_title TEXT,
  chairman_image_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 4. EXECUTIVE MEMBERS
CREATE TABLE IF NOT EXISTS executives (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  phone TEXT,
  order_number INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 5. EVENTS
CREATE TABLE IF NOT EXISTS events (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE,
  event_time TIME,
  location TEXT,
  image_url TEXT,
  details TEXT,
  status TEXT DEFAULT 'upcoming', -- 'upcoming', 'past'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 6. GALLERY IMAGES
CREATE TABLE IF NOT EXISTS gallery_images (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT, -- 'events', 'activities', 'members'
  upload_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 7. KYUMSA CARAVAN DETAILS
CREATE TABLE IF NOT EXISTS kyumsa_caravan (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  location TEXT,
  date_held DATE,
  participants INT,
  details TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 8. DAILY DARSUS
CREATE TABLE IF NOT EXISTS daily_darsus (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  date_posted DATE DEFAULT CURRENT_DATE,
  scholar_name TEXT,
  image_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 9. WEEKLY DARSUS
CREATE TABLE IF NOT EXISTS weekly_darsus (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  week_of DATE,
  scholar_name TEXT,
  image_url TEXT,
  video_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 10. ALUMNI PROFILES
CREATE TABLE IF NOT EXISTS alumni (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  graduation_year INT,
  bio TEXT,
  current_occupation TEXT,
  image_url TEXT,
  email TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT
);

-- 11. ADMIN USERS (for authentication)
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin', -- 'admin', 'editor'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS (Row Level Security) for safety
ALTER TABLE donation_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE chairman_message ENABLE ROW LEVEL SECURITY;
ALTER TABLE executives ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE kyumsa_caravan ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_darsus ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_darsus ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumni ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies (everyone can view, only authenticated users can edit)
-- Donation Details
CREATE POLICY "Anyone can view donation details" ON donation_details FOR SELECT USING (true);
CREATE POLICY "Authenticated users can update donation details" ON donation_details FOR UPDATE USING (auth.role() = 'authenticated');

-- Contact Info
CREATE POLICY "Anyone can view contact info" ON contact_info FOR SELECT USING (true);
CREATE POLICY "Authenticated users can update contact info" ON contact_info FOR UPDATE USING (auth.role() = 'authenticated');

-- Chairman Message
CREATE POLICY "Anyone can view chairman message" ON chairman_message FOR SELECT USING (true);
CREATE POLICY "Authenticated users can update chairman message" ON chairman_message FOR UPDATE USING (auth.role() = 'authenticated');

-- Executives
CREATE POLICY "Anyone can view executives" ON executives FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage executives" ON executives FOR ALL USING (auth.role() = 'authenticated');

-- Events
CREATE POLICY "Anyone can view events" ON events FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage events" ON events FOR ALL USING (auth.role() = 'authenticated');

-- Gallery
CREATE POLICY "Anyone can view gallery images" ON gallery_images FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage gallery" ON gallery_images FOR ALL USING (auth.role() = 'authenticated');

-- Caravan
CREATE POLICY "Anyone can view caravan details" ON kyumsa_caravan FOR SELECT USING (true);
CREATE POLICY "Authenticated users can update caravan" ON kyumsa_caravan FOR UPDATE USING (auth.role() = 'authenticated');

-- Daily Darsus
CREATE POLICY "Anyone can view daily darsus" ON daily_darsus FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage daily darsus" ON daily_darsus FOR ALL USING (auth.role() = 'authenticated');

-- Weekly Darsus
CREATE POLICY "Anyone can view weekly darsus" ON weekly_darsus FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage weekly darsus" ON weekly_darsus FOR ALL USING (auth.role() = 'authenticated');

-- Alumni
CREATE POLICY "Anyone can view alumni" ON alumni FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage alumni" ON alumni FOR ALL USING (auth.role() = 'authenticated');

-- Admin Users (only admins can view/edit)
CREATE POLICY "Only authenticated users can view admin users" ON admin_users FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can manage admin users" ON admin_users FOR ALL USING (auth.role() = 'authenticated');
