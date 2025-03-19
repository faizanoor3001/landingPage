interface Benefit {
  title: string;
  description: string;
  metric?: {
    value: number;
    unit: string;
    prefix?: string;
  };
}

interface Feature {
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    title: "Energy Savings",
    description: "Reduce energy consumption by up to 20% through intelligent optimization and automated controls.",
    metric: {
      value: 20,
      unit: "%",
      prefix: "Up to"
    }
  },
  {
    title: "Enhanced User Experience",
    description: "Personalized comfort settings and intuitive controls for optimal building environment management.",
    metric: {
      value: 100,
      unit: "%",
      prefix: "Up to"
    }
  },
  {
    title: "Operational Efficiency",
    description: "Streamline building operations with automated systems and real-time monitoring capabilities.",
    metric: {
      value: 30,
      unit: "%",
      prefix: "Up to"
    }
  },
  {
    title: "Sustainability Impact",
    description: "Significantly reduce carbon footprint and environmental impact through smart energy management.",
    metric: {
      value: 40,
      unit: "%",
      prefix: "Up to"
    }
  }
];

export const features: Feature[] = [
  {
    title: "Solar Power Solutions",
    description: "Advanced monitoring and optimization for solar installations with real-time performance tracking and predictive maintenance."
  },
  {
    title: "Energy Storage",
    description: "Intelligent battery management system with dynamic load balancing and peak shaving capabilities."
  },
  {
    title: "EV Charging Infrastructure",
    description: "Smart charging network management with load balancing, scheduling, and user management features."
  },
  {
    title: "Grid Management",
    description: "Comprehensive grid integration tools with real-time monitoring and automated demand response."
  }
]; 