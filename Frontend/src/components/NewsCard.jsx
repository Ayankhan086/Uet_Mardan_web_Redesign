import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const NewsCard = ({ news }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{news.title}</h3>
          <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
            {new Date(news.date).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{news.excerpt}</p>
        <Link 
          to={`/news/${news.id}`} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more <FiExternalLink className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;