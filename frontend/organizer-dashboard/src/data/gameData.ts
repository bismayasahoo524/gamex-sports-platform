export type SportEvent = {
  id: string;
  title: string;
  sport: string;
  category: string;
  location: string;
  date: string;
  endDate: string;
  registrationDeadline: string;
  price: number;
  participants: number;
  capacity: number;
  status: "OPEN" | "CLOSED" | "UPCOMING";
  description: string;
  games: string[];
};

export const sportEvents: SportEvent[] = [
  {
    id: "national-athletics-2026",
    title: "National Athletics Championship 2026",
    sport: "Athletics",
    category: "Track & Field",
    location: "Kalinga Stadium, Bhubaneswar",
    date: "18 Oct 2026",
    endDate: "20 Oct 2026",
    registrationDeadline: "10 Oct 2026",
    price: 499,
    participants: 428,
    capacity: 1000,
    status: "OPEN",
    description:
      "National-level athletics competition featuring track and field events for registered athletes.",
    games: [
      "100m Sprint",
      "200m Sprint",
      "400m Sprint",
      "800m Run",
      "1500m Run",
      "Long Jump",
      "High Jump",
      "Shot Put",
    ],
  },
  {
    id: "inter-state-sprint-2026",
    title: "Inter-State Sprint Championship",
    sport: "Athletics",
    category: "Track",
    location: "Salt Lake Stadium, Kolkata",
    date: "25 Oct 2026",
    endDate: "26 Oct 2026",
    registrationDeadline: "18 Oct 2026",
    price: 399,
    participants: 312,
    capacity: 700,
    status: "OPEN",
    description:
      "Competitive sprint championship for athletes representing clubs, schools and states.",
    games: [
      "100m Sprint",
      "200m Sprint",
      "400m Sprint",
      "4x100m Relay",
    ],
  },
  {
    id: "junior-athletics-2026",
    title: "GameX Junior Athletics Meet",
    sport: "Athletics",
    category: "Junior",
    location: "SAI Sports Complex, Kolkata",
    date: "02 Nov 2026",
    endDate: "03 Nov 2026",
    registrationDeadline: "25 Oct 2026",
    price: 299,
    participants: 196,
    capacity: 500,
    status: "OPEN",
    description:
      "A junior athletics competition designed to provide young athletes with professional competition experience.",
    games: [
      "100m Sprint",
      "200m Sprint",
      "Long Jump",
      "High Jump",
    ],
  },
  {
    id: "gamex-football-cup-2026",
    title: "GameX Football Cup",
    sport: "Football",
    category: "Football",
    location: "Mohun Bagan Ground, Kolkata",
    date: "08 Nov 2026",
    endDate: "12 Nov 2026",
    registrationDeadline: "30 Oct 2026",
    price: 1499,
    participants: 24,
    capacity: 32,
    status: "OPEN",
    description:
      "Competitive football tournament for clubs and independent teams.",
    games: ["Football 11v11", "Football 7v7"],
  },
  {
    id: "gamex-basketball-2026",
    title: "GameX Basketball League",
    sport: "Basketball",
    category: "Basketball",
    location: "Sports Authority Arena, Kolkata",
    date: "15 Nov 2026",
    endDate: "18 Nov 2026",
    registrationDeadline: "05 Nov 2026",
    price: 999,
    participants: 18,
    capacity: 24,
    status: "OPEN",
    description:
      "Fast-paced basketball tournament for competitive teams.",
    games: ["Basketball 5v5", "Basketball 3x3"],
  },
];

export const sports = [
  "All",
  "Athletics",
  "Football",
  "Basketball",
  "Swimming",
  "Badminton",
  "Cricket",
];