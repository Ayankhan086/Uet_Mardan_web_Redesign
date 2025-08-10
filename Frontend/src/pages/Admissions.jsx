import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Admissions = () => {
  const [requirements, setRequirements] = useState([]);
  const [process, setProcess] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setRequirements([
        { id: 1, program: 'Undergraduate', description: 'Minimum 60% marks in FSc Pre-Engineering or equivalent' },
        { id: 2, program: 'Undergraduate', description: 'Passed UET Entry Test or equivalent' },
        { id: 3, program: 'Graduate', description: 'Bachelor degree in relevant field with minimum CGPA 2.5/4.0' },
        { id: 4, program: 'Graduate', description: 'GAT General Test with minimum 50% score' }
      ]);
      
      setProcess([
        { id: 1, step: 1, description: 'Submit online application form' },
        { id: 2, step: 2, description: 'Pay application fee' },
        { id: 3, step: 3, description: 'Appear for entry test (if required)' },
        { id: 4, step: 4, description: 'Submit required documents' },
        { id: 5, step: 5, description: 'Receive admission decision' },
        { id: 6, step: 6, description: 'Complete enrollment process' }
      ]);
      
      setDeadlines([
        { id: 1, program: 'Fall Undergraduate', date: '2023-07-15' },
        { id: 2, program: 'Fall Graduate', date: '2023-07-30' },
        { id: 3, program: 'Spring Undergraduate', date: '2023-12-10' },
        { id: 4, program: 'Spring Graduate', date: '2023-12-20' }
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
            Admissions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Start your journey to becoming an engineer at UET Mardan. Learn about requirements, deadlines, and how to apply.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Requirements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Admission Requirements</h2>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="h-5 bg-gray-300 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <motion.div 
                  key={req.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{req.program} Programs</h3>
                  <p className="text-gray-700">{req.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Application Process</h2>
          
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex items-start bg-white p-6 rounded-lg shadow-sm animate-pulse">
                  <div className="bg-gray-300 rounded-full w-8 h-8 mr-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </section>
        
        {/* Deadlines Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">Application Deadlines</h2>
          
          {isLoading ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
              <div className="h-12 bg-gray-300"></div>
              <div className="p-6 space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-800 text-white px-6 py-3">
                <h3 className="font-semibold">Important Dates</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {deadlines.map((deadline, index) => (
                      <motion.tr 
                        key={deadline.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="py-4 pr-4 font-medium text-gray-700">{deadline.program}</td>
                        <td className="py-4 text-gray-600">{new Date(deadline.date).toLocaleDateString()}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
        
        {/* Apply Now CTA */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            Ready to Apply?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 mb-6 max-w-2xl mx-auto"
          >
            Start your application today and take the first step toward your engineering career at UET Mardan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://apply.uetmardan.edu.pk" 
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition shadow-md"
            >
              Apply Now
            </a>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;