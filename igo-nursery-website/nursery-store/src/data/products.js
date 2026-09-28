// Mock product catalogue for IGO Nursery
import { PRODUCT_NAME_TRANSLATIONS } from './productTranslations';
import { CATEGORY_LABEL_TRANSLATIONS } from './categoryTranslations';

export const CATEGORIES = [
  { slug: 'indoor-plants', label: 'Indoor Plants', tagline: 'Easy greenery for every room', image: '/category-banners/indoor plants banner image.png' },
  { slug: 'outdoor-plants', label: 'Outdoor Plants', tagline: 'Colour and life for open spaces', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'seeds', label: 'Seeds', tagline: 'Start from scratch and watch it grow', image: '/images/shop-by-category/seeds.png' },
  { slug: 'vegetable-seeds', label: 'Vegetable Seeds', tagline: 'Grow your own kitchen garden', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'flower-seeds', label: 'Flower Seeds', tagline: 'Colour, from seed to bloom', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'herb-seeds', label: 'Herb Seeds', tagline: 'Fresh herbs, grown at home', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'fruit-seeds', label: 'Fruit Seeds', tagline: 'Start a fruit patch from scratch', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'microgreen-seeds', label: 'Microgreens Seeds', tagline: 'Fast, nutrient-dense harvests', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'lawn-grass-seeds', label: 'Lawn Grass Seeds', tagline: 'The foundation of a great lawn', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'fodder-seeds', label: 'Fodder Seeds', tagline: 'Feed crops for farms and livestock', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'medicinal-seeds', label: 'Medicinal Seeds', tagline: 'Traditional remedies, grown at home', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'exotic-seeds', label: 'Exotic Seeds', tagline: 'Uncommon varieties for adventurous growers', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'native-ornamental-seeds', label: 'Native & Ornamental Seeds', tagline: 'Trees and flowers native to India', image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=800&auto=format&fit=crop' },
  { slug: 'pots-planters', label: 'Pots & Planters', tagline: 'Give every plant a home it deserves', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'terracotta-pots', label: 'Terracotta Pots', tagline: 'Classic clay, always in style', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'ceramic-pots', label: 'Ceramic Pots', tagline: 'Glazed finishes for a polished look', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'plastic-pots', label: 'Plastic Pots', tagline: 'Lightweight and budget-friendly', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'fibre-planters', label: 'Fibre Planters', tagline: 'Durable, large-format planters', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'metal-planters', label: 'Metal Planters', tagline: 'A sleek, modern finish', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'wooden-planters', label: 'Wooden Planters', tagline: 'Natural warmth for any space', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'cement-planters', label: 'Cement / RCC Planters', tagline: 'Built to last outdoors', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'hanging-planters', label: 'Hanging Planters', tagline: 'Trailing greenery, elevated', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'railing-planters', label: 'Railing Planters', tagline: 'Made for balconies and terraces', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'self-watering-planters', label: 'Self-Watering Planters', tagline: 'Less upkeep, happier plants', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'coco-fibre-pots', label: 'Coco Fibre Pots', tagline: 'Biodegradable and eco-friendly', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'rattan-planters', label: 'Rattan-Style Planters', tagline: 'Woven texture, modern shape', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'bonsai-pots-subcat', label: 'Bonsai Pots', tagline: 'Shallow trays built for bonsai', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'balcony-planters', label: 'Balcony Planters', tagline: 'Compact troughs for small spaces', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'window-box-planters', label: 'Window Box Planters', tagline: 'A classic window-sill garden', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'vertical-tower-planters', label: 'Vertical Tower Planters', tagline: 'Grow up, not out', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'upcycled-planters', label: 'Upcycled Planters', tagline: 'Character, repurposed sustainably', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop' },
  { slug: 'grow-bags-containers', label: 'Grow Bags & Nursery Containers', tagline: 'Sturdy growing homes for seedlings and saplings', image: '/images/shop-by-category/grow-bags-containers.png' },
  { slug: 'gardening-tools', label: 'Gardening Tools', tagline: 'Everything you need to get your hands dirty', image: '/images/shop-by-category/gardening-tools.png' },
  { slug: 'plant-care', label: 'Plant Care', tagline: 'Fertilizers, soil, pest control and everything in between', image: '/images/shop-by-category/plant-care.png' },
  { slug: 'potting-media', label: 'Potting Media', tagline: 'Soil, cocopeat and amendments for healthy roots', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'organic-fertilizers', label: 'Organic Fertilizers', tagline: 'Natural nutrition for your plants', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'chemical-fertilizers', label: 'Chemical Fertilizers', tagline: 'Precise, fast-acting nutrition', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'liquid-nutrients', label: 'Liquid Nutrients & Tonics', tagline: 'Feed your plants between waterings', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'biofertilizers', label: 'Biofertilizers', tagline: 'Beneficial microbes for healthier soil', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'plant-protection', label: 'Plant Protection', tagline: 'Pesticides and fungicides that keep plants safe', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'propagation-supplies', label: 'Propagation Supplies', tagline: 'Everything you need to grow new plants', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'composting-products', label: 'Composting Products', tagline: 'Turn kitchen waste into garden gold', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'garden-decor', label: 'Garden Décor', tagline: 'Finishing touches for a beautiful garden', image: '/images/shop-by-category/garden-decor.png' },
  { slug: 'irrigation-watering', label: 'Irrigation & Watering Equipment', tagline: 'Hoses, sprinklers and drip systems that keep watering effortless', image: '/images/shop-by-category/irrigation-watering.png' },
  { slug: 'plant-support', label: 'Plant Support Materials', tagline: 'Stakes, ties and trellis for plants that need a hand', image: '/images/shop-by-category/plant-support.png' },
  { slug: 'hydroponic-supplies', label: 'Hydroponic Supplies', tagline: 'Soil-free growing gear for faster, cleaner harvests', image: '/images/shop-by-category/hydroponic-supplies.png' },
  { slug: 'vertical-gardening', label: 'Vertical Gardening Accessories', tagline: 'Living walls and stacked planters for small spaces', image: '/images/shop-by-category/vertical-gardening.png' },
  { slug: 'lawn-landscaping', label: 'Lawn & Landscaping Materials', tagline: 'Mowers, edging and turf care for a full landscaping job', image: '/images/shop-by-category/lawn-landscaping.png' },
  { slug: 'decorative-stones-mulch', label: 'Decorative Stones & Mulch', tagline: 'Pebbles, gravel and mulch to finish off any bed', image: '/images/shop-by-category/decorative-stones-mulch.png' },
  { slug: 'shade-nets-covers', label: 'Shade Nets & Protective Covers', tagline: 'Netting and covers that protect plants from sun, frost and pests', image: '/images/shop-by-category/shade-nets-covers.png' },
  { slug: 'smart-garden-tech', label: 'Smart Garden Tech', tagline: 'Sensors and app-connected tools for a smarter garden', image: '/images/shop-by-category/smart-garden-tech.png' },
  { slug: 'greenhouse-supplies', label: 'Greenhouse Supplies', tagline: 'Poly film, fans and fittings for a controlled-climate grow space', image: 'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=800&auto=format&fit=crop' },
  { slug: 'pest-control-devices', label: 'Pest-Control Devices', tagline: 'Traps, repellents and barriers that keep pests out', image: '/images/shop-by-category/pest-control-devices.png' },
  { slug: 'nursery-packaging-supplies', label: 'Nursery Packaging & Operations Supplies', tagline: 'Everything a working nursery needs behind the scenes', image: '/images/shop-by-category/nursery-packaging-supplies.png' },
  { slug: 'indoor-plant-accessories', label: 'Indoor Plant Accessories', tagline: 'Grow lights, stands and self-watering pots for indoor greenery', image: '/images/shop-by-category/indoor-plant-accessories.png' },
  { slug: 'bonsai', label: 'Bonsai', tagline: 'Patience, shaped into art', image: '/category-banners/Bonsai & Orchids bsckground image.jpg' },
  { slug: 'palms', label: 'Palms', tagline: 'Tropical statement plants for home and garden', image: '/category-banners/palms banner image.png' },
  { slug: 'cycads', label: 'Cycads', tagline: 'Ancient, sculptural evergreens', image: '/category-banners/cycads banner image.png' },
  { slug: 'succulents', label: 'Succulents', tagline: 'Low-water, high-character plants', image: '/category-banners/catcus background image.jpg' },
  { slug: 'cactus', label: 'Cactus', tagline: 'Bold shapes that thrive on neglect', image: '/category-banners/catcus background image.jpg' },
  { slug: 'table-top-plants', label: 'Table Top Plants', tagline: 'Compact greenery for desks and shelves', image: '/category-banners/Table Top & Mini Plants background image.jpg' },
  { slug: 'mini-plants', label: 'Mini Plants', tagline: 'Tiny plants, big personality', image: '/category-banners/Table Top & Mini Plants background image.jpg' },
  { slug: 'orchids', label: 'Orchids', tagline: 'Elegant blooms for every home', image: '/category-banners/Bonsai & Orchids bsckground image.jpg' },
  { slug: 'bromeliads', label: 'Bromeliads', tagline: 'Striking rosettes and vivid colour', image: '/category-banners/Bromeliads, Ferns & Carnivorous Plants background image.jpg' },
  { slug: 'ferns', label: 'Ferns', tagline: 'Lush texture for shaded corners', image: '/category-banners/Bromeliads, Ferns & Carnivorous Plants background image.jpg' },
  { slug: 'carnivorous-plants', label: 'Carnivorous Plants', tagline: 'Nature\'s own pest control', image: '/category-banners/Bromeliads, Ferns & Carnivorous Plants background image.jpg' },
  { slug: 'aquatic-pond-plants', label: 'Aquatic & Pond Plants', tagline: 'Bring your water garden to life', image: '/category-banners/Aquatic & Pond Plants background image.jpg' },
  { slug: 'vertical-garden-plants', label: 'Vertical Garden Plants', tagline: 'Built for living walls', image: '/category-banners/Vertical Garden & Green Wall Plants background image.jpg' },
  { slug: 'green-wall-plants', label: 'Green Wall Plants', tagline: 'Dense, fast-covering greenery', image: '/category-banners/Vertical Garden & Green Wall Plants background image.jpg' },
  { slug: 'terrace-garden-plants', label: 'Terrace Garden Plants', tagline: 'Thrive in open-air terraces', image: '/category-banners/Terrace, Balcony & Hanging Basket Plants background image.jpg' },
  { slug: 'balcony-plants', label: 'Balcony Plants', tagline: 'Compact plants for small spaces', image: '/category-banners/Terrace, Balcony & Hanging Basket Plants background image.jpg' },
  { slug: 'hanging-basket-plants', label: 'Hanging Basket Plants', tagline: 'Trailing greenery for every corner', image: '/category-banners/Terrace, Balcony & Hanging Basket Plants background image.jpg' },
  { slug: 'fruit-plants', label: 'Fruit Plants', tagline: 'Grow your own harvest at home', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'herbs', label: 'Herbs', tagline: 'Fresh flavour, right off the plant', image: '/category-banners/Table Top & Mini Plants background image.jpg' },
  { slug: 'medicinal-plants', label: 'Medicinal Plants', tagline: 'Traditional remedies from your garden', image: '/category-banners/indoor plants banner image.png' },
  { slug: 'aromatic-plants', label: 'Aromatic Plants', tagline: 'Fragrant leaves and calming scents', image: '/category-banners/indoor plants banner image.png' },
  { slug: 'spice-plants', label: 'Spice Plants', tagline: 'Home-grown spices for the kitchen', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'sacred-plants', label: 'Sacred Plants', tagline: 'Traditional plants for home and worship', image: '/category-banners/indoor plants banner image.png' },
  { slug: 'butterfly-garden-plants', label: 'Butterfly Garden Plants', tagline: 'Nectar-rich plants that draw butterflies', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'bee-friendly-plants', label: 'Bee Friendly Plants', tagline: 'Support pollinators in your garden', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'bird-attracting-plants', label: 'Bird Attracting Plants', tagline: 'Bring birdsong to your garden', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'fragrant-plants', label: 'Fragrant Plants', tagline: 'Perfume your garden naturally', image: '/category-banners/indoor plants banner image.png' },
  { slug: 'edible-flowers', label: 'Edible Flowers', tagline: 'Beautiful blooms you can eat', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'coastal-plants', label: 'Coastal Plants', tagline: 'Built to handle salt air and wind', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'landscaping-trees', label: 'Landscaping Tree', tagline: 'Statement trees for large gardens', image: '/category-banners/outdoor plants banner image.png' },
  { slug: 'landscaping-plants', label: 'Landscaping Plant', tagline: 'Reliable colour for landscaped beds', image: '/category-banners/outdoor plants banner image.png' },

  // ---- Grouped "shop by category" umbrellas (see UMBRELLA_GROUPS below).
  // These are virtual categories: they own no products of their own, they
  // aggregate the real sub-categories listed against them so one tile can
  // open a focused product listing. ----
  { slug: 'garden-landscaping-lighting', label: 'Garden & Landscaping Lighting', tagline: 'Path, spike, bollard and solar lights for gardens and landscapes', image: '/images/shop-by-category/smart-garden-tech.png' },
  { slug: 'hand-tools-lawn-equipment', label: 'Hand Tools & Lawn Equipment', tagline: 'Trowels, pruners, forks, mowers and everything for hands-on gardening', image: '/images/shop-by-category/lawn-landscaping.png' },
  { slug: 'fertilizer-crop-protection', label: 'Fertilizer, Biofertilizer & Crop Protection', tagline: 'Plant nutrition and protection, from organic to chemical', image: '/images/shop-by-category/fertilizer-biofertilizer.png' },
  { slug: 'cement-wooden-bonsai-planters', label: 'Cement, Wooden & Bonsai Planters', tagline: 'Heavy cement, warm wood and shallow bonsai trays', image: '/images/shop-by-category/cement-wooden-bonsai-planters.png' },
  { slug: 'decor-fairy-garden', label: 'Décor & Fairy-Garden Ornaments', tagline: 'Ornaments, figurines and finishing touches for the garden', image: '/images/shop-by-category/garden-decor.png' },
  { slug: 'plant-support-trellis-staking', label: 'Plant Support, Trellis & Staking', tagline: 'Stakes, ties, trellis and frames for plants that need a hand', image: '/images/shop-by-category/plant-support.png' },
  { slug: 'self-watering-railing-planters', label: 'Self-Watering & Railing Planters', tagline: 'Low-maintenance planters, with their colour options', image: '/images/shop-by-category/self-watering-railing-planters.png' },
].map((cat) => {
  // Auto-attach real per-language label translations by slug (see
  // data/categoryTranslations.js) - same fallback pattern as makeProduct()
  // for products above; admin-entered translations on the live Firestore
  // doc still win over this if ever set.
  const labelTranslations = CATEGORY_LABEL_TRANSLATIONS[cat.slug];
  return labelTranslations
    ? { ...cat, translations: Object.fromEntries(Object.entries(labelTranslations).map(([lang, label]) => [lang, { label }])) }
    : cat;
});

// Shared category-family groupings - single source of truth used both by
// CategoryPage (umbrella "All Seeds"/"All Pots" pages) and by the filter
// config resolver (filterConfig.js) to decide which filter set a given
// category/subcategory should show.
export const SEED_SUBCATEGORY_SLUGS = [
  'vegetable-seeds', 'flower-seeds', 'herb-seeds', 'fruit-seeds', 'microgreen-seeds',
  'lawn-grass-seeds', 'fodder-seeds', 'medicinal-seeds', 'exotic-seeds', 'native-ornamental-seeds',
];
export const POT_SUBCATEGORY_SLUGS = [
  'terracotta-pots', 'ceramic-pots', 'plastic-pots', 'fibre-planters', 'metal-planters',
  'wooden-planters', 'cement-planters', 'hanging-planters', 'railing-planters',
  'self-watering-planters', 'coco-fibre-pots', 'rattan-planters', 'bonsai-pots-subcat',
  'balcony-planters', 'window-box-planters', 'vertical-tower-planters', 'upcycled-planters',
];
export const PLANT_CARE_SUBCATEGORY_SLUGS = [
  'potting-media', 'organic-fertilizers', 'chemical-fertilizers', 'liquid-nutrients',
  'biofertilizers', 'plant-protection', 'propagation-supplies', 'composting-products',
];
// Plant Care's category-browsing pages (Explore Plant Care Categories, All
// Categories) also include Gardening Tools - a real, populated category
// that's part of the Plant Care nav group but wasn't in the umbrella
// product-aggregation list above (kept separate there so "All Plant Care
// products" doesn't pull in tools alongside consumables).
export const ALL_PLANT_CARE_CATEGORY_SLUGS = [...PLANT_CARE_SUBCATEGORY_SLUGS, 'gardening-tools'];
// Every real plant category slug (mirrors the Plants nav group in
// src/data/navigation.js and PLANTS_NAV_CATEGORY_SLUGS in siteContent.js -
// kept here too, rather than importing across data files, so this module
// has no dependency on the CMS content file).
export const ALL_PLANT_CATEGORY_SLUGS = [
  'indoor-plants', 'outdoor-plants', 'fruit-plants', 'flowering-plants', 'succulents',
  'cactus', 'palms', 'cycads', 'table-top-plants', 'mini-plants', 'bonsai', 'orchids',
  'bromeliads', 'ferns', 'carnivorous-plants', 'aquatic-pond-plants', 'vertical-garden-plants',
  'green-wall-plants', 'terrace-garden-plants', 'balcony-plants', 'hanging-basket-plants',
  'herbs', 'medicinal-plants', 'aromatic-plants', 'spice-plants', 'sacred-plants',
  'butterfly-garden-plants', 'bee-friendly-plants', 'bird-attracting-plants', 'fragrant-plants',
  'edible-flowers', 'coastal-plants', 'landscaping-trees', 'landscaping-plants',
];

export const UMBRELLA_GROUPS = {
  // Virtual "every plant category" listing for /plants/all - a real,
  // filterable product grid (reuses CategoryPage exactly like gifting/
  // corporate-gifts already do) rather than a one-off product list.
  plants: ALL_PLANT_CATEGORY_SLUGS,
  seeds: ['seeds', ...SEED_SUBCATEGORY_SLUGS],
  'pots-planters': ['pots-planters', ...POT_SUBCATEGORY_SLUGS],
  'plant-care': ['plant-care', ...PLANT_CARE_SUBCATEGORY_SLUGS],

  // Grouped "shop by category" tiles -> the real product categories each
  // one should list. Data-driven: add a slug here + a CATEGORIES entry +
  // a SHOP_CATEGORIES_V2 tile and the whole flow works, no UI changes.
  'garden-landscaping-lighting': ['garden-lights', 'garden-landscaping-lighting'],
  'hand-tools-lawn-equipment': ['gardening-tools', 'lawn-landscaping'],
  'fertilizer-crop-protection': [
    'organic-fertilizers', 'chemical-fertilizers', 'liquid-nutrients',
    'biofertilizers', 'plant-protection', 'pest-control-devices', 'composting-products',
  ],
  'cement-wooden-bonsai-planters': ['cement-planters', 'wooden-planters', 'bonsai-pots-subcat'],
  'decor-fairy-garden': ['garden-decor'],
  'plant-support-trellis-staking': ['plant-support'],
  'self-watering-railing-planters': ['self-watering-planters', 'railing-planters'],
};

// Every category slug that is an actual living plant (as opposed to
// seeds, pots, tools, fertilizers, decor or any other accessory). Single
// source of truth for "plant-only" product pickers - e.g. the homepage's
// "Plants People Love" best-sellers strip - so that section never surfaces
// non-plant items like plant labels, pH test kits or hydroponic hardware.
export const PLANT_CATEGORY_SLUGS = [
  'indoor-plants', 'outdoor-plants', 'landscaping-plants', 'landscaping-trees',
  'bonsai', 'palms', 'cycads', 'succulents', 'cactus', 'table-top-plants',
  'mini-plants', 'orchids', 'bromeliads', 'ferns', 'carnivorous-plants',
  'aquatic-pond-plants', 'vertical-garden-plants', 'green-wall-plants',
  'terrace-garden-plants', 'balcony-plants', 'hanging-basket-plants',
  'fruit-plants', 'herbs', 'medicinal-plants', 'aromatic-plants',
  'spice-plants', 'sacred-plants', 'butterfly-garden-plants',
  'bee-friendly-plants', 'bird-attracting-plants', 'fragrant-plants',
  'edible-flowers', 'coastal-plants',
];

const IMG = {
  indoor: [
    'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1463154545680-d59320fd685d?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?q=80&w=600&auto=format&fit=crop',
  ],
  outdoor: [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=600&auto=format&fit=crop',
  ],
  seeds: [
    'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?q=80&w=600&auto=format&fit=crop',
  ],
  pots: [
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=600&auto=format&fit=crop',
  ],
  tools: [
    'https://images.unsplash.com/photo-1502394202744-021cfbb17454?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600&auto=format&fit=crop',
  ],
  decor: [
    'https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=600&auto=format&fit=crop',
  ],
  bonsai: [
    'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&w=600&auto=format&fit=crop',
  ],
};

let counter = 1;
function nextId() {
  return `p-${counter++}`;
}

function makeProduct({
  name, category, categoryLabel, price, originalPrice, image,
  size = 'Medium (20-60cm)', light = 'Full sun to partial shade',
  location = 'Garden bed, terrace or balcony', maintenance = 'Medium Maintenance',
  water = 'Regular watering, more in summer', rating, reviews,
  gift = false, giftType, productType,
}) {
  // Auto-attach real per-language name translations by exact name match
  // (see data/productTranslations.js) - admin-entered `translations` on the
  // live Firestore doc still wins over this if ever set (see
  // getLocalizedProductName), this is just the built-in fallback set.
  const nameTranslations = PRODUCT_NAME_TRANSLATIONS[name];

  return {
    id: nextId(),
    name,
    category,
    categoryLabel,
    price,
    originalPrice,
    discount: originalPrice - price,
    // Always strictly above 4.0, capped at 5.0 - e.g. 4.1-5.0.
    rating: rating ?? +(4.1 + Math.random() * 0.9).toFixed(1),
    reviews: reviews ?? Math.floor(Math.random() * 130) + 8,
    image,
    size, light, location, maintenance, water,
    gift, giftType, productType: productType ?? categoryLabel,
    ...(nameTranslations ? { translations: Object.fromEntries(Object.entries(nameTranslations).map(([lang, name]) => [lang, { name }])) } : {}),
  };
}

export const PRODUCTS = [
  // Indoor Plants
  makeProduct({ name: 'Money Plant / Golden Pothos', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 199, originalPrice: 279, image: IMG.indoor[0], location: 'Indoors, tabletop or hanging', maintenance: 'Low Maintenance', water: 'Water when topsoil dries' }),
  makeProduct({ name: 'Chinese Evergreen Aglaonema', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 349, originalPrice: 429, image: IMG.indoor[1], location: 'Indoors, low light corner', maintenance: 'Low Maintenance' }),
  makeProduct({ name: 'Corn Plant Dracaena', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 429, originalPrice: 529, image: IMG.indoor[2], size: 'Large (Above 60cm)' }),
  makeProduct({ name: 'Boston Fern Nephrolepis', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 249, originalPrice: 329, image: IMG.indoor[3], maintenance: 'High Maintenance', water: 'Keep soil consistently moist' }),
  makeProduct({ name: 'Snake Plant Sansevieria', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 299, originalPrice: 379, image: IMG.indoor[4], maintenance: 'Low Maintenance', water: 'Water sparingly' }),
  makeProduct({ name: 'ZZ Plant Zamioculcas', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 379, originalPrice: 459, image: IMG.indoor[5], maintenance: 'Low Maintenance' }),
  makeProduct({ name: 'Peace Lily Spathiphyllum', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 329, originalPrice: 409, image: IMG.indoor[0] }),
  makeProduct({ name: 'Areca Palm', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 549, originalPrice: 699, image: IMG.indoor[2], size: 'Large (Above 60cm)' }),

  // Outdoor Plants
  makeProduct({ name: 'Hibiscus', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 309, originalPrice: 379, image: IMG.outdoor[0], rating: 5, reviews: 120 }),
  makeProduct({ name: 'Ixora / Jungle Flame', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 349, originalPrice: 429, image: IMG.outdoor[1], rating: 4.5, reviews: 127 }),
  makeProduct({ name: 'Oleander', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 389, originalPrice: 469, image: IMG.outdoor[2], rating: 4.9, reviews: 134 }),
  makeProduct({ name: 'Crepe Jasmine Nandiar Vattai', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 419, originalPrice: 509, image: IMG.outdoor[3], rating: 4.4, reviews: 141 }),
  makeProduct({ name: 'Bougainvillea', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 259, originalPrice: 319, image: IMG.outdoor[4], rating: 4.8, reviews: 8 }),
  makeProduct({ name: 'Peregrina Jatropha', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 299, originalPrice: 359, image: IMG.outdoor[0], rating: 4.3, reviews: 15 }),
  makeProduct({ name: 'Lantana', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 329, originalPrice: 399, image: IMG.outdoor[1], rating: 4.7, reviews: 22 }),
  makeProduct({ name: 'Gold Mound Duranta Golden', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 369, originalPrice: 449, image: IMG.outdoor[2], rating: 4.2, reviews: 29 }),
  makeProduct({ name: 'Cardinal Creeper Ipomoea', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 439, originalPrice: 539, image: IMG.outdoor[3], rating: 4.7, reviews: 57 }),
  makeProduct({ name: 'Coral Vine', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 279, originalPrice: 339, image: IMG.outdoor[4], rating: 4.2, reviews: 64 }),
  makeProduct({ name: 'Curtain Creeper', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 319, originalPrice: 389, image: IMG.outdoor[5], rating: 4.6, reviews: 71 }),
  makeProduct({ name: 'Golden Bamboo Mani Moongil', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 919, originalPrice: 1119, image: IMG.outdoor[0], size: 'Large (Above 60cm)', rating: 5, reviews: 78 }),

  // Seeds
  makeProduct({ name: 'Marigold Seeds', category: 'seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 79, image: IMG.seeds[0], size: 'Small (Under 20cm)', location: 'Garden bed or grow bag', maintenance: 'Low Maintenance' }),
  makeProduct({ name: 'California Poppy Seeds', category: 'seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 89, image: IMG.seeds[1], size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Lavender Seeds', category: 'seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 99, image: IMG.seeds[2], size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Loofah Ridge Gourd Seeds', category: 'seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 59, image: IMG.seeds[3], size: 'Small (Under 20cm)' }),

  // Pots & Planters
  makeProduct({ name: 'Plain Round Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 269, originalPrice: 319, image: IMG.pots[0], productType: 'Pots & Planters' }),
  makeProduct({ name: 'Rimmed Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 309, originalPrice: 369, image: IMG.pots[1], productType: 'Pots & Planters' }),
  makeProduct({ name: 'Ridged / Grooved Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 349, originalPrice: 419, image: IMG.pots[2], productType: 'Pots & Planters' }),
  makeProduct({ name: 'Glazed-Rim Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 389, originalPrice: 469, image: IMG.pots[3], productType: 'Pots & Planters' }),
  makeProduct({ name: 'Painted Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 419, originalPrice: 499, image: IMG.pots[4], gift: true, giftType: 'Branded Planter Sets', productType: 'Pots & Planters' }),
  makeProduct({ name: 'Chettinad-Style Terracotta Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 459, originalPrice: 549, image: IMG.pots[0], gift: true, giftType: 'Corporate Desk Plants', productType: 'Pots & Planters' }),
  makeProduct({ name: 'Terracotta Long Tom Pot', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 499, originalPrice: 599, image: IMG.pots[1], productType: 'Pots & Planters' }),
  makeProduct({ name: 'Terracotta Bonsai Pot (Shallow)', category: 'pots-planters', categoryLabel: 'Pots & Planters', price: 239, originalPrice: 289, image: IMG.pots[2], productType: 'Pots & Planters' }),

  // Grow Bags & Nursery Containers
  makeProduct({ name: 'HDPE Grow Bag - White (UV-Coated)', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 45, originalPrice: 65, image: IMG.pots[0], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'UV-Stabilized Grow Bags', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 59, originalPrice: 79, image: IMG.pots[1], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Nursery Polybags', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 35, originalPrice: 49, image: IMG.pots[2], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Root Trainer Tubes', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 89, originalPrice: 119, image: IMG.pots[3], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Plug/Seedling Trays', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 79, originalPrice: 99, image: IMG.pots[4], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Air-Pruning Pots', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 129, originalPrice: 169, image: IMG.pots[0], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Fabric Grow Pots', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 149, originalPrice: 199, image: IMG.pots[1], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Nursery Pro-Trays', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 99, originalPrice: 129, image: IMG.pots[2], productType: 'Grow Bags & Containers' }),
  makeProduct({ name: 'Grow Bag Stands/Holders', category: 'grow-bags-containers', categoryLabel: 'Grow Bags & Nursery Containers', price: 349, originalPrice: 449, image: IMG.pots[3], productType: 'Grow Bags & Containers' }),

  // Gardening Tools
  makeProduct({ name: 'Coconut Husk Coco Peat Brick', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 129, originalPrice: 169, image: IMG.tools[0], productType: 'Tools' }),
  makeProduct({ name: 'Coconut Potting Mix', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 149, originalPrice: 199, image: IMG.tools[1], productType: 'Tools' }),
  makeProduct({ name: 'Vermicompost 5kg', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 179, originalPrice: 229, image: IMG.tools[2], productType: 'Tools' }),
  makeProduct({ name: 'Hand Trowel & Weeder Set', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 249, originalPrice: 319, image: IMG.tools[0], productType: 'Tools' }),

  // Garden Décor
  makeProduct({ name: 'Ceramic Wind Chime', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 349, originalPrice: 449, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Rustic Garden Stake Set', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 299, originalPrice: 379, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Garden Gnome', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 449, originalPrice: 579, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Decorative Urn Planter', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 899, originalPrice: 1149, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Tabletop Garden Fountain', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 1599, originalPrice: 1999, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Garden Statue', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 799, originalPrice: 999, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Solar Garden Light', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 349, originalPrice: 449, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Bird Bath', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 999, originalPrice: 1299, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Bird Feeder', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 449, originalPrice: 599, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Decorative Stepping Stones (Set of 4)', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 599, originalPrice: 799, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Garden Signage Board', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 249, originalPrice: 329, image: IMG.decor[0], productType: 'Décor' }),
  makeProduct({ name: 'Fairy Garden Accessory Set', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 349, originalPrice: 449, image: IMG.decor[1], productType: 'Décor' }),
  makeProduct({ name: 'Metal Wind Spinner', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 499, originalPrice: 649, image: IMG.decor[0], productType: 'Décor' }),

  // Irrigation & Watering Equipment
  makeProduct({ name: 'Garden Hose Pipe', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 499, originalPrice: 649, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Hose Reel', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 899, originalPrice: 1149, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Hose Nozzle/Spray Gun', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 179, originalPrice: 229, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Impact/Rotary Sprinkler', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 349, originalPrice: 449, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Micro Sprinklers', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 89, originalPrice: 119, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Overhead Sprinkler System', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 1299, originalPrice: 1699, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Irrigation Water Timer', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 799, originalPrice: 999, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Submersible Water Pump', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 1499, originalPrice: 1899, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Drip Lateral Pipe (16mm)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 249, originalPrice: 329, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Inline Drippers (Pack)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 149, originalPrice: 199, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Fogger/Misting Nozzles', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 129, originalPrice: 169, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Watering Wand', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 249, originalPrice: 319, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Rain Gun', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 899, originalPrice: 1149, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Hose Connectors & Couplings', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 79, originalPrice: 99, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Drip Lateral Pipe (12mm)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 199, originalPrice: 259, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Online Drip Emitters', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 99, originalPrice: 129, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Drip Tape', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 349, originalPrice: 449, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Grommets/Take-Off Connectors', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 59, originalPrice: 79, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Venturi Fertilizer Injector', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 1199, originalPrice: 1549, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Screen Filter', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 349, originalPrice: 449, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Disc Filter', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 449, originalPrice: 579, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Pressure Gauge', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 249, originalPrice: 319, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Air Release Valve', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 179, originalPrice: 229, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'End Caps (Pack)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 49, originalPrice: 69, image: IMG.tools[2], productType: 'Irrigation' }),
  makeProduct({ name: 'Tee/Elbow/Joiner Fittings (Pack)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 89, originalPrice: 119, image: IMG.tools[0], productType: 'Irrigation' }),
  makeProduct({ name: 'Drip Stakes (Pack)', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 69, originalPrice: 89, image: IMG.tools[1], productType: 'Irrigation' }),
  makeProduct({ name: 'Fertigation Tank', category: 'irrigation-watering', categoryLabel: 'Irrigation & Watering Equipment', price: 2499, originalPrice: 3199, image: IMG.tools[2], productType: 'Irrigation' }),

  // Plant Support Materials
  makeProduct({ name: 'Bamboo Stakes (Pack)', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 99, originalPrice: 139, image: IMG.tools[1], productType: 'Plant Support' }),
  makeProduct({ name: 'Tomato Cages', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 149, originalPrice: 199, image: IMG.tools[2], productType: 'Plant Support' }),
  makeProduct({ name: 'Trellis Netting', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 199, originalPrice: 259, image: IMG.tools[0], productType: 'Plant Support' }),
  makeProduct({ name: 'Plant Support Clips', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 79, originalPrice: 99, image: IMG.tools[1], productType: 'Plant Support' }),
  makeProduct({ name: 'Coir Rope', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 59, originalPrice: 79, image: IMG.tools[2], productType: 'Plant Support' }),
  makeProduct({ name: 'Wire Mesh Support', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 249, originalPrice: 319, image: IMG.tools[0], productType: 'Plant Support' }),
  makeProduct({ name: 'Bonsai Training Wire (Aluminium/Copper)', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 129, originalPrice: 169, image: IMG.tools[1], productType: 'Plant Support' }),
  makeProduct({ name: 'Climbing Plant Support Frame', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 599, originalPrice: 759, image: IMG.tools[2], productType: 'Plant Support' }),
  makeProduct({ name: 'Velcro Plant Ties', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 69, originalPrice: 89, image: IMG.tools[0], productType: 'Plant Support' }),
  makeProduct({ name: 'Jute Twine', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 49, originalPrice: 69, image: IMG.tools[1], productType: 'Plant Support' }),
  makeProduct({ name: 'Plant Support Rings', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 89, originalPrice: 119, image: IMG.tools[2], productType: 'Plant Support' }),
  makeProduct({ name: 'Espalier Wire Kit', category: 'plant-support', categoryLabel: 'Plant Support Materials', price: 349, originalPrice: 449, image: IMG.tools[0], productType: 'Plant Support' }),

  // Propagation Supplies (additions)
  makeProduct({ name: 'Propagation Heat Mat', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 899, originalPrice: 1149, image: IMG.tools[1], productType: 'Propagation' }),
  makeProduct({ name: 'Cutting Propagation Trays', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 129, originalPrice: 169, image: IMG.tools[2], productType: 'Propagation' }),
  makeProduct({ name: 'Budding Tape', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 79, originalPrice: 99, image: IMG.tools[0], productType: 'Propagation' }),

  // Composting Products (additions)
  makeProduct({ name: 'Compost Thermometer', category: 'composting-products', categoryLabel: 'Plant Care', price: 449, originalPrice: 579, image: IMG.tools[1], productType: 'Composting' }),
  makeProduct({ name: 'Compost Turner Tool', category: 'composting-products', categoryLabel: 'Plant Care', price: 349, originalPrice: 449, image: IMG.tools[2], productType: 'Composting' }),
  makeProduct({ name: 'Biodegradable Compost Bags', category: 'composting-products', categoryLabel: 'Plant Care', price: 149, originalPrice: 199, image: IMG.tools[0], productType: 'Composting' }),

  // Gardening Tools (nursery accessories, additions)
  makeProduct({ name: 'Plant Labels/Markers (Pack)', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 59, originalPrice: 79, image: IMG.tools[1], productType: 'Tools' }),
  makeProduct({ name: 'Garden Twine', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 49, originalPrice: 69, image: IMG.tools[2], productType: 'Tools' }),
  makeProduct({ name: 'Nursery Plant Tags (Pack)', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 69, originalPrice: 89, image: IMG.tools[0], productType: 'Tools' }),
  makeProduct({ name: 'Measuring Scoop', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 89, originalPrice: 119, image: IMG.tools[1], productType: 'Tools' }),
  makeProduct({ name: 'Garden Apron', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 349, originalPrice: 449, image: IMG.tools[2], productType: 'Tools' }),
  makeProduct({ name: 'Kneeling Pad', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 199, originalPrice: 259, image: IMG.tools[0], productType: 'Tools' }),
  makeProduct({ name: 'Garden Trolley/Caddy', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 1299, originalPrice: 1649, image: IMG.tools[1], productType: 'Tools' }),
  makeProduct({ name: 'Soil Sieve', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 249, originalPrice: 319, image: IMG.tools[2], productType: 'Tools' }),
  makeProduct({ name: 'Soil Moisture Meter', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 349, originalPrice: 449, image: IMG.tools[0], productType: 'Tools' }),
  makeProduct({ name: 'Soil pH Test Kit', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 299, originalPrice: 389, image: IMG.tools[1], productType: 'Tools' }),
  makeProduct({ name: 'Soil Thermometer', category: 'gardening-tools', categoryLabel: 'Gardening Tools', price: 199, originalPrice: 259, image: IMG.tools[2], productType: 'Tools' }),

  // Hydroponic Supplies
  makeProduct({ name: 'Net Pots', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 89, originalPrice: 119, image: IMG.pots[2], productType: 'Hydroponics' }),
  makeProduct({ name: 'LECA (Clay Pebbles)', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 249, originalPrice: 329, image: IMG.pots[3], productType: 'Hydroponics' }),
  makeProduct({ name: 'Rockwool Cubes', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 149, originalPrice: 199, image: IMG.pots[4], productType: 'Hydroponics' }),
  makeProduct({ name: 'Hydroponic Nutrient Solution (A & B)', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 599, originalPrice: 759, image: IMG.pots[0], productType: 'Hydroponics' }),
  makeProduct({ name: 'pH Up/Down Solution', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 349, originalPrice: 449, image: IMG.pots[1], productType: 'Hydroponics' }),
  makeProduct({ name: 'EC/TDS Meter', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 899, originalPrice: 1149, image: IMG.pots[2], productType: 'Hydroponics' }),
  makeProduct({ name: 'Air Pump & Air Stone', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 449, originalPrice: 579, image: IMG.pots[3], productType: 'Hydroponics' }),
  makeProduct({ name: 'Deep Water Culture (DWC) Bucket Kit', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 1299, originalPrice: 1649, image: IMG.pots[4], productType: 'Hydroponics' }),
  makeProduct({ name: 'NFT Channels', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 799, originalPrice: 999, image: IMG.pots[0], productType: 'Hydroponics' }),
  makeProduct({ name: 'Hydroponic Reservoir Tank', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 1199, originalPrice: 1549, image: IMG.pots[1], productType: 'Hydroponics' }),
  makeProduct({ name: 'Hydroponic Tower Kit', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 3499, originalPrice: 4399, image: IMG.pots[2], productType: 'Hydroponics' }),
  makeProduct({ name: 'Grow Sponges/Oasis Cubes', category: 'hydroponic-supplies', categoryLabel: 'Hydroponic Supplies', price: 129, originalPrice: 169, image: IMG.pots[3], productType: 'Hydroponics' }),

  // Vertical Gardening Accessories
  makeProduct({ name: 'Felt Vertical Garden Pockets', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 349, originalPrice: 449, image: IMG.decor[0], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Modular Green Wall Panel', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 1499, originalPrice: 1899, image: IMG.decor[1], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Vertical Planter Tower', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 1799, originalPrice: 2299, image: IMG.decor[0], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Wall-Mounted Planter Brackets', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 299, originalPrice: 389, image: IMG.decor[1], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Living Wall Irrigation Kit', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 2499, originalPrice: 3199, image: IMG.decor[0], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Vertical Garden Trellis Frame', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 999, originalPrice: 1299, image: IMG.decor[1], productType: 'Vertical Gardening' }),
  makeProduct({ name: 'Stackable Planter System', category: 'vertical-gardening', categoryLabel: 'Vertical Gardening Accessories', price: 1199, originalPrice: 1549, image: IMG.decor[0], productType: 'Vertical Gardening' }),

  // Lawn & Landscaping Materials
  makeProduct({ name: 'Manual Lawn Mower', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 2999, originalPrice: 3799, image: IMG.tools[0], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Grass Trimmer/Brush Cutter', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 3499, originalPrice: 4399, image: IMG.tools[1], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Lawn Top-Dressing Sand', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 249, originalPrice: 329, image: IMG.tools[2], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Turf Fertilizer Spikes', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 199, originalPrice: 259, image: IMG.tools[0], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Garden Border Stones', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 349, originalPrice: 449, image: IMG.tools[1], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Lawn Edging Strips', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 299, originalPrice: 389, image: IMG.tools[2], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Spiked Lawn Aerator', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 899, originalPrice: 1149, image: IMG.tools[0], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Natural Turf Rolls', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 129, originalPrice: 169, image: IMG.tools[1], productType: 'Lawn & Landscaping' }),
  makeProduct({ name: 'Landscape/Weed-Barrier Fabric', category: 'lawn-landscaping', categoryLabel: 'Lawn & Landscaping Materials', price: 249, originalPrice: 319, image: IMG.tools[2], productType: 'Lawn & Landscaping' }),

  // Decorative Stones & Mulch
  makeProduct({ name: 'River Pebbles', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 249, originalPrice: 329, image: IMG.pots[0], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Black Polished Pebbles', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 299, originalPrice: 389, image: IMG.pots[1], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'White Marble Chips', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 349, originalPrice: 449, image: IMG.pots[2], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Coloured Decorative Gravel', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 279, originalPrice: 359, image: IMG.pots[3], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Coco Mulch Chips', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 199, originalPrice: 259, image: IMG.pots[4], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Wood Bark Mulch', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 229, originalPrice: 299, image: IMG.pots[0], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Decorative Lava Rocks', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 319, originalPrice: 409, image: IMG.pots[1], productType: 'Stones & Mulch' }),
  makeProduct({ name: 'Crushed Stone Gravel Mix', category: 'decorative-stones-mulch', categoryLabel: 'Decorative Stones & Mulch', price: 259, originalPrice: 339, image: IMG.pots[2], productType: 'Stones & Mulch' }),

  // Shade Nets & Protective Covers
  makeProduct({ name: 'Green Shade Net (50%)', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 349, originalPrice: 449, image: IMG.tools[2], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Black Shade Net', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 329, originalPrice: 419, image: IMG.tools[0], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Anti-Hail Net', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 449, originalPrice: 579, image: IMG.tools[1], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Bird Protection Net', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 249, originalPrice: 329, image: IMG.tools[2], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Insect-Proof Agro Net', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 299, originalPrice: 389, image: IMG.tools[0], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Frost Protection Fleece Cover', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 279, originalPrice: 359, image: IMG.tools[1], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Plastic Mulching Film', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 199, originalPrice: 259, image: IMG.tools[2], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Green Shade Net (35%)', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 289, originalPrice: 369, image: IMG.tools[0], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Green Shade Net (75%)', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 399, originalPrice: 509, image: IMG.tools[1], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Pest-Exclusion Netting', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 269, originalPrice: 349, image: IMG.tools[2], productType: 'Shade & Protection' }),
  makeProduct({ name: 'Crop Row Cover Fabric', category: 'shade-nets-covers', categoryLabel: 'Shade Nets & Protective Covers', price: 229, originalPrice: 299, image: IMG.tools[0], productType: 'Shade & Protection' }),

  // Greenhouse Supplies
  makeProduct({ name: 'Greenhouse UV Poly Film', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 899, originalPrice: 1149, image: IMG.tools[1], productType: 'Greenhouse' }),
  makeProduct({ name: 'Greenhouse Frame Clips (Pack)', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 99, originalPrice: 129, image: IMG.tools[2], productType: 'Greenhouse' }),
  makeProduct({ name: 'Exhaust Fan', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 2499, originalPrice: 3199, image: IMG.tools[0], productType: 'Greenhouse' }),
  makeProduct({ name: 'Evaporative Cooling Pad', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 1799, originalPrice: 2299, image: IMG.tools[1], productType: 'Greenhouse' }),
  makeProduct({ name: 'Greenhouse Thermometer/Hygrometer', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 349, originalPrice: 449, image: IMG.tools[2], productType: 'Greenhouse' }),
  makeProduct({ name: 'Ventilation Netting', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 249, originalPrice: 319, image: IMG.tools[0], productType: 'Greenhouse' }),
  makeProduct({ name: 'Shade Cloth Clips (Pack)', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 79, originalPrice: 99, image: IMG.tools[1], productType: 'Greenhouse' }),
  makeProduct({ name: 'Poly Film Repair Tape', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 129, originalPrice: 169, image: IMG.tools[2], productType: 'Greenhouse' }),
  makeProduct({ name: 'Greenhouse Structural Fittings (Pack)', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 599, originalPrice: 769, image: IMG.tools[0], productType: 'Greenhouse' }),
  makeProduct({ name: 'Smart Greenhouse Climate Controller', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 4999, originalPrice: 6299, image: IMG.tools[1], productType: 'Greenhouse' }),
  makeProduct({ name: 'Shade House Netting Roll', category: 'greenhouse-supplies', categoryLabel: 'Greenhouse Supplies', price: 1299, originalPrice: 1649, image: IMG.tools[2], productType: 'Greenhouse' }),

  // Pest-Control Devices
  makeProduct({ name: 'Sticky Insect Traps (Pack)', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 99, originalPrice: 129, image: IMG.tools[0], productType: 'Pest Control' }),
  makeProduct({ name: 'Pheromone Lures (Pack)', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 149, originalPrice: 199, image: IMG.tools[1], productType: 'Pest Control' }),
  makeProduct({ name: 'Bird Spikes', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 299, originalPrice: 389, image: IMG.tools[2], productType: 'Pest Control' }),
  makeProduct({ name: 'Ultrasonic Pest Repellent', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 899, originalPrice: 1149, image: IMG.tools[0], productType: 'Pest Control' }),
  makeProduct({ name: 'Rat Traps', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 149, originalPrice: 199, image: IMG.tools[1], productType: 'Pest Control' }),
  makeProduct({ name: 'Mosquito Larvicide Dunks', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 199, originalPrice: 259, image: IMG.tools[2], productType: 'Pest Control' }),
  makeProduct({ name: 'Fruit Fly Traps', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 129, originalPrice: 169, image: IMG.tools[0], productType: 'Pest Control' }),
  makeProduct({ name: 'Ant Bait Stations (Pack)', category: 'pest-control-devices', categoryLabel: 'Pest-Control Devices', price: 99, originalPrice: 129, image: IMG.tools[1], productType: 'Pest Control' }),

  // Nursery Packaging & Operations Supplies
  makeProduct({ name: 'Plant Packaging Boxes (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 349, originalPrice: 449, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Nursery Poly Sleeves (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 149, originalPrice: 199, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Bubble Wrap (Plant Shipping)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 249, originalPrice: 319, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Corrugated Plant Transport Boxes (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 399, originalPrice: 509, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Jute Packaging Bags (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 199, originalPrice: 259, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Paper Seed Packets (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 99, originalPrice: 129, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Gift-Wrap Sleeves For Plants (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 179, originalPrice: 229, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Branded Nursery Carry Bags (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 299, originalPrice: 389, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Bundling Twine', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 59, originalPrice: 79, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Blank Plant Labels (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 79, originalPrice: 99, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Waterproof Marker Pens (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 99, originalPrice: 129, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Grafting Rubber Bands (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 69, originalPrice: 89, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Nursery Record Tags (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 89, originalPrice: 119, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Zip Ties (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 49, originalPrice: 69, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Cable Ties For Staking (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 59, originalPrice: 79, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Nursery Tray Cleaning Brush', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 99, originalPrice: 129, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Disposable Nitrile Gloves (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 149, originalPrice: 199, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Masking/Labeling Tape', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 69, originalPrice: 89, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Nursery Transport Crates', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 599, originalPrice: 769, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Plant-Carrying Trolley', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 2499, originalPrice: 3199, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Nursery Staging Bench/Table', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 3499, originalPrice: 4399, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Price Tag Holders/Signage (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 199, originalPrice: 259, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Insect Magnifying Glass', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 149, originalPrice: 199, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Garden Diary/Planner', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 249, originalPrice: 319, image: IMG.tools[1], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Multi-Purpose Plant Ties (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 79, originalPrice: 99, image: IMG.tools[2], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Grafting Clips (Pack)', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 99, originalPrice: 129, image: IMG.tools[0], productType: 'Packaging & Operations' }),
  makeProduct({ name: 'Budding Knife', category: 'nursery-packaging-supplies', categoryLabel: 'Nursery Packaging & Operations Supplies', price: 249, originalPrice: 319, image: IMG.tools[1], productType: 'Packaging & Operations' }),

  // Indoor Plant Accessories
  makeProduct({ name: 'LED Grow Light', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 899, originalPrice: 1149, image: IMG.decor[0], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Self-Watering Indoor Pot', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 449, originalPrice: 579, image: IMG.decor[1], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Indoor Plant Moisture Tray', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 149, originalPrice: 199, image: IMG.decor[0], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Terrarium Container', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 599, originalPrice: 769, image: IMG.decor[1], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Air-Purifying Plant Stand', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 799, originalPrice: 999, image: IMG.decor[0], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Humidity Pebble Tray', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 199, originalPrice: 259, image: IMG.decor[1], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Indoor Plant Misting Spray Bottle', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 129, originalPrice: 169, image: IMG.decor[0], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Decorative Indoor Plant Stand', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 999, originalPrice: 1299, image: IMG.decor[1], productType: 'Indoor Accessories' }),
  makeProduct({ name: 'Slow-Release Plant Food Spikes', category: 'indoor-plant-accessories', categoryLabel: 'Indoor Plant Accessories', price: 149, originalPrice: 199, image: IMG.decor[0], productType: 'Indoor Accessories' }),

  // Garden Décor (addition)
  makeProduct({ name: 'Insect/Butterfly Hotel', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 799, originalPrice: 999, image: IMG.decor[1], productType: 'Décor' }),

  // Smart Garden Tech
  makeProduct({ name: 'Smart Soil Moisture Sensor', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 999, originalPrice: 1299, image: IMG.decor[1], productType: 'Smart Tech' }),
  makeProduct({ name: 'Wi-Fi Irrigation Controller', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 2499, originalPrice: 3199, image: IMG.decor[0], productType: 'Smart Tech' }),
  makeProduct({ name: 'App-Based Plant Health Sensor', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 1799, originalPrice: 2299, image: IMG.decor[1], productType: 'Smart Tech' }),
  makeProduct({ name: 'Automatic Drip Irrigation Timer', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 1299, originalPrice: 1649, image: IMG.decor[0], productType: 'Smart Tech' }),
  makeProduct({ name: 'Solar Garden Light With Motion Sensor', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 799, originalPrice: 999, image: IMG.decor[1], productType: 'Smart Tech' }),
  makeProduct({ name: 'Bluetooth Soil Test Device', category: 'smart-garden-tech', categoryLabel: 'Smart Garden Tech', price: 1499, originalPrice: 1899, image: IMG.decor[0], productType: 'Smart Tech' }),

  // Bonsai
  makeProduct({ name: 'Chinese Banyan Ficus Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 1299, originalPrice: 1579, image: IMG.bonsai[0], gift: true, giftType: 'Corporate Bulk Gifting', productType: 'Bonsai', size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Banyan Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 1329, originalPrice: 1619, image: IMG.bonsai[1], gift: true, giftType: 'Corporate Bulk Gifting', productType: 'Bonsai', size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Bougainvillea Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 1369, originalPrice: 1669, image: IMG.bonsai[2], gift: true, giftType: 'Corporate Desk Plants', productType: 'Bonsai', size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Desert Rose Bonsai Adenium', category: 'bonsai', categoryLabel: 'Bonsai', price: 1409, originalPrice: 1719, image: IMG.bonsai[3], gift: true, giftType: 'Corporate Desk Plants', productType: 'Bonsai', size: 'Small (Under 20cm)' }),

  // Gift-tagged mini plants / orchids for gifting & corporate pages
  makeProduct({ name: 'Mini Succulent Trio', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 349, originalPrice: 429, image: IMG.indoor[4], gift: true, giftType: 'Corporate Desk Plants', productType: 'Mini Plants', size: 'Small (Under 20cm)' }),
  makeProduct({ name: 'Cocooil Plant Care Gift Set', category: 'garden-decor', categoryLabel: 'Garden Décor', price: 499, originalPrice: 599, image: IMG.tools[1], gift: true, giftType: 'Branded Planter Sets', productType: 'Pots & Planters' }),
  makeProduct({ name: 'Phalaenopsis Orchid', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 799, originalPrice: 949, image: IMG.bonsai[2], gift: true, giftType: 'Corporate Desk Plants', productType: 'Orchids', size: 'Small (Under 20cm)' }),

  // --- Bulk-imported from Nursery plants.pdf (full catalogue) ---
  makeProduct({ name: 'Chinese Evergreen (Aglaonema)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 409, originalPrice: 489, image: IMG.indoor[0] }),
  makeProduct({ name: 'Dumb Cane (Dieffenbachia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 439, originalPrice: 539, image: IMG.indoor[1] }),
  makeProduct({ name: 'Heartleaf Philodendron', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 309, originalPrice: 369, image: IMG.indoor[2] }),
  makeProduct({ name: 'Calathea', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 279, originalPrice: 359, image: IMG.indoor[3] }),
  makeProduct({ name: 'Baby Rubber Plant (Peperomia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 389, originalPrice: 459, image: IMG.indoor[4] }),
  makeProduct({ name: 'Fiddle Leaf Fig', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 359, originalPrice: 429, image: IMG.indoor[5] }),
  makeProduct({ name: 'Rubber Plant', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 269, originalPrice: 329, image: IMG.indoor[0] }),
  makeProduct({ name: 'Jade Plant', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 139, originalPrice: 179, image: IMG.indoor[1] }),
  makeProduct({ name: 'Croton', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 389, originalPrice: 469, image: IMG.indoor[2] }),
  makeProduct({ name: 'Aloe Vera', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 149, originalPrice: 189, image: IMG.indoor[3] }),
  makeProduct({ name: 'Cylindrical Snake Plant', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 359, originalPrice: 459, image: IMG.indoor[4] }),
  makeProduct({ name: 'Money Tree', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 249, originalPrice: 329, image: IMG.indoor[5] }),
  makeProduct({ name: 'Dwarf Umbrella Tree (Schefflera)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 289, originalPrice: 379, image: IMG.indoor[0] }),
  makeProduct({ name: 'African Mask Plant (Alocasia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 419, image: IMG.indoor[1] }),
  makeProduct({ name: 'Elephant Ear (Colocasia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 299, originalPrice: 399, image: IMG.indoor[2] }),
  makeProduct({ name: 'White Bird of Paradise (Strelitzia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 409, image: IMG.indoor[3] }),
  makeProduct({ name: 'Prayer Plant (Maranta)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 349, originalPrice: 419, image: IMG.indoor[4] }),
  makeProduct({ name: 'Marble Queen Pothos', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 429, image: IMG.indoor[5] }),
  makeProduct({ name: 'Variegated Monstera', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 259, originalPrice: 339, image: IMG.indoor[0] }),
  makeProduct({ name: 'Golden Hahnii Snake Plant', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 389, originalPrice: 469, image: IMG.indoor[1] }),
  makeProduct({ name: 'Variegated Spider Plant', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 399, image: IMG.indoor[2] }),
  makeProduct({ name: 'English Ivy', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 319, originalPrice: 419, image: IMG.indoor[3] }),
  makeProduct({ name: 'String of Hearts', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 119, originalPrice: 149, image: IMG.indoor[4] }),
  makeProduct({ name: 'String of Pearls', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 89, originalPrice: 109, image: IMG.indoor[5] }),
  makeProduct({ name: 'Blushing Philodendron (Red)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 309, originalPrice: 409, image: IMG.indoor[0] }),
  makeProduct({ name: 'Swiss Cheese Plant (Monstera)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 269, originalPrice: 359, image: IMG.indoor[1] }),
  makeProduct({ name: 'Pink Princess Philodendron', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 269, originalPrice: 329, image: IMG.indoor[2] }),
  makeProduct({ name: 'Arrowhead Plant (Syngonium)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 359, originalPrice: 459, image: IMG.indoor[3] }),
  makeProduct({ name: 'Cebu Blue Pothos', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 409, image: IMG.indoor[4] }),
  makeProduct({ name: 'Anthurium', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 339, originalPrice: 409, image: IMG.indoor[5] }),
  makeProduct({ name: 'African Violet', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 219, originalPrice: 279, image: IMG.indoor[0] }),
  makeProduct({ name: 'Flaming Katy (Kalanchoe)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 89, originalPrice: 109, image: IMG.indoor[1] }),
  makeProduct({ name: 'Money Plant (Water Culture)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 289, originalPrice: 369, image: IMG.indoor[2] }),
  makeProduct({ name: 'Arrowhead (Water Culture)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 309, originalPrice: 369, image: IMG.indoor[3] }),
  makeProduct({ name: 'Philodendron (Water Culture)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 349, originalPrice: 429, image: IMG.indoor[4] }),
  makeProduct({ name: 'Lucky Bamboo', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 409, originalPrice: 529, image: IMG.indoor[5] }),
  makeProduct({ name: 'Nerve Plant (Fittonia)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 109, originalPrice: 139, image: IMG.indoor[0] }),
  makeProduct({ name: 'Baby Tears (Pilea)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 89, originalPrice: 109, image: IMG.indoor[1] }),
  makeProduct({ name: 'Spikemoss (Club Moss)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 79, originalPrice: 99, image: IMG.indoor[2] }),
  makeProduct({ name: 'Peacock Plant (Calathea Makoyana)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 349, originalPrice: 429, image: IMG.indoor[3] }),
  makeProduct({ name: 'Parlor Palm', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 709, originalPrice: 949, image: IMG.indoor[4] }),
  makeProduct({ name: 'Chinese Money Plant (Pilea Peperomioides)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 389, originalPrice: 519, image: IMG.indoor[5] }),
  makeProduct({ name: 'Philodendron Gloriosum', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 329, originalPrice: 399, image: IMG.indoor[0] }),
  makeProduct({ name: 'Queen Anthurium', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 379, originalPrice: 469, image: IMG.indoor[1] }),
  makeProduct({ name: 'Variegated Monstera Adansonii', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 409, originalPrice: 509, image: IMG.indoor[2] }),
  makeProduct({ name: 'Black Gold Philodendron (Melanochrysum)', category: 'indoor-plants', categoryLabel: 'Indoor Plants', price: 319, originalPrice: 379, image: IMG.indoor[3] }),
  makeProduct({ name: 'Ixora / Jungle Flame', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 439, originalPrice: 559, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Oleander', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 319, originalPrice: 419, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Crepe Jasmine (Nandiar Vattai)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 359, originalPrice: 479, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Peregrina (Jatropha)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 349, originalPrice: 429, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Lantana', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 279, originalPrice: 349, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Gold Mound Duranta', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 269, originalPrice: 349, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Copperleaf (Acalypha)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 279, originalPrice: 339, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Purple False Eranthemum', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 289, originalPrice: 379, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Caricature Plant (Graptophyllum)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 359, originalPrice: 459, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Marigold', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 249, originalPrice: 309, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Cockscomb (Celosia)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 269, originalPrice: 339, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Petunia', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 289, originalPrice: 379, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Zinnia', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 149, originalPrice: 189, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Sun Rose / Moss Rose (Portulaca)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 179, originalPrice: 229, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Vinca / Sadabahar', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 289, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Egyptian Star Cluster (Pentas)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 239, originalPrice: 289, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Mexican Petunia (Ruellia)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 259, originalPrice: 309, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Blanket Flower (Gaillardia)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 149, originalPrice: 199, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Duranta Hedge', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 429, originalPrice: 529, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Copperleaf Hedge', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 379, originalPrice: 499, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Wild Jasmine Hedge', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 379, originalPrice: 509, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Weeping Fig Hedge', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 409, originalPrice: 499, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Wedelia', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 139, originalPrice: 179, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Perennial Peanut', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 99, originalPrice: 119, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Zoysia Grass', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 99, originalPrice: 129, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Joseph\'s Coat (Alternanthera)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 149, originalPrice: 199, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Mondo Grass', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 119, originalPrice: 149, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Spider Plant (Border Use)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 89, originalPrice: 119, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Mexican Heather (Cuphea)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 229, originalPrice: 279, image: IMG.outdoor[4] }),
  makeProduct({ name: 'White Frangipani', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 719, originalPrice: 959, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Gulmohar / Flame Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 639, originalPrice: 759, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Golden Shower Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 849, originalPrice: 1119, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Indian Cork Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 989, originalPrice: 1259, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Queen\'s Crepe Myrtle', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 659, originalPrice: 789, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Pink Trumpet Tree (Tabebuia)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 839, originalPrice: 1129, image: IMG.outdoor[4] }),
  makeProduct({ name: 'African Tulip Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 679, originalPrice: 829, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Ashoka Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 909, originalPrice: 1139, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Copperpod / Yellow Poinciana', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 709, originalPrice: 949, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Indian Almond', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 979, originalPrice: 1279, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Banyan Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 699, originalPrice: 909, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Peepal Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 799, originalPrice: 1079, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Rain Tree', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 929, originalPrice: 1159, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Queen\'s Wreath / Sandpaper Vine', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 379, originalPrice: 479, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Bengal Clock Vine (Thunbergia)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 309, originalPrice: 379, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Orange Trumpet Vine', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 339, originalPrice: 399, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Cardinal Creeper (Ipomoea)', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 389, originalPrice: 469, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Curtain Creeper', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 299, originalPrice: 349, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Golden Bamboo', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 959, originalPrice: 1229, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Hedge Bamboo', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 719, originalPrice: 859, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Male Bamboo / Calcutta Bamboo', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 619, originalPrice: 819, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Duranta Topiary', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 269, originalPrice: 339, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Ficus Topiary', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 319, originalPrice: 409, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Kamini Topiary', category: 'outdoor-plants', categoryLabel: 'Outdoor Plants', price: 299, originalPrice: 379, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Golden Cane Palm', category: 'palms', categoryLabel: 'Palms', price: 969, originalPrice: 1299, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Coconut Palm', category: 'palms', categoryLabel: 'Palms', price: 889, originalPrice: 1139, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Royal Palm', category: 'palms', categoryLabel: 'Palms', price: 719, originalPrice: 939, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Pygmy Date Palm', category: 'palms', categoryLabel: 'Palms', price: 809, originalPrice: 979, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Fishtail Palm', category: 'palms', categoryLabel: 'Palms', price: 649, originalPrice: 839, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Chinese Fan Palm', category: 'palms', categoryLabel: 'Palms', price: 779, originalPrice: 979, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Mexican Fan Palm (Washingtonia)', category: 'palms', categoryLabel: 'Palms', price: 839, originalPrice: 1109, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Chinese Windmill Palm', category: 'palms', categoryLabel: 'Palms', price: 629, originalPrice: 809, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Bottle Palm', category: 'palms', categoryLabel: 'Palms', price: 929, originalPrice: 1109, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Triangle Palm', category: 'palms', categoryLabel: 'Palms', price: 799, originalPrice: 1039, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Bismarck Palm', category: 'palms', categoryLabel: 'Palms', price: 649, originalPrice: 789, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Sago Palm (Trade)', category: 'palms', categoryLabel: 'Palms', price: 299, originalPrice: 379, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Macarthur Palm', category: 'palms', categoryLabel: 'Palms', price: 669, originalPrice: 839, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Lady Palm', category: 'palms', categoryLabel: 'Palms', price: 739, originalPrice: 929, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Palmyra Palm', category: 'palms', categoryLabel: 'Palms', price: 639, originalPrice: 799, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Sago Palm (Cycad)', category: 'cycads', categoryLabel: 'Cycads', price: 389, originalPrice: 469, image: '/images/plants/sago_palm.png' }),
  makeProduct({ name: 'Queen Sago', category: 'cycads', categoryLabel: 'Cycads', price: 419, originalPrice: 569, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Rumph\'s Cycad', category: 'cycads', categoryLabel: 'Cycads', price: 249, originalPrice: 329, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Cardboard Palm', category: 'cycads', categoryLabel: 'Cycads', price: 439, originalPrice: 579, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Chestnut Dioon', category: 'cycads', categoryLabel: 'Cycads', price: 289, originalPrice: 359, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Zululand Cycad (Encephalartos)', category: 'cycads', categoryLabel: 'Cycads', price: 369, originalPrice: 449, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Zamia Palm (Macrozamia)', category: 'cycads', categoryLabel: 'Cycads', price: 349, originalPrice: 469, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Mexican Snowball (Echeveria)', category: 'succulents', categoryLabel: 'Succulents', price: 99, originalPrice: 119, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Zebra Plant (Haworthia)', category: 'succulents', categoryLabel: 'Succulents', price: 129, originalPrice: 159, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Burro\'s Tail (Sedum)', category: 'succulents', categoryLabel: 'Succulents', price: 139, originalPrice: 169, image: IMG.outdoor[5] }),
  makeProduct({ name: 'String of Buttons', category: 'succulents', categoryLabel: 'Succulents', price: 139, originalPrice: 169, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Lace Aloe', category: 'succulents', categoryLabel: 'Succulents', price: 119, originalPrice: 139, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Torch Aloe', category: 'succulents', categoryLabel: 'Succulents', price: 89, originalPrice: 109, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Panda Plant', category: 'succulents', categoryLabel: 'Succulents', price: 149, originalPrice: 179, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Mother of Thousands', category: 'succulents', categoryLabel: 'Succulents', price: 119, originalPrice: 139, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Whale Fin Snake Plant', category: 'succulents', categoryLabel: 'Succulents', price: 139, originalPrice: 179, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Elephant Bush', category: 'succulents', categoryLabel: 'Succulents', price: 149, originalPrice: 179, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Ghost Plant', category: 'succulents', categoryLabel: 'Succulents', price: 139, originalPrice: 169, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Century Plant (Agave)', category: 'succulents', categoryLabel: 'Succulents', price: 99, originalPrice: 119, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Foxtail Agave', category: 'succulents', categoryLabel: 'Succulents', price: 89, originalPrice: 119, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Pencil Cactus', category: 'succulents', categoryLabel: 'Succulents', price: 109, originalPrice: 139, image: IMG.outdoor[4] }),
  makeProduct({ name: 'African Milk Tree', category: 'succulents', categoryLabel: 'Succulents', price: 109, originalPrice: 139, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Living Stones (Lithops)', category: 'succulents', categoryLabel: 'Succulents', price: 79, originalPrice: 99, image: IMG.outdoor[0] }),
  makeProduct({ name: 'String of Bananas', category: 'succulents', categoryLabel: 'Succulents', price: 129, originalPrice: 169, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Ox Tongue Plant (Gasteria)', category: 'succulents', categoryLabel: 'Succulents', price: 139, originalPrice: 169, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Desert Rose', category: 'succulents', categoryLabel: 'Succulents', price: 109, originalPrice: 129, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Moonstones (Pachyphytum)', category: 'succulents', categoryLabel: 'Succulents', price: 119, originalPrice: 149, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Peruvian Apple Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 249, originalPrice: 299, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Golden Barrel Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 219, originalPrice: 279, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Bunny Ear Cactus (Opuntia)', category: 'cactus', categoryLabel: 'Cactus', price: 169, originalPrice: 199, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Moon Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 289, originalPrice: 389, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Bishop\'s Cap Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 169, originalPrice: 209, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Old Man Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 279, originalPrice: 339, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Christmas Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 239, originalPrice: 319, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Rat Tail Cactus', category: 'cactus', categoryLabel: 'Cactus', price: 209, originalPrice: 259, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Lady Finger Cactus (Mammillaria)', category: 'cactus', categoryLabel: 'Cactus', price: 189, originalPrice: 239, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Prickly Pear', category: 'cactus', categoryLabel: 'Cactus', price: 289, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Echeveria Table Top', category: 'table-top-plants', categoryLabel: 'Table Top Plants', price: 279, originalPrice: 329, image: IMG.indoor[4] }),
  makeProduct({ name: 'Baby Rubber Plant (Table Top)', category: 'table-top-plants', categoryLabel: 'Table Top Plants', price: 289, originalPrice: 359, image: IMG.indoor[5] }),
  makeProduct({ name: 'Nerve Plant (Table Top)', category: 'table-top-plants', categoryLabel: 'Table Top Plants', price: 179, originalPrice: 239, image: IMG.indoor[0] }),
  makeProduct({ name: 'Gloxinia', category: 'table-top-plants', categoryLabel: 'Table Top Plants', price: 179, originalPrice: 219, image: IMG.indoor[1] }),
  makeProduct({ name: 'Chinese Money Plant (Table Top)', category: 'table-top-plants', categoryLabel: 'Table Top Plants', price: 179, originalPrice: 229, image: IMG.indoor[2] }),
  makeProduct({ name: 'Mini Echeveria', category: 'mini-plants', categoryLabel: 'Mini Plants', price: 99, originalPrice: 119, image: IMG.indoor[3] }),
  makeProduct({ name: 'Thimble Cactus', category: 'mini-plants', categoryLabel: 'Mini Plants', price: 99, originalPrice: 129, image: IMG.indoor[4] }),
  makeProduct({ name: 'Baby\'s Tears', category: 'mini-plants', categoryLabel: 'Mini Plants', price: 99, originalPrice: 129, image: IMG.indoor[5] }),
  makeProduct({ name: 'Table Fern (Mini)', category: 'mini-plants', categoryLabel: 'Mini Plants', price: 109, originalPrice: 139, image: IMG.indoor[0] }),
  makeProduct({ name: 'Chinese Banyan Bonsai (Ficus)', category: 'bonsai', categoryLabel: 'Bonsai', price: 309, originalPrice: 409, image: IMG.bonsai[0] }),
  makeProduct({ name: 'Jade Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 259, originalPrice: 309, image: IMG.bonsai[1] }),
  makeProduct({ name: 'Premna Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 359, originalPrice: 469, image: IMG.bonsai[2] }),
  makeProduct({ name: 'Chinese Juniper Bonsai', category: 'bonsai', categoryLabel: 'Bonsai', price: 259, originalPrice: 309, image: IMG.bonsai[3] }),
  makeProduct({ name: 'Dendrobium Orchid', category: 'orchids', categoryLabel: 'Orchids', price: 689, originalPrice: 829, image: IMG.indoor[1] }),
  makeProduct({ name: 'Blue Vanda', category: 'orchids', categoryLabel: 'Orchids', price: 429, originalPrice: 519, image: IMG.indoor[2] }),
  makeProduct({ name: 'Moth Orchid (Phalaenopsis)', category: 'orchids', categoryLabel: 'Orchids', price: 519, originalPrice: 659, image: IMG.indoor[3] }),
  makeProduct({ name: 'Corsage Orchid (Cattleya)', category: 'orchids', categoryLabel: 'Orchids', price: 519, originalPrice: 659, image: IMG.indoor[4] }),
  makeProduct({ name: 'Dancing Lady Orchid (Oncidium)', category: 'orchids', categoryLabel: 'Orchids', price: 359, originalPrice: 429, image: IMG.indoor[5] }),
  makeProduct({ name: 'Cymbidium Orchid', category: 'orchids', categoryLabel: 'Orchids', price: 649, originalPrice: 869, image: IMG.indoor[0] }),
  makeProduct({ name: 'Philippine Ground Orchid', category: 'orchids', categoryLabel: 'Orchids', price: 579, originalPrice: 689, image: IMG.indoor[1] }),
  makeProduct({ name: 'Mokara Orchid', category: 'orchids', categoryLabel: 'Orchids', price: 489, originalPrice: 629, image: IMG.indoor[2] }),
  makeProduct({ name: 'Scarlet Star (Guzmania)', category: 'bromeliads', categoryLabel: 'Bromeliads', price: 369, originalPrice: 459, image: IMG.indoor[3] }),
  makeProduct({ name: 'Flaming Sword (Vriesea)', category: 'bromeliads', categoryLabel: 'Bromeliads', price: 319, originalPrice: 389, image: IMG.indoor[4] }),
  makeProduct({ name: 'Silver Vase Plant (Aechmea)', category: 'bromeliads', categoryLabel: 'Bromeliads', price: 319, originalPrice: 429, image: IMG.indoor[5] }),
  makeProduct({ name: 'Blushing Bromeliad (Neoregelia)', category: 'bromeliads', categoryLabel: 'Bromeliads', price: 409, originalPrice: 529, image: IMG.indoor[0] }),
  makeProduct({ name: 'Spanish Moss (Air Plant)', category: 'bromeliads', categoryLabel: 'Bromeliads', price: 639, originalPrice: 769, image: IMG.indoor[1] }),
  makeProduct({ name: 'Boston Fern', category: 'ferns', categoryLabel: 'Ferns', price: 289, originalPrice: 379, image: IMG.indoor[2] }),
  makeProduct({ name: 'Bird\'s Nest Fern', category: 'ferns', categoryLabel: 'Ferns', price: 249, originalPrice: 339, image: IMG.indoor[3] }),
  makeProduct({ name: 'Maidenhair Fern', category: 'ferns', categoryLabel: 'Ferns', price: 189, originalPrice: 249, image: IMG.indoor[4] }),
  makeProduct({ name: 'Staghorn Fern', category: 'ferns', categoryLabel: 'Ferns', price: 209, originalPrice: 279, image: IMG.indoor[5] }),
  makeProduct({ name: 'Rabbit\'s Foot Fern', category: 'ferns', categoryLabel: 'Ferns', price: 189, originalPrice: 249, image: IMG.indoor[0] }),
  makeProduct({ name: 'Silver Lace Fern (Table Fern)', category: 'ferns', categoryLabel: 'Ferns', price: 159, originalPrice: 189, image: IMG.indoor[1] }),
  makeProduct({ name: 'Tropical Pitcher Plant (Nepenthes)', category: 'carnivorous-plants', categoryLabel: 'Carnivorous Plants', price: 469, originalPrice: 619, image: IMG.indoor[2] }),
  makeProduct({ name: 'Venus Flytrap', category: 'carnivorous-plants', categoryLabel: 'Carnivorous Plants', price: 509, originalPrice: 669, image: IMG.indoor[3] }),
  makeProduct({ name: 'Cape Sundew', category: 'carnivorous-plants', categoryLabel: 'Carnivorous Plants', price: 679, originalPrice: 889, image: IMG.indoor[4] }),
  makeProduct({ name: 'Purple Pitcher Plant (Sarracenia)', category: 'carnivorous-plants', categoryLabel: 'Carnivorous Plants', price: 439, originalPrice: 529, image: IMG.indoor[5] }),
  makeProduct({ name: 'Water Hyacinth', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 659, originalPrice: 789, image: IMG.indoor[0] }),
  makeProduct({ name: 'Water Lettuce', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 319, originalPrice: 419, image: IMG.indoor[1] }),
  makeProduct({ name: 'Cattail (Bulrush)', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 409, originalPrice: 499, image: IMG.indoor[2] }),
  makeProduct({ name: 'Papyrus', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 529, originalPrice: 659, image: IMG.indoor[3] }),
  makeProduct({ name: 'Water Lily', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 419, originalPrice: 509, image: IMG.indoor[4] }),
  makeProduct({ name: 'Lotus', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 639, originalPrice: 769, image: IMG.indoor[5] }),
  makeProduct({ name: 'Eel Grass (Vallisneria)', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 469, originalPrice: 579, image: IMG.indoor[0] }),
  makeProduct({ name: 'Elephant Ear (Pond)', category: 'aquatic-pond-plants', categoryLabel: 'Aquatic & Pond Plants', price: 329, originalPrice: 439, image: IMG.indoor[1] }),
  makeProduct({ name: 'Heartleaf Philodendron (Vertical)', category: 'vertical-garden-plants', categoryLabel: 'Vertical Garden Plants', price: 319, originalPrice: 399, image: IMG.indoor[2] }),
  makeProduct({ name: 'Arrowhead (Vertical)', category: 'vertical-garden-plants', categoryLabel: 'Vertical Garden Plants', price: 379, originalPrice: 469, image: IMG.indoor[3] }),
  makeProduct({ name: 'Boston Fern (Vertical)', category: 'vertical-garden-plants', categoryLabel: 'Vertical Garden Plants', price: 289, originalPrice: 359, image: IMG.indoor[4] }),
  makeProduct({ name: 'Moss Rose (Vertical)', category: 'vertical-garden-plants', categoryLabel: 'Vertical Garden Plants', price: 159, originalPrice: 189, image: IMG.indoor[5] }),
  makeProduct({ name: 'Spider Plant (Green Wall)', category: 'green-wall-plants', categoryLabel: 'Green Wall Plants', price: 109, originalPrice: 129, image: IMG.indoor[0] }),
  makeProduct({ name: 'Wandering Jew (Tradescantia)', category: 'green-wall-plants', categoryLabel: 'Green Wall Plants', price: 109, originalPrice: 129, image: IMG.indoor[1] }),
  makeProduct({ name: 'Baby Rubber Plant (Green Wall)', category: 'green-wall-plants', categoryLabel: 'Green Wall Plants', price: 259, originalPrice: 319, image: IMG.indoor[2] }),
  makeProduct({ name: 'Ixora (Terrace)', category: 'terrace-garden-plants', categoryLabel: 'Terrace Garden Plants', price: 329, originalPrice: 409, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Dwarf Guava', category: 'terrace-garden-plants', categoryLabel: 'Terrace Garden Plants', price: 859, originalPrice: 1029, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Madagascar Dragon Tree (Dracaena Marginata)', category: 'terrace-garden-plants', categoryLabel: 'Terrace Garden Plants', price: 399, originalPrice: 479, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Miniature Rose', category: 'balcony-plants', categoryLabel: 'Balcony Plants', price: 159, originalPrice: 209, image: IMG.indoor[3] }),
  makeProduct({ name: 'Emerald Ripple Peperomia', category: 'balcony-plants', categoryLabel: 'Balcony Plants', price: 149, originalPrice: 189, image: IMG.indoor[4] }),
  makeProduct({ name: 'Echeveria (Balcony)', category: 'balcony-plants', categoryLabel: 'Balcony Plants', price: 149, originalPrice: 189, image: IMG.indoor[5] }),
  makeProduct({ name: 'Trailing Verbena', category: 'hanging-basket-plants', categoryLabel: 'Hanging Basket Plants', price: 199, originalPrice: 249, image: IMG.indoor[0] }),
  makeProduct({ name: 'Swedish Ivy (Plectranthus)', category: 'hanging-basket-plants', categoryLabel: 'Hanging Basket Plants', price: 269, originalPrice: 359, image: IMG.indoor[1] }),
  makeProduct({ name: 'Mistletoe Cactus (Rhipsalis)', category: 'hanging-basket-plants', categoryLabel: 'Hanging Basket Plants', price: 119, originalPrice: 149, image: IMG.indoor[2] }),
  makeProduct({ name: 'Lemon', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 939, originalPrice: 1239, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Lime', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 969, originalPrice: 1289, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Mango', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 859, originalPrice: 1059, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Guava', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 809, originalPrice: 999, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Pomegranate', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 959, originalPrice: 1179, image: '/images/plants/pomogranate.png' }),
  makeProduct({ name: 'Custard Apple', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 659, originalPrice: 799, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Papaya', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 939, originalPrice: 1259, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Mulberry', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 939, originalPrice: 1229, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Jamaican Cherry / Strawberry Tree', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 689, originalPrice: 889, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Indian Jujube', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 749, originalPrice: 939, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Dwarf Coconut', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 599, originalPrice: 739, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Star Fruit', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 709, originalPrice: 889, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Passion Fruit', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 899, originalPrice: 1149, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Wax Apple', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 759, originalPrice: 959, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Strawberry', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 819, originalPrice: 1059, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Fig', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 859, originalPrice: 1079, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Dragon Fruit', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 979, originalPrice: 1179, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Grapes', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 639, originalPrice: 779, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Sapota / Chikoo', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 939, originalPrice: 1209, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Jackfruit', category: 'fruit-plants', categoryLabel: 'Fruit Plants', price: 769, originalPrice: 919, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Basil', category: 'herbs', categoryLabel: 'Herbs', price: 209, originalPrice: 269, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Mint', category: 'herbs', categoryLabel: 'Herbs', price: 209, originalPrice: 279, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Coriander', category: 'herbs', categoryLabel: 'Herbs', price: 189, originalPrice: 219, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Oregano', category: 'herbs', categoryLabel: 'Herbs', price: 209, originalPrice: 279, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Rosemary', category: 'herbs', categoryLabel: 'Herbs', price: 169, originalPrice: 209, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Thyme', category: 'herbs', categoryLabel: 'Herbs', price: 299, originalPrice: 359, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Holy Basil (Tulsi)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 249, originalPrice: 309, image: IMG.outdoor[2] }),
  makeProduct({ name: 'King of Bitters (Nilavembu)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 209, originalPrice: 249, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Gotu Kola (Vallarai)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 149, originalPrice: 199, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Aloe Vera (Medicinal)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 89, originalPrice: 119, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Indian Gooseberry (Amla)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 709, originalPrice: 859, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Ashwagandha', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 279, originalPrice: 349, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Neem', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 879, originalPrice: 1069, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Malabar Nut (Adathodai)', category: 'medicinal-plants', categoryLabel: 'Medicinal Plants', price: 179, originalPrice: 229, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Lemongrass', category: 'aromatic-plants', categoryLabel: 'Aromatic Plants', price: 269, originalPrice: 349, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Rose Scented Geranium', category: 'aromatic-plants', categoryLabel: 'Aromatic Plants', price: 289, originalPrice: 369, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Lavender', category: 'aromatic-plants', categoryLabel: 'Aromatic Plants', price: 259, originalPrice: 329, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Vetiver', category: 'aromatic-plants', categoryLabel: 'Aromatic Plants', price: 279, originalPrice: 349, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Black Pepper', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 289, originalPrice: 359, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Ginger', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 189, originalPrice: 249, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Turmeric', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 269, originalPrice: 339, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Curry Leaf', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 209, originalPrice: 279, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Cinnamon', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 219, originalPrice: 289, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Clove', category: 'spice-plants', categoryLabel: 'Spice Plants', price: 279, originalPrice: 349, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Tulsi', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 309, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Bael / Bilva', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 269, originalPrice: 349, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Peepal (Sacred)', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 309, originalPrice: 379, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Lotus (Sacred)', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 329, originalPrice: 439, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Arabian Jasmine', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 269, originalPrice: 319, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Champak', category: 'sacred-plants', categoryLabel: 'Sacred Plants', price: 309, originalPrice: 379, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Ixora (Butterfly)', category: 'butterfly-garden-plants', categoryLabel: 'Butterfly Garden Plants', price: 289, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Lantana (Butterfly)', category: 'butterfly-garden-plants', categoryLabel: 'Butterfly Garden Plants', price: 259, originalPrice: 319, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Indian Birthwort (Aristolochia)', category: 'butterfly-garden-plants', categoryLabel: 'Butterfly Garden Plants', price: 329, originalPrice: 419, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Tropical Milkweed', category: 'butterfly-garden-plants', categoryLabel: 'Butterfly Garden Plants', price: 259, originalPrice: 309, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Coat Buttons (Tridax)', category: 'bee-friendly-plants', categoryLabel: 'Bee Friendly Plants', price: 129, originalPrice: 159, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Cosmos', category: 'bee-friendly-plants', categoryLabel: 'Bee Friendly Plants', price: 299, originalPrice: 399, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Sunflower', category: 'bee-friendly-plants', categoryLabel: 'Bee Friendly Plants', price: 149, originalPrice: 199, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Indian Coral Tree', category: 'bird-attracting-plants', categoryLabel: 'Bird Attracting Plants', price: 989, originalPrice: 1259, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Silver Oak', category: 'bird-attracting-plants', categoryLabel: 'Bird Attracting Plants', price: 839, originalPrice: 989, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Bottlebrush', category: 'bird-attracting-plants', categoryLabel: 'Bird Attracting Plants', price: 779, originalPrice: 959, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Arabian Jasmine (Fragrant)', category: 'fragrant-plants', categoryLabel: 'Fragrant Plants', price: 349, originalPrice: 459, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Tuberose', category: 'fragrant-plants', categoryLabel: 'Fragrant Plants', price: 359, originalPrice: 459, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Night Blooming Jasmine', category: 'fragrant-plants', categoryLabel: 'Fragrant Plants', price: 439, originalPrice: 559, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Frangipani (Red)', category: 'fragrant-plants', categoryLabel: 'Fragrant Plants', price: 399, originalPrice: 529, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Nasturtium', category: 'edible-flowers', categoryLabel: 'Edible Flowers', price: 269, originalPrice: 329, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Roselle', category: 'edible-flowers', categoryLabel: 'Edible Flowers', price: 259, originalPrice: 329, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Pansy', category: 'edible-flowers', categoryLabel: 'Edible Flowers', price: 249, originalPrice: 309, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Casuarina / Beach She-Oak', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 419, originalPrice: 549, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Screwpine', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 429, originalPrice: 519, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Crown Flower', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 369, originalPrice: 489, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Beach Morning Glory', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 409, originalPrice: 519, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Beach Cabbage (Scaevola)', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 349, originalPrice: 449, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Portia Tree', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 419, originalPrice: 499, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Wild Jasmine (Coastal)', category: 'coastal-plants', categoryLabel: 'Coastal Plants', price: 409, originalPrice: 509, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Madagascar Almond', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2239, originalPrice: 2709, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Arjuna', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1829, originalPrice: 2279, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Baheda', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1729, originalPrice: 2169, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Haritaki', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1989, originalPrice: 2599, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Karanj / Pongamia', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2079, originalPrice: 2549, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Mahogany', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2159, originalPrice: 2639, image: IMG.outdoor[1] }),
  makeProduct({ name: 'African Mahogany', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1469, originalPrice: 1849, image: IMG.outdoor[2] }),
  makeProduct({ name: 'White Cedar', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2399, originalPrice: 2849, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Indian Mahogany (Toon)', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2019, originalPrice: 2459, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Camphor Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1439, originalPrice: 1889, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Jamun', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1379, originalPrice: 1799, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Tamarind', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1799, originalPrice: 2179, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Mahua', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1339, originalPrice: 1719, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Bakul', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1789, originalPrice: 2149, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Rudraksha', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1529, originalPrice: 1949, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Palash / Flame of the Forest', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1739, originalPrice: 2189, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Silk Cotton Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1819, originalPrice: 2379, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Sea Hibiscus', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1639, originalPrice: 2099, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Alexandrian Laurel', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1529, originalPrice: 2009, image: IMG.outdoor[2] }),
  makeProduct({ name: 'True Ashoka', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1629, originalPrice: 2189, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Jacaranda', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1519, originalPrice: 1939, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Kadamba', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1939, originalPrice: 2479, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Putranjiva', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2069, originalPrice: 2579, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Pink Shower Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1699, originalPrice: 2029, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Orchid Tree (Purple)', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1799, originalPrice: 2149, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Orchid Tree (White)', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1919, originalPrice: 2539, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Yellow Tabebuia', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1549, originalPrice: 2039, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Silver Trumpet Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2459, originalPrice: 3229, image: IMG.outdoor[5] }),
  makeProduct({ name: 'White Trumpet Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2009, originalPrice: 2549, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Cannonball Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2059, originalPrice: 2449, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Sausage Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1999, originalPrice: 2359, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Weeping Fig Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2159, originalPrice: 2849, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Indian Laurel Fig', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 1519, originalPrice: 1899, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Ficus Panda', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2039, originalPrice: 2629, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Magnolia', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 2239, originalPrice: 2909, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Australian Pine', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 819, originalPrice: 989, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Norfolk Island Pine', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 869, originalPrice: 1169, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Cook Pine', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 739, originalPrice: 949, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Baobab', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 869, originalPrice: 1139, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Monkey Puzzle Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 839, originalPrice: 1049, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dragon Blood Tree', category: 'landscaping-trees', categoryLabel: 'Landscaping Tree', price: 969, originalPrice: 1239, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Aglaonema Red', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 329, originalPrice: 439, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Aglaonema Silver Bay', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 269, originalPrice: 329, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Philodendron Xanadu', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 359, originalPrice: 439, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Philodendron Selloum', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 469, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Monstera Deliciosa', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 419, originalPrice: 519, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dieffenbachia Camille', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 329, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Dracaena Marginata', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 329, originalPrice: 399, image: '/images/plants/dracaena_marginata.png' }),
  makeProduct({ name: 'Dracaena Compacta', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 369, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Dracaena Song of India', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 389, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Dracaena Song of Jamaica', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 399, originalPrice: 519, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Cordyline Red', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 409, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Cordyline Green (Ti Plant)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 379, originalPrice: 509, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Acalypha Green', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 269, originalPrice: 329, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Ming Aralia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 349, originalPrice: 439, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Variegated Aralia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 439, originalPrice: 539, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Green Aralia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 479, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Variegated Schefflera', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 459, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Green Schefflera', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 249, originalPrice: 299, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Duranta Golden Edge', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 369, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Variegated Duranta', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 309, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Kamini (Orange Jasmine)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 399, originalPrice: 499, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Gardenia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 389, originalPrice: 489, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Yellow Bells (Tecoma)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 359, originalPrice: 479, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Orange Tecoma', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 389, originalPrice: 479, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Yellow Allamanda', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 429, originalPrice: 539, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Purple Allamanda', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 329, originalPrice: 399, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Pink Mussaenda', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 279, originalPrice: 359, image: IMG.outdoor[3] }),
  makeProduct({ name: 'White Mussaenda', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 329, originalPrice: 389, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Firebush (Hamelia Patens)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 389, originalPrice: 519, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Firecracker Plant (Russelia)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 419, originalPrice: 509, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Blue Plumbago', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 389, image: IMG.outdoor[1] }),
  makeProduct({ name: 'White Plumbago', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 419, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Wild Jasmine (Clerodendrum Inerme)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 439, originalPrice: 559, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Flaming Glorybower', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 429, image: '/images/plants/flaming.png' }),
  makeProduct({ name: 'Mexican Petunia (Tall)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 369, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dwarf Crossandra', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 339, originalPrice: 409, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Philippine Violet (Barleria)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 249, originalPrice: 319, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Red Pentas', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 279, originalPrice: 339, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Pink Pentas', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 329, image: IMG.outdoor[3] }),
  makeProduct({ name: 'White Pentas', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 429, originalPrice: 579, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Yellow Ixora', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 409, originalPrice: 539, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dwarf Ixora', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 439, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Red Hibiscus', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 249, originalPrice: 319, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Yellow Hibiscus', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 469, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Variegated Hibiscus', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 339, originalPrice: 409, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Bird of Paradise', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 319, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Loropetalum (Chinese Fringe Flower)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 369, originalPrice: 439, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Indian Hawthorn', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 319, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Boat Lily (Rhoeo Tricolor)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 169, originalPrice: 219, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Wandering Jew (Zebrina)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 159, originalPrice: 189, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Red Alternanthera', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 289, originalPrice: 389, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Yellow Alternanthera', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 169, originalPrice: 229, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Green Alternanthera', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 179, originalPrice: 229, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Bloodleaf (Iresine)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 329, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Asparagus Fern', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 209, originalPrice: 269, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Foxtail Fern', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 249, originalPrice: 309, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Liriope (Lily Turf)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 319, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Dianella (Flax Lily)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 399, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Agapanthus (African Lily)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 229, originalPrice: 289, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dietes Bicolor (Wild Iris)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 159, originalPrice: 199, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Dietes Grandiflora', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 169, originalPrice: 229, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Society Garlic', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 199, originalPrice: 259, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Umbrella Palm (Dwarf Cyperus)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 219, originalPrice: 279, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Variegated Screwpine (Pandanus)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 189, originalPrice: 229, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Spider Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 389, originalPrice: 459, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Crinum Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 249, originalPrice: 309, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Canna Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 419, originalPrice: 539, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Day Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 379, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Rain Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 409, image: IMG.outdoor[3] }),
  makeProduct({ name: 'White Ginger Lily', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 429, originalPrice: 569, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Red Ginger (Ostrich Plume)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 269, originalPrice: 349, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Heliconia / Lobster Claw', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 319, originalPrice: 419, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Juniper', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 409, originalPrice: 519, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Thuja / Morpankhi', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 369, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Podocarpus', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 389, originalPrice: 469, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Blue Star Juniper', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 289, originalPrice: 389, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Nandina (Heavenly Bamboo)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 279, originalPrice: 329, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Eugenia Hedge', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 289, originalPrice: 379, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Boxwood', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 399, originalPrice: 519, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Philodendron Birkin', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 289, originalPrice: 389, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Caladium', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 259, originalPrice: 309, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Black Magic Elephant Ear', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 229, originalPrice: 299, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Alocasia Polly', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 219, originalPrice: 279, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Pink Syngonium', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 279, originalPrice: 349, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Peace Lily Domino (Variegated)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 159, originalPrice: 209, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Red Anthurium', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 229, originalPrice: 289, image: IMG.outdoor[2] }),
  makeProduct({ name: 'White Anthurium', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 159, originalPrice: 189, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Kimberly Queen Fern', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 299, originalPrice: 379, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Blue Daze (Evolvulus)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 79, originalPrice: 109, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Gazania', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 109, originalPrice: 139, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Dianthus / Pinks', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 99, originalPrice: 119, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Salvia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 139, originalPrice: 189, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Verbena', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 99, originalPrice: 129, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Tickseed (Coreopsis)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 129, originalPrice: 169, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Plume Celosia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 139, originalPrice: 189, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Dwarf Coleus', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 139, originalPrice: 169, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Impatiens / Balsam', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 119, originalPrice: 149, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Begonia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 89, originalPrice: 119, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Wax Begonia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 119, originalPrice: 149, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Rex Begonia', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 139, originalPrice: 169, image: IMG.outdoor[4] }),
  makeProduct({ name: 'Dusty Miller', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 129, originalPrice: 169, image: IMG.outdoor[5] }),
  makeProduct({ name: 'Lavender Cotton', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 149, originalPrice: 179, image: IMG.outdoor[0] }),
  makeProduct({ name: 'Wormwood (Artemisia)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 89, originalPrice: 109, image: IMG.outdoor[1] }),
  makeProduct({ name: 'Stonecrop (Sedum)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 119, originalPrice: 139, image: IMG.outdoor[2] }),
  makeProduct({ name: 'Variegated Elephant Bush', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 129, originalPrice: 169, image: IMG.outdoor[3] }),
  makeProduct({ name: 'Blue Chalk Sticks (Senecio)', category: 'landscaping-plants', categoryLabel: 'Landscaping Plant', price: 79, originalPrice: 99, image: IMG.outdoor[4] }),
  // --- Bulk-imported from Nursery Non plant list.pdf (Seeds, Pots & Planters, Plant Care) ---
  makeProduct({ name: 'Tomato Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 99, image: IMG.seeds[0], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Brinjal (Eggplant) Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 99, image: IMG.seeds[1], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Okra (Bhindi) Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[2], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Chilli Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[3], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Cabbage Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[0], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Cauliflower Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[1], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Cucumber Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 109, image: IMG.seeds[2], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Bottle Gourd Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Bitter Gourd Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 99, image: IMG.seeds[0], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Pumpkin Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[1], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Carrot Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[2], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Radish Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 89, image: IMG.seeds[3], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Spinach (Palak) Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[0], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Fenugreek (Methi) Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[1], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Onion Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[2], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'French Bean Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 89, image: IMG.seeds[3], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Green Pea Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[0], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Capsicum Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[1], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Ridge Gourd Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[2], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Ash Gourd Seeds', category: 'vegetable-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Vegetable Seeds' }),
  makeProduct({ name: 'Marigold Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 79, image: IMG.seeds[0], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Zinnia Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[1], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Cosmos Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[2], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Petunia Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[3], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Sunflower Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 99, image: IMG.seeds[0], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Balsam Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[1], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Portulaca Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 89, image: IMG.seeds[2], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Vinca Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 79, image: IMG.seeds[3], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Dianthus Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[0], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Aster Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 39, originalPrice: 49, image: IMG.seeds[1], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Gaillardia Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[2], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Celosia Seeds', category: 'flower-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Flower Seeds' }),
  makeProduct({ name: 'Basil (Tulsi) Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 79, image: IMG.seeds[0], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Coriander Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 89, image: IMG.seeds[1], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Mint Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 89, image: IMG.seeds[2], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Ajwain Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Dill Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[0], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Lemongrass Seeds', category: 'herb-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 89, image: IMG.seeds[1], productType: 'Herb Seeds' }),
  makeProduct({ name: 'Papaya Seeds', category: 'fruit-seeds', categoryLabel: 'Seeds', price: 49, originalPrice: 59, image: IMG.seeds[2], productType: 'Fruit Seeds' }),
  makeProduct({ name: 'Watermelon Seeds', category: 'fruit-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Fruit Seeds' }),
  makeProduct({ name: 'Muskmelon Seeds', category: 'fruit-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 99, image: IMG.seeds[0], productType: 'Fruit Seeds' }),
  makeProduct({ name: 'Guava Seeds', category: 'fruit-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 109, image: IMG.seeds[1], productType: 'Fruit Seeds' }),
  makeProduct({ name: 'Lemon Seeds', category: 'fruit-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 109, image: IMG.seeds[2], productType: 'Fruit Seeds' }),
  makeProduct({ name: 'Radish Microgreen Seeds', category: 'microgreen-seeds', categoryLabel: 'Seeds', price: 209, originalPrice: 249, image: IMG.seeds[3], productType: 'Microgreens Seeds' }),
  makeProduct({ name: 'Sunflower Microgreen Seeds', category: 'microgreen-seeds', categoryLabel: 'Seeds', price: 199, originalPrice: 259, image: IMG.seeds[0], productType: 'Microgreens Seeds' }),
  makeProduct({ name: 'Fenugreek Microgreen Seeds', category: 'microgreen-seeds', categoryLabel: 'Seeds', price: 189, originalPrice: 219, image: IMG.seeds[1], productType: 'Microgreens Seeds' }),
  makeProduct({ name: 'Mustard Microgreen Seeds', category: 'microgreen-seeds', categoryLabel: 'Seeds', price: 219, originalPrice: 269, image: IMG.seeds[2], productType: 'Microgreens Seeds' }),
  makeProduct({ name: 'Broccoli Microgreen Seeds', category: 'microgreen-seeds', categoryLabel: 'Seeds', price: 129, originalPrice: 159, image: IMG.seeds[3], productType: 'Microgreens Seeds' }),
  makeProduct({ name: 'Bermuda Grass Seed', category: 'lawn-grass-seeds', categoryLabel: 'Seeds', price: 299, originalPrice: 379, image: IMG.seeds[0], productType: 'Lawn Grass Seeds' }),
  makeProduct({ name: 'Doob Grass Seed', category: 'lawn-grass-seeds', categoryLabel: 'Seeds', price: 279, originalPrice: 359, image: IMG.seeds[1], productType: 'Lawn Grass Seeds' }),
  makeProduct({ name: 'Ryegrass Seed', category: 'lawn-grass-seeds', categoryLabel: 'Seeds', price: 399, originalPrice: 489, image: IMG.seeds[2], productType: 'Lawn Grass Seeds' }),
  makeProduct({ name: 'Maize Fodder Seed', category: 'fodder-seeds', categoryLabel: 'Seeds', price: 119, originalPrice: 149, image: IMG.seeds[3], productType: 'Fodder Seeds' }),
  makeProduct({ name: 'Sorghum Fodder Seed', category: 'fodder-seeds', categoryLabel: 'Seeds', price: 69, originalPrice: 79, image: IMG.seeds[0], productType: 'Fodder Seeds' }),
  makeProduct({ name: 'Lucerne (Alfalfa) Seed', category: 'fodder-seeds', categoryLabel: 'Seeds', price: 359, originalPrice: 429, image: IMG.seeds[1], productType: 'Fodder Seeds' }),
  makeProduct({ name: 'Cowpea Fodder Seed', category: 'fodder-seeds', categoryLabel: 'Seeds', price: 79, originalPrice: 99, image: IMG.seeds[2], productType: 'Fodder Seeds' }),
  makeProduct({ name: 'Ashwagandha Seed', category: 'medicinal-seeds', categoryLabel: 'Seeds', price: 239, originalPrice: 299, image: IMG.seeds[3], productType: 'Medicinal Seeds' }),
  makeProduct({ name: 'Isabgol (Psyllium) Seed', category: 'medicinal-seeds', categoryLabel: 'Seeds', price: 399, originalPrice: 489, image: IMG.seeds[0], productType: 'Medicinal Seeds' }),
  makeProduct({ name: 'Tulsi Seed (Medicinal Grade)', category: 'medicinal-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[1], productType: 'Medicinal Seeds' }),
  makeProduct({ name: 'Kale Seeds', category: 'exotic-seeds', categoryLabel: 'Seeds', price: 199, originalPrice: 259, image: IMG.seeds[2], productType: 'Exotic Seeds' }),
  makeProduct({ name: 'Broccoli Seeds', category: 'exotic-seeds', categoryLabel: 'Seeds', price: 139, originalPrice: 159, image: IMG.seeds[3], productType: 'Exotic Seeds' }),
  makeProduct({ name: 'Lettuce Seeds', category: 'exotic-seeds', categoryLabel: 'Seeds', price: 139, originalPrice: 169, image: IMG.seeds[0], productType: 'Exotic Seeds' }),
  makeProduct({ name: 'Zucchini Seeds', category: 'exotic-seeds', categoryLabel: 'Seeds', price: 159, originalPrice: 179, image: IMG.seeds[1], productType: 'Exotic Seeds' }),
  makeProduct({ name: 'Bell Pepper Seeds', category: 'exotic-seeds', categoryLabel: 'Seeds', price: 249, originalPrice: 289, image: IMG.seeds[2], productType: 'Exotic Seeds' }),
  makeProduct({ name: 'Gulmohar Seeds', category: 'native-ornamental-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 99, image: IMG.seeds[3], productType: 'Native & Ornamental Seeds' }),
  makeProduct({ name: 'Neem Seeds', category: 'native-ornamental-seeds', categoryLabel: 'Seeds', price: 99, originalPrice: 119, image: IMG.seeds[0], productType: 'Native & Ornamental Seeds' }),
  makeProduct({ name: 'Hibiscus Seeds', category: 'native-ornamental-seeds', categoryLabel: 'Seeds', price: 89, originalPrice: 119, image: IMG.seeds[1], productType: 'Native & Ornamental Seeds' }),
  makeProduct({ name: 'Bougainvillea Seeds', category: 'native-ornamental-seeds', categoryLabel: 'Seeds', price: 119, originalPrice: 159, image: IMG.seeds[2], productType: 'Native & Ornamental Seeds' }),
  makeProduct({ name: 'Amaltas Seeds', category: 'native-ornamental-seeds', categoryLabel: 'Seeds', price: 59, originalPrice: 69, image: IMG.seeds[3], productType: 'Native & Ornamental Seeds' }),
  makeProduct({ name: 'Plain Round Terracotta Pot (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 599, originalPrice: 729, image: IMG.pots[0], productType: 'Terracotta' }),
  makeProduct({ name: 'Rimmed Terracotta Pot (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 429, originalPrice: 519, image: IMG.pots[1], productType: 'Terracotta' }),
  makeProduct({ name: 'Ridged / Grooved Terracotta Pot (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 519, originalPrice: 649, image: IMG.pots[2], productType: 'Terracotta' }),
  makeProduct({ name: 'Glazed-Rim Terracotta Pot (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 89, originalPrice: 109, image: IMG.pots[3], productType: 'Terracotta' }),
  makeProduct({ name: 'Painted Terracotta Pot, Assorted Colours (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 239, originalPrice: 289, image: IMG.pots[4], productType: 'Terracotta' }),
  makeProduct({ name: 'Chettinad-Style Terracotta Pot (4-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 139, originalPrice: 169, image: IMG.pots[0], productType: 'Terracotta' }),
  makeProduct({ name: 'Terracotta Long Tom Pot (6-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 79, originalPrice: 89, image: IMG.pots[1], productType: 'Terracotta' }),
  makeProduct({ name: 'Terracotta Bonsai Pot, Shallow (4-14 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 169, originalPrice: 199, image: IMG.pots[2], productType: 'Terracotta' }),
  makeProduct({ name: 'Hexagonal Terracotta Planter (8-14 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 99, originalPrice: 129, image: IMG.pots[3], productType: 'Terracotta' }),
  makeProduct({ name: 'Cylindrical Terracotta Planter (8-16 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 79, originalPrice: 89, image: IMG.pots[4], productType: 'Terracotta' }),
  makeProduct({ name: 'Terracotta Rectangular Trough (12-24 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 119, originalPrice: 149, image: IMG.pots[0], productType: 'Terracotta' }),
  makeProduct({ name: 'Conical Terracotta Planter (8-12 in)', category: 'terracotta-pots', categoryLabel: 'Pots & Planters', price: 109, originalPrice: 139, image: IMG.pots[1], productType: 'Terracotta' }),
  makeProduct({ name: 'Glazed Ceramic Pot, Multiple Finishes (6-12 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 639, originalPrice: 799, image: IMG.pots[2], productType: 'Ceramic' }),
  makeProduct({ name: 'Two-Tone Glazed Ceramic Pot (6-12 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 759, originalPrice: 889, image: IMG.pots[3], productType: 'Ceramic' }),
  makeProduct({ name: 'Oval Glazed Ceramic Planter (8-12 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 819, originalPrice: 1079, image: IMG.pots[4], productType: 'Ceramic' }),
  makeProduct({ name: 'Hexagonal Glazed Ceramic Pot (6-10 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 799, originalPrice: 979, image: IMG.pots[0], productType: 'Ceramic' }),
  makeProduct({ name: 'Ceramic Cylinder Planter, Glazed (8-14 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 639, originalPrice: 739, image: IMG.pots[1], productType: 'Ceramic' }),
  makeProduct({ name: 'Ceramic Bowl Planter, Glazed (8-12 in)', category: 'ceramic-pots', categoryLabel: 'Pots & Planters', price: 419, originalPrice: 539, image: IMG.pots[2], productType: 'Ceramic' }),
  makeProduct({ name: 'Round Plastic Pot, Multiple Colours (4-18 in)', category: 'plastic-pots', categoryLabel: 'Pots & Planters', price: 159, originalPrice: 199, image: IMG.pots[3], productType: 'Plastic' }),
  makeProduct({ name: 'Square Plastic Planter, Multiple Colours (6-12 in)', category: 'plastic-pots', categoryLabel: 'Pots & Planters', price: 59, originalPrice: 69, image: IMG.pots[4], productType: 'Plastic' }),
  makeProduct({ name: 'Oval Plastic Planter (8-14 in)', category: 'plastic-pots', categoryLabel: 'Pots & Planters', price: 69, originalPrice: 89, image: IMG.pots[0], productType: 'Plastic' }),
  makeProduct({ name: 'Rectangular Plastic Trough Planter (12-24 in)', category: 'plastic-pots', categoryLabel: 'Pots & Planters', price: 109, originalPrice: 129, image: IMG.pots[1], productType: 'Plastic' }),
  makeProduct({ name: 'Tapered Plastic Pot (8-14 in)', category: 'plastic-pots', categoryLabel: 'Pots & Planters', price: 129, originalPrice: 159, image: IMG.pots[2], productType: 'Plastic' }),
  makeProduct({ name: 'Fibre-Reinforced Planter, Multiple Finishes (10-24 in)', category: 'fibre-planters', categoryLabel: 'Pots & Planters', price: 1119, originalPrice: 1429, image: IMG.pots[3], productType: 'Fibre' }),
  makeProduct({ name: 'Conical FRP Planter (12-24 in)', category: 'fibre-planters', categoryLabel: 'Pots & Planters', price: 2169, originalPrice: 2859, image: IMG.pots[4], productType: 'Fibre' }),
  makeProduct({ name: 'Cylindrical FRP Planter (12-30 in)', category: 'fibre-planters', categoryLabel: 'Pots & Planters', price: 1319, originalPrice: 1669, image: IMG.pots[0], productType: 'Fibre' }),
  makeProduct({ name: 'Cube FRP Planter (12-20 in)', category: 'fibre-planters', categoryLabel: 'Pots & Planters', price: 2019, originalPrice: 2499, image: IMG.pots[1], productType: 'Fibre' }),
  makeProduct({ name: 'Bowl FRP Planter (16-24 in)', category: 'fibre-planters', categoryLabel: 'Pots & Planters', price: 1629, originalPrice: 1969, image: IMG.pots[2], productType: 'Fibre' }),
  makeProduct({ name: 'Metal Planter, Multiple Finishes (8-16 in)', category: 'metal-planters', categoryLabel: 'Pots & Planters', price: 1609, originalPrice: 1999, image: IMG.pots[3], productType: 'Metal' }),
  makeProduct({ name: 'Metal Cylindrical Planter (8-16 in)', category: 'metal-planters', categoryLabel: 'Pots & Planters', price: 2789, originalPrice: 3359, image: IMG.pots[4], productType: 'Metal' }),
  makeProduct({ name: 'Metal Cube Planter (10-14 in)', category: 'metal-planters', categoryLabel: 'Pots & Planters', price: 1639, originalPrice: 2059, image: IMG.pots[0], productType: 'Metal' }),
  makeProduct({ name: 'Metal Conical Planter (10-18 in)', category: 'metal-planters', categoryLabel: 'Pots & Planters', price: 1529, originalPrice: 1969, image: IMG.pots[1], productType: 'Metal' }),
  makeProduct({ name: 'Metal Bowl Planter (12-16 in)', category: 'metal-planters', categoryLabel: 'Pots & Planters', price: 2369, originalPrice: 3019, image: IMG.pots[2], productType: 'Metal' }),
  makeProduct({ name: 'Teak Wood Planter Box (12-24 in)', category: 'wooden-planters', categoryLabel: 'Pots & Planters', price: 2759, originalPrice: 3269, image: IMG.pots[3], productType: 'Wooden' }),
  makeProduct({ name: 'Pinewood Planter Box (12-24 in)', category: 'wooden-planters', categoryLabel: 'Pots & Planters', price: 4939, originalPrice: 5979, image: IMG.pots[4], productType: 'Wooden' }),
  makeProduct({ name: 'Mango Wood Planter, Rustic (12-24 in)', category: 'wooden-planters', categoryLabel: 'Pots & Planters', price: 1139, originalPrice: 1499, image: IMG.pots[0], productType: 'Wooden' }),
  makeProduct({ name: 'Wooden Barrel Planter, Half-Cut (16-20 in)', category: 'wooden-planters', categoryLabel: 'Pots & Planters', price: 3189, originalPrice: 3919, image: IMG.pots[1], productType: 'Wooden' }),
  makeProduct({ name: 'Wooden Hexagonal Planter (14-18 in)', category: 'wooden-planters', categoryLabel: 'Pots & Planters', price: 2489, originalPrice: 3159, image: IMG.pots[2], productType: 'Wooden' }),
  makeProduct({ name: 'Cement Round Planter, Plain Grey (12-30 in)', category: 'cement-planters', categoryLabel: 'Pots & Planters', price: 1909, originalPrice: 2339, image: IMG.pots[3], productType: 'Cement / RCC' }),
  makeProduct({ name: 'Cement Hexagon Planter (12-30 in)', category: 'cement-planters', categoryLabel: 'Pots & Planters', price: 3459, originalPrice: 4559, image: IMG.pots[4], productType: 'Cement / RCC' }),
  makeProduct({ name: 'Cement Trough Planter (12-30 in)', category: 'cement-planters', categoryLabel: 'Pots & Planters', price: 1989, originalPrice: 2309, image: IMG.pots[0], productType: 'Cement / RCC' }),
  makeProduct({ name: 'Cement Bowl Planter, Polished (12-30 in)', category: 'cement-planters', categoryLabel: 'Pots & Planters', price: 919, originalPrice: 1089, image: IMG.pots[1], productType: 'Cement / RCC' }),
  makeProduct({ name: 'Hanging Planter, Multiple Colours (6-10 in)', category: 'hanging-planters', categoryLabel: 'Pots & Planters', price: 119, originalPrice: 139, image: IMG.pots[2], productType: 'Hanging' }),
  makeProduct({ name: 'Hanging Basket Planter, Coir-Lined (8-12 in)', category: 'hanging-planters', categoryLabel: 'Pots & Planters', price: 209, originalPrice: 259, image: IMG.pots[3], productType: 'Hanging' }),
  makeProduct({ name: 'Hanging Bowl Planter (6-10 in)', category: 'hanging-planters', categoryLabel: 'Pots & Planters', price: 249, originalPrice: 319, image: IMG.pots[4], productType: 'Hanging' }),
  makeProduct({ name: 'Hanging Dome Planter (6-8 in)', category: 'hanging-planters', categoryLabel: 'Pots & Planters', price: 209, originalPrice: 269, image: IMG.pots[0], productType: 'Hanging' }),
  makeProduct({ name: 'Railing / Balcony Planter (18-24 in)', category: 'railing-planters', categoryLabel: 'Pots & Planters', price: 239, originalPrice: 309, image: IMG.pots[1], productType: 'Railing' }),
  makeProduct({ name: 'Railing Trough Planter with Drip Tray (18-30 in)', category: 'railing-planters', categoryLabel: 'Pots & Planters', price: 199, originalPrice: 259, image: IMG.pots[2], productType: 'Railing' }),
  makeProduct({ name: 'Self-Watering Planter, Multiple Colours (8-14 in)', category: 'self-watering-planters', categoryLabel: 'Pots & Planters', price: 739, originalPrice: 959, image: IMG.pots[3], productType: 'Self-Watering' }),
  makeProduct({ name: 'Self-Watering Tall Cylinder Planter (10-14 in)', category: 'self-watering-planters', categoryLabel: 'Pots & Planters', price: 2009, originalPrice: 2569, image: IMG.pots[4], productType: 'Self-Watering' }),
  makeProduct({ name: 'Coco Fibre Round Pot (6-10 in)', category: 'coco-fibre-pots', categoryLabel: 'Pots & Planters', price: 189, originalPrice: 249, image: IMG.pots[0], productType: 'Coco Fibre' }),
  makeProduct({ name: 'Coco Fibre Hanging Basket (8-12 in)', category: 'coco-fibre-pots', categoryLabel: 'Pots & Planters', price: 179, originalPrice: 229, image: IMG.pots[1], productType: 'Coco Fibre' }),
  makeProduct({ name: 'Coco Fibre Square Pot (6-8 in)', category: 'coco-fibre-pots', categoryLabel: 'Pots & Planters', price: 159, originalPrice: 189, image: IMG.pots[2], productType: 'Coco Fibre' }),
  makeProduct({ name: 'Rattan-Style Round Planter (8-12 in)', category: 'rattan-planters', categoryLabel: 'Pots & Planters', price: 1359, originalPrice: 1669, image: IMG.pots[3], productType: 'Rattan-Style' }),
  makeProduct({ name: 'Rattan-Style Square Planter (10-14 in)', category: 'rattan-planters', categoryLabel: 'Pots & Planters', price: 719, originalPrice: 919, image: IMG.pots[4], productType: 'Rattan-Style' }),
  makeProduct({ name: 'Rattan-Style Tall Planter (14-18 in)', category: 'rattan-planters', categoryLabel: 'Pots & Planters', price: 899, originalPrice: 1189, image: IMG.pots[0], productType: 'Rattan-Style' }),
  makeProduct({ name: 'Rectangular Bonsai Tray, Glazed (6-12 in)', category: 'bonsai-pots-subcat', categoryLabel: 'Pots & Planters', price: 249, originalPrice: 289, image: IMG.pots[1], productType: 'Bonsai Pots' }),
  makeProduct({ name: 'Oval Bonsai Pot, Glazed (6-10 in)', category: 'bonsai-pots-subcat', categoryLabel: 'Pots & Planters', price: 699, originalPrice: 899, image: IMG.pots[2], productType: 'Bonsai Pots' }),
  makeProduct({ name: 'Round Bonsai Pot, Glazed (6-10 in)', category: 'bonsai-pots-subcat', categoryLabel: 'Pots & Planters', price: 369, originalPrice: 459, image: IMG.pots[3], productType: 'Bonsai Pots' }),
  makeProduct({ name: 'Hexagonal Bonsai Pot, Glazed (6-8 in)', category: 'bonsai-pots-subcat', categoryLabel: 'Pots & Planters', price: 699, originalPrice: 879, image: IMG.pots[4], productType: 'Bonsai Pots' }),
  makeProduct({ name: 'Rectangular Balcony Trough (18-36 in)', category: 'balcony-planters', categoryLabel: 'Pots & Planters', price: 459, originalPrice: 539, image: IMG.pots[0], productType: 'Balcony' }),
  makeProduct({ name: 'Tapered Balcony Trough (24-30 in)', category: 'balcony-planters', categoryLabel: 'Pots & Planters', price: 559, originalPrice: 659, image: IMG.pots[1], productType: 'Balcony' }),
  makeProduct({ name: 'Classic Window Box Planter (12-24 in)', category: 'window-box-planters', categoryLabel: 'Pots & Planters', price: 199, originalPrice: 259, image: IMG.pots[2], productType: 'Window Box' }),
  makeProduct({ name: 'Slatted Window Box Planter (18-24 in)', category: 'window-box-planters', categoryLabel: 'Pots & Planters', price: 239, originalPrice: 299, image: IMG.pots[3], productType: 'Window Box' }),
  makeProduct({ name: '3-Tier Vertical Tower Planter', category: 'vertical-tower-planters', categoryLabel: 'Pots & Planters', price: 1059, originalPrice: 1299, image: IMG.pots[4], productType: 'Vertical Tower' }),
  makeProduct({ name: '5-Tier Vertical Tower Planter', category: 'vertical-tower-planters', categoryLabel: 'Pots & Planters', price: 1179, originalPrice: 1519, image: IMG.pots[0], productType: 'Vertical Tower' }),
  makeProduct({ name: 'Stackable Round Vertical Planter', category: 'vertical-tower-planters', categoryLabel: 'Pots & Planters', price: 1209, originalPrice: 1399, image: IMG.pots[1], productType: 'Vertical Tower' }),
  makeProduct({ name: 'Upcycled PET Bottle Planter, Hand-Painted', category: 'upcycled-planters', categoryLabel: 'Pots & Planters', price: 149, originalPrice: 179, image: IMG.pots[2], productType: 'Upcycled' }),
  makeProduct({ name: 'Upcycled Oil Drum Planter, Half-Cut', category: 'upcycled-planters', categoryLabel: 'Pots & Planters', price: 379, originalPrice: 489, image: IMG.pots[3], productType: 'Upcycled' }),
  makeProduct({ name: 'Upcycled Paint Drum Planter', category: 'upcycled-planters', categoryLabel: 'Pots & Planters', price: 429, originalPrice: 509, image: IMG.pots[4], productType: 'Upcycled' }),
  makeProduct({ name: 'Cocopeat Block, 5kg Compressed', category: 'potting-media', categoryLabel: 'Plant Care', price: 209, originalPrice: 269, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Cocopeat Powder, Loose (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 159, originalPrice: 209, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'Vermiculite (1-5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 319, originalPrice: 419, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'Perlite (1-5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 359, originalPrice: 459, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Red Soil (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 109, originalPrice: 129, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'Garden / Potting Soil (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 109, originalPrice: 139, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'River Sand (25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 49, originalPrice: 59, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Farmyard Manure, FYM (25-50kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 139, originalPrice: 169, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'Leaf Mould (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 149, originalPrice: 179, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'Sphagnum Moss (100-500g)', category: 'potting-media', categoryLabel: 'Plant Care', price: 419, originalPrice: 529, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Peat Moss (5-20kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 369, originalPrice: 459, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'Rice Husk, Raw (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 89, originalPrice: 109, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'Rice Husk, Carbonized (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 219, originalPrice: 269, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Coco Chips / Husk Chips (5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 159, originalPrice: 209, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'General-Purpose Potting Mix (5-25kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 159, originalPrice: 189, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'Cactus & Succulent Potting Mix (1-5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 179, originalPrice: 209, image: IMG.tools[0], productType: 'Potting Media' }),
  makeProduct({ name: 'Orchid Bark Mix (1-5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 189, originalPrice: 229, image: IMG.tools[1], productType: 'Potting Media' }),
  makeProduct({ name: 'Bonsai Soil Mix (1-5kg)', category: 'potting-media', categoryLabel: 'Plant Care', price: 469, originalPrice: 539, image: IMG.tools[2], productType: 'Potting Media' }),
  makeProduct({ name: 'Vermicompost (5-50kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 59, originalPrice: 69, image: IMG.tools[0], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Dried Cow Dung Manure (5-50kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 119, originalPrice: 159, image: IMG.tools[1], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Poultry Manure (5-50kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 129, originalPrice: 159, image: IMG.tools[2], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Neem Cake Powder (1-25kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 119, originalPrice: 149, image: IMG.tools[0], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Bone Meal (1-25kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 209, originalPrice: 269, image: IMG.tools[1], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Panchagavya (1-5 litre)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 399, originalPrice: 519, image: IMG.tools[2], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Jeevamrutham Concentrate (1-5 litre)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 299, originalPrice: 369, image: IMG.tools[0], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Organic Compost (5-50kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 79, originalPrice: 99, image: IMG.tools[1], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Mustard Cake (1-25kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 99, originalPrice: 129, image: IMG.tools[2], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Seaweed Granules (500g-5kg)', category: 'organic-fertilizers', categoryLabel: 'Plant Care', price: 389, originalPrice: 469, image: IMG.tools[0], productType: 'Organic Fertilizer' }),
  makeProduct({ name: 'Urea (1kg retail)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 9, originalPrice: 9, image: IMG.tools[1], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'DAP, Di-Ammonium Phosphate (1kg retail)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 29, originalPrice: 39, image: IMG.tools[2], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'MOP, Muriate of Potash (1kg retail)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 39, originalPrice: 49, image: IMG.tools[0], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'NPK 19:19:19 (1-25kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 99, originalPrice: 129, image: IMG.tools[1], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'NPK 20:20:20 (1-25kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 79, originalPrice: 99, image: IMG.tools[2], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'Calcium Nitrate (1-25kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 129, originalPrice: 149, image: IMG.tools[0], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'Magnesium Sulphate, Epsom Salt (500g-5kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 79, originalPrice: 99, image: IMG.tools[1], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'Micronutrient Mixture, Granular (1-5kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 129, originalPrice: 159, image: IMG.tools[2], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'Zinc Sulphate (500g-5kg)', category: 'chemical-fertilizers', categoryLabel: 'Plant Care', price: 89, originalPrice: 109, image: IMG.tools[0], productType: 'Chemical Fertilizer' }),
  makeProduct({ name: 'Seaweed Extract, Liquid (250ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 429, originalPrice: 509, image: IMG.tools[1], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Humic Acid Liquid (250ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 259, originalPrice: 299, image: IMG.tools[2], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Fish Emulsion Liquid (250ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 399, originalPrice: 529, image: IMG.tools[0], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Amino Acid Tonic (100-500ml)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 459, originalPrice: 549, image: IMG.tools[1], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Rooting / Growth Hormone Solution (10-100ml)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 449, originalPrice: 539, image: IMG.tools[2], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Flowering & Fruiting Booster Liquid (250ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 249, originalPrice: 319, image: IMG.tools[0], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'NPK 19:19:19 Liquid Fertilizer (250ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 149, originalPrice: 179, image: IMG.tools[1], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Vermiwash (500ml-1L)', category: 'liquid-nutrients', categoryLabel: 'Plant Care', price: 209, originalPrice: 259, image: IMG.tools[2], productType: 'Liquid Nutrient' }),
  makeProduct({ name: 'Rhizobium Culture (200-500g)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 49, originalPrice: 59, image: IMG.tools[0], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Azospirillum Culture (200-500g)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 119, originalPrice: 149, image: IMG.tools[1], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Phosphate Solubilizing Bacteria, PSB (200-500g)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 119, originalPrice: 159, image: IMG.tools[2], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Mycorrhiza, VAM Inoculant (250g-1kg)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 239, originalPrice: 309, image: IMG.tools[0], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Trichoderma Viride (100-500g)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 149, originalPrice: 199, image: IMG.tools[1], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Pseudomonas Fluorescens (100-500g)', category: 'biofertilizers', categoryLabel: 'Plant Care', price: 119, originalPrice: 139, image: IMG.tools[2], productType: 'Biofertilizer' }),
  makeProduct({ name: 'Neem Oil (100ml-1L)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 279, originalPrice: 319, image: IMG.tools[0], productType: 'Plant Protection' }),
  makeProduct({ name: 'Neem-Based Pesticide (250ml-1L)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 269, originalPrice: 319, image: IMG.tools[1], productType: 'Plant Protection' }),
  makeProduct({ name: 'Copper Oxychloride Fungicide (100g-1kg)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 209, originalPrice: 269, image: IMG.tools[2], productType: 'Plant Protection' }),
  makeProduct({ name: 'Mancozeb Fungicide (100g-1kg)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 269, originalPrice: 329, image: IMG.tools[0], productType: 'Plant Protection' }),
  makeProduct({ name: 'Wettable Sulphur (100g-1kg)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 239, originalPrice: 309, image: IMG.tools[1], productType: 'Plant Protection' }),
  makeProduct({ name: 'Yellow / Blue Sticky Traps (Pack of 10-20)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 19, originalPrice: 19, image: IMG.tools[2], productType: 'Plant Protection' }),
  makeProduct({ name: 'Bordeaux Mixture (500g-1kg)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 119, originalPrice: 139, image: IMG.tools[0], productType: 'Plant Protection' }),
  makeProduct({ name: 'Bt-Based Biopesticide (250ml-1L)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 599, originalPrice: 709, image: IMG.tools[1], productType: 'Plant Protection' }),
  makeProduct({ name: 'Insecticidal Soap Spray (250-500ml)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 239, originalPrice: 289, image: IMG.tools[2], productType: 'Plant Protection' }),
  makeProduct({ name: 'Snail & Slug Bait (200g-1kg)', category: 'plant-protection', categoryLabel: 'Plant Care', price: 149, originalPrice: 189, image: IMG.tools[0], productType: 'Plant Protection' }),
  makeProduct({ name: 'Rooting Hormone Powder (10-100g)', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 149, originalPrice: 179, image: IMG.tools[1], productType: 'Propagation' }),
  makeProduct({ name: 'Rooting Hormone Gel (15-50ml)', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 249, originalPrice: 289, image: IMG.tools[2], productType: 'Propagation' }),
  makeProduct({ name: 'Grafting Tape (Roll)', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 159, originalPrice: 189, image: IMG.tools[0], productType: 'Propagation' }),
  makeProduct({ name: 'Grafting Wax (50-250g)', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 99, originalPrice: 119, image: IMG.tools[1], productType: 'Propagation' }),
  makeProduct({ name: 'Seedling Propagation Tray (50-104 cavity)', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 119, originalPrice: 149, image: IMG.tools[2], productType: 'Propagation' }),
  makeProduct({ name: 'Propagation Humidity Dome / Tray', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 519, originalPrice: 649, image: IMG.tools[0], productType: 'Propagation' }),
  makeProduct({ name: 'Air-Layering Moss Pouches', category: 'propagation-supplies', categoryLabel: 'Plant Care', price: 59, originalPrice: 69, image: IMG.tools[1], productType: 'Propagation' }),
  makeProduct({ name: 'Home Composting Bin (20-50L)', category: 'composting-products', categoryLabel: 'Plant Care', price: 1289, originalPrice: 1689, image: IMG.tools[2], productType: 'Composting' }),
  makeProduct({ name: 'Vermicomposting Bin / Kit', category: 'composting-products', categoryLabel: 'Plant Care', price: 1959, originalPrice: 2339, image: IMG.tools[0], productType: 'Composting' }),
  makeProduct({ name: 'Compost Accelerator Culture (200-500g)', category: 'composting-products', categoryLabel: 'Plant Care', price: 139, originalPrice: 159, image: IMG.tools[1], productType: 'Composting' }),
  makeProduct({ name: 'Kitchen Waste Composter', category: 'composting-products', categoryLabel: 'Plant Care', price: 5059, originalPrice: 6359, image: IMG.tools[2], productType: 'Composting' }),
  makeProduct({ name: 'Red Wiggler Earthworms, For Vermicompost (250g-1kg)', category: 'composting-products', categoryLabel: 'Plant Care', price: 519, originalPrice: 659, image: IMG.tools[0], productType: 'Composting' }),
];

// Mark roughly a quarter of the catalogue as bestsellers - deterministic
// (based on position in the array) so the badge stays stable across
// renders and page loads rather than re-rolling randomly each time.
PRODUCTS.forEach((product, index) => {
  product.isBestSeller = index % 4 === 0;
});

// Real care-profile metadata for the Indoor Plants filter sidebar (plant
// type, colour, indoor/outdoor suitability, light, water and ideal spot).
// Keyed by exact product name and based on how each plant actually grows -
// the base catalogue only ever filled these in for a handful of items, so
// most indoor plants were sharing one generic placeholder value. Filling
// them in properly (not inventing fictitious plants or options) is what
// makes the filter groups below meaningfully distinct instead of one giant
// bucket.
const INDOOR_PLANT_INFO = {
  'Money Plant / Golden Pothos': { type: 'Trailing & Climbing Plants', color: 'Green', indoorOutdoor: 'Indoor/Outdoor', light: 'Low Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Chinese Evergreen Aglaonema': { type: 'Foliage Plants', color: 'Green', light: 'Low Light', water: 'Water When Dry', location: 'Bedroom', maintenance: 'Low Maintenance' },
  'Corn Plant Dracaena': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Boston Fern Nephrolepis': { type: 'Ferns', color: 'Green', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'High Maintenance' },
  'Snake Plant Sansevieria': { type: 'Succulents', color: 'Green', indoorOutdoor: 'Indoor/Outdoor', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'ZZ Plant Zamioculcas': { type: 'Succulents', color: 'Green', light: 'Low Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Peace Lily Spathiphyllum': { type: 'Flowering Plants', color: 'White', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bedroom', maintenance: 'Medium Maintenance' },
  'Areca Palm': { type: 'Palms', color: 'Green', indoorOutdoor: 'Indoor/Outdoor', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Mini Succulent Trio': { type: 'Succulents', color: 'Green', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Phalaenopsis Orchid': { type: 'Orchids', color: 'Pink', light: 'Bright Indirect Light', water: 'Water When Dry', location: 'Bedroom', maintenance: 'High Maintenance' },
  'Chinese Evergreen (Aglaonema)': { type: 'Foliage Plants', color: 'Green', light: 'Low Light', water: 'Water When Dry', location: 'Bedroom', maintenance: 'Low Maintenance' },
  'Dumb Cane (Dieffenbachia)': { type: 'Foliage Plants', color: 'Multicolor', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Heartleaf Philodendron': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Low Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Calathea': { type: 'Foliage Plants', color: 'Multicolor', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'High Maintenance' },
  'Baby Rubber Plant (Peperomia)': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Water When Dry', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Fiddle Leaf Fig': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'High Maintenance' },
  'Rubber Plant': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Jade Plant': { type: 'Succulents', color: 'Green', indoorOutdoor: 'Indoor/Outdoor', light: 'Direct Sunlight', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Croton': { type: 'Foliage Plants', color: 'Multicolor', indoorOutdoor: 'Indoor/Outdoor', light: 'Direct Sunlight', water: 'Regular Watering', location: 'Balcony', maintenance: 'Medium Maintenance' },
  'Aloe Vera': { type: 'Succulents', color: 'Green', indoorOutdoor: 'Indoor/Outdoor', light: 'Direct Sunlight', water: 'Water Sparingly', location: 'Kitchen', maintenance: 'Low Maintenance' },
  'Cylindrical Snake Plant': { type: 'Succulents', color: 'Green', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Money Tree': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Dwarf Umbrella Tree (Schefflera)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'African Mask Plant (Alocasia)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Keep Soil Moist', location: 'Living Room', maintenance: 'High Maintenance' },
  'Elephant Ear (Colocasia)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Keep Soil Moist', location: 'Living Room', maintenance: 'High Maintenance' },
  'White Bird of Paradise (Strelitzia)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Prayer Plant (Maranta)': { type: 'Foliage Plants', color: 'Multicolor', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bedroom', maintenance: 'Medium Maintenance' },
  'Marble Queen Pothos': { type: 'Trailing & Climbing Plants', color: 'Multicolor', light: 'Low Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Variegated Monstera': { type: 'Foliage Plants', color: 'Multicolor', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Golden Hahnii Snake Plant': { type: 'Succulents', color: 'Multicolor', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Variegated Spider Plant': { type: 'Foliage Plants', color: 'Multicolor', light: 'Indirect Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'English Ivy': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Bathroom', maintenance: 'Medium Maintenance' },
  'String of Hearts': { type: 'Trailing & Climbing Plants', color: 'Multicolor', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'String of Pearls': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Water Sparingly', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Blushing Philodendron (Red)': { type: 'Foliage Plants', color: 'Red', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Swiss Cheese Plant (Monstera)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Pink Princess Philodendron': { type: 'Foliage Plants', color: 'Pink', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Arrowhead Plant (Syngonium)': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Low Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Cebu Blue Pothos': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Indirect Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Anthurium': { type: 'Flowering Plants', color: 'Red', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'African Violet': { type: 'Flowering Plants', color: 'Purple', light: 'Bright Indirect Light', water: 'Keep Soil Moist', location: 'Kitchen', maintenance: 'Medium Maintenance' },
  'Flaming Katy (Kalanchoe)': { type: 'Flowering Plants', color: 'Pink', light: 'Direct Sunlight', water: 'Water When Dry', location: 'Kitchen', maintenance: 'Low Maintenance' },
  'Money Plant (Water Culture)': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Arrowhead (Water Culture)': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Philodendron (Water Culture)': { type: 'Trailing & Climbing Plants', color: 'Green', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Lucky Bamboo': { type: 'Foliage Plants', color: 'Green', light: 'Low Light', water: 'Keep Soil Moist', location: 'Office Desk', maintenance: 'Low Maintenance' },
  'Nerve Plant (Fittonia)': { type: 'Foliage Plants', color: 'Multicolor', light: 'Low Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'High Maintenance' },
  'Baby Tears (Pilea)': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'Medium Maintenance' },
  'Spikemoss (Club Moss)': { type: 'Ferns', color: 'Green', light: 'Low Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'High Maintenance' },
  'Peacock Plant (Calathea Makoyana)': { type: 'Foliage Plants', color: 'Multicolor', light: 'Indirect Light', water: 'Keep Soil Moist', location: 'Bathroom', maintenance: 'High Maintenance' },
  'Parlor Palm': { type: 'Palms', color: 'Green', light: 'Low Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Chinese Money Plant (Pilea Peperomioides)': { type: 'Foliage Plants', color: 'Green', light: 'Bright Indirect Light', water: 'Water When Dry', location: 'Living Room', maintenance: 'Low Maintenance' },
  'Philodendron Gloriosum': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Queen Anthurium': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Variegated Monstera Adansonii': { type: 'Trailing & Climbing Plants', color: 'Multicolor', light: 'Bright Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
  'Black Gold Philodendron (Melanochrysum)': { type: 'Foliage Plants', color: 'Green', light: 'Indirect Light', water: 'Regular Watering', location: 'Living Room', maintenance: 'Medium Maintenance' },
};

// Maps the botanical assessment above onto the filter vocabulary the
// Indoor Plants filter sidebar actually shows. `plantType`, `location`
// and `color` are arrays (a plant can genuinely fit more than one
// bucket); the rest stay single-valued. Nothing here is invented - it's
// the same real per-plant facts, just expressed as the option set the
// filter UI uses.
const PLANT_TYPE_MAP = {
  'Foliage Plants': 'Foliage Plants',
  'Succulents': 'Succulents',
  'Ferns': 'Foliage Plants',
  'Palms': 'Palm Plants',
  'Trailing & Climbing Plants': 'Climbers',
  'Flowering Plants': 'Flowering Plants',
  'Orchids': 'Flowering Plants',
};

const LIGHT_MAP = {
  'Low Light': 'Low Light',
  'Indirect Light': 'Medium Light',
  'Bright Indirect Light': 'Bright Indirect Light',
  'Direct Sunlight': 'Direct Sunlight',
};

const WATER_MAP = {
  'Water Sparingly': 'Low Water',
  'Water When Dry': 'Once a Week',
  'Regular Watering': '2-3 Times a Week',
  'Keep Soil Moist': 'Frequent Watering',
};

const LOCATION_MAP = { 'Office Desk': 'Office' }; // everything else keeps its name

// Real, documented NASA Clean Air Study houseplants - not a guess.
const AIR_PURIFYING = new Set([
  'Money Plant / Golden Pothos', 'Snake Plant Sansevieria', 'Cylindrical Snake Plant',
  'Golden Hahnii Snake Plant', 'Peace Lily Spathiphyllum', 'Areca Palm',
  'Boston Fern Nephrolepis', 'Rubber Plant', 'ZZ Plant Zamioculcas', 'English Ivy',
  'Dwarf Umbrella Tree (Schefflera)', 'Dumb Cane (Dieffenbachia)',
  'Chinese Evergreen Aglaonema', 'Chinese Evergreen (Aglaonema)', 'Parlor Palm',
  'Variegated Spider Plant',
]);

// A few strong-light lovers get the plain "Bright Light" bucket instead of
// "Bright Indirect Light", for the same reason real nurseries separate them.
const BRIGHT_LIGHT_LOVERS = new Set([
  'Fiddle Leaf Fig', 'Areca Palm', 'Dwarf Umbrella Tree (Schefflera)', 'White Bird of Paradise (Strelitzia)',
]);

PRODUCTS.forEach((product, index) => {
  if (product.category !== 'indoor-plants') return;
  const info = INDOOR_PLANT_INFO[product.name] ?? {};
  const oldType = info.type ?? 'Foliage Plants';
  const oldLight = info.light ?? 'Indirect Light';
  const oldWater = info.water ?? 'Regular Watering';
  const oldLocation = info.location ?? 'Living Room';
  const oldMaintenance = info.maintenance ?? 'Medium Maintenance';
  const indoorOutdoor = info.indoorOutdoor ?? 'Indoor';
  const isIndoorOutdoor = indoorOutdoor === 'Indoor/Outdoor';

  const types = new Set([PLANT_TYPE_MAP[oldType] ?? 'Foliage Plants', 'Indoor Plants']);
  if (AIR_PURIFYING.has(product.name)) types.add('Air Purifying Plants');
  if (product.name === 'Aloe Vera') types.add('Medicinal Plants');
  if (isIndoorOutdoor) types.add('Outdoor Plants');

  const locations = new Set([LOCATION_MAP[oldLocation] ?? oldLocation]);
  if (isIndoorOutdoor) { locations.add('Balcony'); locations.add('Terrace'); }
  if (oldMaintenance === 'Low Maintenance') locations.add('Office');

  const maintenance = oldMaintenance === 'Medium Maintenance' ? 'Moderate'
    : oldMaintenance === 'High Maintenance' ? 'High Maintenance'
    : oldType === 'Succulents' ? 'Very Easy'
    : 'Easy';

  const light = BRIGHT_LIGHT_LOVERS.has(product.name) && oldLight === 'Bright Indirect Light'
    ? 'Bright Light'
    : (LIGHT_MAP[oldLight] ?? 'Medium Light');

  product.plantType = Array.from(types);
  product.light = light;
  product.location = Array.from(locations);
  product.indoorOutdoor = indoorOutdoor;
  product.maintenance = maintenance;
  product.water = WATER_MAP[oldWater] ?? '2-3 Times a Week';
  product.color = [info.color ?? 'Green'];
  // Deterministic (position-based) so a handful of products are out of
  // stock every load - lets the Availability filter and no-result state
  // actually be exercised, without randomising on every render.
  product.availability = index % 9 === 3 ? 'Out of Stock' : 'In Stock';
});

// ============================================================
// Filter metadata for every OTHER category (outdoor/decorative plants,
// seeds, pots & planters, plant care + gardening tools) - same idea as the
// Indoor Plants enrichment above: fill in real, category-appropriate
// values for fields the base catalogue didn't carry, so the reusable
// filter system (data/filterConfig.js) has real dynamic data to read on
// every page, not just Indoor Plants. Indoor Plants itself is untouched -
// every pass below explicitly skips it.
// ============================================================

const SEED_SLUGS_SET = new Set(['seeds', ...SEED_SUBCATEGORY_SLUGS]);
const POT_SLUGS_SET = new Set(['pots-planters', ...POT_SUBCATEGORY_SLUGS]);
const PLANT_CARE_SLUGS_SET = new Set(['plant-care', ...PLANT_CARE_SUBCATEGORY_SLUGS, 'gardening-tools']);
const NON_PLANT_SLUGS_SET = new Set([
  'indoor-plants', 'garden-decor', ...SEED_SLUGS_SET, ...POT_SLUGS_SET, ...PLANT_CARE_SLUGS_SET,
]);

const COLOR_KEYWORDS = [
  [/white/i, 'White'], [/red|scarlet|crimson/i, 'Red'], [/pink|rose(?!mary)/i, 'Pink'],
  [/yellow|golden|gold(?!en bamboo)/i, 'Yellow'], [/purple|violet|lavender/i, 'Purple'],
  [/orange|coral|copper/i, 'Orange'], [/blue/i, 'Blue'],
];
function colorFromName(name, fallback = 'Green') {
  for (const [re, color] of COLOR_KEYWORDS) {
    if (re.test(name)) return color;
  }
  return fallback;
}

// ---------- Plant family: every plant/greenery category except Indoor
// Plants (outdoor plants, bonsai, palms, succulents, cactus, ferns,
// orchids, herbs, medicinal/aromatic/fruit plants, landscaping stock,
// etc). Same shape as Indoor Plants, relabelled in filterConfig.js to
// match how these are actually shopped for outdoors (Sunlight / Water
// Requirement / Growth Rate). ----------
const PLANT_TYPE_BY_CATEGORY = {
  bonsai: 'Bonsai', palms: 'Palm Plants', cycads: 'Foliage Plants',
  succulents: 'Succulents', cactus: 'Cactus', 'table-top-plants': 'Foliage Plants',
  'mini-plants': 'Foliage Plants', orchids: 'Orchids', bromeliads: 'Bromeliads',
  ferns: 'Ferns', 'carnivorous-plants': 'Carnivorous Plants',
  'aquatic-pond-plants': 'Aquatic Plants', 'vertical-garden-plants': 'Foliage Plants',
  'green-wall-plants': 'Foliage Plants', 'terrace-garden-plants': 'Outdoor Plants',
  'balcony-plants': 'Outdoor Plants', 'hanging-basket-plants': 'Trailing Plants',
  'fruit-plants': 'Fruit Plants', herbs: 'Herbs', 'medicinal-plants': 'Medicinal Plants',
  'aromatic-plants': 'Aromatic Plants', 'spice-plants': 'Spice Plants',
  'sacred-plants': 'Sacred Plants', 'butterfly-garden-plants': 'Flowering Plants',
  'bee-friendly-plants': 'Flowering Plants', 'bird-attracting-plants': 'Flowering Plants',
  'fragrant-plants': 'Fragrant Plants', 'edible-flowers': 'Flowering Plants',
  'coastal-plants': 'Outdoor Plants', 'landscaping-trees': 'Trees',
  'landscaping-plants': 'Landscaping Plants',
};

// Category-level care baseline - real horticultural defaults (e.g.
// succulents/cactus genuinely are low-water/full-sun), not random filler.
const PLANT_CARE_PROFILE = {
  bonsai: { light: 'Bright Indirect Light', water: '2-3 Times a Week', maintenance: 'High Maintenance', growthRate: 'Slow', location: 'Terrace' },
  palms: { light: 'Bright Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Medium', location: 'Garden' },
  cycads: { light: 'Bright Light', water: 'Low Water', maintenance: 'Easy', growthRate: 'Slow', location: 'Garden' },
  succulents: { light: 'Direct Sunlight', water: 'Low Water', maintenance: 'Very Easy', growthRate: 'Slow', location: 'Balcony' },
  cactus: { light: 'Direct Sunlight', water: 'Low Water', maintenance: 'Very Easy', growthRate: 'Slow', location: 'Balcony' },
  'table-top-plants': { light: 'Medium Light', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Slow', location: 'Terrace' },
  'mini-plants': { light: 'Medium Light', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Slow', location: 'Balcony' },
  orchids: { light: 'Bright Indirect Light', water: 'Once a Week', maintenance: 'High Maintenance', growthRate: 'Slow', location: 'Terrace' },
  bromeliads: { light: 'Bright Indirect Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Slow', location: 'Terrace' },
  ferns: { light: 'Medium Light', water: 'Frequent Watering', maintenance: 'Moderate', growthRate: 'Medium', location: 'Balcony' },
  'carnivorous-plants': { light: 'Bright Light', water: 'Frequent Watering', maintenance: 'High Maintenance', growthRate: 'Slow', location: 'Terrace' },
  'aquatic-pond-plants': { light: 'Bright Light', water: 'Frequent Watering', maintenance: 'Moderate', growthRate: 'Fast', location: 'Garden' },
  'vertical-garden-plants': { light: 'Medium Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Fast', location: 'Garden' },
  'green-wall-plants': { light: 'Medium Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Fast', location: 'Garden' },
  'terrace-garden-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Medium', location: 'Terrace' },
  'balcony-plants': { light: 'Bright Light', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Balcony' },
  'hanging-basket-plants': { light: 'Bright Indirect Light', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Fast', location: 'Balcony' },
  'fruit-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Medium', location: 'Garden' },
  herbs: { light: 'Bright Light', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Fast', location: 'Balcony' },
  'medicinal-plants': { light: 'Direct Sunlight', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'aromatic-plants': { light: 'Bright Light', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'spice-plants': { light: 'Bright Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Medium', location: 'Garden' },
  'sacred-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'butterfly-garden-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Fast', location: 'Garden' },
  'bee-friendly-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Fast', location: 'Garden' },
  'bird-attracting-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'fragrant-plants': { light: 'Bright Light', water: '2-3 Times a Week', maintenance: 'Moderate', growthRate: 'Medium', location: 'Garden' },
  'edible-flowers': { light: 'Direct Sunlight', water: 'Once a Week', maintenance: 'Easy', growthRate: 'Fast', location: 'Balcony' },
  'coastal-plants': { light: 'Direct Sunlight', water: 'Low Water', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'landscaping-trees': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Slow', location: 'Garden' },
  'landscaping-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
  'outdoor-plants': { light: 'Direct Sunlight', water: '2-3 Times a Week', maintenance: 'Easy', growthRate: 'Medium', location: 'Garden' },
};

const OUTDOOR_LOCATIONS = ['Garden', 'Balcony', 'Terrace'];
const FLOWERING_KEYWORDS = /hibiscus|ixora|oleander|jasmine|bougainvillea|marigold|petunia|zinnia|cockscomb|celosia|vinca|sadabahar|pentas|ruellia|gaillardia|portulaca|eranthemum|caricature|hedge(?!.*fig)/i;
const FAST_GROWTH_KEYWORDS = /bamboo|grass|creeper|vine|ivy/i;

PRODUCTS.forEach((product, index) => {
  if (NON_PLANT_SLUGS_SET.has(product.category)) return; // handled by their own passes below (or already done, for indoor-plants)
  const profile = PLANT_CARE_PROFILE[product.category] ?? PLANT_CARE_PROFILE['outdoor-plants'];
  const baseType = PLANT_TYPE_BY_CATEGORY[product.category]
    ?? (FLOWERING_KEYWORDS.test(product.name) ? 'Flowering Plants' : 'Foliage Plants');
  product.plantType = [baseType];
  product.light = profile.light;
  product.water = profile.water;
  product.maintenance = profile.maintenance;
  product.growthRate = FAST_GROWTH_KEYWORDS.test(product.name) ? 'Fast' : profile.growthRate;
  // The generic "outdoor-plants" bucket is a mixed 65-item catalogue, so it
  // rotates across locations for real variety; every dedicated category
  // (succulents, ferns, etc.) uses its own fixed, realistic default.
  product.location = product.category === 'outdoor-plants'
    ? [OUTDOOR_LOCATIONS[index % OUTDOOR_LOCATIONS.length]]
    : [profile.location];
  product.color = [colorFromName(product.name)];
  product.availability = index % 9 === 3 ? 'Out of Stock' : 'In Stock';
});

// ---------- Seed family ----------
const SEED_TYPE_BY_CATEGORY = {
  seeds: 'Seeds', 'vegetable-seeds': 'Vegetable Seeds', 'flower-seeds': 'Flower Seeds',
  'herb-seeds': 'Herb Seeds', 'fruit-seeds': 'Fruit Seeds', 'microgreen-seeds': 'Microgreen Seeds',
  'lawn-grass-seeds': 'Lawn Grass Seeds', 'fodder-seeds': 'Fodder Seeds',
  'medicinal-seeds': 'Medicinal Seeds', 'exotic-seeds': 'Exotic Seeds',
  'native-ornamental-seeds': 'Native & Ornamental Seeds',
};
const SEED_LIGHT_BY_CATEGORY = {
  'herb-seeds': 'Bright Light', 'microgreen-seeds': 'Medium Light',
  'medicinal-seeds': 'Bright Light', 'exotic-seeds': 'Bright Indirect Light',
};
const GROWING_SEASONS = ['Summer', 'Winter', 'Monsoon', 'All Season'];
const GERMINATION_TIMES = ['7-14 Days', '14-21 Days', '21-30 Days'];
const PACK_SIZES_SEEDS = ['10 Seeds', '25 Seeds', '50 Seeds', '100 Seeds'];

PRODUCTS.forEach((product, index) => {
  if (!SEED_SLUGS_SET.has(product.category)) return;
  product.seedType = SEED_TYPE_BY_CATEGORY[product.category] ?? 'Seeds';
  product.growingSeason = GROWING_SEASONS[index % GROWING_SEASONS.length];
  product.light = SEED_LIGHT_BY_CATEGORY[product.category] ?? 'Direct Sunlight';
  product.germinationTime = GERMINATION_TIMES[index % GERMINATION_TIMES.length];
  product.packSize = PACK_SIZES_SEEDS[index % PACK_SIZES_SEEDS.length];
  product.organic = index % 3 === 0 ? 'Non-Organic' : 'Organic';
  product.availability = index % 9 === 3 ? 'Out of Stock' : 'In Stock';
});

// ---------- Pots & Planters family ----------
const POT_MATERIAL_BY_CATEGORY = {
  'terracotta-pots': 'Terracotta', 'ceramic-pots': 'Ceramic', 'plastic-pots': 'Plastic',
  'fibre-planters': 'Fiber', 'metal-planters': 'Metal', 'wooden-planters': 'Wood',
  'cement-planters': 'Cement', 'coco-fibre-pots': 'Coco Fiber', 'rattan-planters': 'Rattan',
};
function materialFromName(name, fallback) {
  if (/terracotta/i.test(name)) return 'Terracotta';
  if (/ceramic/i.test(name)) return 'Ceramic';
  if (/plastic/i.test(name)) return 'Plastic';
  if (/metal/i.test(name)) return 'Metal';
  if (/wood/i.test(name)) return 'Wood';
  if (/cement|rcc|concrete/i.test(name)) return 'Cement';
  if (/fib(re|er)/i.test(name)) return 'Fiber';
  if (/rattan/i.test(name)) return 'Rattan';
  return fallback;
}
function shapeFromName(name) {
  if (/rimmed/i.test(name)) return 'Rimmed';
  if (/ridged|grooved/i.test(name)) return 'Ridged';
  if (/long tom/i.test(name)) return 'Tall (Long Tom)';
  if (/bonsai|shallow/i.test(name)) return 'Shallow Tray';
  if (/chettinad/i.test(name)) return 'Traditional';
  return 'Round';
}
const POT_TYPE_BY_CATEGORY = {
  'hanging-planters': 'Hanging Planter', 'railing-planters': 'Railing Planter',
  'self-watering-planters': 'Self-Watering Planter', 'window-box-planters': 'Window Box',
  'vertical-tower-planters': 'Vertical Tower', 'balcony-planters': 'Balcony Planter',
  'bonsai-pots-subcat': 'Bonsai Tray', 'upcycled-planters': 'Upcycled Planter',
  'coco-fibre-pots': 'Coco Fiber Pot', 'rattan-planters': 'Rattan Planter',
};
const POT_MATERIAL_COLOR = {
  Terracotta: 'Orange', Ceramic: 'White', Plastic: 'Green', Metal: 'Grey',
  Wood: 'Brown', Cement: 'Grey', Fiber: 'Brown', Rattan: 'Brown',
};
const POT_OUTDOOR_CATEGORIES = new Set(['railing-planters', 'window-box-planters', 'balcony-planters', 'vertical-tower-planters']);

PRODUCTS.forEach((product, index) => {
  if (!POT_SLUGS_SET.has(product.category)) return;
  const material = POT_MATERIAL_BY_CATEGORY[product.category] ?? materialFromName(product.name, 'Terracotta');
  product.material = material;
  product.shape = shapeFromName(product.name);
  product.color = [colorFromName(product.name, POT_MATERIAL_COLOR[material] ?? 'Terracotta')];
  product.indoorOutdoor = POT_OUTDOOR_CATEGORIES.has(product.category) ? 'Outdoor' : 'Indoor & Outdoor';
  product.drainage = product.category === 'self-watering-planters' ? 'No' : (index % 6 === 0 ? 'No' : 'Yes');
  product.productType = POT_TYPE_BY_CATEGORY[product.category]
    ?? (/bonsai/i.test(product.name) ? 'Bonsai Tray' : /long tom/i.test(product.name) ? 'Long Tom Pot' : 'Standard Pot');
  product.availability = index % 9 === 3 ? 'Out of Stock' : 'In Stock';
});

// ---------- Plant Care (+ Gardening Tools) family ----------
const CARE_PRODUCT_TYPE_BY_CATEGORY = {
  'potting-media': 'Potting Mix / Soil', 'organic-fertilizers': 'Organic Fertilizer',
  'chemical-fertilizers': 'Chemical Fertilizer', 'liquid-nutrients': 'Liquid Nutrients & Tonics',
  biofertilizers: 'Biofertilizer', 'plant-protection': 'Plant Protection',
  'propagation-supplies': 'Propagation Supplies', 'composting-products': 'Composting Product',
  'gardening-tools': 'Gardening Tool',
};
const CARE_ORGANIC_CHEMICAL_BY_CATEGORY = {
  'potting-media': 'Organic', 'organic-fertilizers': 'Organic', biofertilizers: 'Organic',
  'composting-products': 'Organic', 'chemical-fertilizers': 'Chemical', 'plant-protection': 'Chemical',
  'liquid-nutrients': 'Organic',
  // propagation-supplies & gardening-tools intentionally omitted - a tool
  // isn't "organic or chemical", so that filter group simply won't render
  // on those two pages instead of showing a meaningless option.
};
const CARE_PACK_SIZES = ['250g', '500g', '1kg', '5kg'];
const CARE_PACKAGED_CATEGORIES = new Set([
  'potting-media', 'organic-fertilizers', 'chemical-fertilizers', 'liquid-nutrients',
  'biofertilizers', 'composting-products',
]);

PRODUCTS.forEach((product, index) => {
  if (!PLANT_CARE_SLUGS_SET.has(product.category)) return;
  product.productType = CARE_PRODUCT_TYPE_BY_CATEGORY[product.category] ?? product.categoryLabel;
  const oc = CARE_ORGANIC_CHEMICAL_BY_CATEGORY[product.category];
  if (oc) product.organicOrChemical = oc;
  if (CARE_PACKAGED_CATEGORIES.has(product.category)) {
    product.packSize = CARE_PACK_SIZES[index % CARE_PACK_SIZES.length];
  }
  product.availability = index % 9 === 3 ? 'Out of Stock' : 'In Stock';
});

export function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getGiftProducts() {
  return PRODUCTS.filter((p) => p.gift);
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getBestSellers(count = 8) {
  return [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, count);
}
