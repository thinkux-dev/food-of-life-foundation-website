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
    slug: "kuje-food-outreach",
    title: "Kuje Community Food & Provision Outreach",
    status: "completed",
    period: "2026",
    location: "Kuje, Abuja (FCT)",
    summary:
      "Direct distribution of staple food items, grains, cooking essentials, and household relief packages to vulnerable families, widows, and children across Kuje Area Council.",
    outcome:
      "Reached households across Kuje with essential food parcels, restoring dignity and immediate nutritional relief.",
    image: images.foodPacks,
    focus: "Food Relief",
  },
  {
    slug: "kuje-widows-care",
    title: "Kuje Widows & Vulnerable Mothers Support Drive",
    status: "completed",
    period: "2026",
    location: "Kuje, Abuja (FCT)",
    summary:
      "Walking alongside widows in Kuje through food distributions, personal visits, and practical household provisions so no mother is left to carry the burden alone.",
    outcome:
      "Delivered food supplies and household support directly to widows and elderly women in Kuje communities.",
    image: images.widowMarket,
    focus: "Widows",
  },
  {
    slug: "kuje-hunger-relief-expansion",
    title: "Zero Hunger Kuje — Monthly Food Bank Drive",
    status: "upcoming",
    period: "Q4 2026 – 2027",
    location: "Kuje Area Council, Abuja",
    summary:
      "Expanding our regular food distributions across underserved wards in Kuje so vulnerable families have reliable access to staple grains, proteins, and cooking supplies.",
    goal: "Feed and support 250+ vulnerable households across Kuje communities.",
    image: images.volunteersSorting,
    focus: "Food Relief",
  },
  {
    slug: "kuje-children-nutrition",
    title: "Nourish & Educate — Kuje Children's Welfare Initiative",
    status: "upcoming",
    period: "2027",
    location: "Kuje, Abuja (FCT)",
    summary:
      "Combining child nutrition support with school supplies and educational assistance so children in Kuje can learn on a full stomach and stay in school.",
    goal: "Provide meals and learning materials for 150 vulnerable children in Kuje.",
    image: images.villageChildren,
    focus: "Children",
  },
  {
    slug: "widows-livelihood-kuje",
    title: "Kuje Widows' Livelihood & Micro-Support Program",
    status: "upcoming",
    period: "2027",
    location: "Kuje, Abuja (FCT)",
    summary:
      "Pairing emergency food relief with small trade support and agricultural/market micro-grants for widows in Kuje to build sustainable family income.",
    goal: "Empower 50 widows in Kuje with startup supplies and steady food security.",
    image: images.laundryWomen,
    focus: "Widows",
  },
];

export const upcomingCampaigns = campaigns.filter((c) => c.status === "upcoming");
export const completedCampaigns = campaigns.filter((c) => c.status === "completed");
