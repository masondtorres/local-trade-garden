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
  "All trades must follow local, Tennessee and federal law. Users are responsible for knowing and following the rules that apply to their goods, services, food handling, labeling, animals, livestock, meat, eggs, honey, plants and any other regulated item. Local Trade Garden does not inspect, approve, broker, sell, ship, store, guarantee or participate in any trade.";

export const safetyStatement =
  "Meet safely. Use common sense. Do not post exact public addresses. Regulated goods must follow applicable law. Local Trade Garden is a connection board, not a seller, broker, inspector, shipper, guarantor or legal advisor.";

export const navLinks = [
  { href: "/trade", label: "Trade" },
  { href: "/will-work-for-food", label: "Work" },
  { href: "/local-partners", label: "Partners" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
  { href: "/early-access", label: "Early Access" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/what-you-can-trade", label: "What You Can Trade" },
  { href: "/will-work-for-food", label: "Will Work for Food" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
  { href: "/local-partners", label: "Local Partners" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export const homeCategoryPreview = [
  { title: "Made by hand", body: "Crafts, useful goods, home projects and hand-built items with real work behind them.", icon: Hammer },
  { title: "Grown or raised", body: "Produce, garden goods, eggs, honey, plants and lawful farm goods where rules allow.", icon: Wheat },
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
    title: "Garden Plants and Seeds",
    body: "Seedlings, starts, cuttings, produce, herbs and garden extras. Commercial sellers are responsible for any nursery, labeling or plant rules that apply.",
    icon: Sprout,
  },
  {
    title: "Eggs and Honey",
    body: "Local eggs and honey where lawful, properly handled and honestly described by the person posting the trade.",
    icon: Wheat,
  },
  {
    title: "Baked Goods and Pantry Items",
    body: "Homemade baked goods, canned goods and pantry items only where local food rules allow them.",
    icon: ShoppingBasket,
  },
  {
    title: "Handmade Goods",
    body: "Soap, candles, crafts, sewn goods, woodwork, useful home items and things made with your own hands.",
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
    body: "Stacking wood, clearing brush, hauling feed, planting rows, loading trucks and neighborly work.",
    icon: Users,
  },
  {
    title: "Lawful Farm Goods",
    body: "Farm goods, animal-related goods and livestock only where lawful, properly handled and fully managed by the users involved.",
    icon: Leaf,
  },
];

export const safetyGuidelines = [
  { title: "Meet safely", body: "Choose sensible public or familiar places and trust your judgment.", icon: ShieldCheck },
  { title: "Keep exact addresses private", body: "Use a general area first. Do not post exact public addresses.", icon: MapPin },
  { title: "Know the rules", body: "Regulated goods must follow local, Tennessee and federal law.", icon: BookOpen },
  { title: "Food safety is on users", body: "The platform does not inspect kitchens, farms, labels, handling or storage.", icon: Wheat },
  { title: "Licenses are on users", body: "Users are responsible for any permit, license, inspection, health paper or transfer requirement.", icon: ShieldCheck },
  { title: "Connection board only", body: "Local Trade Garden is not a seller, broker, inspector, shipper, guarantor or legal advisor.", icon: Handshake },
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
  { title: "Processors or farm support businesses where appropriate and legal", icon: PackageSearch },
];

export const faq = [
  {
    q: "Is this for buying and selling?",
    a: "No. Local Trade Garden is built for neighbor-to-neighbor barter and local trades. There is no checkout, payment layer or crypto.",
  },
  {
    q: "What does 'trade what you grow, make, fix or can do' mean?",
    a: "It means this site is for things that came from your hands, work, land, skill or care. Made, grown, raised, repaired, taught, cooked, built or earned through honest labor.",
  },
  {
    q: "What can I trade?",
    a: "You can trade garden plants, seeds, produce, eggs, honey, baked goods, handmade goods, tools, repairs, skills, lessons, local labor and lawful farm goods where legal and properly handled.",
  },
  {
    q: "Can I trade farm goods or animals?",
    a: "Only where lawful and only when the people involved handle every rule, paper, health check, permit, transfer requirement and safety concern themselves. Local Trade Garden does not inspect, approve or manage those trades.",
  },
  {
    q: "Are restricted items allowed in public listings?",
    a: "No. Public listings may not promote firearms, ammunition, alcohol, illegal goods or restricted trades. Users are responsible for lawful conduct in their own area.",
  },
  {
    q: "What rules apply to trades?",
    a: "All trades must follow local, Tennessee and federal law. Users are responsible for knowing and following the rules that apply to their goods, services, food handling, labeling, animals, livestock, meat, eggs, honey, plants and any other regulated item. Local Trade Garden does not approve, inspect, broker, sell, ship, store, guarantee or participate in any trade.",
  },
  {
    q: "Does the site verify food safety?",
    a: "No. Local Trade Garden does not inspect goods, verify food safety or guarantee any trade. Users are responsible for food handling, labeling, storage and local rules.",
  },
  {
    q: "Who is responsible for following the law?",
    a: "Users are. This site is a connection board, not a broker, seller, inspector, shipper, legal advisor or party to any trade.",
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
    q: "How is Local Trade Garden different from Facebook Marketplace?",
    a: "Local Trade Garden is not built for random resale listings or cash-first selling. It is focused on local barter for things made, grown, raised, repaired, taught or earned through honest work.",
  },
];

export const pricingPlans = [
  {
    name: "Free Neighbor",
    price: "$0",
    body: "For someone testing the board with one simple local trade.",
    features: ["1 active listing", "25-mile reach", "Early access profile", "Basic local visibility"],
  },
  {
    name: "Active Neighbor",
    price: "$5.99/mo",
    body: "For regular traders with more goods, skills or useful work to offer.",
    features: ["Up to 10 active listings", "Wider local reach", "More room for seasonal goods", "Built for growers, makers and workers"],
  },
  {
    name: "Super Neighbor",
    price: "$10.99/mo",
    body: "For high-activity neighbors who want more reach and better placement.",
    features: ["Priority placement", "Up to 200-mile reach", "Best for frequent listings", "Useful for partners and serious local traders"],
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
