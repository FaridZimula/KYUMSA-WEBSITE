import { supabase, hasSupabaseConfig } from './supabaseClient';

// Uploads an image file to the specified bucket and path. Returns public URL on success.
export async function uploadImageFile(bucket: string, file: File, path?: string) {
  if (!hasSupabaseConfig || !supabase) {
    throw new Error('Supabase is not configured');
  }

  const fileExt = file.name.split('.').pop();
  const fileName = path ?? `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: '3600',
    upsert: true,
  });

  if (error) throw error;

  const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(data.path);
  return publicData.publicUrl;
}

export async function getPublicUrl(bucket: string, path: string) {
  if (!hasSupabaseConfig || !supabase) return null;
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export async function listFiles(bucket: string, options?: { limit?: number; offset?: number; path?: string }) {
  if (!hasSupabaseConfig || !supabase) return [];
  const { data, error } = await supabase.storage.from(bucket).list(options?.path ?? '', {
    limit: options?.limit ?? 100,
    offset: options?.offset ?? 0,
    sortBy: { column: 'name', order: 'asc' }
  });
  if (error) throw error;
  return data;
}

export async function removeFile(bucket: string, path: string) {
  if (!hasSupabaseConfig || !supabase) throw new Error('Supabase not configured');
  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) throw error;
  return true;
}
