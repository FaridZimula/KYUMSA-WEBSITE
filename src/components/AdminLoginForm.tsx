import React, { useState } from 'react';
import { Lock, User as UserIcon, Loader2 } from 'lucide-react';
import { supabase, hasSupabaseConfig } from '../lib/supabaseClient';

interface Props {
  onSuccess: () => void;
}

const AdminLoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const tryLocalCredentials = () => {
    // Temporary fallback credentials
    if (username.trim() === 'admin' && password === 'kyumsa admin1') {
      sessionStorage.setItem('kyumsa_admin_authed', 'true');
      onSuccess();
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // If Supabase is configured and username looks like an email, try Supabase auth first
      const looksLikeEmail = /.+@.+\..+/.test(username);
      if (hasSupabaseConfig && supabase && looksLikeEmail) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: username,
          password,
        });
        if (!signInError) {
          sessionStorage.setItem('kyumsa_admin_authed', 'true');
          onSuccess();
          return;
        }
      }

      // Fallback to local credentials while backend is being set up
      const ok = tryLocalCredentials();
      if (!ok) {
        setError('Invalid credentials. Use the default username/password provided or your Supabase admin account.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <div className="text-center mb-6">
          <img
            src="/kyumsa log_page-0001.png"
            alt="KYUMSA Logo"
            className="mx-auto h-20 w-20 object-contain"
          />
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#00703C]">
            Web Admin Dashbord
          </h1>
          <p className="mt-1 text-sm text-gray-600">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <UserIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-gray-300 pl-10 focus:border-[#00703C] focus:ring-[#00703C]"
                placeholder="admin or your email"
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock className="h-5 w-5" />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-gray-300 pl-10 focus:border-[#00703C] focus:ring-[#00703C]"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#00703C] text-white py-2.5 font-semibold shadow-md hover:bg-[#005a30] disabled:opacity-70"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />} Sign In
          </button>

          <div className="text-xs text-gray-500 mt-2">
            Tip: For now you can use username <span className="font-semibold">admin</span> and password <span className="font-semibold">kyumsa admin1</span>.
          </div>
          {hasSupabaseConfig ? (
            <div className="text-xs text-gray-500">
              Supabase enabled: you can also sign in with your admin email and password.
            </div>
          ) : (
            <div className="text-xs text-gray-500">
              Supabase not configured yet. Follow the steps we provide to enable real authentication.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
