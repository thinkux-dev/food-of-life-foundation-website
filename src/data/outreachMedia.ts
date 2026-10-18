export type OutreachMediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  location: string;
  caption: string;
};

export const outreachMedia: OutreachMediaItem[] = [
  // ── Real Outreach Videos ──────────────────────────────────────────
  {
    id: "video-kuje-1",
    type: "video",
    src: "/outreach/videos/kuje-outreach-1.mp4",
    poster: "/outreach/photos/orphanage-group.jpeg",
    title: "Kuje Community & Orphanage Outreach",
    location: "Kuje Area Council, Abuja",
    caption: "Food of Life Foundation volunteers on the ground sharing food supplies and joy with children and families in Kuje.",
  },
  {
    id: "video-kuje-2",
    type: "video",
    src: "/outreach/videos/kuje-outreach-2.mp4",
    poster: "/outreach/photos/kuje-student-food.jpeg",
    title: "Street-by-Street Food Distribution",
    location: "Kuje, Abuja",
    caption: "Walking through Kuje neighbourhoods to deliver food packs directly to mothers, children, and households in need.",
  },
  {
    id: "video-kuje-3",
    type: "video",
    src: "/outreach/videos/kuje-outreach-3.mp4",
    poster: "/outreach/photos/mother-baby-carton.jpeg",
    title: "Reaching Mothers & Children with Food Relief",
    location: "Kuje, Abuja",
    caption: "Direct handoff of staple food items and cartons to families during our Kuje field outreach.",
  },
  {
    id: "video-kuje-4",
    type: "video",
    src: "/outreach/videos/kuje-outreach-4.mp4",
    poster: "/outreach/photos/team-community-visit.jpeg",
    title: "Field Mobilization in Kuje",
    location: "Kuje Area Council, Abuja",
    caption: "Our volunteer team moving from home to home across Kuje to ensure no vulnerable family is left behind.",
  },

  // ── Real Outreach Photographs ─────────────────────────────────────
  {
    id: "photo-orphanage-group",
    type: "image",
    src: "/outreach/photos/orphanage-group.jpeg",
    title: "With the Children of Kuje",
    location: "Kuje, Abuja",
    caption: "Food of Life Foundation team members standing alongside children during our community care and feeding visit.",
  },
  {
    id: "photo-mother-baby-carton",
    type: "image",
    src: "/outreach/photos/mother-baby-carton.jpeg",
    title: "Supporting Mothers & Infants",
    location: "Kuje, Abuja",
    caption: "Distributing cartons of food and nutritional supplies directly to mothers in Kuje.",
  },
  {
    id: "photo-kuje-student",
    type: "image",
    src: "/outreach/photos/kuje-student-food.jpeg",
    title: "Reaching Kuje School Children",
    location: "Kuje, Abuja",
    caption: "Handing food parcels to young students from Junior Secondary School, Kuje Abuja.",
  },
  {
    id: "photo-mother-children-parcel",
    type: "image",
    src: "/outreach/photos/mother-children-parcel.jpeg",
    title: "Dignified Doorstep Food Delivery",
    location: "Kuje, Abuja",
    caption: "Sharing food packs with women and children right in their neighbourhood.",
  },
  {
    id: "photo-children-handoff-2",
    type: "image",
    src: "/outreach/photos/children-food-handoff-2.jpeg",
    title: "Nourishing Young Lives",
    location: "Kuje, Abuja",
    caption: "Every food parcel shared brings immediate relief to a child and their household.",
  },
  {
    id: "photo-team-community-visit",
    type: "image",
    src: "/outreach/photos/team-community-visit.jpeg",
    title: "Connecting with Residents",
    location: "Kuje, Abuja",
    caption: "Our volunteers engaging with local women and families during the Kuje outreach walk.",
  },
  {
    id: "photo-community-dist-2",
    type: "image",
    src: "/outreach/photos/community-distribution-2.jpeg",
    title: "Smiles & Shared Meals",
    location: "Kuje, Abuja",
    caption: "Volunteers and community members sharing a warm moment during distribution.",
  },
  {
    id: "photo-team-walking-1",
    type: "image",
    src: "/outreach/photos/team-walking-1.jpeg",
    title: "Going the Extra Mile in Kuje",
    location: "Kuje, Abuja",
    caption: "Carrying food bags on foot into underserved streets of Kuje Area Council.",
  },
  {
    id: "photo-stakeholders-meeting",
    type: "image",
    src: "/outreach/photos/stakeholders-meeting-2.jpeg",
    title: "Food Security & Livelihood Partnership",
    location: "Abuja, FCT",
    caption: "Food of Life Foundation team collaborating with community leaders and food security partners.",
  },
  {
    id: "photo-leadership-2",
    type: "image",
    src: "/outreach/photos/leadership-partners-2.jpeg",
    title: "Foundation Leadership & Partners",
    location: "Abuja, FCT",
    caption: "Building alliances to expand food security and livelihood support across Kuje and the Nation.",
  },
];
