import { Link } from 'react-router-dom';

const DepartmentCard = ({ department }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={department.image} 
          alt={department.name} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{department.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{department.description}</p>
        <Link 
          to={`/departments/${department.id}`} 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;