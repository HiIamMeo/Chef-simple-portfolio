export interface AvailabilitySchedule {
  day: string;
  status: 'available' | 'limited' | 'unavailable';
  details?: string;
  timeRestriction?: string;
}

export interface WorkPreferences {
  preferredShifts: string[];
  flexibility: string;
  notice: string;
  transportation: string;
}

export const weeklyAvailability: AvailabilitySchedule[] = [
  {
    day: "Monday",
    status: "available",
    details: "Full day availability"
  },
  {
    day: "Tuesday", 
    status: "limited",
    details: "Available until 6:00 PM",
    timeRestriction: "Morning to 6:00 PM"
  },
  {
    day: "Wednesday",
    status: "available", 
    details: "Full day availability"
  },
  {
    day: "Thursday",
    status: "available",
    details: "Full day availability"
  },
  {
    day: "Friday",
    status: "available",
    details: "Full day availability"
  },
  {
    day: "Saturday",
    status: "available",
    details: "Full day availability"
  },
  {
    day: "Sunday",
    status: "limited",
    details: "Available until 6:00 PM", 
    timeRestriction: "Morning to 6:00 PM"
  }
];

export const workPreferences: WorkPreferences = {
  preferredShifts: ["Morning shifts", "Lunch shifts", "Afternoon shifts", "Weekend shifts"],
  flexibility: "Highly flexible with scheduling, able to cover shifts on short notice",
  notice: "Available to start immediately",
  transportation: "Own transportation available, reliable attendance"
};

export const availabilitySummary = {
  title: "Availability & Work Preferences",
  subtitle: "Flexible scheduling with excellent availability",
  highlights: [
    "Available 7 days a week with flexible hours",
    "Full availability Monday, Wednesday-Saturday", 
    "Tuesday & Sunday available until 6:00 PM",
    "Can start immediately",
    "Reliable transportation and attendance"
  ]
};