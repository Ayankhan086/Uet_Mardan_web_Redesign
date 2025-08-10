import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-1">
      <h3 className="font-medium text-gray-800">{event.title}</h3>
      <p className="text-sm text-gray-600">
        {new Date(event.date).toLocaleDateString()} • {event.location}
      </p>
      <Link to={`/events/${event.id}`} className="text-sm text-blue-600 hover:underline mt-1 inline-block">
        Details
      </Link>
    </div>
  );
};

export default EventCard;