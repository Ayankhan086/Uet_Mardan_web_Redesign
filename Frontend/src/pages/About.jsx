import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  const [history, setHistory] = useState('');
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const [administration, setAdministration] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setHistory(`
        The University of Engineering and Technology, Mardan was established in 2017 as a public sector university 
        with the mission to provide quality engineering education in the Khyber Pakhtunkhwa province. 
        Initially starting with three departments, the university has grown to offer multiple engineering 
        programs and has become a center of excellence in technical education.
      `);
      
      setVision(`
        To be a leading institution in engineering and technology education, recognized nationally and 
        internationally for excellence in teaching, research, and innovation that addresses societal challenges.
      `);
      
      setMission(`
        To provide quality engineering education through innovative teaching methods, state-of-the-art 
        research facilities, and strong industry linkages that prepare students to become competent 
        professionals and responsible citizens.
      `);
      
      setAdministration([
        { id: 1, name: 'Prof. Dr. Muhammad Farooq', position: 'Vice Chancellor', bio: 'PhD in Electrical Engineering with 20+ years of academic experience.' },
        { id: 2, name: 'Dr. Ali Khan', position: 'Registrar', bio: 'PhD in Management Sciences with extensive administrative experience.' },
        { id: 3, name: 'Dr. Sara Ahmed', position: 'Dean Faculty of Engineering', bio: 'PhD in Civil Engineering with research focus on structural design.' },
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
            About UET Mardan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Learn about our history, vision, mission, and the leadership that guides our institution.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* History Section */}
            <section id="history" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Our History</h2>
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              ) : (
                <p className="text-gray-700 leading-relaxed">{history}</p>
              )}
            </section>
            
            {/* Vision & Mission Section */}
            <section id="vision" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Vision</h3>
                  {isLoading ? (
                    <div className="space-y-3 animate-pulse">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>
                  ) : (
                    <p className="text-gray-700 italic">"{vision}"</p>
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                  {isLoading ? (
                    <div className="space-y-3 animate-pulse">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  ) : (
                    <p className="text-gray-700 italic">"{mission}"</p>
                  )}
                </div>
              </div>
            </section>
            
            {/* Administration Section */}
            <section id="administration" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Administration</h2>
              {isLoading ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {administration.map((admin, index) => (
                    <motion.div 
                      key={admin.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{admin.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{admin.position}</p>
                      <p className="text-gray-600">{admin.bio}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </section>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-gray-700">Established</h4>
                  <p className="text-gray-600">2017</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-700">Campus</h4>
                  <p className="text-gray-600">50 acres, Main Campus</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-700">Students</h4>
                  <p className="text-gray-600">2,500+</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-700">Faculty</h4>
                  <p className="text-gray-600">150+</p>
                </li>
                <li>
                  <h4 className="font-semibold text-gray-700">Departments</h4>
                  <p className="text-gray-600">6</p>
                </li>
              </ul>
            </div>
            
            {/* Downloads */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Downloads</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    University Prospectus
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Strategic Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Annual Report
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

export default About;