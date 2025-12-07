/**
 * Run this script on a trusted machine (server/locally) where you can keep
 * the Supabase service_role key safe. It will create a public bucket named
 * `images` if it doesn't exist already.
 *
 * Usage:
 *   node create_bucket.js
 *
 * Make sure you set environment variables:
 * SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in environment');
  process.exit(1);
}

const supabase = createClient(url, key);

async function ensureBucket() {
  const bucketId = 'images';
  try {
    // Check if bucket exists
    const { data: list } = await supabase.storage.listBuckets();
    const exists = list.some(b => b.name === bucketId);
    if (!exists) {
      console.log('Creating bucket:', bucketId);
      const { data, error } = await supabase.storage.createBucket(bucketId, { public: true });
      if (error) throw error;
      console.log('Bucket created:', data);
    } else {
      console.log('Bucket already exists:', bucketId);
      // ensure it's public
      const { data: meta, error: metaErr } = await supabase.storage.getBucket(bucketId);
      if (metaErr) throw metaErr;
      if (!meta.public) {
        console.log('Setting bucket to public');
        await supabase.storage.updateBucket(bucketId, { public: true });
        console.log('Bucket set to public');
      }
    }
  } catch (err) {
    console.error('Failed to ensure bucket:', err.message || err);
    process.exit(1);
  }
}

ensureBucket().then(() => {
  console.log('Done');
  process.exit(0);
});
