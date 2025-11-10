import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Footer from '../components/Footer';

const OurGalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);
  const [viewMode, setViewMode] = useState<'categories' | 'images'>('categories');

  const defaultGalleryImages = [
    // Kyumsa Caravan
    {
      url: '/Health Out Reach.jpg',
      title: 'Health Outreach',
      category: 'The Kyumsa Caravan'
    },
    {
      url: '/Community Outreach.jpg',
      title: 'Community Outreach',
      category: 'The Kyumsa Caravan'
    },
    {
      url: '/KYUMSA Clean up.jpg',
      title: 'KYUMSA Clean Up',
      category: 'The Kyumsa Caravan'
    },
    {
      url: '/Kyumsa Clean Up Men.jpg',
      title: 'Clean Up Activity',
      category: 'The Kyumsa Caravan'
    },
    // Our Darusus
    {
      url: '/Family Darus.jpg',
      title: 'Family Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/Monday Darus.jpg',
      title: 'Monday Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/tuesday darus.jpg',
      title: 'Tuesday Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/FIQH DARUS.jpg',
      title: 'Fiqh Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/Gents Halaq.jpg',
      title: 'Gents Halaq',
      category: 'Our Darusus'
    },
    {
      url: '/Ladies Halaq.jpg',
      title: 'Ladies Halaq',
      category: 'Our Darusus'
    },
    {
      url: '/Ladies Quran Darusu.jpg',
      title: 'Ladies Quran Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/Nakasero darus.jpg',
      title: 'Nakasero Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/Banda Darus.jpg',
      title: 'Banda Darusu',
      category: 'Our Darusus'
    },
    {
      url: '/Kennedy Darusu.jpg',
      title: 'Kennedy Darusu',
      category: 'Our Darusus'
    },
    // Tea Gatherings
    {
      url: '/Tea Gathering.jpg',
      title: 'Tea Gathering',
      category: 'Tea Gatherings'
    },
    // Community Work
    {
      url: '/Community Outreach.jpg',
      title: 'Community Service',
      category: 'Community Work'
    },
    {
      url: '/Health Out Reach.jpg',
      title: 'Health Outreach Program',
      category: 'Community Work'
    },
    {
      url: '/KYUMSA Clean up.jpg',
      title: 'Community Clean Up',
      category: 'Community Work'
    },
    // General Assembly & Meetings
    {
      url: '/General assembly.jpg',
      title: 'General Assembly',
      category: 'General Assembly'
    },
    {
      url: '/executive meeting.jpg',
      title: 'Executive Meeting',
      category: 'General Assembly'
    },
    {
      url: '/Reunion.jpg',
      title: 'Reunion',
      category: 'General Assembly'
    },
    // Campus Life
    {
      url: '/kyumsa mosque.jpg',
      title: 'KYUMSA Mosque',
      category: 'Campus Life'
    },
    {
      url: '/Inside the mosque.jpg',
      title: 'Inside the Mosque',
      category: 'Campus Life'
    },
    {
      url: '/Kyumsa Men.jpg',
      title: 'KYUMSA Men',
      category: 'Campus Life'
    },
    {
      url: '/Kyumsa move.jpg',
      title: 'KYUMSA Movement',
      category: 'Campus Life'
    },
    // Kyumsa Skilling Session
    {
      url: '/executive meeting.jpg',
      title: 'Skilling Session',
      category: 'Kyumsa Skilling Session'
    },
    {
      url: '/General assembly.jpg',
      title: 'Training Workshop',
      category: 'Kyumsa Skilling Session'
    },
    // Sister's Conference
    {
      url: '/Ladies Halaq.jpg',
      title: "Sister's Conference",
      category: "Sister's Conference"
    },
    {
      url: '/Ladies Quran Darusu.jpg',
      title: "Sister's Gathering",
      category: "Sister's Conference"
    },
    // Kyumsa Sports Gala
    {
      url: '/Reunion.jpg',
      title: 'Sports Gala Event',
      category: 'Kyumsa Sports Gala'
    },
    {
      url: '/General assembly.jpg',
      title: 'Sports Competition',
      category: 'Kyumsa Sports Gala'
    }
  ];

  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages);

  useEffect(() => {
    const saved = localStorage.getItem('gallery');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Convert admin format {id, url, title, category} to gallery format {url, title, category}
          const converted = parsed.map((item: any) => ({
            url: item.url || '',
            title: item.title || '',
            category: item.category || 'The Kyumsa Caravan'
          })).filter((item: any) => item.url); // Only include items with URLs
          if (converted.length > 0) {
            setGalleryImages(converted);
          }
        }
      } catch (e) {
        console.error('Error loading gallery:', e);
      }
    }
  }, []);

  // Listen for storage changes and admin save events
  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem('gallery');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const converted = parsed.map((item: any) => ({
              url: item.url || '',
              title: item.title || '',
              category: item.category || 'The Kyumsa Caravan'
            })).filter((item: any) => item.url);
            if (converted.length > 0) {
              setGalleryImages(converted);
            }
          }
        } catch (e) {
          console.error('Error loading gallery:', e);
        }
      }
    };

    const handleStorageChange = () => loadData();
    const handleAdminSave = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'gallery') {
        loadData();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleStorageChange);
    window.addEventListener('adminDataSaved', handleAdminSave as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleStorageChange);
      window.removeEventListener('adminDataSaved', handleAdminSave as EventListener);
    };
  }, []);

  const categoryList = [
    'The Kyumsa Caravan',
    'Kyumsa Sports Gala',
    'Our Darusus',
    'Tea Gatherings',
    'Community Work',
    'Kyumsa Skilling Session',
    "Sister's Conference",
    'General Assembly',
    'Campus Life'
  ];
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredImages = selectedCategory
    ? galleryImages.filter(img => img.category === selectedCategory)
    : [];
  
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setViewMode('images');
  };
  
  const handleBackToCategories = () => {
    setViewMode('categories');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 bg-gradient-to-r from-[#00703C] to-[#005A30] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/kyumsa mosque.jpg"
            alt="Our Gallery Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore memorable moments from KYUMSA's events, activities, and community initiatives. These photos capture the spirit of brotherhood, learning, and service that defines our organization.
          </p>
        </div>

        {viewMode === 'categories' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categoryList.map((category, index) => {
              const categoryImageCount = galleryImages.filter(img => img.category === category).length;
              const isGreen = index % 2 === 0;
              return (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    isGreen 
                      ? 'bg-gradient-to-br from-[#00703C] to-[#005A30]' 
                      : 'bg-black'
                  } rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 text-white`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-center">{category}</h3>
                  <p className="text-center text-gray-200">{categoryImageCount} {categoryImageCount === 1 ? 'Image' : 'Images'}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <button
                onClick={handleBackToCategories}
                className="bg-[#00703C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#005A30] transition-colors mb-4"
              >
                ← Back to Categories
              </button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedCategory}</h2>
              <p className="text-gray-600">{filteredImages.length} {filteredImages.length === 1 ? 'Image' : 'Images'}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-w-16 aspect-h-12 h-64">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
              ))}
            </div>
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No images found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OurGalleryPage;
