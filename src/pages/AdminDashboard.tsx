import React, { useState, useEffect } from 'react';
import { Settings, User, Users, Calendar, Image, Truck, Save, Trash2, Edit, X, Home, LogOut, Menu, Upload } from 'lucide-react';

// Helper function to convert file to base64
const handleImageUpload = (file: File, callback: (base64: string) => void) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select a valid image file');
  }
};

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('chairman');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Open sidebar on desktop by default
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sections = [
    { id: 'chairman', name: "Chairman's Message", icon: User },
    { id: 'executives', name: 'Executive Committee', icon: Users },
    { id: 'events', name: 'Our Events', icon: Calendar },
    { id: 'gallery', name: 'Our Gallery', icon: Image },
    { id: 'caravan', name: 'Kyumsa Caravan', icon: Truck }
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to exit the admin dashboard?')) {
      window.location.href = '/#home';
    }
  };

  const handleBackToWebsite = () => {
    window.location.href = '/#home';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Modern Side Panel */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-br from-[#00703C] via-[#005A30] to-[#003d20] text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } shadow-2xl`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <p className="text-xs text-gray-300">Content Management</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-white text-[#00703C] shadow-lg shadow-black/20 scale-105'
                    : 'text-white/90 hover:bg-white/10 hover:text-white hover:scale-105'
                }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? 'bg-[#00703C]/10' : 'bg-white/5 group-hover:bg-white/10'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-sm">{section.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={handleBackToWebsite}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10">
              <Home className="h-5 w-5" />
            </div>
            <span className="font-medium">Back to Website</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white hover:bg-red-500/20 transition-all group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-red-500/20">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="font-medium">Exit Admin</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {sections.find(s => s.id === activeSection)?.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1 hidden md:block">Manage and update content</p>
            </div>
          </div>
          <button
            onClick={handleBackToWebsite}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-lg hover:bg-[#005A30] transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="font-medium">View Website</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto">
            {activeSection === 'chairman' && <ChairmanMessageEditor />}
            {activeSection === 'executives' && <ExecutivesEditor />}
            {activeSection === 'events' && <EventsEditor />}
            {activeSection === 'gallery' && <GalleryEditor />}
            {activeSection === 'caravan' && <CaravanEditor />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Chairman Message Editor
const ChairmanMessageEditor: React.FC = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('chairmanMessage');
    return saved ? JSON.parse(saved) : {
      name: 'SSAGALA LUQMAN',
      title: 'Chairman KYUMSA 2025-2026',
      image: "/Chairman's image.jpg",
      message: `Assalamu Alaikum Warahmatullahi Wabarakatuh,

It is with immense gratitude to Allah (SWT) that I welcome you to the Kyambogo University Muslim Students Association (KYUMSA). As your Chairman, I am honored to serve an organization that stands as a beacon of faith, knowledge, and unity within our beloved institution.

KYUMSA has been instrumental in fostering Islamic values, academic excellence, and moral character among Muslim students at Kyambogo University. Our mission transcends the boundaries of religious practice; we strive to create a holistic environment where students can grow spiritually, intellectually, and socially while maintaining their Islamic identity.`
    };
  });

  const handleSave = () => {
    localStorage.setItem('chairmanMessage', JSON.stringify(formData));
    window.dispatchEvent(new CustomEvent('adminDataSaved', { detail: 'chairmanMessage' }));
    alert('Chairman message saved successfully!');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete the chairman message?')) {
      localStorage.removeItem('chairmanMessage');
      alert('Chairman message deleted!');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Chairman Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Chairman Image</label>
        <div className="space-y-4">
          {formData.image && (
            <div className="relative w-48 h-64 border-2 border-gray-300 rounded-lg overflow-hidden">
              <img
                src={formData.image}
                alt="Chairman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <label className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-md cursor-pointer hover:bg-[#005A30] transition-colors whitespace-nowrap">
                    <Upload className="h-5 w-5" />
                    <span>Choose from Gallery</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, (base64) => {
                            setFormData({ ...formData, image: base64 });
                          });
                        }
                      }}
                    />
                  </label>
                  <input
                    type="text"
                    value={formData.image.startsWith('data:') ? 'Image uploaded' : formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Or enter image URL"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
                  />
                </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={15}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="bg-[#00703C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#005A30] flex items-center space-x-2"
        >
          <Save className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center space-x-2"
        >
          <Trash2 className="h-5 w-5" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

// Executives Editor
const ExecutivesEditor: React.FC = () => {
  const [executives, setExecutives] = useState(() => {
    const saved = localStorage.getItem('executives');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Chairman', position: 'Chairperson', image: '', responsibilities: 'Overall leadership' },
      { id: 2, name: 'Vice Chairman', position: 'Vice Chairperson', image: '', responsibilities: 'Assists the Chairman' }
    ];
  });

  const handleAdd = () => {
    setExecutives([...executives, { id: Date.now(), name: '', position: '', image: '', responsibilities: '' }]);
  };

  const handleUpdate = (id: number, field: string, value: string) => {
    setExecutives(executives.map(exec => exec.id === id ? { ...exec, [field]: value } : exec));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this executive?')) {
      setExecutives(executives.filter(exec => exec.id !== id));
    }
  };

  const handleSave = () => {
    localStorage.setItem('executives', JSON.stringify(executives));
    window.dispatchEvent(new CustomEvent('adminDataSaved', { detail: 'executives' }));
    alert('Executives saved successfully!');
  };

  return (
    <div className="space-y-6">
      <button
        onClick={handleAdd}
        className="bg-[#00703C] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#005A30]"
      >
        + Add Executive
      </button>
      {executives.map((exec) => (
        <div key={exec.id} className="border border-gray-300 rounded-lg p-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={exec.name}
                onChange={(e) => handleUpdate(exec.id, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <input
                type="text"
                value={exec.position}
                onChange={(e) => handleUpdate(exec.id, 'position', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Executive Image</label>
              <div className="space-y-4">
                {exec.image && (
                  <div className="relative w-32 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <label className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-md cursor-pointer hover:bg-[#005A30] transition-colors whitespace-nowrap">
                    <Upload className="h-5 w-5" />
                    <span>Choose from Gallery</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, (base64) => {
                            handleUpdate(exec.id, 'image', base64);
                          });
                        }
                      }}
                    />
                  </label>
                  <input
                    type="text"
                    value={exec.image.startsWith('data:') ? 'Image uploaded' : exec.image}
                    onChange={(e) => handleUpdate(exec.id, 'image', e.target.value)}
                    placeholder="Or enter image URL"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Responsibilities</label>
              <input
                type="text"
                value={exec.responsibilities}
                onChange={(e) => handleUpdate(exec.id, 'responsibilities', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            onClick={() => handleDelete(exec.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center space-x-2"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="bg-[#00703C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#005A30] flex items-center space-x-2"
      >
        <Save className="h-5 w-5" />
        <span>Save All Changes</span>
      </button>
    </div>
  );
};

// Events Editor
const EventsEditor: React.FC = () => {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Event Title', date: '2025-01-01', time: '9:00 AM', location: 'Location', attendees: '100+', description: 'Description', image: '' }
    ];
  });

  const handleAdd = () => {
    setEvents([...events, { id: Date.now(), title: '', date: '', time: '', location: '', attendees: '', description: '', image: '' }]);
  };

  const handleUpdate = (id: number, field: string, value: string) => {
    setEvents(events.map(event => event.id === id ? { ...event, [field]: value } : event));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  const handleSave = () => {
    localStorage.setItem('events', JSON.stringify(events));
    window.dispatchEvent(new CustomEvent('adminDataSaved', { detail: 'events' }));
    alert('Events saved successfully!');
  };

  return (
    <div className="space-y-6">
      <button
        onClick={handleAdd}
        className="bg-[#00703C] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#005A30]"
      >
        + Add Event
      </button>
      {events.map((event) => (
        <div key={event.id} className="border border-gray-300 rounded-lg p-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={event.title}
                onChange={(e) => handleUpdate(event.id, 'title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={event.date}
                onChange={(e) => handleUpdate(event.id, 'date', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="text"
                value={event.time}
                onChange={(e) => handleUpdate(event.id, 'time', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="9:00 AM - 5:00 PM"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={event.location}
                onChange={(e) => handleUpdate(event.id, 'location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attendees</label>
              <input
                type="text"
                value={event.attendees}
                onChange={(e) => handleUpdate(event.id, 'attendees', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="100+"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
              <div className="space-y-4">
                {event.image && (
                  <div className="relative w-48 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <label className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-md cursor-pointer hover:bg-[#005A30] transition-colors whitespace-nowrap">
                    <Upload className="h-5 w-5" />
                    <span>Choose from Gallery</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, (base64) => {
                            handleUpdate(event.id, 'image', base64);
                          });
                        }
                      }}
                    />
                  </label>
                  <input
                    type="text"
                    value={event.image.startsWith('data:') ? 'Image uploaded' : event.image}
                    onChange={(e) => handleUpdate(event.id, 'image', e.target.value)}
                    placeholder="Or enter image URL"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={event.description}
                onChange={(e) => handleUpdate(event.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            onClick={() => handleDelete(event.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center space-x-2"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="bg-[#00703C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#005A30] flex items-center space-x-2"
      >
        <Save className="h-5 w-5" />
        <span>Save All Changes</span>
      </button>
    </div>
  );
};

// Gallery Editor
const GalleryEditor: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('gallery');
    return saved ? JSON.parse(saved) : [
      { id: 1, url: '/image1.jpg', title: 'Image Title', category: 'The Kyumsa Caravan' }
    ];
  });

  const handleAdd = () => {
    setGalleryItems([...galleryItems, { id: Date.now(), url: '', title: '', category: 'The Kyumsa Caravan' }]);
  };

  const handleUpdate = (id: number, field: string, value: string) => {
    setGalleryItems(galleryItems.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  const handleSave = () => {
    localStorage.setItem('gallery', JSON.stringify(galleryItems));
    window.dispatchEvent(new CustomEvent('adminDataSaved', { detail: 'gallery' }));
    alert('Gallery saved successfully!');
  };

  const categories = ['The Kyumsa Caravan', 'Kyumsa Sports Gala', 'Our Darusus', 'Tea Gatherings', 'Community Work', 'Kyumsa Skilling Session', "Sister's Conference", 'General Assembly', 'Campus Life'];

  return (
    <div className="space-y-6">
      <button
        onClick={handleAdd}
        className="bg-[#00703C] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#005A30]"
      >
        + Add Image
      </button>
      {galleryItems.map((item) => (
        <div key={item.id} className="border border-gray-300 rounded-lg p-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Image</label>
              <div className="space-y-4">
                {item.url && (
                  <div className="relative w-48 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <label className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-md cursor-pointer hover:bg-[#005A30] transition-colors whitespace-nowrap">
                    <Upload className="h-5 w-5" />
                    <span>Choose from Gallery</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, (base64) => {
                            handleUpdate(item.id, 'url', base64);
                          });
                        }
                      }}
                    />
                  </label>
                  <input
                    type="text"
                    value={item.url.startsWith('data:') ? 'Image uploaded' : item.url}
                    onChange={(e) => handleUpdate(item.id, 'url', e.target.value)}
                    placeholder="Or enter image URL"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleUpdate(item.id, 'title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={item.category}
                onChange={(e) => handleUpdate(item.id, 'category', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center space-x-2"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="bg-[#00703C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#005A30] flex items-center space-x-2"
      >
        <Save className="h-5 w-5" />
        <span>Save All Changes</span>
      </button>
    </div>
  );
};

// Caravan Editor (Only Amir's pic and message)
const CaravanEditor: React.FC = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('caravanData');
    return saved ? JSON.parse(saved) : {
      amirName: 'MUSINGUNZI ALLAN',
      amirTitle: 'Caravan Amir 2025',
      amirImage: "/Allan copy.jpg",
      message: `The KYUMSA Caravan is our flagship community outreach program that takes the spirit of Islamic charity directly to communities in need. This mobile initiative represents our commitment to serving humanity and embodying the teachings of compassion and generosity in Islam.

Through the Caravan, we mobilize students, volunteers, and resources to reach remote and underserved areas, providing essential services including medical care, food distribution, educational support, and community development projects. The program runs year-round with special emphasis during Ramadan and other significant occasions.`
    };
  });

  const handleSave = () => {
    localStorage.setItem('caravanData', JSON.stringify(formData));
    window.dispatchEvent(new CustomEvent('adminDataSaved', { detail: 'caravanData' }));
    alert('Caravan data saved successfully!');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete the caravan data?')) {
      localStorage.removeItem('caravanData');
      alert('Caravan data deleted!');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Caravan Amir Name</label>
        <input
          type="text"
          value={formData.amirName}
          onChange={(e) => setFormData({ ...formData, amirName: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Caravan Amir Title</label>
        <input
          type="text"
          value={formData.amirTitle}
          onChange={(e) => setFormData({ ...formData, amirTitle: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Caravan Amir Image</label>
        <div className="space-y-4">
          {formData.amirImage && (
            <div className="relative w-48 h-64 border-2 border-gray-300 rounded-lg overflow-hidden">
              <img
                src={formData.amirImage}
                alt="Caravan Amir"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <label className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#00703C] text-white rounded-md cursor-pointer hover:bg-[#005A30] transition-colors whitespace-nowrap">
              <Upload className="h-5 w-5" />
              <span>Choose from Gallery</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageUpload(file, (base64) => {
                      setFormData({ ...formData, amirImage: base64 });
                    });
                  }
                }}
              />
            </label>
            <input
              type="text"
              value={formData.amirImage.startsWith('data:') ? 'Image uploaded' : formData.amirImage}
              onChange={(e) => setFormData({ ...formData, amirImage: e.target.value })}
              placeholder="Or enter image URL"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={10}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00703C]"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="bg-[#00703C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#005A30] flex items-center space-x-2"
        >
          <Save className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center space-x-2"
        >
          <Trash2 className="h-5 w-5" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

