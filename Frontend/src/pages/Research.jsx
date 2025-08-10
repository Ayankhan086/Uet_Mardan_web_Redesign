import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Research = () => {
  const [centers, setCenters] = useState([]);
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setCenters([
        {
          id: 1,
          name: 'Center for Advanced Materials Research',
          director: 'Dr. Ahmed Khan',
          focus: 'Nanomaterials, composites, and smart materials'
        },
        {
          id: 2,
          name: 'Center for Energy Systems',
          director: 'Dr. Sara Ahmed',
          focus: 'Renewable energy, power systems, and energy efficiency'
        },
        {
          id: 3,
          name: 'Center for Artificial Intelligence',
          director: 'Dr. Ali Raza',
          focus: 'Machine learning, computer vision, and natural language processing'
        }
      ]);
      
      setPublications([
        {
          id: 1,
          title: 'Novel Approach to Water Purification Using Nanomaterials',
          authors: 'Khan, A., Ahmed, S., & Raza, M.',
          journal: 'Journal of Environmental Engineering',
          year: 2023
        },
        {
          id: 2,
          title: 'Optimization of Solar Panel Efficiency in Pakistani Climate',
          authors: 'Ahmed, S. & Khan, T.',
          journal: 'Renewable Energy Journal',
          year: 2022
        },
        {
          id: 3,
          title: 'Deep Learning for Urdu Text Classification',
          authors: 'Raza, A., Khan, M., & Ali, S.',
          journal: 'IEEE Access',
          year: 2023
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
            Research
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Advancing knowledge and innovation through cutting-edge research in engineering and technology.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Research Centers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Research Centers</h2>
          
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {centers.map((center, index) => (
                <motion.div 
                  key={center.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{center.name}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Director:</span> {center.director}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Research Focus:</span> {center.focus}
                  </p>
                  <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        
        {/* Publications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Recent Publications</h2>
          
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="h-5 bg-gray-300 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div 
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-1">{pub.authors}</p>
                  <p className="text-gray-600">
                    {pub.journal}, {pub.year}
                  </p>
                  <a href="#" className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium">
                    View Publication
                  </a>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-8">
            <a href="#" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
              View All Publications
            </a>
          </div>
        </section>
        
        {/* Research Opportunities Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Research Opportunities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Faculty</h3>
              <p className="text-gray-600 mb-4">
                UET Mardan provides numerous opportunities for faculty members to engage in cutting-edge research with funding support, collaboration opportunities, and state-of-the-art facilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Internal research grants</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Collaboration with industry partners</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to specialized laboratories</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn more about faculty research →
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Students</h3>
              <p className="text-gray-600 mb-4">
                Students at UET Mardan have opportunities to participate in research projects, work with faculty mentors, and contribute to meaningful discoveries.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Undergraduate research assistantships</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Thesis and dissertation opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Summer research programs</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Explore student research opportunities →
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;