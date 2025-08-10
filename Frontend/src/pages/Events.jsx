import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { motion } from 'framer-motion';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('upcoming');

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setEvents([
        {
          id: 1,
          title: "Open House Day",
          date: "2023-07-20",
          endDate: "2023-07-20",
          time: "9:00 AM - 3:00 PM",
          location: "Main Campus",
          description: "Prospective students and their families are invited to tour our campus, meet faculty and current students, and learn about our academic programs.",
          category: "admissions",
          image: "/open-house.jpg",
          registrationLink: "#"
        },
        {
          id: 2,
          title: "Tech Symposium 2023",
          date: "2023-08-15",
          endDate: "2023-08-17",
          time: "8:00 AM - 5:00 PM Daily",
          location: "Conference Hall",
          description: "Annual technology symposium featuring keynote speakers, technical sessions, and student project exhibitions on emerging technologies.",
          category: "academic",
          image: "/tech-symposium.jpg",
          registrationLink: "#"
        },
        {
          id: 3,
          title: "Career Fair",
          date: "2023-09-10",
          endDate: "2023-09-10",
          time: "10:00 AM - 4:00 PM",
          location: "Student Center",
          description: "Connect with top employers from various industries looking to hire engineering graduates. Bring your resume and dress professionally.",
          category: "career",
          image: "/career-fair.jpg",
          registrationLink: "#"
        },
        {
          id: 4,
          title: "Research Colloquium",
          date: "2023-10-05",
          endDate: "2023-10-06",
          time: "9:00 AM - 4:00 PM",
          location: "Research Building",
          description: "Showcase of faculty and student research projects with opportunities for collaboration and funding discussions.",
          category: "research",
          image: "/research-colloquium.jpg",
          registrationLink: "#"
        },
        {
          id: 5,
          title: "Engineering Alumni Reunion",
          date: "2023-11-18",
          endDate: "2023-11-18",
          time: "6:00 PM - 10:00 PM",
          location: "University Lawn",
          description: "Annual gathering of UET Mardan alumni with networking opportunities and updates on university developments.",
          category: "alumni",
          image: "/alumni-reunion.jpg",
          registrationLink: "#"
        },
        {
          id: 6,
          title: "Winter Convocation",
          date: "2023-12-15",
          endDate: "2023-12-15",
          time: "10:00 AM - 12:00 PM",
          location: "Convocation Hall",
          description: "Celebration of our graduating students with keynote address by notable industry leader.",
          category: "academic",
          image: "/convocation.jpg",
          registrationLink: "#"
        }
      ]);
      
      setIsLoading(false);
    };
    
    fetchData();
  }, []);

  const filteredEvents = activeFilter === 'upcoming'
    ? events.filter(event => new Date(event.date) >= new Date())
    : events.filter(event => new Date(event.date) < new Date());

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Discover upcoming and past events at UET Mardan.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('upcoming')}
              className={`px-4 py-2 rounded-md font-medium ${activeFilter === 'upcoming' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveFilter('past')}
              className={`px-4 py-2 rounded-md font-medium ${activeFilter === 'past' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Past Events
            </button>
          </div>
        </motion.div>
        
        {/* Events List */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {new Date(event.date).toLocaleDateString()} 
                      {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString()}`}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/events/${event.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Event Details
                    </Link>
                    
                    {activeFilter === 'upcoming' && (
                      <a 
                        href={event.registrationLink} 
                        className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition"
                      >
                        Register
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-sm text-center"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {activeFilter === 'upcoming' ? 'No upcoming events scheduled' : 'No past events available'}
            </h3>
            <p className="text-gray-600">
              {activeFilter === 'upcoming' 
                ? 'Check back later for upcoming events.' 
                : 'Past events will appear here after they occur.'}
            </p>
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;