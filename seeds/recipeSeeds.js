const recipesDB = require('../model/recipes')
const express = require('express');
const mongoose = require('mongoose');

// Will put seed data into your localdatabase


// Insert all seed data in this array utilizing this format

 let seedRecipes = [
  { id: new mongoose.Types.ObjectId(), image: '/images/Dragonfire Chili.png', name: 'Dragonfire Chili', instructions: "Brown beef with onions and garlic. Add tomatoes, beans, and spices. Simmer until flavors meld.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Goblins Guacamole.png", name: "Goblins Guacamole", instructions: "Mash ripe avocados. Mix in lime juice, chopped tomatoes, onions, cilantro, and season to taste.", category: 'appetizer' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Mystic Mushroom Soup.png", name: "Mystic Mushroom Soup", instructions: "Sauté mushrooms and onions. Add broth and simmer. Blend until smooth, and season.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: "/images/Paladins Potato Salad.png", name: "Paladins Potato Salad", instructions: "Boil potatoes until tender. Mix with mayo, mustard, onions, and celery. Chill before serving.", category: 'side' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Eldritch Elf Pasta.png', name: 'Eldritch Elf Pasta', instructions: 'Cook pasta. Sauté garlic and add tomatoes and basil. Mix with pasta and top with parmesan.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Banshees Bruschetta.png', name: 'Banshees Bruschetta', instructions: 'Toast bread slices. Top with tomato, basil, garlic, and olive oil mixture.', category: 'appetizer' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Rangers Risotto.png', name: 'Rangers Risotto', instructions: 'Cook Arborio rice with broth, stirring constantly. Add sautéed mushrooms, cheese, and butter.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Dwarfs Dumplings.png', name: 'Dwarfs Dumplings', instructions: 'Prepare dough and fill with meat mixture. Boil until cooked through.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Sorcerers Spinach Pie.png', name: "Sorcerers Spinach Pie", instructions: 'Mix spinach with feta, onions, and eggs. Lay in phyllo dough and bake until golden.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Bards Beef Bourguignon.png', name: 'Bards Beef Bourguignon', instructions: 'Brown beef. Add wine, broth, onions, and mushrooms. Simmer until beef is tender.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Warlocks Waffles.png', name: 'Warlocks Waffles', instructions: 'Mix flour, milk, eggs, and baking powder. Pour into waffle iron and cook until golden.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Treasure Chest Tacos.png', name: 'Treasure Chest Tacos', instructions: 'Cook beef with taco seasoning. Serve in taco shells with lettuce, cheese, and salsa.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Clerics Caesar Salad.png', name: 'Clerics Caesar Salad', instructions: 'Toss romaine lettuce with Caesar dressing. Top with croutons and parmesan.', category: 'side' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Rogues Ratatouille.png', name: 'Rogues Ratatouille', instructions: "Sauté eggplant, zucchini, and peppers. Add tomatoes and seasonings. Simmer until vegetables are tender.", category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Necromancers Noodles.png', name: 'Necromancers Noodles', instructions: 'Boil noodles. Stir fry with vegetables, protein, and sauce of choice.', category: 'dinner' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Beholders Brownies.png', name: 'Beholders Brownies', instructions: 'Mix cocoa, flour, sugar, eggs, and butter. Bake until set and let cool before cutting.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Ghouls Grilled Cheese.png', name: 'Ghouls Grilled Cheese', instructions: 'Place cheese between two slices of bread. Butter outside and grill until golden.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Fairys Fried Rice.png', name: 'Fairys Fried Rice', instructions: 'Stir fry cooked rice with vegetables, protein, and soy sauce.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Mermaids Muffins.png', name: 'Mermaids Muffins', instructions: 'Mix flour, sugar, baking powder, eggs, and milk. Pour into muffin tins and bake until golden.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Vampires Vanilla Pudding.webp', name: 'Vampires Vanilla Pudding', instructions: 'Whisk milk, sugar, and vanilla. Heat until thickened. Chill before serving.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Orcs Omelette.png', name: 'Orcs Omelette', instructions: 'Whisk eggs and pour into a hot pan. Add fillings and fold in half when set.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Lichs Lemon Pie.png', name: 'Lichs Lemon Pie', instructions: 'Mix lemon juice, sugar, and eggs. Pour into crust and bake. Top with meringue and brown.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Trolls Tiramisu.png', name: 'Trolls Tiramisu', instructions: 'Layer coffee-soaked ladyfingers with mascarpone mixture. Chill and dust with cocoa.', category: 'dessert' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Wizards Wraps.png', name: 'Wizards Wraps', instructions: 'Fill tortilla with choice of fillings. Roll up and serve with side of choice.', category: 'lunch' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Pixies Pancakes.png', name: 'Pixies Pancakes', instructions: 'Mix flour, milk, eggs, and baking powder. Pour onto hot griddle and flip when bubbly.', category: 'breakfast' },
  { id: new mongoose.Types.ObjectId(), image: '/images/Sphinxs Spaghetti Carbonara.png', name: 'Sphinxs Spaghetti Carbonara', instructions: 'Cook spaghetti. Sauté bacon and mix with pasta and eggs. Add cheese and pepper.', category: 'dinner' },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Centaurs Cheesecake.png', 
    name: 'Centaurs Cheesecake', 
    instructions: 'Blend cream cheese, sugar, eggs, and vanilla. Pour into crust and bake. Chill before serving.',
    category:'dessert'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Minotaurs Meatloaf.png', 
    name: 'Minotaurs Meatloaf', 
    instructions: 'Mix ground meat with breadcrumbs, egg, and seasonings. Shape and bake. Top with sauce of choice.' ,
    category:'dinner'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Krakens Key Lime Pie.png', 
    name: 'Krakens Key Lime Pie', 
    instructions: 'Mix lime juice, condensed milk, and eggs. Pour into crust and bake. Chill before serving.',
    category:'dessert'
  },
  { 
    id: new mongoose.Types.ObjectId(), 
    image: '/images/Phoenixs Pho.png', 
    name: 'Phoenixs Pho', 
    instructions: 'Simmer broth with spices. Serve with rice noodles, protein, and fresh herbs.',
    category:'dinner'
  },
  {
    id: new mongoose.Types.ObjectId(),
    image: "/images/Homemade Green Dragon Sauce.png", // Update this with the actual path to your image
    name: 'Homemade Green Dragon Sauce',
    instructions: '1. Line a baking sheet with foil and spray with a non-stick spray. Set the oven to broil when you\'re ready to roast the dragon bits or peppers, and use two baking sheets if needed.\n'
      + '2. Remove the outer skin, rinse, and rub the stickiness off the tomatillos. Place them on the baking sheet.\n'
      + '3. Cut off the stems, remove the seeds from all the peppers, and cut them in half. Rinse and place them on the foil, skin side up. Keep some of the seeds from the serrano or jalapeños to add additional spiciness, if desired.\n'
      + '4. Broil on high until the skin turns blackish and bubbly, turning a couple of times during broiling (approximately 10 minutes, give or take).\n'
      + '5. Once the skins are blistery, remove them from the oven and place the tomatillos, jalapeños, and serrano peppers in a Vitamix or blender. Place the Poblano and Anaheim peppers into a large baggie and seal. After about 5-10 minutes, remove/peel the skin off the peppers and add them to the Vitamix or blender.\n'
      + '6. Add the cilantro, onion, garlic salt, and juice from one lime. Blend until there are no chunks.\n'
      + '7. Chill and serve with tortilla chips, or top your favorite Mexican recipe like tacos, enchiladas, burritos, and enjoy.',
    ingredients: [
      '15 tomatillos, outer skins removed, rinsed',
      'Green dragon thymus gland, or 2 poblano peppers',
      'Green dragon tonsils, or 3 anaheim peppers',
      '¼ Green dragon tongue or 4 serrano peppers',
      '2 green dragon saliva glands, or 4 jalapeños',
      '1 cup cilantro',
      '1 tsp garlic salt',
      '1 medium onion, chopped',
      '4 cloves garlic, chopped',
      '1 lime'
    ],
    category: 'dinner'
  },
  
  {
    id: new mongoose.Types.ObjectId(),
    image: '/images/Homemade Mead.png', // Update this with the actual path to your image
    name: 'Homemade Mead',
    instructions: '1. Sanitize all equipment that will come in contact with the mead.\n'
      + '2. Heat up 2 gallons of non-chlorinated water in your pot with the cinnamon sticks. Boil for more cinnamon flavor. If you do boil, let it cool down for a few minutes before the next step.\n'
      + '3. Dump the water into your fermenting bucket. Add all of the honey and stir it around with a big spoon to help it dissolve.\n'
      + '4. Fill the bucket the rest of the way up to the 5-gallon mark with cold non-chlorinated water.\n'
      + '5. Stir well, then add your raisins and optional fruit and orange slices.\n'
      + '6. Ensure that the temperature of the “must” is 90°F or lower, then pitch the yeast. Use the whole packet of yeast and stir well.\n'
      + '7. Secure the lid on the fermenting bucket tightly to prevent any air from getting in. Fill your airlock with water to the line and insert it into the grommeted hole in the lid.\n'
      + '8. Place the bucket in a cool (not cold) place. You should start to see bubbles in the airlock within 24 hours.\n'
      + '9. Allow the mead to ferment for 6 weeks.\n'
      + '10. Once fermentation is complete, proceed to bottle the mead.',
    ingredients: [
      '12-15 pounds honey',
      '1 package champagne yeast',
      'Handful of raisins',
      '3 cinnamon sticks (optional)',
      '5 cups fruit of any kind (frozen mixed berries work well, optional)',
      'Orange slices (optional)'
    ],
    category: 'breakfast'
  },
  
  {
    id: new mongoose.Types.ObjectId(),
    image: '/images/Ox Tail Soup.png', // Update this with the actual path to your image
    name: 'Oxtail Stew',
    instructions: '1. Season the oxtail with salt and pepper, and set it aside.\n'
      + '2. In a large cast-iron or saucepan, heat 2-3 tablespoons of cooking oil over medium heat until hot. If using cast iron, only use about a tablespoon of oil. Add the oxtail and sauté, stirring frequently and scraping any browned bits off the bottom of the pot, until the oxtail is browned. Drain the oil if necessary, leaving about 1-2 tablespoons in the pot.\n'
      + '3. Add the onions, green onions, garlic, thyme, allspice berries, Worcestershire sauce, and smoked paprika. Stir for about a minute. Then add the scotch bonnet pepper, ketchup (or tomato paste), bouillon powder (if using), and curry powder. Stir for another minute.\n'
      + '4. Transfer the oxtail mixture to a crockpot or slow cooker, and add the carrots, cannellini beans, and potatoes.\n'
      + '5. Deglaze the pan with about 2 cups of water, gently pour it into the slow cooker, and add 2-3 more cups of water. You may adjust with more or less water at the end, according to your preference.\n'
      + '6. Cover and cook on LOW for 7-8 hours, or until the oxtail has reached the desired tenderness. Serve with rice or a baguette.',
    ingredients: [
      '2-3 pounds (1-1.5kg) oxtails, cut into medium pieces',
      'Salt and pepper to taste',
      '2-3 tablespoons (30-45ml) cooking oil',
      '1 onion, chopped',
      '2 green onions, chopped',
      '1 tablespoon (15g) garlic, minced',
      '2 teaspoons (2g) fresh thyme, chopped',
      '5-6 whole allspice berries',
      '1 tablespoon (15ml) Worcestershire sauce',
      '1 teaspoon (2.5g) smoked paprika',
      '1 whole scotch bonnet pepper',
      '1 tablespoon (15ml) ketchup (or tomato paste)',
      '1 tablespoon (35g) bouillon powder or cube (optional)',
      '1 teaspoon (3g) curry powder (or more according to preference)',
      '1 pound (450g) carrots',
      '1 15-ounce can cannellini beans, drained and rinsed',
      '2 large potatoes, cut into chunks',
      '4-5 cups (950-1,180ml) water'
    ],
    category: 'dinner'
  },
  {
    id: new mongoose.Types.ObjectId(),
    image: '/images/Pickled Herring.png', // Update this with the actual path to your image
    name: 'Pickled Herring',
    instructions: '1. Heat 4 cups of water enough to dissolve the kosher salt. Let this brine cool to room temperature. Once cooled, submerge the herring fillets in the brine and refrigerate for overnight, or up to 24 hours.\n'
      + '2. In the meantime, combine the sugar, vinegar, the remaining 1 cup of water, and all the spices in a saucepan. Bring the mixture to a boil, let it simmer for 5 minutes, then turn off the heat and let this steep until cool.\n'
      + '3. After the herring has brined, layer the fillets in a glass jar with the thinly sliced lemon and red onion. If you are using more than one container, divide the spices between them.\n'
      + '4. Pour the cooled pickling liquid over the herring, lemon, and onion layers, then seal the jars.\n'
      + '5. Allow the herring to pickle for at least a day before eating. The pickled herring can be stored in the refrigerator for up to 1 month.',
    ingredients: [
      '1/4 cup kosher salt',
      '5 cups water, divided',
      '1 pound herring fillets',
      '2 cups distilled or white wine vinegar',
      '1/4 cup sugar',
      '1 teaspoon mustard seed',
      '2 teaspoons whole allspice',
      '2 teaspoons black peppercorns',
      '3 bay leaves',
      '3 cloves',
      '1 lemon, thinly sliced',
      '1 medium red onion, thinly sliced'
    ],
    category: 'dinner'
  },
  {
    "id": new mongoose.Types.ObjectId(),
    "image": "/images/Rot Grubs Delicacy.png",
    "name": "Rot Grubs Delicacy",
    "instructions": "1. Carefully pull the rot grubs out of the corpse or midden pile, ensuring that you protect yourself from them burrowing into your own body. \n2. Place the collected rot grubs in a bowl. \n3. Pour in some brandy over the grubs, enough to euthanize them and to add a bit of flavor to the dish. \n4. Once the grubs are euthanized, take the thin willow branches and spit the grubs onto them, lining them up end to end. \n5. The willow branches will impart a nice scent and flavor to the grubs and add an analgesic element to help them go down better. \n6. Season the spitted grubs with salt and pepper to taste, and if desired, drizzle with more brandy for an extra kick of flavor.",
    "ingredients": [
      "Rot grubs",
      "Brandy",
      "Thin willow branches",
      "Salt",
      "Pepper"
    ],
    "category": "dinner"
  },
  {
    "id": new mongoose.Types.ObjectId(),
    "image": "/images/Hearty Wild Boar Stew.png",
    "name": "Hearty Wild Boar Stew",
    "instructions": "1. Begin by cutting the wild boar into rough 3cm (1¼ inch) dice pieces. \n2. Dice the carrot, celery, and onion into small 5-6mm (¼ inch) pieces. \n3. Cube the smoked streaky bacon into 5-6mm (¼ inch) pieces. \n4. Slice the garlic cloves as finely as possible. \n5. Quarter the tomatoes. \n6. Cut the mushrooms into bite-sized pieces, around 2cm (¾ inch) in size. \n\nFor the slow cooker: \n1. Place a 28cm (11 inch) frying pan on medium heat and fry the bacon until it turns crispy. \n2. Transfer the crispy bacon to a 4-litre (1-quart) slow cooker, making sure to leave as much of the bacon fat in the pan as possible. \n3. Add the diced carrot, celery, and onion to the frying pan and sauté for 10 minutes on medium heat until they soften. \n4. Add the sliced garlic to the pan and continue to cook for an additional 2 minutes before transferring the mixture to the slow cooker. \n5. If the pan appears dry, add a bit more oil. Add the diced wild boar in two batches, seasoning each batch with salt and pepper. \n6. Fry until the wild boar pieces are golden brown, then add them to the slow cooker. \n7. Return the frying pan to high heat. Once searingly hot, pour in the red wine, allowing it to reduce by half to two-thirds. Then pour the reduced wine over the meat in the slow cooker. \n8. Sprinkle the flour over the ingredients in the slow cooker, stirring well to combine. \n9. Add the tomato passata, cold water, quartered tomatoes, caraway seeds, bay leaves, and dried oregano or marjoram to the slow cooker. \n10. Sprinkle over the sweet paprika, give everything a good stir, and set the slow cooker to cook on low for 6 hours or on high for 4 hours. \n11. Just before the stew is ready, melt the butter in the frying pan and sauté the mushrooms for 5 minutes. \n12. Add the sautéed mushrooms to the slow cooker, letting everything cook together for a final 30 minutes on low heat.",
    "ingredients": [
      "600g (21oz) Wild Boar",
      "2 Tbsp Flour",
      "½-¾ Tsp Salt",
      "½ Tsp Freshly Ground Black Pepper",
      "50g (½ Cup) Celery",
      "75g (½-¾ Cup) Carrot",
      "200g (1⅓ Cup) Onion",
      "5 Cloves Garlic",
      "250ml (1 Cup) Red Wine",
      "100g (3½ oz) Smoked Streaky Bacon",
      "1 Tbsp Caraway Seeds",
      "250ml (1 Cup) Tomato Passata",
      "200g (2 Small-Medium) Tomatoes",
      "2 Bay Leaves",
      "1 Tbsp Dried Oregano or Marjoram",
      "2 Tbsp Sweet Paprika",
      "250ml (1 Cup) Cold Water",
      "250g (2-3 Cups) Mushrooms",
      "50g (3 Tbsp + 1 Tsp) Butter"
    ],
    "category": "lunch"
  },
  
  {
    "id": new mongoose.Types.ObjectId(),
    "image": "/images/Baklava.png",
    "name": "Baklava",
  "instructions": "1. Buy Phyllo dough from your local baker. \n2Trim phyllo dough to fit your baking dish. \n3 Butter the bottom and sides of a 13x9 non-stick baking pan. \n4 Start with your honey sauce (which needs time to cool as baklava bakes). \n5 In a medium saucepan, combine 1 cup sugar, 1/2 cup honey, 2 Tbsp lemon juice, and 3/4 cup water. Bring to a boil over med/high heat, stirring until sugar is dissolved, then reduce heat to med/low and boil additional 4 min without stirring. Remove from heat and let syrup cool while preparing baklava. \n6 Preheat Oven to 325˚F. \n7 Cut/chop/grind walnuts to a coarsely ground/ finely chopped consistancy. In a medium bowl, stir together: 4 cups finely chopped walnuts and 1 tsp cinnamon. \n8 Place 10 phyllo sheets into baking pan one at a time, brushing each sheet with butter once it's in the pan before adding the next (i.e. place phyllo sheet into pan, brush the top with butter, place next phyllo sheet in pan, butter the top, etc. etc.). Keep remaining phyllo covered with a damp towel at all times. Spread about 1/5 of nut mixture (about 3/4 cup) over phyllo dough. /n9 Add 5 buttered sheets of phyllo, then another layer of nuts. Repeat x 4. Finish off with 10 layers of buttered phyllo sheets. Brush the very top with butter. \n10 Cut pastry into 1 1/2 inch wide strips, then cut diagonally to form diamond shapes. Bake at 325˚F for 1 hour and 15 min or until tops are golden brown. \n11 Remove from oven and immediately spoon cooled syrup evenly over the hot baklava (you'll hear it sizzle). This will ensure that it stays crisp rather than soggy. Let baklava cool completely, uncovered and at room temp. For best results, let baklava sit 4-6 hours or overnight at room temperature for the syrup to penetrate and soften the layers. Garnish baklava with finely chopped nuts or drizzle with melted chocolate. Store at room temp, covered with a tea towel for 1 to 2 weeks.",
  "ingredients": [
    "16 oz phyllo dough", 
    "1 1/4 cups unsalted butter, 10 oz or 2 1/2 sticks, melted",
    "1 lb walnuts, finely chopped, (about 4 cups)",
    "1 tsp ground cinnamon",
    "1 cup granulated sugar",
    "2 Tbsp lemon juice, juice of 1/2 lemon",
    "3/4 cup water",
    "1/2 cup honey",
    "melted chocolate chips & chopped walnuts for garnish, optional",
 ],
  "category": "dessert"
  },

  {
    "id": new mongoose.Types.ObjectId(),
    "image": "/images/Chicken in Aspic.png",
    "name": "Chicken in Aspic",
  "ingredients": [
    "1 whole chicken, 2-3 pounds",
    "1 yellow onion",
    "1 carrot",
    "3-4 bay leaves",
    "3-4 whole black peppercorns",
    "1 teaspoon salt",
    "3 garlic cloves, minced",
    "parsley, for decoration",
    "water",
],
"instructions" : "1. Using a large sharp knife, cut the chicken into pieces, cut off the legs, breast, and back, also the wings. Put everything in a large pan. \n2 Wash the carrot, then cut it into larger pieces. Also peel the onion and cut it into quarters. Then add the chopped carrots, chopped onions, bay leaves, peppercorns, and salt to the pan. \n3 Pour enough water into the pan so that it barely covers the chicken. Then add the lid and bring everything to a boil. Once boiling, remove the foam from the surface of the water and turn down the heat to low. Simmer the aspic for 3 hours on very low heat. The broth in the pan should not boil actively, otherwise it will turn out to be very cloudy. \n4 After 3 hours, remove the chicken parts from the pan and strain the broth to capture the boiled vegetables, bay leaves and peppercorns. You can discard the onion, peppercorns and bay leaves, but save the carrot. \n5 Pour the broth back into the pot and add the minced garlic. Bring the broth to a boil on the stove. Once boiling, turn off the heat and let the broth cool. Then strain again to remove the garlic from the broth. This flavors the broth, but does not make the aspic too bitter. \n6 Separate the chicken meat from the bones. Also cut a few pieces of carrot into thinner slices to use for decoration. \n7 Place pieces of meat in small or large bowls, then add slices of carrots and a sprig of parsley on top. \n8 Pour the broth into the bowls. Since it was cooked from meat with a lot of bones, it will be able to freeze (thickened) without additional gelatin. If you have any doubts about whether the aspic will harden, it is better to prepare the gelatin in advance and add it to the broth. Kholodets should be left on the table until it cools completely, then put in the refrigerator for further solidification. \n9 Most often, aspic is served with mustard, horseradish sauce, or adjika.",
"category": "dinner"
},

{
  "id": new mongoose.Types.ObjectId(),
  "image": "/images/ Fried Mush Cakes.png",
  "name": " Fried Mush Cakes",
"Ingredients": [
"3 cups water",
"1 cup yellow cornmeal",
"1 cup milk",
"1/2 teaspoon salt to taste",
"3-4 tablespoons butter (for frying)",
],

"Instructions" : "1. In a large saucepan, bring the water to a boil. \n2 In a small bowl, mix together the cornmeal, milk and salt. \n3 Slowly pour the cornmeal/milk mixture into the boiling water, stirring constantly. \n4 Bring it to a boil again, then reduce heat and stir almost constantly (to avoid clumps) for about 15 minutes or until the mixture is thickened to the consistency you like. \n5 Pour this mixture into a lightly greased 9 by 5 loaf pan and allow it to cool to room temperature. \n6 Once the cornmeal has cooled, cover it with plastic wrap and place the pan in the refrigerator overnight or until the mixture has become firm (at least 8 hours).  \n7 Remove the cornmeal loaf from the pan and slice it into 1/2″ to 1″ slices. (We usually slice the loaf into 10 slices, then cut those slices in half so they cook more quickly and make smaller pieces.) \n8 Heat the butter in a skillet over medium heat. \n9 Once the pan is hot, add the slices and fry for 3-4 minutes on each side until they are golden brown and heated through. Watch them closely so they don’t burn. \n10Serve immediately with maple syrup or honey if desired.",
"category": "breakfast",
},

{
  "id": new mongoose.Types.ObjectId(),
  "image": "/images/ gruel.png",
  "name": " gruel",
"ingredients" : [
"1 cup oatmeal or oat groats",
"1 cup flaxseed meal",
"1 cup chopped or ground walnuts, or whatever you have",
"1 cup oat bran",
"4 cups milk",
"1/2 teaspoon cinnamon (optional)",
],
"instructions": "1. Cook oatmeal (or groats) in 4 cups of boiling water for 5 minutes. You won't see much change in oatmeal consistency at this time. \n2 Simmer mixture on low heat for 45 minutes. You'll notice the oatmeal has soaked up water and formed a thick, cooked porridge-like consistency. \n3 Allow mixture to cool to room temperature. \n4 Mix oatmeal/groat mixture with flaxseed meal, walnuts, and oat bran. Consistency will be very thick, almost like paste, at this time. \n5 Add milk in slowly using 1/4-cup increments. \n6 Adjust the amount of milk you add to reach desired consistency. For a thicker gruel, use 1/4 to 1/2 cup less (3 1/2 to 3 3/4 cups of milk total); for a runnier gruel, add 1/4 to 1/2 cups of additional milk (4 1/4 to 4 1/2 cups total). \n7 If you added too much milk, strain runny gruel if you want to eliminate excess liquid to thicken it up. \n8 The gruel can be served hot or cold. Heat gruel on your stove top over low heat (while stirring) for 3 to 4 minutes to serve it hot. Chill gruel in the refrigerator for at least an hour if you want to serve it cold. \n9 Top with cinnamon, if desired, before serving.",
"category": "breakfast",
},

{
  "id": new mongoose.Types.ObjectId(),
  "image": "/images/ possum stew.png",
  "name": " possum stew",
"ingredients" : [
  "1 big possum",
  "½ cup olive oil",
  "2 garlic cloves, minced",
  "2 medium yellow onions, sliced",
  "4 carrots, cut in thick slices",
  "2 cups fresh or frozen corn",
  "3 strips of thick-cut bacon diced",
  "½ cup tomato juice",
  "1 28 oz. can diced tomatoes",
  "1 tablespoon cornstarch",
  "2 Habanero peppers diced (wear gloves)",
  "¼ cup white vinegar",
  "10-12 drops Tabasco",
  "salt and pepper to taste",
  "6 medium potatoes, peeled and sliced",
],
"instructions": "1. Rub possum with salt and pepper. \n2 Brown possum in olive oil in a large skillet. \n3 Transfer possum to large stock pot. \n4 Fill pot 2/3 full with water. \n5 Add vinegar, onions, carrots, corn, and habanero peppers. \n6 Bring to boil and add bacon. \n7 Cover tightly, reduce heat and simmer for 1 hour. \n8 Bring to boil and add potatoes, garlic, tabasco, tomatoes and juice. \n9 Cover tightly, reduce heat and simmer for another hour. \n10 Make a no lump paste of cornstarch and warm water. \n11 Add enough paste to stew until thickened to wanted consistency. \n12 Add salt and pepper to taste and simmer 15 more minutes",
"category": "dinner", 
},

{
  "id": new mongoose.Types.ObjectId(),
  "image": "/images/ steamed sweet rice cakes.png",
  "name": " steamed sweet rice cakes",
"ingredients" : [
  
"1 cup sugar",
"2 cups water",
"2 cups rice flour",
"1 tsp yeast",
"1 tbsp warm water",
"1/8 tsp oil",
"oil to grease pan",
"water for steamer",
],
"instructions": "1. Dissolve the sugar in the water by heating it in a small pot. Set aside to cool down to room temperature. \n2 Mix the yeast with warm water. Set it aside to bloom (usually in a few minutes). \n3 Add the rice flour and sugar water to a large bowl. Mix until well combined. Add in the yeast mixture and lightly stir to combine. Cover and let it proof for 2-3 hours in a warm environment. *Add a few drops of oil 30 minutes into the proofing step. \n4 Once a thick layer of small bubbles are on the surface of the rice mixture, lightly grease a 9 inch pie pan. Then add the rice mixture to the pan. \n5 Boil the water for the steamer first. Add the pan to the steamer. *Cover with the lid and let it steam for 10-15 minutes. \n6Remove the pan from the steamer and let it completely cool down. Remove the cake from the pan and slice into diamonds, wedges, or cubes.",
"category": "dessert", 
},

module.exports = seedRecipes;