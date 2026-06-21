export interface MenuItem {
  name: string;
  description: string;
  image: string;
  calories: number;
  protein: string;
}

export interface DayMenu {
  day: string;
  dayEn: string;
  breakfast: MenuItem;
  lunch: MenuItem;
  dinner: MenuItem;
  snack: MenuItem;
}

export const weeklyMenu: DayMenu[] = [
  {
    day: "Senin",
    dayEn: "Monday",
    breakfast: {
      name: "Overnight Oats Berry",
      description: "Oatmeal dengan campuran berry segar, madu, dan chia seeds",
      image:
        "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&q=80",
      calories: 320,
      protein: "12g",
    },
    lunch: {
      name: "Nasi Merah Ayam Bakar",
      description:
        "Nasi merah dengan ayam bakar bumbu kecap, tumis brokoli, dan wortel",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      calories: 480,
      protein: "35g",
    },
    dinner: {
      name: "Sup Ayam Jahe",
      description: "Sup ayam dengan jahe segar, tahu, dan sayuran hijau",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
      calories: 280,
      protein: "28g",
    },
    snack: {
      name: "Smoothie Bowl Hijau",
      description:
        "Smoothie bowl dari bayam, pisang, alpukat, dan topping granola",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
      calories: 180,
      protein: "6g",
    },
  },
  {
    day: "Selasa",
    dayEn: "Tuesday",
    breakfast: {
      name: "Telur Rebus & Roti Gandum",
      description:
        "Telur rebus dengan roti gandum utuh, alpukat, dan tomat ceri",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
      calories: 350,
      protein: "20g",
    },
    lunch: {
      name: "Grilled Salmon Salad",
      description:
        "Salmon panggang dengan mixed greens, cherry tomato, dan dressing lemon",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
      calories: 420,
      protein: "38g",
    },
    dinner: {
      name: "Tumis Tahu & Sayur",
      description:
        "Tahu panggang tumis dengan paprika, buncis, dan saus tiram rendah sodium",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
      calories: 300,
      protein: "22g",
    },
    snack: {
      name: "Energy Ball Kurma",
      description:
        "Energy balls dari kurma, kacang almond, dan cacao nibs",
      image:
        "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=400&q=80",
      calories: 150,
      protein: "5g",
    },
  },
  {
    day: "Rabu",
    dayEn: "Wednesday",
    breakfast: {
      name: "Smoothie Protein",
      description:
        "Smoothie protein pisang, peanut butter, susu almond, dan whey protein",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80",
      calories: 380,
      protein: "28g",
    },
    lunch: {
      name: "Nasi Merah Ikan Dori",
      description:
        "Nasi merah dengan ikan dori crispy, sambal matah, dan urap sayur",
      image:
        "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80",
      calories: 450,
      protein: "32g",
    },
    dinner: {
      name: "Zucchini Noodles",
      description:
        "Zucchini noodles dengan saus pesto, udang, dan tomat kering",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
      calories: 260,
      protein: "24g",
    },
    snack: {
      name: "Yogurt Parfait",
      description:
        "Greek yogurt dengan granola homemade dan buah musiman",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
      calories: 170,
      protein: "10g",
    },
  },
  {
    day: "Kamis",
    dayEn: "Thursday",
    breakfast: {
      name: "Avocado Toast",
      description:
        "Roti sourdough dengan avocado smash, telur poached, dan microgreens",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80",
      calories: 340,
      protein: "16g",
    },
    lunch: {
      name: "Chicken Wrap Sehat",
      description:
        "Wrap gandum dengan ayam grilled, selada, dan saus yogurt",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
      calories: 400,
      protein: "34g",
    },
    dinner: {
      name: "Bowl Buddha Quinoa",
      description:
        "Quinoa bowl dengan edamame, ubi panggang, dan saus tahini",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
      calories: 320,
      protein: "18g",
    },
    snack: {
      name: "Pudding Chia",
      description:
        "Pudding chia seeds dengan santan dan mangga segar",
      image:
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&q=80",
      calories: 160,
      protein: "7g",
    },
  },
  {
    day: "Jumat",
    dayEn: "Friday",
    breakfast: {
      name: "Pancake Pisang Oat",
      description:
        "Pancake dari oat dan pisang dengan topping madu dan walnut",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
      calories: 360,
      protein: "14g",
    },
    lunch: {
      name: "Beef Bowl Teriyaki",
      description:
        "Beef slice dengan saus teriyaki homemade, nirs merah, dan sayur kukus",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80",
      calories: 490,
      protein: "40g",
    },
    dinner: {
      name: "Capcay Kuah Sehat",
      description:
        "Capcay kuah bening dengan udang, bakso ikan, dan aneka sayur",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      calories: 270,
      protein: "26g",
    },
    snack: {
      name: "Kacang Edamame",
      description:
        "Edamame kukus dengan sea salt dan sedikit olive oil",
      image:
        "https://images.unsplash.com/photo-1564093497595-593b96d80171?w=400&q=80",
      calories: 120,
      protein: "11g",
    },
  },
  {
    day: "Sabtu",
    dayEn: "Saturday",
    breakfast: {
      name: "Bowl Acai",
      description:
        "Acai bowl dengan banana, granola, dan coconut flakes",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
      calories: 310,
      protein: "8g",
    },
    lunch: {
      name: "Tuna Salad Nicoise",
      description:
        "Tuna seared dengan green beans, telur, kentang, dan olive dressing",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
      calories: 430,
      protein: "36g",
    },
    dinner: {
      name: "Stir Fry Tofu Basil",
      description:
        "Tofu stir fry dengan basil segar, jamur, dan saus hoisin",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      calories: 290,
      protein: "20g",
    },
    snack: {
      name: "Frozen Yogurt Berries",
      description:
        "Frozen yogurt homemade dengan campuran berry dan almond",
      image:
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&q=80",
      calories: 140,
      protein: "6g",
    },
  },
  {
    day: "Minggu",
    dayEn: "Sunday",
    breakfast: {
      name: "French Toast Sehat",
      description:
        "French toast dari roti gandum dengan egg wash, kayu manis, dan fruit compote",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80",
      calories: 370,
      protein: "18g",
    },
    lunch: {
      name: "Ayam Panggang Rosemary",
      description:
        "Ayam panggang dengan rosemary, kentang oven, dan roasted vegetables",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80",
      calories: 470,
      protein: "42g",
    },
    dinner: {
      name: "Miso Soup Sehat",
      description:
        "Miso soup dengan tahu sutera, wakame, dan daun bawang",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
      calories: 180,
      protein: "14g",
    },
    snack: {
      name: "Dark Chocolate Almond",
      description:
        "Dark chocolate 70% dengan almond panggang dan sea salt",
      image:
        "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=400&q=80",
      calories: 190,
      protein: "7g",
    },
  },
];
