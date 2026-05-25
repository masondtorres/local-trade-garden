import {
  BadgeCheck,
  Ban,
  Building2,
  Carrot,
  ClipboardList,
  Egg,
  Flower2,
  Handshake,
  HeartHandshake,
  Home,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Star,
  Store,
  Sun,
  Undo2,
  Wheat,
} from "lucide-react";

export const email = "hotpublishers@gmail.com";

export const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#what-you-can-trade", label: "What You Can Trade" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" },
];

export const trustItems = [
  "Email stays off public profiles",
  "Meetup reminders, not delivery routes",
  "Clear no-go item list",
  "Ratings after real swaps",
];

export const problemCards = [
  {
    title: "Too much at once",
    body: "The good stuff shows up all at once. A neighbor with an empty basket can save it from the compost pile.",
    icon: ShoppingBasket,
  },
  {
    title: "Cash-first platforms do not fit",
    body: "Three tomato starts and a bag of basil should not need a price tag, a checkout page or awkward haggling.",
    icon: Ban,
  },
  {
    title: "Trust matters",
    body: "Profiles, trade history and reporting tools give careful people a way to say yes without guessing in the dark.",
    icon: ShieldCheck,
  },
  {
    title: "Local is the point",
    body: "This is for the person one neighborhood over with compost, extra eggs or the trowel you keep meaning to buy.",
    icon: MapPin,
  },
];

export const steps = [
  {
    title: "Create your profile",
    body: "Use a display name, grower type and city. Your email and zip code are not meant for the public listing page.",
    icon: Home,
  },
  {
    title: "Post what you have",
    body: "Add the extra basket, tray, bundle or bag. Say what would make it worth the handoff.",
    icon: ShoppingBasket,
  },
  {
    title: "Browse local listings",
    body: "Look through nearby produce, starts, compost, tools and supplies without digging through cash marketplaces.",
    icon: Search,
  },
  {
    title: "Offer a trade",
    body: "Offer something from your own garden pile. No checkout screen. No payment step.",
    icon: Undo2,
  },
  {
    title: "Confirm and rate",
    body: "Confirm the details, meet somewhere sensible, then leave a rating so the next trade starts with more trust.",
    icon: Star,
  },
];

export const tradeItems = [
  { title: "Produce", icon: Carrot },
  { title: "Herbs", icon: Leaf },
  { title: "Seeds", icon: Sprout },
  { title: "Plant starts", icon: Flower2 },
  { title: "Eggs where local rules allow", icon: Egg },
  { title: "Honey where local rules allow", icon: Sun },
  { title: "Compost", icon: Wheat },
  { title: "Firewood", icon: PackageSearch },
  { title: "Garden tools", icon: ClipboardList },
  { title: "Canned goods where local rules allow", icon: BadgeCheck },
  { title: "Garden supplies", icon: ShoppingBasket },
  { title: "Other approved local goods", icon: HeartHandshake },
];

export const restrictedItems =
  "Alcohol, beer, homebrew, raw milk, meat, poultry, wild game, live animals, livestock, weapons, medicine, supplements, CBD, THC, marijuana or regulated goods.";

export const appScreens = [
  {
    title: "Home Feed",
    body: "Nearby garden goods without the flea-market noise.",
    rows: ["East Nashville tomatoes", "Madison basil starts", "Compost for trade"],
  },
  {
    title: "Create Listing",
    body: "A quick way to say: here is what I have, here is what I need.",
    rows: ["Basket of peppers", "Porch or public meetup", "Wants: herbs"],
  },
  {
    title: "Trade Offer",
    body: "Swap from your own listings instead of reaching for a wallet.",
    rows: ["Your basil starts", "For fresh eggs", "Awaiting reply"],
  },
  {
    title: "Messages",
    body: "Work out the handoff without posting your personal contact info.",
    rows: ["Public meetup", "Saturday morning", "Confirm trade"],
  },
  {
    title: "Ratings",
    body: "Leave a little trail of reliability after each completed trade.",
    rows: ["Item match", "Cleanliness", "Trade again"],
  },
];

export const safetyCards = [
  {
    title: "No public exact addresses",
    body: "Listings should point to a general area, not someone’s front door.",
    icon: MapPin,
  },
  {
    title: "Private contact information",
    body: "Email addresses and zip codes stay behind the scenes.",
    icon: Mail,
  },
  {
    title: "In-app messaging",
    body: "Messages keep the back-and-forth in one place.",
    icon: MessageCircle,
  },
  {
    title: "Public meetup reminders",
    body: "The handoff flow nudges people toward public, sensible meeting spots.",
    icon: Handshake,
  },
  {
    title: "Restricted item filter",
    body: "Obvious restricted terms can be flagged before they turn into a problem.",
    icon: Ban,
  },
  {
    title: "Ratings after trades",
    body: "Ratings focus on the stuff that matters: item match, cleanliness, communication and showing up.",
    icon: Star,
  },
  {
    title: "Report and block tools",
    body: "Bad listings and bad behavior need a clear way out of the garden.",
    icon: ShieldCheck,
  },
  {
    title: "Admin moderation",
    body: "Reports and flagged listings can go to an actual review queue.",
    icon: BadgeCheck,
  },
];

export const growerTypes = [
  "Backyard gardener",
  "Small grower",
  "Homesteader",
  "Farmers market vendor",
  "Garden club member",
  "Local food supporter",
  "Nursery / feed store / garden business",
  "Church / community organization",
  "Other",
];

export const interestTypes = [
  "I want to trade garden goods",
  "I want to help test the app",
  "I want to be notified when it launches",
  "I am interested in sponsoring",
  "I represent a local group or organization",
];

export const partnerCards = [
  { title: "Nurseries", icon: Sprout },
  { title: "Feed stores", icon: Store },
  { title: "Farmers markets", icon: ShoppingBasket },
  { title: "Garden centers", icon: Flower2 },
  { title: "Seed companies", icon: Leaf },
  { title: "Churches and community groups", icon: Home },
  { title: "Garden clubs", icon: HeartHandshake },
  { title: "Local food nonprofits", icon: Building2 },
];

export const faq = [
  {
    q: "Is Local Trade Garden for buying and selling?",
    a: "No. Local Trade Garden is designed for cash-free local trades. There is no checkout, payment system or crypto.",
  },
  {
    q: "Can users exchange money privately?",
    a: "The platform is not built for money exchanges. The purpose is trade only.",
  },
  {
    q: "What can I trade?",
    a: "Garden and homestead goods like produce, herbs, seeds, plant starts, compost, tools and approved local goods. Eggs, honey and preserved goods may depend on local rules.",
  },
  {
    q: "What is not allowed?",
    a: restrictedItems,
  },
  {
    q: "Does the app verify food safety?",
    a: "No. Users are responsible for knowing and following local food safety laws. Local Trade Garden is a connection platform, not a food vendor.",
  },
  {
    q: "Will my address be shown?",
    a: "No. The app is designed around general location only. Users should meet in public places.",
  },
  {
    q: "Will my email or zip code be shown?",
    a: "No. Email and zip code should stay private.",
  },
  {
    q: "How do ratings work?",
    a: "After a completed trade, users rate each other on item match, cleanliness, reliability, communication and whether they would trade again.",
  },
  {
    q: "When will the app launch?",
    a: "Local Trade Garden is in early access. The first launch will focus on one local area before expanding.",
  },
  {
    q: "Can my town or group be a launch partner?",
    a: "Yes. Farmers markets, garden clubs, churches, nurseries and community groups can use the partner form to connect.",
  },
  {
    q: "Is this legal advice?",
    a: "No. The site and app are not legal advice. Users should check local rules before trading food or regulated goods.",
  },
];
