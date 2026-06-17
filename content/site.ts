import {
  BookOpen,
  Building2,
  Carrot,
  Flower2,
  Hammer,
  Handshake,
  HeartHandshake,
  Home,
  Leaf,
  MapPin,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Store,
  Users,
  Wheat,
  Wrench,
} from "lucide-react";

export const siteUrl = "https://localtradegarden.com";
export const serviceArea = "Sevier County, nearby Knox County and surrounding East TN";
export const email = "masondtorres@duck.com";

export const complianceStatement =
  "Users are fully responsible for their own trades. All trades must follow local, Tennessee and federal law. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in any trade.";

export const safetyStatement =
  "Meet safely. Use common sense. Do not post exact public addresses. Inspect goods before trading. Firearms, ammunition, alcohol, wine, homebrew, raw milk and illegal items are not allowed in public listings.";

export const executiveVerdict =
  "Local Trade Garden has solid neighbor-to-neighbor potential in East Tennessee, but raw milk, meat, live animals, firearms, alcohol and certain plants carry real legal risk. Barter does not dodge the rules. It is still a transaction. Keep the site simple, local and blunt about user responsibility.";

export const publicPositioning =
  "Local Trade Garden helps local neighbors trade lawful goods, skills, plants, food, tools, handmade items, farm goods and useful work.";

export const farmersMarketContacts = [
  {
    market: "Gatlinburg Farmers Market",
    status: "Verified",
    phone: "(865) 640-7190",
    email: "thegatlinburgfarmersmarket@gmail.com",
  },
  {
    market: "Sevierville Farmers Market / Sevierville Commons",
    status: "Verified",
    phone: "(865) 453-5504",
    email: "seviervillecommons@gmail.com",
  },
  {
    market: "Dandridge Farmers Market",
    status: "Partially verified",
    phone: "(865) 397-7420",
    email: "mrudder@dandridgetn.gov or cshockley@dandridgetn.gov",
  },
  {
    market: "Nourish Knoxville",
    status: "Verified",
    phone: "(865) 805-8687",
    email: "markets@nourishknoxville.org",
  },
  {
    market: "Johnson City Farmers Market",
    status: "Verified",
    phone: "(423) 467-5327",
    email: "managerjcfm@gmail.com",
  },
  {
    market: "Kingsport Farmers Market",
    status: "Verified",
    phone: "(423) 224-2821",
    email: "Kristieleonard@KingsportTN.gov",
  },
  {
    market: "Bristol State Street Farmers Market",
    status: "Verified",
    phone: "(423) 989-5199",
    email: "statestreetfarmersmarket@bristoltn.org",
  },
];

export const regulatedCategoryRisks = [
  "Raw milk: High-risk / restricted. Sale for human consumption prohibited. Do not allow public listings.",
  "Eggs: Generally allowed under TFFA. Users handle labeling, handling and local rules.",
  "Honey: Allowed. Users handle labeling, handling and local rules.",
  "Meat / poultry: Restricted. Do not promote on public listings.",
  "Baked goods / cottage food: Allowed under TFFA. Users handle labeling and food rules.",
  "Live animals / livestock: Allowed by private treaty only where legal. Users handle paperwork.",
  "Plants / nursery stock / seeds: Restricted for commercial sale. A license is often needed.",
  "Alcohol, wine or homebrew: High-risk / banned. Do not allow public listings.",
  "Firearms / ammunition: Private sales may be legal, but liability is high. Ban public listings.",
  "Tools, repairs, services and local labor: Generally allowed. Users still check safety and law.",
];

export const platformRiskSummary = [
  "Payments create risk. Keep checkout off the MVP.",
  "Complaints can pull the platform into enforcement. Use clear no lines.",
  "Hosting and payment providers may restrict regulated goods.",
  "The site should act like a bulletin board, not a broker.",
  "Users handle messages, meetings, goods, services and legal duties.",
];

export const policyDisclaimers = [
  "User responsibility: Users are fully responsible for their own listings, trades, meetings and legal compliance.",
  "Regulated goods: Regulated goods must follow every local, Tennessee and federal rule.",
  "Food and farm: Local Trade Garden does not inspect kitchens, farms, labels, storage or handling.",
  "Live animals: Livestock and live animal trades are only allowed where fully legal. Users handle paperwork.",
  "Weapons policy: Firearms and ammunition are not allowed in public listings.",
  "Alcohol policy: Alcohol, wine and homebrew are not allowed in public listings.",
  "Platform role: Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in any trade.",
];

export const redFlags = [
  "Someone asks to list a banned item.",
  "Someone tries to use payment, escrow or shipping through the site.",
  "Someone asks the platform to approve a trade.",
  "Someone offers raw milk, alcohol, firearms or ammunition.",
  "Someone offers meat or poultry without clear legal handling.",
  "Someone posts exact home addresses in public.",
  "Someone makes medical, safety or legal claims.",
];

export const nextActions = [
  "Keep the homepage simple.",
  "Keep checkout out of the MVP.",
  "Use blunt public rules.",
  "Review food, farm and livestock copy with a qualified attorney.",
  "Ask local market contacts for feedback before opening wider access.",
  "Moderate public listings for banned and restricted items.",
  "Keep early access focused on Sevier County, Knox County and nearby East Tennessee.",
];

export const navLinks = [
  { href: "/trade", label: "Trade" },
  { href: "/will-work-for-food", label: "Work" },
  { href: "/local-partners", label: "Partners" },
  { href: "/safety", label: "Safety" },
  { href: "/pricing", label: "Pricing" },
  { href: "/early-access", label: "Early Access" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/what-you-can-trade", label: "What You Can Trade" },
  { href: "/will-work-for-food", label: "Will Work for Food" },
  { href: "/safety", label: "Safety" },
  { href: "/local-partners", label: "Local Partners" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export const homeCategoryPreview = [
  { title: "Made by hand", body: "Crafts, useful goods, home projects and hand-built items with real work behind them.", icon: Hammer },
  { title: "Grown or raised", body: "Plants, seeds, produce, eggs, honey and lawful farm goods where legal.", icon: Wheat },
  { title: "Repaired or restored", body: "Tools, equipment, small fixes and practical work that gives things another life.", icon: Wrench },
  { title: "Taught or worked", body: "Useful skills, lessons, local labor and honest help from one neighbor to another.", icon: BookOpen },
];

export const steps = [
  {
    title: "Create a profile",
    body: "Use a display name, general area and a short note about what you make, grow, repair, teach or can do.",
    icon: Home,
  },
  {
    title: "Post what comes from your hands",
    body: "List what you made, grew, raised, repaired or can offer through honest work.",
    icon: ShoppingBasket,
  },
  {
    title: "Browse local trades",
    body: "Look for food, goods, tools, lessons, labor and other useful local value nearby.",
    icon: Search,
  },
  {
    title: "Offer a trade",
    body: "Offer something of your own instead of turning the exchange into a checkout cart.",
    icon: Handshake,
  },
  {
    title: "Agree on details",
    body: "Work out the item, service, timing, general area and what each person is responsible for.",
    icon: PackageSearch,
  },
  {
    title: "Meet safely",
    body: "Use common sense, avoid posting exact public addresses and choose a sensible handoff.",
    icon: ShieldCheck,
  },
  {
    title: "Complete the trade",
    body: "Trade directly. The platform helps people connect, but it does not become part of the trade.",
    icon: HeartHandshake,
  },
];

export const tradeCategories = [
  {
    title: "Plants, Seeds and Produce",
    body: "Garden plants, seeds, produce, herbs and starts from neighbors nearby.",
    icon: Carrot,
  },
  {
    title: "Eggs and Honey",
    body: "Fresh eggs and local honey where legal, properly handled and clearly described.",
    icon: Wheat,
  },
  {
    title: "Baked and Handmade Goods",
    body: "Baked goods where allowed, crafts, sewn goods, woodwork and useful home items.",
    icon: Hammer,
  },
  {
    title: "Tools and Repairs",
    body: "Hand-built tools, repaired gear, sharpened blades, mended equipment and practical fixes.",
    icon: Wrench,
  },
  {
    title: "Skills and Lessons",
    body: "Music lessons, garden help, canning know-how, repair lessons, tutoring and useful teaching.",
    icon: BookOpen,
  },
  {
    title: "Local Labor",
    body: "Stacking wood, clearing brush, planting rows, loading trucks and neighborly work.",
    icon: Users,
  },
  {
    title: "Lawful Farm Goods",
    body: "Livestock and farm items only where fully legal. Users handle all rules.",
    icon: Handshake,
  },
  {
    title: "Earth-Friendly Trades",
    body: "Trades that reuse, repair, grow, restore or reduce waste.",
    icon: Leaf,
  },
];

export const safetyGuidelines = [
  { title: "Meet safely", body: "Choose sensible public or familiar places and trust your judgment.", icon: ShieldCheck },
  { title: "Keep exact addresses private", body: "Use a general area first. Do not post exact public addresses.", icon: MapPin },
  { title: "Know the rules", body: "Regulated goods must follow local, state and federal laws.", icon: BookOpen },
  { title: "Restricted items are not promoted", body: "Do not use the site to promote firearms, ammunition, alcohol, wine, homebrew, raw milk or illegal items.", icon: ShieldCheck },
  { title: "Food safety is on users", body: "The platform does not inspect kitchens, gardens, farms, labels, handling or storage.", icon: Wheat },
  { title: "Connection tool only", body: "Local Trade Garden is not a seller, broker, inspector, guarantor or legal advisor.", icon: Handshake },
];

export const growerTypes = [
  "Backyard gardener",
  "Homesteader",
  "Small grower",
  "Maker / crafter",
  "Cook / baker",
  "Repair person",
  "Teacher / skill sharer",
  "Local worker",
  "Farmers market vendor",
  "Garden club member",
  "Local food supporter",
  "Nursery / feed store / garden business",
  "Church / community organization",
  "Other",
];

export const interestTypes = [
  "I want to trade goods",
  "I want to trade services",
  "I want to help test the site",
  "I want to be notified when it launches",
  "I am interested in partnering",
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
  { title: "Homesteading groups", icon: Users },
  { title: "Beekeepers and honey groups where appropriate and legal", icon: Wheat },
];

export const faq = [
  {
    q: "What is Local Trade Garden?",
    a: "It is a peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee. Neighbors post trades and handle their own deals.",
  },
  {
    q: "Is this for buying and selling?",
    a: "No. Local Trade Garden is for local barter. There is no checkout, payment layer or middleman.",
  },
  {
    q: "What can I trade?",
    a: "Plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, local labor and lawful farm goods where fully legal.",
  },
  {
    q: "What area is this for?",
    a: "The first focus is Sevier County, Knox County and nearby East Tennessee.",
  },
  {
    q: "Are restricted items allowed?",
    a: "No. Firearms, ammunition, alcohol, wine, homebrew, raw milk and illegal items are not allowed in public listings.",
  },
  {
    q: "What rules apply to trades?",
    a: "All trades must follow local, state and federal laws. Users are responsible for knowing and following the rules for their goods, services and handoffs.",
  },
  {
    q: "Does the site verify food safety?",
    a: "No. Local Trade Garden does not inspect goods, verify food safety or guarantee any trade. Users are responsible for food handling, labeling, storage and local rules.",
  },
  {
    q: "Who is responsible for a trade?",
    a: "Users are. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in trades.",
  },
  {
    q: "Does barter avoid legal rules?",
    a: "No. Barter is still a transaction. Users must follow local, Tennessee and federal law.",
  },
  {
    q: "Does Local Trade Garden handle payment or delivery?",
    a: "No. There is no checkout, payment processing, escrow, shipping or delivery service.",
  },
  {
    q: "Will my address be shown?",
    a: "The product is designed around general location. Do not post exact public addresses. Meet safely and use common sense.",
  },
  {
    q: "Is this a live app yet?",
    a: "Not yet. Local Trade Garden is an early access local pilot. The site is collecting interest and shaping the first local pilot group.",
  },
  {
    q: "How is this different from a resale site?",
    a: "It is not for random resale piles. It is for useful local trades between neighbors.",
  },
];

export const photoSet = [
  {
    src: "https://images.unsplash.com/photo-1765480953875-a7338f896e91?auto=format&fit=crop&q=80&w=1200",
    alt: "Wooden baskets of vegetables at an outdoor farmers market",
  },
  {
    src: "https://images.unsplash.com/photo-1720105447193-583011440aaa?auto=format&fit=crop&q=80&w=1200",
    alt: "Young tomato seedlings growing in small nursery pots",
  },
  {
    src: "https://images.unsplash.com/photo-1760905066161-ed10663cee32?auto=format&fit=crop&q=80&w=1200",
    alt: "A basket filled with ripe red tomatoes at a farmers market",
  },
];

export const appStatus = "Private early access pilot";
