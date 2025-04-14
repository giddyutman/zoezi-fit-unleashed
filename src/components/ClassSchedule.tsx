
import { useState } from 'react';
import { Link } from 'react-router-dom';

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

// Sample schedule data
const scheduleData = [
  {
    id: 1,
    name: 'HIIT Training',
    trainer: 'John Doe',
    day: 'Monday',
    startTime: '07:00',
    endTime: '08:00',
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 2,
    name: 'Yoga Flow',
    trainer: 'Jane Smith',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 3,
    name: 'Strength Training',
    trainer: 'Michael Brown',
    day: 'Monday',
    startTime: '17:00',
    endTime: '18:00',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  {
    id: 4,
    name: 'Spin Class',
    trainer: 'Sarah Johnson',
    day: 'Tuesday',
    startTime: '08:00',
    endTime: '09:00',
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    id: 5,
    name: 'Pilates',
    trainer: 'Emma Wilson',
    day: 'Tuesday',
    startTime: '10:00',
    endTime: '11:00',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    id: 6,
    name: 'Boxing',
    trainer: 'James Rodriguez',
    day: 'Tuesday',
    startTime: '18:00',
    endTime: '19:00',
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 7,
    name: 'Zumba',
    trainer: 'Lisa Chen',
    day: 'Wednesday',
    startTime: '17:30',
    endTime: '18:30',
    color: 'bg-pink-100 text-pink-800 border-pink-200'
  },
  {
    id: 8,
    name: 'CrossFit',
    trainer: 'David Miller',
    day: 'Thursday',
    startTime: '07:00',
    endTime: '08:00',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  {
    id: 9,
    name: 'Yoga Flow',
    trainer: 'Jane Smith',
    day: 'Thursday',
    startTime: '18:00',
    endTime: '19:30',
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 10,
    name: 'HIIT Training',
    trainer: 'John Doe',
    day: 'Friday',
    startTime: '07:00',
    endTime: '08:00',
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 11,
    name: 'Body Pump',
    trainer: 'Michael Brown',
    day: 'Friday',
    startTime: '18:00',
    endTime: '19:00',
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  {
    id: 12,
    name: 'Weekend Warrior',
    trainer: 'David Miller',
    day: 'Saturday',
    startTime: '09:00',
    endTime: '10:30',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  },
  {
    id: 13,
    name: 'Yoga & Meditation',
    trainer: 'Emma Wilson',
    day: 'Sunday',
    startTime: '10:00',
    endTime: '11:30',
    color: 'bg-teal-100 text-teal-800 border-teal-200'
  }
];

const ClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('All Days');
  
  const filteredClasses = selectedDay === 'All Days'
    ? scheduleData
    : scheduleData.filter(cls => cls.day === selectedDay);
  
  return (
    <div>
      {/* Day Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedDay('All Days')}
          className={`px-4 py-2 rounded-md font-medium border transition-colors ${
            selectedDay === 'All Days'
              ? 'bg-zoezi-purple text-white'
              : 'border-gray-300 hover:border-zoezi-purple'
          }`}
        >
          All Days
        </button>
        {weekdays.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-md font-medium border transition-colors ${
              selectedDay === day
                ? 'bg-zoezi-purple text-white'
                : 'border-gray-300 hover:border-zoezi-purple'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      
      {/* Schedule Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Trainer</th>
              <th className="p-4 text-left">Day</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map(cls => (
              <tr key={cls.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${cls.color}`}>
                    {cls.name}
                  </span>
                </td>
                <td className="p-4">{cls.trainer}</td>
                <td className="p-4">{cls.day}</td>
                <td className="p-4">
                  {cls.startTime} - {cls.endTime}
                </td>
                <td className="p-4">
                  <Link 
                    to="/contact" 
                    className="text-zoezi-purple hover:text-zoezi-dark-purple font-medium"
                  >
                    Book Now
                  </Link>
                </td>
              </tr>
            ))}
            {filteredClasses.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  No classes scheduled for this day.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassSchedule;
