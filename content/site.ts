import {
  BadgeCheck,
  Ban,
  Building2,
  Carrot,
  ClipboardList,
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
  Undo2,
  Wheat,
} from "lucide-react";

// TODO: Confirm this inbox is active before public launch.
export const email = "hello@localtradegarden.com";

export const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#what-you-can-trade", label: "What You Can Trade" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" },
];

export const trustItems = [
  "Private early access waitlist",
  "Trading app is not open yet",
  "Tighter v1 item rules",
  "Local trades only",
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
    body: "Local trades only work when people feel safe enough to show up. The first version keeps the rules tight on purpose.",
    icon: ShieldCheck,
  },
  {
    title: "Local is the point",
    body: "This is for the person one neighborhood over with compost, plant starts or the trowel you keep meaning to buy.",
    icon: MapPin,
  },
];

export const steps = [
  {
    title: "Create your profile",
    body: "Use a display name, grower type and city. The live trading app is not open yet.",
    icon: Home,
  },
  {
    title: "Post what you have",
    body: "Add fresh produce, herbs, seeds, plant starts, compost, mulch, firewood, tools or garden supplies.",
    icon: ShoppingBasket,
  },
  {
    title: "Browse local listings",
    body: "Look through nearby produce, starts, compost, tools and supplies without digging through marketplace clutter.",
    icon: Search,
  },
  {
    title: "Offer a trade",
    body: "Offer something from your own garden pile and keep the request simple.",
    icon: Undo2,
  },
  {
    title: "Confirm and trade",
    body: "Confirm the details, choose a sensible handoff and trade locally.",
    icon: Star,
  },
];

export const tradeItems = [
  { title: "Fresh produce", icon: Carrot },
  { title: "Herbs", icon: Leaf },
  { title: "Seeds", icon: Sprout },
  { title: "Plant starts", icon: Flower2 },
  { title: "Compost", icon: Wheat },
  { title: "Mulch", icon: Leaf },
  { title: "Firewood", icon: PackageSearch },
  { title: "Garden tools", icon: ClipboardList },
  { title: "Pots and trays", icon: BadgeCheck },
  { title: "Garden supplies", icon: ShoppingBasket },
  {
    title: "Other garden-adjacent goods approved by Local Trade Garden",
    icon: HeartHandshake,
  },
];

export const restrictedItems =
  "Meat, poultry, wild game, raw milk, alcohol, homebrew, medicine, supplements, CBD, THC, marijuana, weapons, live animals, livestock, prepared meals, canned goods, eggs, honey or other regulated goods.";

export const appScreens = [
  {
    title: "Home Feed",
    body: "Nearby garden goods without the flea-market noise.",
    rows: ["East Nashville tomatoes", "Madison basil starts", "Compost for trade"],
  },
  {
    title: "Create Listing",
    body: "A quick way to say what you have and what you need.",
    rows: ["Basket of peppers", "Public meetup", "Wants: herbs"],
  },
  {
    title: "Trade Offer",
    body: "Swap from your own listings instead of reaching for a wallet.",
    rows: ["Your basil starts", "For compost", "Awaiting reply"],
  },
  {
    title: "Messages",
    body: "Work out the handoff without posting personal contact info.",
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
    body: "Listings should point to a general area, not someone's front door.",
    icon: MapPin,
  },
  {
    title: "Private contact information",
    body: "Email addresses and zip codes stay behind the scenes.",
    icon: Mail,
  },
  {
    title: "In-app messaging planned",
    body: "Messaging is planned so personal contact information does not have to be posted publicly.",
    icon: MessageCircle,
  },
  {
    title: "Public meetup reminders",
    body: "Public meetup reminders are planned for trade confirmation.",
    icon: Handshake,
  },
  {
    title: "Restricted item filter",
    body: "Restricted terms can be flagged for admin review before questionable listings go live.",
    icon: Ban,
  },
  {
    title: "Ratings after completed trades",
    body: "Ratings after completed swaps are planned for app launch.",
    icon: Star,
  },
  {
    title: "Report and block tools",
    body: "Report and block tools are planned so users have a clear safety path.",
    icon: ShieldCheck,
  },
  {
    title: "Admin moderation queue",
    body: "An admin moderation queue is planned for reports and flagged listings.",
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
    a: "No. Local Trade Garden is for cash-free local trades. There is no checkout, payment system or crypto.",
  },
  {
    q: "What can I trade?",
    a: "The v1 list is fresh produce, herbs, seeds, plant starts, compost, mulch, firewood, garden tools, pots, trays and garden supplies. Some items may be added later after local rule review.",
  },
  {
    q: "What is not allowed?",
    a: restrictedItems,
  },
  {
    q: "Will my address be shown?",
    a: "No. The app is designed around general location only. Users should meet in public places.",
  },
  {
    q: "Does the app verify food safety?",
    a: "No. Local Trade Garden does not inspect goods, verify food safety or guarantee any trade. Users are responsible for following local laws and using common sense before meeting or trading. This is not legal advice.",
  },
];
