import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Home = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNewsItems([
        {
          id: 1,
          title: "UET Mardan Announces New Engineering Programs",
          date: "2023-06-15",
          excerpt: "The university is expanding its curriculum with three new engineering disciplines starting next semester.",
          link: "/news/1"
        },
        {
          id: 2,
          title: "Research Grant Awarded to Computer Science Department",
          date: "2023-06-10",
          excerpt: "Faculty members receive $500,000 grant for AI research project.",
          link: "/news/2"
        }
      ]);
      
      setEvents([
        {
          id: 1,
          title: "Open House Day",
          date: "2023-07-20",
          location: "Main Campus",
          link: "/events/1"
        },
        {
          id: 2,
          title: "Tech Symposium 2023",
          date: "2023-08-15",
          location: "Conference Hall",
          link: "/events/2"
        }
      ]);
      
      setIsLoading(false);
    };
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-blue-800 text-white text-center py-2 px-4 text-sm">
        <p>Admissions for Fall 2023 are now open! <a href="/admissions" className="font-semibold underline ml-2">Apply Now</a></p>
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Engineering Excellence in the Heart of Khyber Pakhtunkhwa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Join Pakistan's premier engineering institution with state-of-the-art facilities and world-class faculty.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/admissions" 
                className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition shadow-md"
              >
                Apply Now
              </a>
              <a 
                href="/academics" 
                className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition"
              >
                Explore Programs
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
      
      {/* Quick Links */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/academics" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Academic Programs</span>
            </a>
            <a href="/admissions" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Admissions</span>
            </a>
            <a href="/campus-life" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Campus Life</span>
            </a>
            <a href="/events" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Events Calendar</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">University News</h2>
            
            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {newsItems.map((news, index) => (
                  <motion.div 
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NewsCard news={news} />
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="mt-8">
              <a href="/news" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
                View All News
              </a>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Upcoming Events</h2>
              
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="animate-pulse">
                      <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <motion.div 
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              )}
              
              <div className="mt-6">
                <a href="/events" className="text-blue-600 hover:underline font-medium">
                  View All Events
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <a href="/academics#calendar" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Forms
                  </a>
                </li>
                <li>
                  <a href="/contact" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Directory
                  </a>
                </li>
                <li>
                  <a href="https://portal.uetmardan.edu.pk" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    University Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;