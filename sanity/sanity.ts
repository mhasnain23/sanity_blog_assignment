import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Replace with your dataset name
    apiVersion: '2023-01-01',    // Use a date-based API version
    useCdn: true,                // Enable/disable CDN
});

// Image URL Builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
