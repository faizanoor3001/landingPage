interface BusinessHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

interface ContactInfo {
  email: string;
  phone: string;
  businessHours: BusinessHours[];
  isPhoneAvailable: boolean;
  isEmailAvailable: boolean;
  isBusinessHoursAvailable: boolean;
}

export const contactInfo: ContactInfo = {
  email: "info@zoroenergy.com",
  phone: "+49-171 2702635",
  businessHours: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", isOpen: true },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", isOpen: true },
    { day: "Sunday", hours: "Closed", isOpen: false }
  ],
  // Flags to control what information is currently available
  isPhoneAvailable: true,
  isEmailAvailable: true,
  isBusinessHoursAvailable: true
} 