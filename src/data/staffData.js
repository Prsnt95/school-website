// staffData.js - Staff Directory Data

const staffData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    department: 'Executive',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616c56e2b54?w=400&h=400&fit=crop&crop=face',
    bio: 'Sarah brings over 15 years of leadership experience in technology and innovation. She is passionate about driving company growth and fostering team collaboration.',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    skills: ['Leadership', 'Strategic Planning', 'Team Building'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    department: 'Technology',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 234-5678',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Michael is a technology visionary with expertise in full-stack development, cloud architecture, and AI integration. He leads our technical innovation efforts.',
    linkedin: 'https://linkedin.com/in/michaelchen',
    skills: ['Full Stack Development', 'Cloud Architecture', 'AI/ML'],
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Head of Design',
    department: 'Design',
    email: 'emily.rodriguez@company.com',
    phone: '+1 (555) 345-6789',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Emily is a creative designer with a passion for user experience and visual storytelling. She leads our design team in creating beautiful and functional interfaces.',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    skills: ['UI/UX Design', 'Brand Identity', 'User Research'],
  },
  {
    id: 4,
    name: 'David Kim',
    position: 'Senior Developer',
    department: 'Technology',
    email: 'david.kim@company.com',
    phone: '+1 (555) 456-7890',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'David is a senior full-stack developer specializing in React, Node.js, and modern web technologies. He mentors junior developers and leads complex projects.',
    linkedin: 'https://linkedin.com/in/davidkim',
    skills: ['React', 'Node.js', 'Database Design'],
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Marketing Director',
    department: 'Marketing',
    email: 'lisa.thompson@company.com',
    phone: '+1 (555) 567-8901',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    bio: "Lisa drives our marketing strategy with expertise in digital marketing, content creation, and brand management. She's passionate about connecting with our audience.",
    linkedin: 'https://linkedin.com/in/lisathompson',
    skills: ['Digital Marketing', 'Content Strategy', 'Brand Management'],
  },
  {
    id: 6,
    name: 'James Wilson',
    position: 'Operations Manager',
    department: 'Operations',
    email: 'james.wilson@company.com',
    phone: '+1 (555) 678-9012',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'James ensures smooth daily operations and process optimization. He has a background in project management and operational excellence.',
    linkedin: 'https://linkedin.com/in/jameswilson',
    skills: ['Project Management', 'Process Optimization', 'Team Coordination'],
  },
];

// Named export
export { staffData };

// Default export
export default staffData;

// Helper function to get staff by department
export const getStaffByDepartment = (department) => {
  return staffData.filter((staff) => staff.department === department);
};

// Helper function to get all departments
export const getAllDepartments = () => {
  return [...new Set(staffData.map((staff) => staff.department))];
};
