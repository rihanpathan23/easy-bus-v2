export const initialRoutes = [
  { id: "1", from: "Kopargaon", to: "Kolpewadi", stops: ["Kopargaon Bus Stand", "Yesgaon", "Pohegaon", "Kolpewadi"] },
  { id: "2", from: "Kolpewadi", to: "Kopargaon", stops: ["Kolpewadi", "Pohegaon", "Yesgaon", "Kopargaon Bus Stand"] },
  { id: "3", from: "Sangamner", to: "Kopargaon", stops: ["Sangamner Depot", "Loni", "Babhaleshwar", "Kopargaon"] },
  { id: "4", from: "Kopargaon", to: "Sangamner", stops: ["Kopargaon", "Babhaleshwar", "Loni", "Sangamner Depot"] },
  { id: "5", from: "Shirdi", to: "Rahata", stops: ["Shirdi Stand", "Rui", "Rahata"] },
  { id: "6", from: "Yeola", to: "Kopargaon", stops: ["Yeola Stand", "Ankai", "Kopargaon"] }
];

export const availableBusNumbers = [
  "MH-14-BT-2456",
  "MH-14-AB-7812",
  "MH-14-KL-9081",
  "MH-17-BD-3310",
  "MH-17-BZ-5544",
  "MH-20-BL-1189",
  "MH-14-BT-9999"
];

export const initialTrips = [
  // Kopargaon to Kolpewadi (3 Active Buses)
  {
    id: "trip_1",
    busNumber: "MH-14-BT-2456",
    driverName: "Ramesh Patil",
    from: "Kopargaon",
    to: "Kolpewadi",
    currentLocation: "Near Yesgaon",
    liveCoordinates: { lat: 19.8512, lng: 74.4532 },
    etaMinutes: 8,
    tripStatus: "ON_TIME",
    trackingSource: "BUS_GPS",
    lastUpdated: "15 seconds ago"
  },
  {
    id: "trip_2",
    busNumber: "MH-14-AB-7812",
    driverName: "Suresh Gaikwad",
    from: "Kopargaon",
    to: "Kolpewadi",
    currentLocation: "Near Pohegaon Phata",
    liveCoordinates: { lat: 19.8220, lng: 74.4320 },
    etaMinutes: 18,
    tripStatus: "DELAYED",
    trackingSource: "SMARTPHONE_GPS",
    lastUpdated: "8 seconds ago"
  },
  {
    id: "trip_3",
    busNumber: "MH-14-KL-9081",
    driverName: "Vikas Shinde",
    from: "Kopargaon",
    to: "Kolpewadi",
    currentLocation: "Kopargaon Bus Stand",
    liveCoordinates: { lat: 19.8876, lng: 74.4789 },
    etaMinutes: 28,
    tripStatus: "ON_TIME",
    trackingSource: "BUS_GPS",
    lastUpdated: "1 minute ago"
  },
  // Kopargaon to Sangamner
  {
    id: "trip_4",
    busNumber: "MH-17-BD-3310",
    driverName: "Dnyaneshwar More",
    from: "Kopargaon",
    to: "Sangamner",
    currentLocation: "Babhaleshwar",
    liveCoordinates: { lat: 19.6789, lng: 74.3412 },
    etaMinutes: 22,
    tripStatus: "ON_TIME",
    trackingSource: "BUS_GPS",
    lastUpdated: "30 seconds ago"
  },
  {
    id: "trip_5",
    busNumber: "MH-17-BZ-5544",
    driverName: "Santosh Kale",
    from: "Kopargaon",
    to: "Sangamner",
    currentLocation: "Loni Phata",
    liveCoordinates: { lat: 19.5890, lng: 74.2540 },
    etaMinutes: 14,
    tripStatus: "ON_TIME",
    trackingSource: "SMARTPHONE_GPS",
    lastUpdated: "12 seconds ago"
  },
  // Sangamner to Kopargaon
  {
    id: "trip_6",
    busNumber: "MH-20-BL-1189",
    driverName: "Arun Deshmukh",
    from: "Sangamner",
    to: "Kopargaon",
    currentLocation: "Sangamner Depot",
    liveCoordinates: { lat: 19.5761, lng: 74.2070 },
    etaMinutes: 35,
    tripStatus: "ON_TIME",
    trackingSource: "BUS_GPS",
    lastUpdated: "45 seconds ago"
  }
];

export const initialDrivers = [
  { id: "drv_1", name: "Ramesh Patil", driverId: "DRV101", phone: "9876543210", email: "ramesh@demo.com", password: "123", status: "approved" },
  { id: "drv_2", name: "Suresh Gaikwad", driverId: "DRV102", phone: "9876543211", email: "suresh@demo.com", password: "123", status: "approved" }
];