export type ProductBnFields = {
  name?: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
};

export const productBn: Record<string, ProductBnFields> = {
  "bonacibo-adult-chicken-anchovy-2kg": {
    name: "Bonacibo Adult Chicken & Anchovy & Rice 2kg",
    shortDescription: "মুরগি, এঙ্কোভি ও চালে তৈরি প্রতিদিনের adult kibble।",
    description:
      "Bonacibo Adult ঘরের ভেতর ও বাইরের বিড়ালদের জন্য সম্পূর্ণ ড্রাই ফুড। বাটিতে প্রথমে মুরগি আর এঙ্কোভি, চালে শক্তি স্থির রাখে - ২kg ব্যাগটা উত্তরার বেশিরভাগ বাড়িতে kibble নিস্তেজ হওয়ার আগেই শেষ হয়ে যায়।",
    ingredients: ["মুরগি", "এঙ্কোভি", "চাল", "মুরগির চর্বি", "ভিটামিন", "Taurine"],
  },
  "bonacibo-adult-chicken-anchovy-5kg": {
    name: "Bonacibo Adult Chicken & Anchovy & Rice 5kg",
    shortDescription: "একাধিক বিড়ালের বাড়ির জন্য বড় ব্যাগ।",
    description:
      "একই Bonacibo adult রেসিপি ৫kg স্যাকে। দুই বিড়াল এক বাটি খেলে দামও ভালো। ঢাকার আর্দ্রতায় খোলা ব্যাগ মেঝেতে রাখবেন না - সিল করে রাখুন।",
    ingredients: ["মুরগি", "এঙ্কোভি", "চাল", "মুরগির চর্বি", "ভিটামিন", "Taurine"],
  },
  "bonacibo-kitten-chicken-anchovy-1-5kg": {
    name: "BonaCibo Kitten Chicken with Anchovy & Rice 1.5kg",
    shortDescription: "বাড়ন্ত বাচ্চা বিড়ালের জন্য ছোট kibble।",
    description:
      "BonaCibo Kitten adult ব্যাগের চেয়ে ছোট দানা আর একটু বেশি পুষ্টিমান। মুরগি, এঙ্কোভি ও চাল প্রথম বছরে সাহায্য করে। ব্রিডার বা শেল্টারের খাবার থেকে সাত দিন ধীরে ধীরে বদলান।",
    ingredients: ["মুরগি", "এঙ্কোভি", "চাল", "ডিম", "DHA", "Taurine"],
  },
  "pets-choice-tuna-chicken-3kg": {
    name: "Pet's Choice Tuna & Chicken 3kg",
    shortDescription: "প্রাপ্তবয়স্ক বিড়ালের জন্য মাঝারি সাইজের টুনা ও মুরগি ব্যাগ।",
    description:
      "Pet's Choice Tuna & Chicken সেই ব্যাগ যেটা আমরা দিই যখন পরিচিত স্বাদ চান কিন্তু ৭kg স্যাকে যেতে চান না। মচমচে, মাছের গন্ধে ভরপুর, পরিমাণ মাপা সহজ।",
    ingredients: ["টুনা", "মুরগি", "শস্য", "মুরগির চর্বি", "Omega তেল", "Taurine"],
  },
  "pets-choice-adult-tuna-chicken-500g": {
    name: "Pet's Choice Adult Tuna & Chicken 500gm",
    shortDescription: "খুঁতখুতে খাওয়া বিড়ালদের জন্য ট্রায়াল সাইজ।",
    description:
      "৫০০g ব্যাগ - ৩kg-এ যাওয়ার আগে প্রোটিন টেস্ট করুন। বিড়াল শেষ করলে একই দেয়াল থেকে বড় Pet's Choice ব্যাগ নিন।",
    ingredients: ["টুনা", "মুরগি", "শস্য", "মুরগির চর্বি", "Taurine"],
  },
  "pets-choice-all-life-omega-500g": {
    name: "Pet's Choice All Life Chicken & Omega 3 500gm",
    shortDescription: "Omega-সমৃদ্ধ মুরগির রেসিপি, শুরুর ব্যাগ।",
    description:
      "All Life Chicken & Omega 3 এক বাড়িতে বিভিন্ন বয়সের বিড়ালের জন্য মিশ্রিত। সুপারমার্কেট kibble ছাড়তে চাইলে ৫০০g ব্যাগ দিয়ে শুরু করুন।",
    ingredients: ["মুরগি", "Omega-3 তেল", "শস্য", "ভিটামিন", "Taurine"],
  },
  "pets-choice-all-life-omega-3kg": {
    name: "Pet's Choice All Life Chicken & Omega 3 Recipe 3kg",
    shortDescription: "পরিবারের সাইজের omega রেসিপি।",
    description:
      "একই All Life ফর্মুলা ৩kg-এ। আগের খাবারে তেল কম থাকলে দুই ব্যাগ পর কোট ভালো দেখায়। স্কুপের মাঝে zip বন্ধ রাখুন।",
    ingredients: ["মুরগি", "Omega-3 তেল", "শস্য", "ভিটামিন", "Taurine"],
  },
  "pets-choice-tuna-chicken-1kg": {
    name: "Pet's Choice Cat Dry Food Tuna & Chicken 1kg",
    shortDescription: "সাপ্তাহিক টপ-আপের জন্য এক কিলো টুনা ও মুরগি।",
    description:
      "১kg Pet's Choice ব্যাগ প্রথমবার কেনা বেশিরভাগই নিয়ে যায়। এক–দুই সপ্তাহ চলে, বাইক ডেলিভারিতে হালকা।",
    ingredients: ["টুনা", "মুরগি", "শস্য", "মুরগির চর্বি", "Taurine"],
  },
  "pets-choice-kitten-goat-milk-1kg": {
    name: "Pet's Choice Kitten Chicken & Goat Milk 1kg",
    shortDescription: "ছাগলের দুধে kitten kibble - নরম পেটের জন্য।",
    description:
      "মুরগি ও ছাগলের দুধ বাচ্চা বিড়ালের জন্য, যারা একটু ক্রিমি বাটি চায়। খুব দ্রুত খেলে রাতে wet pouch-এর সাথে দিন।",
    ingredients: ["মুরগি", "ছাগলের দুধ", "চাল", "ডিম", "Taurine"],
  },
  "purina-one-urinary-care-1-2kg": {
    name: "Purina One Urinary Care 1.2kg",
    shortDescription: "প্রাপ্তবয়স্ক বিড়ালের urinary-care ফর্মুলা।",
    description:
      "Purina One Urinary Care সেই ব্যাগ যেটা দেখাই যখন ক্লিনিক crystal বা কম পানি পানের কথা বলেছে। vet-এর বিকল্প নয় - visit হয়ে গেলে রাখার খাবার।",
    ingredients: ["মুরগি", "চাল", "ভুট্টার প্রোটিন", "খনিজ পদার্থ", "Taurine", "Vitamin E"],
  },
  "smartheart-adult-chicken-tuna-1-2kg": {
    name: "SmartHeart Adult Chicken & Tuna 1.2kg",
    shortDescription: "সবচেয়ে বেশি চাওয়া SmartHeart সাইজ।",
    description:
      "১.২kg SmartHeart ব্যাগে মুরগি ও টুনা। আমাদের দেয়ালের default adult food - পরিচিত, মচমচে, পরের মাসেও সহজে পাবেন।",
    ingredients: ["মুরগি", "টুনা", "শস্য", "মুরগির চর্বি", "ভিটামিন", "Taurine"],
  },
  "smartheart-adult-chicken-tuna-3kg": {
    name: "SmartHeart Adult Chicken & Tuna 3kg",
    shortDescription: "ঘরের প্রিয় - তিন কিলো।",
    description:
      "একই মুরগি ও টুনা রেসিপি ৩kg-এ। এই ব্যাগের সাথে লিটার বা pouch sleeve থাকলে প্রায়ই free delivery হয়।",
    ingredients: ["মুরগি", "টুনা", "শস্য", "মুরগির চর্বি", "ভিটামিন", "Taurine"],
  },
  "smartheart-adult-chicken-tuna-480g": {
    name: "SmartHeart Adult Chicken & Tuna 480gm",
    shortDescription: "অতিথি, foster বা প্রথম try-র ছোট ব্যাগ।",
    description:
      "৪৮০g foster করলে বা গন্ধ দিয়ে বেছে খায় এমন বিড়ালের জন্য ঠিক। শেষ হলে পরের অর্ডারে ১.২kg-এ যান।",
    ingredients: ["মুরগি", "টুনা", "শস্য", "মুরগির চর্বি", "Taurine"],
  },
  "smartheart-adult-chicken-tuna-7kg": {
    name: "SmartHeart Adult Chicken & Tuna 7kg",
    shortDescription: "একাধিক বিড়ালের বাড়ির warehouse-size ব্যাগ।",
    description:
      "৭kg SmartHeart মুরগি ও টুনা। সিঁড়ি পর্যন্ত তুলতে পারে এমন rider পাঠাই। সিল রাখুন; বর্ষায় রান্নাঘরের টবে ভাগ করে রাখুন।",
    ingredients: ["মুরগি", "টুনা", "শস্য", "মুরগির চর্বি", "ভিটামিন", "Taurine"],
  },
  "smartheart-adult-salmon-3kg": {
    name: "SmartHeart Adult Salmon 3kg",
    shortDescription: "কোট ফ্যাকাসে পড়লে salmon-first kibble।",
    description:
      "SmartHeart Adult Salmon - মুরগি kibble-এ কোট dull হলে swap করার পরামর্শ। মাছ-forward, তবু প্রতিদিনের complete food।",
    ingredients: ["স্যামন", "শস্য", "মাছের তেল", "ভিটামিন", "Taurine"],
  },
  "smartheart-adult-tuna-shrimp-3kg": {
    name: "SmartHeart Adult Tuna & Shrimp 3kg",
    shortDescription: "মুরগিতে bored বিড়ালের জন্য টুনা ও চিংড়ি।",
    description:
      "SmartHeart-এর একটু richer ব্যাগ। পেট sensitive হলে হঠাৎ পুরো swap নয় - rotation protein হিসেবে ব্যবহার করুন।",
    ingredients: ["টুনা", "চিংড়ি", "শস্য", "মাছের তেল", "Taurine"],
  },
  "smartheart-kitten-1-1kg": {
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 1.1kg",
    shortDescription: "ডিম ও দুধে kitten growth kibble।",
    description:
      "নতুন বিড়ালের মা-বাবা বেশিরভাগ ১.১kg kitten ব্যাগ নিয়ে যান। ছোট দানা, extra fat, পেছনে feeding guide - আপনার বাচ্চার ওজন অনুযায়ী চিহ্নিত করে দেব।",
    ingredients: ["মুরগি", "মাছ", "ডিম", "দুধের গুঁড়া", "DHA", "Taurine"],
  },
  "smartheart-kitten-450g": {
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 450gm",
    shortDescription: "শুরুর kitten ব্যাগ।",
    description:
      "দত্তকের পর প্রথম সপ্তাহের জন্য যথেষ্ট। পায়খানা firm থাকলে ১.১kg বা ২.৮kg-এ বাড়ান।",
    ingredients: ["মুরগি", "মাছ", "ডিম", "দুধের গুঁড়া", "Taurine"],
  },
  "smartheart-kitten-2-8kg": {
    name: "SmartHeart Kitten Chicken, Fish, Egg & Milk 2.8kg",
    shortDescription: "বাড়ন্ত kitten-এর স্যাক।",
    description:
      "২.৮kg দ্রুত বড় হওয়া kitten-কে সাপ্তাহিক shop ছাড়াই চলায়। শুধু dry না inhale করে dinner-এ wet pouch রাখুন।",
    ingredients: ["মুরগি", "মাছ", "ডিম", "দুধের গুঁড়া", "DHA", "Taurine"],
  },
  "drools-cat-biscuit-400g": {
    name: "Drools Cat Biscuit 400g Jar",
    shortDescription: "ট্রেনিং ও সন্ধ্যার জন্য মচমচে jar treats।",
    description:
      "৪০০g jar-এ oven-style cat biscuits। dinner নয়, treat হিসেবে গণনা করুন। খেলার পর এক handful যথেষ্ট।",
    ingredients: ["শস্য", "মুরগি", "চর্বি", "ভিটামিন"],
  },
  "drools-cat-biscuits-110g": {
    name: "Drools Cat Biscuits 110gm",
    shortDescription: "পকেট-সাইজ treat ব্যাগ।",
    description:
      "সপ্তাহান্তে visit বা প্রথম treat test-এর জন্য ১১০g Drools biscuits। meal নয়।",
    ingredients: ["শস্য", "মুরগি", "চর্বি"],
  },
  "deliver-your-love-chicken-egg-200g": {
    name: "Deliver Your Love Chicken & Egg Yolk 200gm",
    shortDescription: "নরম মুরগি ও ডিমের কুসুম snack।",
    description:
      "dry biscuit-এর চেয়ে richer snack। ট্রেনিংয়ে ছোট টুকরো করুন। পুরোনো সাইটের ৪০৳ ২০০g line আলাদা SKU - দেয়ালে রাখা jar এটা।",
    ingredients: ["মুরগি", "ডিমের কুসুম", "Glycerin", "ভিটামিন"],
  },
  "whiskas-junior-tuna-pouch": {
    name: "Whiskas Junior Tuna Pouch 85g",
    shortDescription: "এক serving junior tuna pouch।",
    description:
      "বাচ্চা বিড়ালের জন্য ৮৫g tuna pouch। room temperature-এ দিন। বাটি শুধু gravy না হয় kitten kibble-এর সাথে মিলিয়ে দিন।",
    ingredients: ["টুনা", "Gravy", "ভিটামিন", "Taurine"],
  },
  "whiskas-adult-ocean-fish-pouch": {
    name: "Whiskas Adult Ocean Fish Pouch 85g",
    shortDescription: "রাতের dinner topper-এ adult ocean-fish pouch।",
    description:
      "dry food-এর ওপর চামচ দিয়ে দিন বা আলাদা serve করুন। এক সপ্তাহের sleeve চাইলে একসাথে প্যাক করে দিই।",
    ingredients: ["সমুদ্রের মাছ", "Gravy", "ভিটামিন", "Taurine"],
  },
  "sheba-chicken-fine-flakes": {
    name: "Sheba Chicken Fine Flakes 85g",
    shortDescription: "Gravy-তে সূক্ষ্ম মুরগির flakes।",
    description:
      "Sheba সেই pouch যেটা picky adult প্রায়ই শেষ করে। সূক্ষ্ম flakes, তীব্র গন্ধ, ছোট serving। খোলার পর ফ্রিজে রাখুন - counter-এ রাতভর নয়।",
    ingredients: ["মুরগি", "Gravy", "ভিটামিন", "Taurine"],
  },
  "whiskas-canned-tuna-400g": {
    name: "Whiskas Canned Tuna 400g",
    shortDescription: "পরিবারের সাইজের tuna can।",
    description:
      "৪০০g tuna pâté। খোলার পর ঢেকে ফ্রিজে রাখুন। এই আবহাওয়ায় ৪৮ ঘণ্টার মধ্যে ব্যবহার করুন।",
    ingredients: ["টুনা", "Broth", "ভিটামিন", "Taurine"],
  },
  "fancy-feast-classic-salmon": {
    name: "Fancy Feast Classic Salmon 85g",
    shortDescription: "ছোট can-এ classic salmon pâté।",
    description:
      "pouch-এর চেয়ে richer dinner। বেশিরভাগ adult-এর জন্য এক can পূর্ণ meal; ছোট বিড়ালে ভাগ করে দিন।",
    ingredients: ["স্যামন", "মাংসের উপ-উপাদান", "ভিটামিন", "Taurine"],
  },
  "catsan-ultra-5l": {
    name: "Catsan Ultra Clumping Litter 5L",
    shortDescription: "প্রতিদিন scoop-এর জন্য সাদা clumping clay।",
    description:
      "Catsan Ultra এত tight clump করে দিনে একবার scoop যথেষ্ট। standard tray-এ ৫L দুই বিড়ালের এক সপ্তাহ।",
    ingredients: ["Clumping clay", "গন্ধ নিয়ন্ত্রণ"],
  },
  "fresh-step-multicat": {
    name: "Fresh Step Multi-Cat Litter 6.35kg",
    shortDescription: "একাধিক বিড়ালের tray-এ carbon-backed litter।",
    description:
      "দুই tray ছোট flat-এ share করলে এই ব্যাগ পাঠাই। Carbon scoop-এর মাঝে সাহায্য করে। বর্ষায় তবু সাপ্তাহিক box change করুন।",
    ingredients: ["Clumping clay", "Carbon", "গন্ধ নিয়ন্ত্রণ"],
  },
  "pine-litter-10l": {
    name: "Pine Cat Litter 10L",
    shortDescription: "হালকা pine pellets, কাঠের গন্ধ।",
    description:
      "clay dust পছন্দ না করলে pine pellets। প্রতিদিন নাড়ুন। কিছু বিড়াল নতুন texture মানতে এক সপ্তাহ লাগে।",
    ingredients: ["চেপ্টা পাইন"],
  },
  "litter-deodorizing-beads": {
    name: "Cat Litter Deodorizing Beads",
    shortDescription: "Scoop-এর নিচে মেশানো beads, উপরে নয়।",
    description:
      "তাজা litter-এ এক handful মেশান। বর্ষার সপ্তাহে সাহায্যকারী, full change-এর বিকল্প নয়।",
    ingredients: ["সুগন্ধির beads", "শোষণকারী কোর"],
  },
  "portable-cat-bag": {
    name: "Portable pet crossbody bag",
    shortDescription: "বিড়াল ও ছোট কুকুরের জন্য breathable travel bag।",
    description:
      "vet ও উত্তরার কাজে ventilated crossbody। ছোট কুকুর বা বসে থাকতে পারে এমন adult বিড়ালের জন্য যথেষ্ট জায়গা। সারাদিন crate হিসেবে ব্যবহার করবেন না।",
    ingredients: ["Mesh", "Oxford cloth", "Plastic frame"],
  },
  "cat-food-bowl-3in1": {
    name: "Cat food bowl 3-in-1",
    shortDescription: "খাবার, পানি ও raised stand - একসাথে।",
    description:
      "মেঝেতে whiskers চাপ না পড়ে তিন বাটি stand-এ। প্রতিদিন ধোয়া। Stainless insert সিঙ্কে বের করে ধোয়া যায়।",
    ingredients: ["Stainless steel", "Plastic stand"],
  },
  "pet-grooming-dryer": {
    name: "Pet Grooming Dryer",
    shortDescription: "গোসলের পর coat-এর জন্য force dryer।",
    description:
      "গোসলের পর thick coat-এ grooming dryer। low দিয়ে শুরু করুন। মানুষের hair dryer নয় - fur-এর airflow, skin-এর কাছে নয়।",
    ingredients: ["Motor housing", "Hose", "Nozzles"],
  },
  "pet-grooming-clipper-kit": {
    name: "Pet Grooming Hair Clipper Kit",
    shortDescription: "Guard-সহ home clipper kit।",
    description:
      "মুখ নয়, পেছন দিয়ে শুরু করলে বেশিরভাগ বিড়ালে যথেষ্ট quiet। blade-এ তেল দিন। প্রথম home trim-এর guard kit-এ আছে।",
    ingredients: ["Clipper", "Guards", "Oil", "Brush"],
  },
  "pet-scratching-mat": {
    name: "Pet Scratching Mat",
    shortDescription: "Sofa বাঁচায় sisal mat।",
    description:
      "Sofa-র সামনে রাখার flat sisal mat। প্রথম সপ্তাহে একটু catnip ছড়ান। weave নরম হলে বদলান।",
    ingredients: ["Sisal", "Backing cloth"],
  },
};
