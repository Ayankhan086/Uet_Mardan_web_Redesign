import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import { motion } from 'framer-motion';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setNewsItems([
        {
          id: 1,
          title: "UET Mardan Announces New Engineering Programs",
          date: "2023-06-15",
          excerpt: "The university is expanding its curriculum with three new engineering disciplines starting next semester.",
          content: "The University of Engineering and Technology, Mardan has announced the introduction of three new engineering programs: Biomedical Engineering, Environmental Engineering, and Robotics Engineering. These programs will begin in the Fall 2023 semester and are designed to meet the growing demand for skilled professionals in these emerging fields.",
          category: "academic",
          image: "/new-programs.jpg"
        },
        {
          id: 2,
          title: "Research Grant Awarded to Computer Science Department",
          date: "2023-06-10",
          excerpt: "Faculty members receive $500,000 grant for AI research project.",
          content: "The Computer Science Department at UET Mardan has been awarded a $500,000 research grant from the National Science Foundation for a project titled 'Developing AI Solutions for Agricultural Challenges in Pakistan.' The three-year project will be led by Dr. Ali Khan and involves collaboration with agricultural experts and local farmers.",
          category: "research",
          image: "/research-grant.jpg"
        },
        {
          id: 3,
          title: "UET Mardan Ranked Among Top Engineering Universities",
          date: "2023-05-28",
          excerpt: "The university has been ranked in the top 10 engineering institutions in Pakistan.",
          content: "In the latest rankings released by the Higher Education Commission of Pakistan, UET Mardan has been ranked 8th among engineering universities in the country. This represents a significant improvement from last year's ranking of 12th, reflecting the university's commitment to academic excellence and research innovation.",
          category: "achievement",
          image: "/ranking.jpg"
        },
        {
          id: 4,
          title: "Campus Renovation Project Completed",
          date: "2023-05-15",
          excerpt: "The six-month renovation project has modernized campus facilities.",
          content: "The comprehensive campus renovation project has been successfully completed, featuring upgraded classrooms, new research labs, and improved student common areas. The project was funded through a combination of government grants and private donations, with special attention given to sustainability and energy efficiency in all new constructions.",
          category: "campus",
          image: "/campus-renovation.jpg"
        },
        {
          id: 5,
          title: "International Collaboration with German University",
          date: "2023-04-22",
          excerpt: "UET Mardan signs MoU with Technical University of Munich for student exchange.",
          content: "UET Mardan has established a new partnership with the Technical University of Munich (TUM), one of Germany's leading technical universities. The memorandum of understanding will facilitate student and faculty exchanges, joint research projects, and collaboration on curriculum development, particularly in the fields of mechanical and electrical engineering.",
          category: "international",
          image: "/international-collab.jpg"
        },
        {
          id: 6,
          title: "Annual Engineering Exhibition Draws Record Attendance",
          date: "2023-04-10",
          excerpt: "Over 2,000 visitors attended the two-day event showcasing student projects.",
          content: "The 5th Annual Engineering Exhibition at UET Mardan featured more than 150 student projects across all engineering disciplines. Highlights included a solar-powered irrigation system, an AI-based traffic management solution, and innovative waste-to-energy prototypes. Industry representatives from across Pakistan attended the event, with several projects receiving offers for further development and commercialization.",
          category: "events",
          image: "/engineering-expo.jpg"
        }
      ]);
      
      setIsLoading(false);
    };
    
    fetchData();
  }, []);

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

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
            University News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Stay updated with the latest news, announcements, and events from UET Mardan.
          </motion.p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-medium ${activeCategory === 'all' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All News
            </button>
            <button
              onClick={() => setActiveCategory('academic')}
              className={`px-4 py-2 rounded-full font-medium ${activeCategory === 'academic' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Academic
            </button>
            <button
              onClick={() => setActiveCategory('research')}
              className={`px-4 py-2 rounded-full font-medium ${activeCategory === 'research' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Research
            </button>
            <button
              onClick={() => setActiveCategory('events')}
              className={`px-4 py-2 rounded-full font-medium ${activeCategory === 'events' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveCategory('campus')}
              className={`px-4 py-2 rounded-full font-medium ${activeCategory === 'campus' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Campus
            </button>
          </div>
        </motion.div>
        
        {/* News List */}
        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredNews.map((news, index) => (
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
        
        {/* Pagination */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default News;