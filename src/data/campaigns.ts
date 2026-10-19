import { images } from "./images";

export type Campaign = {
  slug: string;
  title: string;
  status: "upcoming" | "completed";
  period: string;
  location: string;
  summary: string;
  goal?: string;
  outcome?: string;
  image: string;
  focus: "Food Relief" | "Widows" | "Children" | "Community";
  donateUrl?: string;
};

export const campaigns: Campaign[] = [
  {
    slug: "abuja-community-food-outreach",
    title: "Abuja Community Food & Provision Outreach",
    status: "completed",
    period: "2025",
    location: "Kuje & Area Councils, Abuja (FCT)",
    summary:
      "Direct distribution of staple food items, cartons of nourishment, cooking essentials, and household relief packages to vulnerable families, widows, and children in Abuja.",
    outcome:
      "Reached households, mothers, and children on the ground with essential food parcels, restoring dignity and immediate nutritional relief.",
    image: images.foodPacks,
    focus: "Food Relief",
  },
  {
    slug: "orphanage-and-children-feeding",
    title: "Orphanage & Vulnerable Children Care Visit",
    status: "completed",
    period: "2025",
    location: "Abuja, FCT",
    summary:
      "Walking alongside orphaned and vulnerable children in Abuja through food distributions, personal visits, and community care so no child grows up feeling forgotten.",
    outcome:
      "Delivered food supplies and shared meals directly with children and caregivers during our Abuja outreach.",
    image: images.orphanageGroup,
    focus: "Children",
  },
  {
    slug: "zero-hunger-nationwide-drive",
    title: "Zero Hunger Nigeria — Monthly Food Bank Drive",
    status: "upcoming",
    period: "2025 – 2026",
    location: "Abuja & Across Nigeria",
    summary:
      "Expanding our regular food distributions across underserved communities in Abuja and neighbouring states so vulnerable families have reliable access to staple grains, proteins, and cooking supplies.",
    goal: "Feed and support 500+ vulnerable households across Abuja and Nigeria.",
    image: images.volunteersSorting,
    focus: "Food Relief",
  },
  {
    slug: "nourish-and-educate",
    title: "Nourish & Educate — Children's Welfare Initiative",
    status: "upcoming",
    period: "2026",
    location: "Abuja & Nationwide",
    summary:
      "Combining child nutrition support with school supplies and educational assistance so vulnerable children across Nigeria can learn on a full stomach and stay in school.",
    goal: "Provide meals and learning materials for 250 vulnerable children.",
    image: images.villageChildren,
    focus: "Children",
  },
  {
    slug: "widows-livelihood-program",
    title: "Widows' Livelihood & Food Security Program",
    status: "upcoming",
    period: "2026",
    location: "Abuja, FCT & Nigeria",
    summary:
      "Pairing emergency food relief with small trade support and agricultural/market micro-grants for widows to build sustainable family income.",
    goal: "Empower 100 widows with startup supplies and steady household food security.",
    image: images.stakeholdersMeeting,
    focus: "Widows",
  },
];

export const upcomingCampaigns = campaigns.filter((c) => c.status === "upcoming");
export const completedCampaigns = campaigns.filter((c) => c.status === "completed");
