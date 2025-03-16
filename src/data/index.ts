interface Benefit {
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    title: "Energy Providers",
    description: "Scale your renewable energy offerings with our comprehensive platform designed for utility companies and energy providers."
  },
  {
    title: "System Integrators",
    description: "Seamlessly integrate multiple energy sources and storage solutions with our flexible API-driven architecture."
  },
  {
    title: "Enterprise Solutions",
    description: "Custom energy management solutions for businesses looking to optimize their energy consumption and reduce costs."
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