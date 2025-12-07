# Supabase Setup Instructions for KYUMSA Website

## Quick Checklist

- [ ] Created Supabase account at supabase.com
- [ ] Created new project in Supabase
- [ ] Copied Project URL and Anon Key
- [ ] Created `.env.local` file in project root
- [ ] Added credentials to `.env.local`
- [ ] Ran DATABASE_SETUP.sql script in Supabase SQL Editor
- [ ] Inserted sample data
- [ ] Tested connection

## Environment Setup

### 1. Create `.env.local` file

Create a file named `.env.local` in the root of your project (same level as `package.json`):

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-from-supabase
```

**Where to find these:**
- Go to Supabase Dashboard
- Click your project
- Go to Settings → API
- Copy the Project URL and the "anon public" key

### 2. Install Dependencies

If not already installed, run:

```bash
npm install @supabase/supabase-js
```

### 3. Run the Database Setup

1. In your Supabase dashboard, go to "SQL Editor"
2. Click "New Query"
3. Open `DATABASE_SETUP.sql` from your project
4. Copy all content
5. Paste into Supabase SQL Editor
6. Click "Run"

### 4. Verify Tables Were Created

In Supabase:
1. Click "Table Editor" on the left
2. You should see all the tables listed:
   - donation_details
   - contact_info
   - chairman_message
   - executives
   - events
   - gallery_images
   - kyumsa_caravan
   - daily_darsus
   - weekly_darsus
   - alumni
   - admin_users

## Next Steps: Admin Dashboard Integration

The admin dashboard will be updated to:
1. Display data from Supabase tables
2. Allow editing/adding/deleting records
3. Upload images to Supabase Storage
4. Manage all website content

## Troubleshooting

### Issue: "VITE_SUPABASE_URL is undefined"
**Solution:** Make sure `.env.local` file exists and variables have the `VITE_` prefix

### Issue: "Cannot connect to Supabase"
**Solution:** Check that URL and key are correct, and there are no extra spaces in `.env.local`

### Issue: "SQL error when running setup script"
**Solution:** Make sure you're in the correct Supabase project. Try running smaller parts of the script individually.

## What's Next?

Once setup is complete, I will help you:
1. Create admin dashboard forms to edit each table
2. Add image upload functionality
3. Set up proper authentication
4. Create API functions to read/write data

## Create Storage Bucket (for images)

The project uses a Supabase Storage bucket named `images` to host uploaded images. A helper script `scripts/create_bucket.js` is provided to create the bucket using the Supabase service role key (keep this key secret).

1. Create a `.env` or set environment variables for running the script locally:

```powershell
setx SUPABASE_URL "https://your-project-id.supabase.co"
setx SUPABASE_SERVICE_ROLE_KEY "your-service-role-key"
```

2. Install dependencies and run the script from the project root:

```powershell
npm install
node scripts/create_bucket.js
```

3. Confirm in the Supabase dashboard under "Storage" that a bucket named `images` exists and is public.

Note: Only run this script from a trusted machine (your local dev machine or a secure server). Do NOT commit your service role key to source control.
