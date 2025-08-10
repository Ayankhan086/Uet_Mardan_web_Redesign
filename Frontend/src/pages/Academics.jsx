import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Academics = () => {
  const [programs, setPrograms] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setPrograms([
        {
          id: 1,
          name: 'Bachelor of Science in Civil Engineering',
          duration: '4 Years',
          creditHours: '136',
          department: 'Civil Engineering'
        },
        {
          id: 2,
          name: 'Bachelor of Science in Electrical Engineering',
          duration: '4 Years',
          creditHours: '136',
          department: 'Electrical Engineering'
        },
        {
          id: 3,
          name: 'Bachelor of Science in Mechanical Engineering',
          duration: '4 Years',
          creditHours: '136',
          department: 'Mechanical Engineering'
        },
        {
          id: 4,
          name: 'Bachelor of Science in Computer Science',
          duration: '4 Years',
          creditHours: '130',
          department: 'Computer Science'
        }
      ]);
      
      setCalendar([
        {
          id: 1,
          title: 'Fall Semester 2023',
          startDate: '2023-09-01',
          endDate: '2023-12-31',
          events: [
            { date: '2023-09-04', description: 'Classes Begin' },
            { date: '2023-11-01', description: 'Midterm Exams' },
            { date: '2023-12-15', description: 'Final Exams Begin' }
          ]
        },
        {
          id: 2,
          title: 'Spring Semester 2024',
          startDate: '2024-01-15',
          endDate: '2024-05-15',
          events: [
            { date: '2024-01-15', description: 'Classes Begin' },
            { date: '2024-03-01', description: 'Midterm Exams' },
            { date: '2024-05-01', description: 'Final Exams Begin' }
          ]
        }
      ]);
      
      setIsLoading(false);
    };
    
    fetchData();
  }, []);

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
            Academics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Explore our academic programs, departments, and resources designed to foster engineering excellence.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Programs Section */}
        <section id="programs" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Academic Programs</h2>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <motion.div 
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{program.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Credit Hours</p>
                      <p className="font-medium">{program.creditHours}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="font-medium">{program.department}</p>
                    </div>
                  </div>
                  <Link 
                    to={`/departments/${program.department.toLowerCase().replace(' ', '-')}`}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        
        {/* Academic Calendar Section */}
        <section id="calendar" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Academic Calendar</h2>
          
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {calendar.map((term, index) => (
                <motion.div 
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{term.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {new Date(term.startDate).toLocaleDateString()} - {new Date(term.endDate).toLocaleDateString()}
                  </p>
                  
                  <div className="space-y-3">
                    {term.events.map((event, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium mr-4">
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-6">
            <a 
              href="/downloads/academic-calendar.pdf" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Download Full Calendar
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </section>
        
        {/* Resources Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Academic Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Catalog</h3>
              <p className="text-gray-600 mb-4">Browse our complete course offerings and descriptions.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Catalog</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Policies</h3>
              <p className="text-gray-600 mb-4">Review university policies on grading, attendance, and more.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Policies</a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Handbook</h3>
              <p className="text-gray-600 mb-4">Comprehensive guide for current students.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Download Handbook</a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academics;