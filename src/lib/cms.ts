import { createClient } from 'microcms-js-sdk';
import type { MicroCMSListContent } from 'microcms-js-sdk';
// import type { MicroCMSRelation } from 'microcms-ts-sdk';

export type Image = {
    url: string;
    height: number;
    width: number;
};

export type Tag = {
    name: string;
};

export type Blog = {
    title: string;
    description: string;
    heroImage: Image | undefined;
    body: string;
    // tags: MicroCMSRelation<Tag>[];
};

export type BlogPreview = Pick<
    Blog & MicroCMSListContent,
    'id' | 'title' | 'description' | 'heroImage' | 'publishedAt' | 'revisedAt'
>;

type Endpoints = {
    list: {
        blog: Blog;
        tag: Tag;
    };
};

if (!process.env.MICRO_CMS_SERVICE_DOMAIN || !process.env.MICRO_CMS_API_KEY) {
    throw Error('Environment variables are not provided.');
}

const client = createClient({
    serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
    apiKey: process.env.MICRO_CMS_API_KEY,
});

export default client;