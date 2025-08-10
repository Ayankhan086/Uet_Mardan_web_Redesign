import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DepartmentCard from '../components/DepartmentCard';
import { motion } from 'framer-motion';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setDepartments([
        {
          id: 1,
          name: 'Civil Engineering',
          description: 'The Civil Engineering department offers comprehensive programs focusing on structural design, transportation, geotechnical engineering, and environmental engineering.',
          image: '/civil-engineering.jpg',
          programs: ['B.Sc. Civil Engineering', 'M.Sc. Structural Engineering', 'PhD in Civil Engineering'],
          head: 'Dr. Muhammad Ali',
          established: 2017
        },
        {
          id: 2,
          name: 'Electrical Engineering',
          description: 'Our Electrical Engineering program covers power systems, electronics, telecommunications, and control systems with state-of-the-art laboratories and research facilities.',
          image: '/electrical-engineering.jpg',
          programs: ['B.Sc. Electrical Engineering', 'M.Sc. Power Systems', 'PhD in Electrical Engineering'],
          head: 'Dr. Sara Khan',
          established: 2017
        },
        {
          id: 3,
          name: 'Mechanical Engineering',
          description: 'The Mechanical Engineering department provides education in thermodynamics, fluid mechanics, machine design, and manufacturing processes.',
          image: '/mechanical-engineering.jpg',
          programs: ['B.Sc. Mechanical Engineering', 'M.Sc. Thermal Engineering', 'PhD in Mechanical Engineering'],
          head: 'Dr. Ahmed Raza',
          established: 2018
        },
        {
          id: 4,
          name: 'Computer Science',
          description: 'Our Computer Science program focuses on software engineering, artificial intelligence, data science, and computer networks with hands-on project experience.',
          image: '/computer-science.jpg',
          programs: ['B.Sc. Computer Science', 'M.Sc. Software Engineering', 'PhD in Computer Science'],
          head: 'Dr. Farhan Ahmed',
          established: 2018
        },
        {
          id: 5,
          name: 'Architecture',
          description: 'The Architecture department combines artistic design with engineering principles to create sustainable and functional built environments.',
          image: '/architecture.jpg',
          programs: ['B.Arch', 'M.Arch', 'PhD in Architecture'],
          head: 'Dr. Zainab Malik',
          established: 2019
        },
        {
          id: 6,
          name: 'Industrial Engineering',
          description: 'Our Industrial Engineering program focuses on optimization of complex processes, systems, and organizations to improve efficiency and productivity.',
          image: '/industrial-engineering.jpg',
          programs: ['B.Sc. Industrial Engineering', 'M.Sc. Engineering Management', 'PhD in Industrial Engineering'],
          head: 'Dr. Usman Khan',
          established: 2020
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
            Departments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Explore our academic departments offering cutting-edge programs in engineering and technology.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DepartmentCard department={dept} />
              </motion.div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Departments;