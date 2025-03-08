import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Clock, MessageSquare } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-white text-center">
          Please login to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-indigo-600 rounded-full">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Your Profile</h2>
              <p className="text-white/70">{user.email}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              </div>
              <div className="space-y-2">
                {user.history.length > 0 ? (
                  user.history.map((item, idx) => (
                    <div key={idx} className="text-white/70">
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="text-white/50">No recent activity</p>
                )}
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Saved Prompts</h3>
              </div>
              <p className="text-white/50">No saved prompts yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;