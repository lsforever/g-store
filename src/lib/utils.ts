import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export function formatPrice(
    price: number | string,
    options: {
        currency?: 'USD' | 'EUR' | 'GBP' | 'BDT'
        notation?: Intl.NumberFormatOptions['notation']
    } = {}
) {
    const { currency = 'USD', notation = 'compact' } = options

    const numericPrice = typeof price === 'string' ? parseFloat(price) : price

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        notation,
        maximumFractionDigits: 2,
    }).format(numericPrice)
}

export function constructMetadata({
    title = 'G Store - the marketplace for Gaming accounts and items',
    description = 'G Store is a reliable marketplace for high-quality gaming accounts and goods.',
    image = '/thumbnail.png',
    icons = '/favicon.ico',
    noIndex = false,
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@lsforever',
        },
        icons,
        metadataBase: new URL('https://g-store.up.railway.app'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}
