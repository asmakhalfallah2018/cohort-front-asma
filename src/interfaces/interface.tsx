
export interface merchantInfo {
    merchantId: string;
    name: string;
    slug: string;
    logoUrl: string;
    bannerUrl: string;
}

export interface campaignInfo {
    campaignId: string;
    slug: string;
    merchantId: string;
    imageUrl: string;
    title: string;
    price: number;
}

export interface MerchantParams {
    merchantId: string;
}