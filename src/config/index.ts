export const PRODUCT_CATEGORIES = [
    {
        label: 'Gaming Accounts',
        value: 'accounts' as const,
        featured: [
            {
                name: 'Editor picks',
                href: `/products?category=accounts`,
                imageSrc: '/nav/accounts/editor.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=accounts&sort=desc',
                imageSrc: '/nav/accounts/new.jpg',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=accounts',
                imageSrc: '/nav/accounts/best.jpg',
            },
        ],
    },
    {
        label: 'Gaming Items',
        value: 'items' as const,
        featured: [
            {
                name: 'Favorite Item Picks',
                href: `/products?category=items`,
                imageSrc: '/nav/items/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=items&sort=desc',
                imageSrc: '/nav/items/new.jpg',
            },
            {
                name: 'Bestselling Items',
                href: '/products?category=items',
                imageSrc: '/nav/items/bestsellers.jpg',
            },
        ],
    },
]
