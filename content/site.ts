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
  "Private signup information",
  "Built for public meetups",
  "Restricted item rules",
  "Trust after each trade",
];

export const problemCards = [
  {
    title: "Too much at once",
    body: "The best food often arrives in buckets. Local Trade Garden gives surplus a place to go before it wilts on the counter.",
    icon: ShoppingBasket,
  },
  {
    title: "Cash-first platforms do not fit",
    body: "Selling a handful of basil or three extra tomato plants feels awkward. A trade-first flow keeps the exchange neighborly.",
    icon: Ban,
  },
  {
    title: "Trust matters",
    body: "The planned profile, rating and report tools are built around cautious local exchanges, not anonymous marketplace chaos.",
    icon: ShieldCheck,
  },
  {
    title: "Local is the point",
    body: "This is for the person ten minutes away with compost, eggs, seedlings or the exact garden tool you need.",
    icon: MapPin,
  },
];

export const steps = [
  {
    title: "Create your profile",
    body: "In the planned early app, sign up with your display name, grower type and city. Email and zip code stay private.",
    icon: Home,
  },
  {
    title: "Post what you have",
    body: "List the extra basket, tray, bundle or bag, then say what you would be happy to trade for.",
    icon: ShoppingBasket,
  },
  {
    title: "Browse local listings",
    body: "Scan nearby produce, seedlings, compost, tools and supplies by city and category.",
    icon: Search,
  },
  {
    title: "Offer a trade",
    body: "Choose one of your own listings and send a simple swap offer. No checkout screen, no payment step.",
    icon: Undo2,
  },
  {
    title: "Confirm and rate",
    body: "The planned flow includes messaging, public meetup reminders and ratings after a completed exchange.",
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
    body: "A local feed for garden surplus, organized by city and category.",
    rows: ["East Nashville tomatoes", "Madison basil starts", "Compost for trade"],
  },
  {
    title: "Create Listing",
    body: "A plain listing builder for what you have and what you want back.",
    rows: ["Basket of peppers", "Porch or public meetup", "Wants: herbs"],
  },
  {
    title: "Trade Offer",
    body: "Offer one of your own listings instead of sending money.",
    rows: ["Your basil starts", "For fresh eggs", "Awaiting reply"],
  },
  {
    title: "Messages",
    body: "Coordinate without posting personal contact info publicly.",
    rows: ["Public meetup", "Saturday morning", "Confirm trade"],
  },
  {
    title: "Ratings",
    body: "Build trust after completed trades, one careful exchange at a time.",
    rows: ["Item match", "Cleanliness", "Trade again"],
  },
];

export const safetyCards = [
  {
    title: "No public exact addresses",
    body: "The product is designed around general city or neighborhood information.",
    icon: MapPin,
  },
  {
    title: "Private contact information",
    body: "Email addresses and zip codes should not be shown on public profiles.",
    icon: Mail,
  },
  {
    title: "In-app messaging",
    body: "The planned app flow keeps coordination inside the product.",
    icon: MessageCircle,
  },
  {
    title: "Public meetup reminders",
    body: "Trade agreements are intended to remind users to choose public places.",
    icon: Handshake,
  },
  {
    title: "Restricted item filter",
    body: "Restricted keywords can be flagged before questionable listings go live.",
    icon: Ban,
  },
  {
    title: "Ratings after trades",
    body: "The planned rating flow focuses on reliability, cleanliness and communication.",
    icon: Star,
  },
  {
    title: "Report and block tools",
    body: "Users should be able to report listings or users that violate the rules.",
    icon: ShieldCheck,
  },
  {
    title: "Admin moderation",
    body: "Admins should be able to review reports, approve flagged listings and suspend accounts.",
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
