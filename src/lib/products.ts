export type Category = "dry" | "pouch" | "canned" | "litter" | "accessories";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  image: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  weight: string;
  petType: "cat" | "dog" | "both";
  featured: boolean;
  bestSeller: boolean;
  onSale: boolean;
};

export const categories: { slug: Category | "all"; label: string }[] = [
  { slug: "all", label: "All Products" },
  { slug: "dry", label: "Cat Dry Food" },
  { slug: "pouch", label: "Pouch" },
  { slug: "canned", label: "Canned Food" },
  { slug: "litter", label: "Cat Litter" },
  { slug: "accessories", label: "Accessories" },
];

const dryPacks = [
  "/images/product-velvetpurr.png",
  "/images/product-silkwhisker.png",
  "/images/product-grovebite.png",
  "/images/product-farmharvest.png",
  "/images/product-trailguard.png",
  "/images/product-oceancatch.png",
  "/images/product-prairiepup.png",
  "/images/product-goldenyears.png",
  "/images/product-littlepaws.png",
];
const pouchPacks = [
  "/images/product-honeybone.png",
  "/images/product-berrybites.png",
  "/images/product-mintfresh.png",
];
const cannedPacks = [
  "/images/product-silkwhisker.png",
  "/images/product-velvetpurr.png",
];
const litterPacks = [
  "/images/product-trailguard.png",
  "/images/product-prairiepup.png",
  "/images/product-farmharvest.png",
  "/images/product-grovebite.png",
];
const accessoryPacks = [
  "/images/product-mintfresh.png",
  "/images/product-honeybone.png",
  "/images/product-berrybites.png",
  "/images/product-oceancatch.png",
];

function pack(category: Category, index: number) {
  const lists: Record<Category, string[]> = {
    dry: dryPacks,
    pouch: pouchPacks,
    canned: cannedPacks,
    litter: litterPacks,
    accessories: accessoryPacks,
  };
  const list = lists[category];
  return list[index % list.length];
}

export const products: Product[] = [
  {
    slug: "bonacibo-adult-chicken-anchovy-2kg",
    name: "Bonacibo Adult Chicken & Anchovy & Rice 2kg",
    brand: "Bonacibo",
    category: "dry",
    price: 1170,
    compareAtPrice: 1200,
    image: pack("dry", 0),
    shortDescription: "Everyday adult kibble with chicken, anchovy, and rice.",
    description:
      "Bonacibo Adult is a complete dry food for indoor and outdoor cats. Chicken and anchovy lead the bowl, rice keeps energy even, and the 2kg bag is the size most Uttara households finish before the kibble goes dull.",
    ingredients: ["Chicken", "Anchovy", "Rice", "Chicken fat", "Vitamins", "Taurine"],
    weight: "2 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "bonacibo-adult-chicken-anchovy-5kg",
    name: "Bonacibo Adult Chicken & Anchovy & Rice 5kg",
    brand: "Bonacibo",
    category: "dry",
    price: 2800,
    compareAtPrice: 2850,
    image: pack("dry", 1),
    shortDescription: "The household bag for multi-cat homes.",
    description:
      "Same Bonacibo adult recipe in a 5kg sack. Better value if two cats share a bowl. Store it sealed and off the floor - Dhaka humidity is not kind to an open bag.",
    ingredients: ["Chicken", "Anchovy", "Rice", "Chicken fat", "Vitamins", "Taurine"],
    weight: "5 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "bonacibo-kitten-chicken-anchovy-1-5kg",
    name: "BonaCibo Kitten Chicken with Anchovy & Rice 1.5kg",
    brand: "Bonacibo",
    category: "dry",
    price: 1050,
    compareAtPrice: 1100,
    image: "/images/product-littlepaws.png",
    shortDescription: "Smaller kibble for growing kittens.",
    description:
      "BonaCibo Kitten is rolled smaller and richer than the adult bag. Chicken, anchovy, and rice support the first year. Transition slowly from the breeder or shelter food over seven days.",
    ingredients: ["Chicken", "Anchovy", "Rice", "Egg", "DHA", "Taurine"],
    weight: "1.5 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "pets-choice-tuna-chicken-3kg",
    name: "Pet’s Choice Tuna & Chicken 3kg",
    brand: "Pet’s Choice",
    category: "dry",
    price: 1550,
    compareAtPrice: 1600,
    image: pack("dry", 3),
    shortDescription: "Mid-size tuna and chicken bag for adult cats.",
    description:
      "Pet’s Choice Tuna & Chicken is the bag we send home when someone wants a familiar flavour without jumping to a 7kg sack. Crunchy, fish-forward, and easy to portion.",
    ingredients: ["Tuna", "Chicken", "Cereals", "Chicken fat", "Omega oils", "Taurine"],
    weight: "3 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "pets-choice-adult-tuna-chicken-500g",
    name: "Pet’s Choice Adult Tuna & Chicken 500gm",
    brand: "Pet’s Choice",
    category: "dry",
    price: 300,
    compareAtPrice: 350,
    image: pack("dry", 4),
    shortDescription: "Trial size for picky eaters.",
    description:
      "A 500g bag so you can test a protein before you commit to 3kg. If the cat finishes it, step up to the larger Pet’s Choice bags on the same wall.",
    ingredients: ["Tuna", "Chicken", "Cereals", "Chicken fat", "Taurine"],
    weight: "500 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "pets-choice-all-life-omega-500g",
    name: "Pet’s Choice All Life Chicken & Omega 3 500gm",
    brand: "Pet’s Choice",
    category: "dry",
    price: 300,
    compareAtPrice: 330,
    image: pack("dry", 5),
    shortDescription: "Omega-forward chicken recipe in a starter bag.",
    description:
      "All Life Chicken & Omega 3 is mixed for cats of mixed ages in one household. The 500g bag is the right first step if you are leaving grocery kibble.",
    ingredients: ["Chicken", "Omega-3 oil", "Cereals", "Vitamins", "Taurine"],
    weight: "500 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "pets-choice-all-life-omega-3kg",
    name: "Pet’s Choice All Life Chicken & Omega 3 Recipe 3kg",
    brand: "Pet’s Choice",
    category: "dry",
    price: 1550,
    compareAtPrice: 1600,
    image: pack("dry", 6),
    shortDescription: "The family-size omega recipe.",
    description:
      "Same All Life formula in 3kg. Coat looks better after two bags if the previous food was low on oil. Keep the zip closed between scoops.",
    ingredients: ["Chicken", "Omega-3 oil", "Cereals", "Vitamins", "Taurine"],
    weight: "3 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "pets-choice-tuna-chicken-1kg",
    name: "Pet’s Choice Cat Dry Food Tuna & Chicken 1kg",
    brand: "Pet’s Choice",
    category: "dry",
    price: 600,
    compareAtPrice: 650,
    image: pack("dry", 7),
    shortDescription: "One-kilo tuna and chicken for weekly top-ups.",
    description:
      "The 1kg Pet’s Choice bag is what most first-time buyers take home. Enough for a week or two, light enough for a bike delivery.",
    ingredients: ["Tuna", "Chicken", "Cereals", "Chicken fat", "Taurine"],
    weight: "1 kg",
    petType: "cat",
    featured: false,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "pets-choice-kitten-goat-milk-1kg",
    name: "Pet’s Choice Kitten Chicken & Goat Milk 1kg",
    brand: "Pet’s Choice",
    category: "dry",
    price: 600,
    compareAtPrice: 630,
    image: "/images/product-littlepaws.png",
    shortDescription: "Kitten kibble with goat milk for softer tummies.",
    description:
      "Chicken and goat milk for kittens who still want something closer to a creamier bowl. Pair with a wet pouch at night if they eat too fast.",
    ingredients: ["Chicken", "Goat milk", "Rice", "Egg", "Taurine"],
    weight: "1 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "purina-one-urinary-care-1-2kg",
    name: "Purina One Urinary Care 1.2kg",
    brand: "Purina One",
    category: "dry",
    price: 2000,
    compareAtPrice: 2100,
    image: pack("dry", 9),
    shortDescription: "Urinary-care formula for adult cats.",
    description:
      "Purina One Urinary Care is the bag we point to when a clinic has already mentioned crystals or a picky drinker. It is not a substitute for a vet visit - it is the food we keep when that visit already happened.",
    ingredients: ["Chicken", "Rice", "Corn protein", "Minerals", "Taurine", "Vitamin E"],
    weight: "1.2 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "smartheart-adult-chicken-tuna-1-2kg",
    name: "SmartHeart Adult Chicken & Tuna 1.2kg",
    brand: "SmartHeart",
    category: "dry",
    price: 750,
    compareAtPrice: 780,
    image: pack("dry", 10),
    shortDescription: "The most asked-for SmartHeart size.",
    description:
      "Chicken and tuna in the 1.2kg SmartHeart bag. This is the default adult food on our wall - familiar, crunchy, and easy to find again next month.",
    ingredients: ["Chicken", "Tuna", "Cereals", "Chicken fat", "Vitamins", "Taurine"],
    weight: "1.2 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "smartheart-adult-chicken-tuna-3kg",
    name: "SmartHeart Adult Chicken & Tuna 3kg",
    brand: "SmartHeart",
    category: "dry",
    price: 1650,
    compareAtPrice: 1700,
    image: pack("dry", 11),
    shortDescription: "Three kilos of the house favourite.",
    description:
      "Same chicken and tuna recipe in 3kg. Free delivery often kicks in when this bag shares a cart with litter or a pouch sleeve.",
    ingredients: ["Chicken", "Tuna", "Cereals", "Chicken fat", "Vitamins", "Taurine"],
    weight: "3 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "smartheart-adult-chicken-tuna-480g",
    name: "SmartHeart Adult Chicken & Tuna 480gm",
    brand: "SmartHeart",
    category: "dry",
    price: 350,
    compareAtPrice: 380,
    image: pack("dry", 12),
    shortDescription: "Small bag for guests, fosters, or a first try.",
    description:
      "480g is the right size if you are fostering or your cat still shops by smell. If they finish it, move to 1.2kg on the next order.",
    ingredients: ["Chicken", "Tuna", "Cereals", "Chicken fat", "Taurine"],
    weight: "480 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "smartheart-adult-chicken-tuna-7kg",
    name: "SmartHeart Adult Chicken & Tuna 7kg",
    brand: "SmartHeart",
    category: "dry",
    price: 3300,
    compareAtPrice: 3500,
    image: pack("dry", 13),
    shortDescription: "Warehouse-size bag for multi-cat homes.",
    description:
      "7kg of SmartHeart chicken and tuna. We send a rider who can carry it upstairs. Keep it sealed; split into a kitchen tub if the monsoon is on.",
    ingredients: ["Chicken", "Tuna", "Cereals", "Chicken fat", "Vitamins", "Taurine"],
    weight: "7 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "smartheart-adult-salmon-3kg",
    name: "SmartHeart Adult Salmon 3kg",
    brand: "SmartHeart",
    category: "dry",
    price: 1650,
    compareAtPrice: 1700,
    image: pack("dry", 14),
    shortDescription: "Salmon-first kibble for coats that look dull.",
    description:
      "SmartHeart Adult Salmon is the swap we suggest when chicken kibble leaves the coat flat. Fish-forward, still an everyday complete food.",
    ingredients: ["Salmon", "Cereals", "Fish oil", "Vitamins", "Taurine"],
    weight: "3 kg",
    petType: "cat",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "smartheart-adult-tuna-shrimp-3kg",
    name: "SmartHeart Adult Tuna & Shrimp 3kg",
    brand: "SmartHeart",
    category: "dry",
    price: 1650,
    compareAtPrice: 1700,
    image: pack("dry", 15),
    shortDescription: "Tuna and shrimp for cats bored of chicken.",
    description:
      "A slightly richer SmartHeart bag. Use it as a rotation protein, not a sudden full swap, if the cat has a sensitive stomach.",
    ingredients: ["Tuna", "Shrimp", "Cereals", "Fish oil", "Taurine"],
    weight: "3 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "smartheart-kitten-1-1kg",
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 1.1kg",
    brand: "SmartHeart",
    category: "dry",
    price: 700,
    compareAtPrice: 750,
    image: "/images/product-littlepaws.png",
    shortDescription: "Kitten growth kibble with egg and milk.",
    description:
      "The 1.1kg kitten bag most new cat parents leave with. Smaller pieces, extra fat, and a feeding guide on the back we will mark for your kitten’s weight.",
    ingredients: ["Chicken", "Fish", "Egg", "Milk powder", "DHA", "Taurine"],
    weight: "1.1 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "smartheart-kitten-450g",
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 450gm",
    brand: "SmartHeart",
    category: "dry",
    price: 350,
    compareAtPrice: 370,
    image: "/images/product-littlepaws.png",
    shortDescription: "Starter kitten bag.",
    description:
      "Enough for the first week after adoption. If stools stay firm, step up to 1.1kg or 2.8kg.",
    ingredients: ["Chicken", "Fish", "Egg", "Milk powder", "Taurine"],
    weight: "450 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "smartheart-kitten-2-8kg",
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 2.8kg",
    brand: "SmartHeart",
    category: "dry",
    price: 1600,
    compareAtPrice: 1650,
    image: "/images/product-littlepaws.png",
    shortDescription: "The growing-kitten sack.",
    description:
      "2.8kg covers a fast-growing kitten without a weekly shop run. Keep a wet pouch for dinner so they do not inhale only dry.",
    ingredients: ["Chicken", "Fish", "Egg", "Milk powder", "DHA", "Taurine"],
    weight: "2.8 kg",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "drools-cat-biscuit-400g",
    name: "Drools Cat Biscuit 400g Jar",
    brand: "Drools",
    category: "pouch",
    price: 550,
    compareAtPrice: 600,
    image: pack("pouch", 0),
    shortDescription: "Crunchy jar treats for training and evenings.",
    description:
      "Oven-style cat biscuits in a 400g jar. Count them as treats, not dinner. A handful after play is plenty.",
    ingredients: ["Cereals", "Chicken", "Fat", "Vitamins"],
    weight: "400 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "drools-cat-biscuits-110g",
    name: "Drools Cat Biscuits 110gm",
    brand: "Drools",
    category: "pouch",
    price: 220,
    compareAtPrice: 250,
    image: pack("pouch", 1),
    shortDescription: "Pocket-size treat bag.",
    description:
      "110g of Drools biscuits for a weekend visit or a first treat test. Not a meal.",
    ingredients: ["Cereals", "Chicken", "Fat"],
    weight: "110 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "deliver-your-love-chicken-egg-200g",
    name: "Deliver Your Love Chicken & Egg Yolk 200gm",
    brand: "Deliver Your Love",
    category: "pouch",
    price: 550,
    compareAtPrice: 600,
    image: pack("pouch", 2),
    shortDescription: "Soft chicken and egg snack.",
    description:
      "A richer snack than a dry biscuit. Break pieces for training. The 40৳ 200g line on the old site was a different SKU - this is the jar we keep on the wall.",
    ingredients: ["Chicken", "Egg yolk", "Glycerin", "Vitamins"],
    weight: "200 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "whiskas-junior-tuna-pouch",
    name: "Whiskas Junior Tuna Pouch 85g",
    brand: "Whiskas",
    category: "pouch",
    price: 80,
    compareAtPrice: 90,
    image: pack("pouch", 3),
    shortDescription: "Single-serve junior tuna pouch.",
    description:
      "An 85g tuna pouch for kittens. Serve at room temperature. Pair with kitten kibble so the bowl is not only gravy.",
    ingredients: ["Tuna", "Gravy", "Vitamins", "Taurine"],
    weight: "85 g",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "whiskas-adult-ocean-fish-pouch",
    name: "Whiskas Adult Ocean Fish Pouch 85g",
    brand: "Whiskas",
    category: "pouch",
    price: 75,
    compareAtPrice: 85,
    image: pack("pouch", 4),
    shortDescription: "Adult ocean-fish pouch for dinner toppers.",
    description:
      "Spoon over dry food or serve alone. We sell these by the sleeve if you want a week’s worth packed together.",
    ingredients: ["Ocean fish", "Gravy", "Vitamins", "Taurine"],
    weight: "85 g",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "sheba-chicken-fine-flakes",
    name: "Sheba Chicken Fine Flakes 85g",
    brand: "Sheba",
    category: "pouch",
    price: 120,
    compareAtPrice: 135,
    image: pack("pouch", 5),
    shortDescription: "Fine chicken flakes in gravy.",
    description:
      "Sheba is the pouch picky adults usually finish. Fine flakes, strong smell, small serving. Keep a few in the fridge after opening - not overnight on the counter.",
    ingredients: ["Chicken", "Gravy", "Vitamins", "Taurine"],
    weight: "85 g",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "whiskas-canned-tuna-400g",
    name: "Whiskas Canned Tuna 400g",
    brand: "Whiskas",
    category: "canned",
    price: 280,
    compareAtPrice: 300,
    image: pack("canned", 0),
    shortDescription: "Family-size tuna can.",
    description:
      "400g of tuna pâté. Cover and refrigerate after opening. Use within 48 hours in this climate.",
    ingredients: ["Tuna", "Broth", "Vitamins", "Taurine"],
    weight: "400 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "fancy-feast-classic-salmon",
    name: "Fancy Feast Classic Salmon 85g",
    brand: "Fancy Feast",
    category: "canned",
    price: 180,
    compareAtPrice: 200,
    image: pack("canned", 1),
    shortDescription: "Classic salmon pâté in a small can.",
    description:
      "A richer dinner than a pouch. One can is a full meal for most adults; split for smaller cats.",
    ingredients: ["Salmon", "Meat by-products", "Vitamins", "Taurine"],
    weight: "85 g",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "catsan-ultra-5l",
    name: "Catsan Ultra Clumping Litter 5L",
    brand: "Catsan",
    category: "litter",
    price: 850,
    compareAtPrice: 900,
    image: pack("litter", 0),
    shortDescription: "White clumping clay for daily scooping.",
    description:
      "Catsan Ultra clumps tight enough for a once-a-day scoop. 5L is a two-cat week in a standard tray.",
    ingredients: ["Clumping clay", "Odour control"],
    weight: "5 L",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "fresh-step-multicat",
    name: "Fresh Step Multi-Cat Litter 6.35kg",
    brand: "Fresh Step",
    category: "litter",
    price: 2200,
    compareAtPrice: 2400,
    image: pack("litter", 1),
    shortDescription: "Carbon-backed litter for multi-cat trays.",
    description:
      "The bag we send when two trays share a small apartment. Carbon helps between scoops. Still change the box weekly in monsoon.",
    ingredients: ["Clumping clay", "Carbon", "Odour control"],
    weight: "6.35 kg",
    petType: "cat",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "pine-litter-10l",
    name: "Pine Cat Litter 10L",
    brand: "Pet Delight",
    category: "litter",
    price: 650,
    compareAtPrice: 700,
    image: pack("litter", 2),
    shortDescription: "Lighter pine pellets with a wood smell.",
    description:
      "Pine pellets for homes that hate clay dust. Stir daily. Some cats need a week to accept the new texture.",
    ingredients: ["Compressed pine"],
    weight: "10 L",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "litter-deodorizing-beads",
    name: "Cat Litter Deodorizing Beads",
    brand: "Pet Delight",
    category: "litter",
    price: 450,
    compareAtPrice: 480,
    image: pack("litter", 3),
    shortDescription: "Beads that sit under the scoop, not on top.",
    description:
      "Mix a handful through fresh litter. They are a helper for monsoon weeks, not a replacement for a full change.",
    ingredients: ["Fragrance beads", "Absorbent core"],
    weight: "500 g",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "portable-cat-bag",
    name: "Portable pet crossbody bag",
    brand: "Pet Delight",
    category: "accessories",
    price: 1500,
    compareAtPrice: 1650,
    image: pack("accessories", 0),
    shortDescription: "Breathable travel bag for cats and small dogs.",
    description:
      "A ventilated crossbody for vet runs and Uttara errands. Spacious enough for a small dog or an adult cat who will sit. Do not use it as an all-day crate.",
    ingredients: ["Mesh", "Oxford cloth", "Plastic frame"],
    weight: "1 bag",
    petType: "both",
    featured: true,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "cat-food-bowl-3in1",
    name: "Cat food bowl 3-in-1",
    brand: "Pet Delight",
    category: "accessories",
    price: 700,
    compareAtPrice: 750,
    image: pack("accessories", 1),
    shortDescription: "Food, water, and a raised stand in one.",
    description:
      "Three bowls on a stand so whiskers are not crushed against the floor. Wash daily. Stainless inserts come out for the sink.",
    ingredients: ["Stainless steel", "Plastic stand"],
    weight: "1 set",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
  {
    slug: "pet-grooming-dryer",
    name: "Pet Grooming Dryer",
    brand: "Pet Delight",
    category: "accessories",
    price: 3450,
    compareAtPrice: 3850,
    image: pack("accessories", 2),
    shortDescription: "Force dryer for post-bath coats.",
    description:
      "A grooming dryer for thick coats after a bath. Start on low. Not a human hair dryer - the airflow is meant for fur, not skin up close.",
    ingredients: ["Motor housing", "Hose", "Nozzles"],
    weight: "1 unit",
    petType: "both",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "pet-grooming-clipper-kit",
    name: "Pet Grooming Hair Clipper Kit",
    brand: "Pet Delight",
    category: "accessories",
    price: 1650,
    compareAtPrice: 1850,
    image: pack("accessories", 3),
    shortDescription: "Home clipper kit with guards.",
    description:
      "Quiet enough for most cats if you start at the back, not the face. Oil the blade. The kit includes guards for a first home trim.",
    ingredients: ["Clipper", "Guards", "Oil", "Brush"],
    weight: "1 kit",
    petType: "both",
    featured: true,
    bestSeller: true,
    onSale: true,
  },
  {
    slug: "pet-scratching-mat",
    name: "Pet Scratching Mat",
    brand: "Pet Delight",
    category: "accessories",
    price: 950,
    compareAtPrice: 1050,
    image: pack("accessories", 4),
    shortDescription: "Sisal mat that saves the sofa.",
    description:
      "A flat sisal mat you can park in front of the couch. Sprinkle a little catnip the first week. Replace when the weave goes soft.",
    ingredients: ["Sisal", "Backing cloth"],
    weight: "1 mat",
    petType: "cat",
    featured: false,
    bestSeller: false,
    onSale: true,
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getBestSellers() {
  return products.filter((product) => product.bestSeller).slice(0, 4);
}

export function getFeaturedShop() {
  return products.filter((product) => product.featured && !product.bestSeller).slice(0, 4);
}

export function getByCategory(category: Category, limit = 8) {
  return products.filter((product) => product.category === category).slice(0, limit);
}

export function getRelated(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((product) => product.slug !== slug && product.category === current.category)
    .slice(0, limit);
}

export function searchProducts(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return products;
  return products.filter((product) => {
    const haystack = [product.name, product.brand, product.category, product.shortDescription]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function filterProducts(options: {
  category?: string;
  sale?: boolean;
  petType?: string;
  sort?: string;
}) {
  let list = [...products];
  if (options.category && options.category !== "all") {
    list = list.filter((product) => product.category === options.category);
  }
  if (options.sale) {
    list = list.filter((product) => product.onSale);
  }
  if (options.petType === "dog" || options.petType === "cat") {
    list = list.filter(
      (product) => product.petType === options.petType || product.petType === "both",
    );
  }
  switch (options.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    default:
      list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));
  }
  return list;
}

export const SALE_COUPON = "DELIGHT30";
export const SALE_PERCENT = 30;
