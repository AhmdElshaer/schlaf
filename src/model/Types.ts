export interface SliderType {
  id: number;
  english_title: string;
  arabic_title: string;
  english_description: string;
  arabic_description: string;
  discover_now: string;
  image: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export interface ProductType {
  id: number;
  title_english: string;
  title_arabic: string;
  description_english: string;
  description_arabic: string;
  availability: string;
  brand: string;
  color: any;
  mattressType: string;
  pillowTop: string;
  height: string;
  height_description_en: string;
  height_description_ar: string;
  width: string;
  length: string;
  size: string;
  size_arabic: string;
  countryOrigin_arabic: string;
  afterPrice: string;
  stockQuantity: string;
  imageCode: string;
  warranty: string;
  warranty_arabic: string;
  isFeatured: string;
  topSelling: string;
  feeling_english: string;
  feeling_arabic: string;
  productType_id: string;
  category_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  english_data_description: [];
  arabic_data_description: [];
  product_photos: [];
}
