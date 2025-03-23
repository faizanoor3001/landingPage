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
  bulletPoints: string[];
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
    title: "AI-Driven Energy Management",
    description: "Harness the power of artificial intelligence to optimize your building's energy consumption and performance.",
    bulletPoints: [
      "Optimize HVAC, lighting, and energy systems",
      "Real-time occupancy and weather data integration"
    ]
  },
  {
    title: "Real-Time Monitoring",
    description: "Stay informed with comprehensive monitoring solutions that provide actionable insights.",
    bulletPoints: [
      "Track energy and water usage",
      "Identify improvement areas instantly"
    ]
  },
  {
    title: "Smart Room Controls",
    description: "Empower users with intuitive control over their environment through advanced technology.",
    bulletPoints: [
      "Mobile and voice-controlled adjustments",
      "Personalized comfort settings"
    ]
  },
  {
    title: "Digital Water Management",
    description: "Implement intelligent water management solutions for efficiency and conservation.",
    bulletPoints: [
      "Leak detection",
      "Automated irrigation and pressure optimization"
    ]
  },
  {
    title: "Integration Capabilities",
    description: "Connect and optimize your building systems through seamless integration.",
    bulletPoints: [
      "Seamless connection with existing systems",
      "Streamlined operations management"
    ]
  }
]; 