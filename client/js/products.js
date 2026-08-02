

//,products js


// ==========================================
// Categories
// ==========================================

const CATEGORY = {
    ORNAMENTAL: "ornamental",
    MEDICINAL: "medicinal",
    SEEDLINGS: "seedlings",
    SEEDS: "seeds"
};

 

 // =================================================================================
// LunaRose Products Database
// ============================================================================

const products = [

    { 


        //ORNAMENTAL =============================================================
        //=======================================================
        id: 1,

        name: "Hybrid Tea Rose",

        scientificName: "Rosa hybrida",

        category: "ornamental",

        price: 24.99,

        oldPrice: 29.99,

        stock: 18,

        rating: 4.9,

        favorite: false,

        images: [

            "../assets/images/Hybrid-Tea-Rose.png",

            "../assets/images/Hybrid-Tea-Rose-zoom.png",

        ],

        shortDescription:
            "Elegant flowering rose with large colorful blooms.",

        description:
            "A classic ornamental rose producing large, fragrant flowers that bring elegance and color to gardens and balconies."
    },

    {
        id: 2,

        name: "Monstera Deliciosa",

        scientificName: "Monstera deliciosa",

        category: "ornamental",

        price: 29.99,

        oldPrice: 34.99,

        stock: 15,

        rating: 4.8,

        favorite: false,

        images: [

            "../assets/images/Monstera-Deliciosa.png",

            "../assets/images/Monstera-Deliciosa-zoom.png"

        ],

        shortDescription:
            "Popular tropical indoor plant with split leaves.",

        description:
            "One of the world's most popular houseplants, admired for its iconic split leaves and lush tropical appearance."
    },

    {
        id: 3,

        name: "Snake Plant",

        scientificName: "Dracaena trifasciata",

        category: "ornamental",

        price: 19.99,

        oldPrice: 24.99,

        stock: 22,

        rating: 4.7,

        favorite: false,

        images: [

            "../assets/images/Snake-Plant.png",

            "../assets/images/Snake-Plant-zoom.png"

        ],

        shortDescription:
            "Low-maintenance plant perfect for beginners.",

        description:
            "A hardy indoor plant with upright leaves that tolerates low light and requires very little watering."
    },

    {
        id: 4,

        name: "Peace Lily",

        scientificName: "Spathiphyllum",

        category: "ornamental",

        price: 22.99,

        oldPrice: 27.99,

        stock: 16,

        rating: 4.8,

        favorite: false,

        images: [

            "../assets/images/Peace-Lily.png",

            "../assets/images/Peace-Lily-zoom.png"

        ],

        shortDescription:
            "Beautiful flowering indoor plant.",

        description:
            "Known for its elegant white flowers and glossy green leaves, making it a favorite decorative houseplant."
    },

    {
        id: 5,

        name: "ZZ Plant",

        scientificName: "Zamioculcas zamiifolia",

        category: "ornamental",

        price: 27.99,

        oldPrice: 32.99,

        stock: 14,

        rating: 4.9,

        favorite: false,

        images: [

            "../assets/images/ZZ-Plant.png",

            "../assets/images/ZZ-Plant-zoom.png"

        ],

        shortDescription:
            "Stylish indoor plant with glossy leaves.",

        description:
            "An attractive, drought-tolerant houseplant that thrives with minimal care and adds a modern touch to any interior."
    },


    {
    id: 6,

    name: "Rubber Plant",

    scientificName: "Ficus elastica",

    category: CATEGORY.ORNAMENTAL,

    price: 26.99,

    oldPrice: 31.99,

    stock: 17,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Rubber-Plant.png",

        "../assets/images/Rubber-Plant-zoom.png"

    ],

    shortDescription:
        "Elegant indoor plant with glossy dark green leaves.",

    description:
        "A hardy ornamental plant known for its thick, shiny foliage and excellent adaptability to indoor environments."
},

{
    id: 7,

    name: "Areca Palm",

    scientificName: "Dypsis lutescens",

    category: CATEGORY.ORNAMENTAL,

    price: 34.99,

    oldPrice: 39.99,

    stock: 12,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Areca-Palm.png",

        "../assets/images/Areca-Palm-zoom.png"

    ],

    shortDescription:
        "Graceful tropical palm for indoor decoration.",

    description:
        "A lush palm with feathery fronds that creates a relaxing tropical atmosphere in homes and offices."
},

{
    id: 8,

    name: "Golden Pothos",

    scientificName: "Epipremnum aureum",

    category: CATEGORY.ORNAMENTAL,

    price: 17.99,

    oldPrice: 21.99,

    stock: 28,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Golden-Pothos.png",

        "../assets/images/Golden-Pothos-zoom.png"

    ],

    shortDescription:
        "Fast-growing trailing houseplant.",

    description:
        "A low-maintenance vine with attractive heart-shaped leaves, perfect for shelves, hanging baskets, and beginners."
},

{
    id: 9,

    name: "Fiddle Leaf Fig",

    scientificName: "Ficus lyrata",

    category: CATEGORY.ORNAMENTAL,

    price: 39.99,

    oldPrice: 45.99,

    stock: 10,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Fiddle-Leaf-Fig.png",

        "../assets/images/Fiddle-Leaf-Fig-zoom.png"

    ],

    shortDescription:
        "Stylish indoor tree with large violin-shaped leaves.",

    description:
        "A premium ornamental plant admired for its bold foliage and modern decorative appeal."
},

{
    id: 10,

    name: "Chinese Evergreen",

    scientificName: "Aglaonema",

    category: CATEGORY.ORNAMENTAL,

    price: 23.99,

    oldPrice: 28.99,

    stock: 20,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Chinese-Evergreen.png",

        "../assets/images/Chinese-Evergreen-zoom.png"

    ],

    shortDescription:
        "Beautiful foliage plant with colorful patterned leaves.",

    description:
        "A durable indoor plant appreciated for its vibrant foliage and ability to thrive in low-light conditions."
},

{
    id: 11,

    name: "Spider Plant",

    scientificName: "Chlorophytum comosum",

    category: CATEGORY.ORNAMENTAL,

    price: 15.99,

    oldPrice: 19.99,

    stock: 30,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Spider-Plant.png",

        "../assets/images/Spider-Plant-zoom.png"

    ],

    shortDescription:
        "Classic hanging plant with arching striped leaves.",

    description:
        "An easy-to-grow houseplant that produces elegant cascading foliage, making it ideal for shelves and hanging pots."
},

  //MEDICINAL =======================================================
  //=================================================================



{
    id: 12,

    name: "Aloe Vera",

    scientificName: "Aloe vera",

    category: CATEGORY.MEDICINAL,

    price: 14.99,

    oldPrice: 18.99,

    stock: 24,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Aloe-Vera.png",

        "../assets/images/Aloe-Vera-zoom.png"

    ],

    shortDescription:
        "Popular medicinal succulent with soothing gel.",

    description:
        "A well-known medicinal plant valued for its cooling gel, commonly used for skincare and minor burns."
},

{
    id: 13,

    name: "Lavender",

    scientificName: "Lavandula angustifolia",

    category: CATEGORY.MEDICINAL,

    price: 16.99,

    oldPrice: 20.99,

    stock: 20,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Lavender.png",

        "../assets/images/Lavender-zoom.png"

    ],

    shortDescription:
        "Fragrant herb with calming properties.",

    description:
        "Lavender is cherished for its pleasant aroma and is widely used in herbal remedies, essential oils, and home gardens."
},

{
    id: 14,

    name: "Peppermint",

    scientificName: "Mentha × piperita",

    category: CATEGORY.MEDICINAL,

    price: 11.99,

    oldPrice: 14.99,

    stock: 28,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Peppermint.png",

        "../assets/images/Peppermint-zoom.png"

    ],

    shortDescription:
        "Refreshing herb with cooling leaves.",

    description:
        "Peppermint is a fast-growing herb appreciated for its refreshing scent, culinary uses, and traditional medicinal benefits."
},

{
    id: 15,

    name: "Rosemary",

    scientificName: "Salvia rosmarinus",

    category: CATEGORY.MEDICINAL,

    price: 13.99,

    oldPrice: 17.99,

    stock: 22,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Rosemary.png",

        "../assets/images/Rosemary-zoom.png"

    ],

    shortDescription:
        "Aromatic herb for cooking and wellness.",

    description:
        "Rosemary is a hardy evergreen herb valued for its fragrant leaves, culinary flavor, and traditional herbal applications."
},

{
    id: 16,

    name: "Chamomile",

    scientificName: "Matricaria chamomilla",

    category: CATEGORY.MEDICINAL,

    price: 12.99,

    oldPrice: 15.99,

    stock: 25,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Chamomile.png",

        "../assets/images/Chamomile-zoom.png"

    ],

    shortDescription:
        "Gentle flowering herb with soothing qualities.",

    description:
        "Chamomile is a delicate flowering herb widely recognized for its calming properties and traditional herbal tea preparations."
},

{
    id: 17,

    name: "Sage",

    scientificName: "Salvia officinalis",

    category: CATEGORY.MEDICINAL,

    price: 13.99,

    oldPrice: 16.99,

    stock: 18,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Sage.png",

        "../assets/images/Sage-zoom.png"

    ],

    shortDescription:
        "Aromatic herb with traditional medicinal uses.",

    description:
        "Sage is a fragrant evergreen herb valued for its culinary flavor and long history in traditional herbal medicine."
},

{
    id: 18,

    name: "Lemon Balm",

    scientificName: "Melissa officinalis",

    category: CATEGORY.MEDICINAL,

    price: 12.99,

    oldPrice: 15.99,

    stock: 20,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Lemon-Balm.png",

        "../assets/images/Lemon-Balm-zoom.png"

    ],

    shortDescription:
        "Refreshing herb with a pleasant lemon scent.",

    description:
        "Lemon Balm is a soothing herb known for its fresh citrus aroma and its traditional use in herbal teas and wellness remedies."
},

{
    id: 19,

    name: "Thyme",

    scientificName: "Thymus vulgaris",

    category: CATEGORY.MEDICINAL,

    price: 11.99,

    oldPrice: 14.99,

    stock: 24,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Thyme.png",

        "../assets/images/Thyme-zoom.png"

    ],

    shortDescription:
        "Versatile herb with aromatic leaves.",

    description:
        "Thyme is a hardy herb appreciated for its distinctive aroma, culinary uses, and traditional medicinal properties."
},

{
    id: 20,

    name: "Holy Basil",

    scientificName: "Ocimum tenuiflorum",

    category: CATEGORY.MEDICINAL,

    price: 15.99,

    oldPrice: 19.99,

    stock: 16,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Holy-Basil.png",

        "../assets/images/Holy-Basil-zoom.png"

    ],

    shortDescription:
        "Sacred medicinal herb with rich tradition.",

    description:
        "Holy Basil, also known as Tulsi, is widely valued in traditional medicine for its aromatic leaves and wellness benefits."
},

{
    id: 21,

    name: "Oregano",

    scientificName: "Origanum vulgare",

    category: CATEGORY.MEDICINAL,

    price: 10.99,

    oldPrice: 13.99,

    stock: 26,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Oregano.png",

        "../assets/images/Oregano-zoom.png"

    ],

    shortDescription:
        "Popular herb with bold flavor and aroma.",

    description:
        "Oregano is a fragrant herb commonly used in cooking and appreciated for its traditional medicinal and antioxidant properties."
},
 

//SEEDLINGS=======================================================
  //=================================================================



{
    id: 22,

    name: "Tomato Seedling",

    scientificName: "Solanum lycopersicum",

    category: CATEGORY.SEEDLINGS,

    price: 7.99,

    oldPrice: 9.99,

    stock: 35,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Tomato-Seedling.png",

        "../assets/images/Tomato-Seedling-zoom.png"

    ],

    shortDescription:
        "Healthy young tomato plant ready for transplanting.",

    description:
        "A vigorous tomato seedling with strong roots, ideal for home gardens and vegetable cultivation."
},

{
    id: 23,

    name: "Pepper Seedling",

    scientificName: "Capsicum annuum",

    category: CATEGORY.SEEDLINGS,

    price: 8.99,

    oldPrice: 10.99,

    stock: 30,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Pepper-Seedling.png",

        "../assets/images/Pepper-Seedling-zoom.png"

    ],

    shortDescription:
        "Young pepper plant with healthy green leaves.",

    description:
        "A strong pepper seedling suitable for growing sweet or hot peppers in gardens and containers."
},

{
    id: 24,

    name: "Cucumber Seedling",

    scientificName: "Cucumis sativus",

    category: CATEGORY.SEEDLINGS,

    price: 7.49,

    oldPrice: 9.49,

    stock: 38,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Cucumber-Seedling.png",

        "../assets/images/Cucumber-Seedling-zoom.png"

    ],

    shortDescription:
        "Fresh cucumber seedling for productive harvests.",

    description:
        "A healthy cucumber seedling that grows rapidly and produces crisp, delicious cucumbers."
},

{
    id: 25,

    name: "Eggplant Seedling",

    scientificName: "Solanum melongena",

    category: CATEGORY.SEEDLINGS,

    price: 8.49,

    oldPrice: 10.49,

    stock: 28,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Eggplant-Seedling.png",

        "../assets/images/Eggplant-Seedling-zoom.png"

    ],

    shortDescription:
        "Healthy eggplant seedling for vegetable gardens.",

    description:
        "A robust eggplant seedling that develops into a productive plant with glossy purple fruits."
},

{
    id: 26,

    name: "Lettuce Seedling",

    scientificName: "Lactuca sativa",

    category: CATEGORY.SEEDLINGS,

    price: 6.99,

    oldPrice: 8.99,

    stock: 40,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Lettuce-Seedling.png",

        "../assets/images/Lettuce-Seedling-zoom.png"

    ],

    shortDescription:
        "Tender lettuce seedling for fresh salads.",

    description:
        "A fast-growing lettuce seedling that produces crisp, flavorful leaves ideal for healthy home-grown salads."
},


{
    id: 27,

    name: "Broccoli Seedling",

    scientificName: "Brassica oleracea var. italica",

    category: CATEGORY.SEEDLINGS,

    price: 8.49,

    oldPrice: 10.49,

    stock: 26,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Broccoli-Seedling.png",

        "../assets/images/Broccoli-Seedling-zoom.png"

    ],

    shortDescription:
        "Healthy broccoli seedling ready for transplanting.",

    description:
        "A vigorous broccoli seedling that grows into a productive plant with compact, nutritious green heads."
},

{
    id: 28,

    name: "Cabbage Seedling",

    scientificName: "Brassica oleracea var. capitata",

    category: CATEGORY.SEEDLINGS,

    price: 7.99,

    oldPrice: 9.99,

    stock: 30,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Cabbage-Seedling.png",

        "../assets/images/Cabbage-Seedling-zoom.png"

    ],

    shortDescription:
        "Strong cabbage seedling for healthy harvests.",

    description:
        "A resilient cabbage seedling that develops into large, compact heads suitable for home gardens."
},

{
    id: 29,

    name: "Strawberry Seedling",

    scientificName: "Fragaria x ananassa",

    category: CATEGORY.SEEDLINGS,

    price: 9.99,

    oldPrice: 12.99,

    stock: 24,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Strawberry-Seedling.png",

        "../assets/images/Strawberry-Seedling-zoom.png"

    ],

    shortDescription:
        "Young strawberry plant for sweet home-grown fruits.",

    description:
        "A healthy strawberry seedling that produces delicious red berries and is perfect for gardens or containers."
},

{
    id: 30,

    name: "Watermelon Seedling",

    scientificName: "Citrullus lanatus",

    category: CATEGORY.SEEDLINGS,

    price: 8.99,

    oldPrice: 10.99,

    stock: 22,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Watermelon-Seedling.png",

        "../assets/images/Watermelon-Seedling-zoom.png"

    ],

    shortDescription:
        "Healthy watermelon seedling with vigorous growth.",

    description:
        "A strong watermelon seedling capable of producing large, juicy fruits under proper growing conditions."
},

{
    id: 31,

    name: "Zucchini Seedling",

    scientificName: "Cucurbita pepo",

    category: CATEGORY.SEEDLINGS,

    price: 7.99,

    oldPrice: 9.99,

    stock: 28,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Zucchini-Seedling.png",

        "../assets/images/Zucchini-Seedling-zoom.png"

    ],

    shortDescription:
        "Fast-growing zucchini seedling for productive gardens.",

    description:
        "A healthy zucchini seedling that develops quickly and produces abundant, tender fruits throughout the growing season."
},

//SEEDS =======================================================
  //=================================================================


{
    id: 32,

    name: "Sunflower Seeds",

    scientificName: "Helianthus annuus",

    category: CATEGORY.SEEDS,

    price: 3.99,

    oldPrice: 5.99,

    stock: 120,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Sunflower-Seeds.png",

         "../assets/images/Sunflower-Seeds.png"

    ],

    shortDescription:
        "Premium sunflower seeds with high germination rate.",

    description:
        "High-quality sunflower seeds selected for excellent germination and healthy plant growth."
},

{
    id: 33,

    name: "Tomato Seeds",

    scientificName: "Solanum lycopersicum",

    category: CATEGORY.SEEDS,

    price: 3.49,

    oldPrice: 4.99,

    stock: 150,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Tomato-Seeds.png",

        "../assets/images/Tomato-Seeds.png"

    ],

    shortDescription:
        "Premium tomato seeds for productive harvests.",

    description:
        "Carefully selected tomato seeds with excellent germination, ideal for home gardens and farms."
},

{
    id: 34,

    name: "Pepper Seeds",

    scientificName: "Capsicum annuum",

    category: CATEGORY.SEEDS,

    price: 3.99,

    oldPrice: 5.49,

    stock: 130,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Pepper-Seeds.png",

        "../assets/images/Pepper-Seeds.png"

    ],

    shortDescription:
        "High-quality pepper seeds for healthy plants.",

    description:
        "Reliable pepper seeds that produce vigorous plants with abundant sweet or hot peppers."
},

{
    id: 35,

    name: "Cucumber Seeds",

    scientificName: "Cucumis sativus",

    category: CATEGORY.SEEDS,

    price: 3.49,

    oldPrice: 4.99,

    stock: 140,

    rating: 4.7,

    favorite: false,

    images: [

        "../assets/images/Cucumber-Seeds.png",

        "../assets/images/Cucumber-Seeds.png"

    ],

    shortDescription:
        "Fresh cucumber seeds with excellent germination.",

    description:
        "Premium cucumber seeds suitable for gardens and greenhouses, producing crisp and flavorful cucumbers."
},

{
    id: 36,

    name: "Watermelon Seeds",

    scientificName: "Citrullus lanatus",

    category: CATEGORY.SEEDS,

    price: 4.49,

    oldPrice: 5.99,

    stock: 110,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Watermelon-Seeds.png",

        "../assets/images/Watermelon-Seeds.png"

    ],

    shortDescription:
        "Selected watermelon seeds for sweet, juicy fruits.",

    description:
        "Premium watermelon seeds chosen for strong germination and the production of large, delicious fruits."
},



{
    id: 37,

    name: "Lettuce Seeds",

    scientificName: "Lactuca sativa",

    category: CATEGORY.SEEDS,

    price: 3.49,

    oldPrice: 4.99,

    stock: 140,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Lettuce-Seeds.png",

        "../assets/images/Lettuce-Seeds.png"

    ],

    shortDescription:
        "Premium lettuce seeds with excellent germination.",

    description:
        "Carefully selected lettuce seeds that produce crisp, fresh leaves, perfect for salads and home gardens."
},

{
    id: 38,

    name: "Carrot Seeds",

    scientificName: "Daucus carota",

    category: CATEGORY.SEEDS,

    price: 3.99,

    oldPrice: 5.49,

    stock: 135,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Carrot-Seeds.png",

        "../assets/images/Carrot-Seeds.png"

    ],

    shortDescription:
        "High-quality carrot seeds for healthy roots.",

    description:
        "Premium carrot seeds that deliver excellent germination and produce sweet, flavorful carrots."
},

{
    id: 39,

    name: "Corn Seeds",

    scientificName: "Zea mays",

    category: CATEGORY.SEEDS,

    price: 4.49,

    oldPrice: 5.99,

    stock: 120,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Corn-Seeds.png",

        "../assets/images/Corn-Seeds.png"

    ],

    shortDescription:
        "Selected corn seeds for vigorous growth.",

    description:
        "High-performance corn seeds chosen for reliable germination and productive harvests."
},

{
    id: 40,

    name: "Bean Seeds",

    scientificName: "Phaseolus vulgaris",

    category: CATEGORY.SEEDS,

    price: 3.99,

    oldPrice: 5.49,

    stock: 145,

    rating: 4.8,

    favorite: false,

    images: [

        "../assets/images/Bean-Seeds.png",

        "../assets/images/Bean-Seeds.png"

    ],

    shortDescription:
        "Premium bean seeds for productive gardens.",

    description:
        "Healthy bean seeds selected for fast germination and abundant harvests throughout the growing season."
},

{
    id: 41,

    name: "Pea Seeds",

    scientificName: "Pisum sativum",

    category: CATEGORY.SEEDS,

    price: 3.49,

    oldPrice: 4.99,

    stock: 150,

    rating: 4.9,

    favorite: false,

    images: [

        "../assets/images/Pea-Seeds.png",

        "../assets/images/Pea-Seeds.png"

    ],

    shortDescription:
        "Fresh pea seeds with high germination rate.",

    description:
        "Premium pea seeds that grow into healthy, productive plants with sweet and tender peas."
},

];


