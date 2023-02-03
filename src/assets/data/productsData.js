const products = [
    {
        id: '1',
        name: 'iPhone 14 Pro',
        img: 'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
        category: 'iPhone',
        price: 1000,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '2',
        name: 'iPhone 14',
        img: 'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg',
        category: 'iPhone',
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '3',
        name: 'iPhone 13',
        img: 'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg',
        category: 'iPhone',
        price: 599,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '4',
        name: 'iPhone SE',
        img: 'https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg',
        category: 'iPhone',
        price: 429,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '5',
        name: 'iPad Pro',
        img: 'https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png',
        category: 'iPad',
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '6',
        name: 'iPad Air',
        img: 'https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_air__bxjv33pk6nte_large.png',
        category: 'iPad',
        price: 599,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '7',
        name: 'iPad',
        img: 'https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_10_9__f7p2wja0gwuy_large.png',
        category: 'iPad',
        price: 449,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '8',
        name: 'iPad',
        img: 'https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png',
        category: 'iPad',
        price: 329,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '9',
        name: 'iPad mini',
        img: 'https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png',
        category: 'iPad',
        price: 499,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '10',
        name: 'Apple Watch Series 8',
        img: 'https://www.apple.com/v/watch/ba/images/compare/compare_s8__q5ebcy3sahme_large.jpg',
        category: 'Watch',
        price: 399,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '11',
        name: 'Apple Watch SE',
        img: 'https://www.apple.com/v/watch/ba/images/compare/compare_se__fjdos6x4rmmy_large.jpg',
        category: 'Watch',
        price: 249,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '12',
        name: 'Apple Watch Ultra',
        img: 'https://www.apple.com/v/watch/ba/images/compare/compare_ultra__bzeon0dzb49y_large.jpg',
        category: 'Watch',
        price: 799,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '13',
        name: 'AirPods',
        img: 'https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large.png',
        category: 'Airpods',
        price: 129,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '14',
        name: 'AirPods',
        img: 'https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large.png',
        category: 'Airpods',
        price: 169,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '15',
        name: 'AirPods Pro',
        img: 'https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_pro__e9uzt0mzviem_large.png',
        category: 'Airpods',
        price: 249,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
    {
        id: '16',
        name: 'AirPods Max',
        img: 'https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_max__b14s2x6q07rm_large.png',
        category: 'Airpods',
        price: 549,
        shortDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
        reviews: [
            {
                rating: 4.7,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
        avgRating: 4.5
    },
]
export default products