  // const FetchData = async (endPoint: string) => {
  // const response = await fetch(`${endPoint}`);
  // const responseData = response.json();
  // return responseData;
  // }

import { ProductType } from "../model/Types";

const BaseURL = 'https://demos-iconcreations.com/schlafmiestrback/api/';

  const SlidersEndPoint = `${BaseURL}sliders`;
  const MattressEndPoint = `${BaseURL}productTypes`

  export const FetchSliders = async () => {
    const response = await fetch(SlidersEndPoint);
    const responseData = await response.json();
    return responseData.message.sliders;
    }

  export const FetchMattress = async () => {
    const response = await fetch(MattressEndPoint);
    const responseData = await response.json();
    const allProducts = responseData.message.productTypes;

    const blissProducts = allProducts[0]?.products.filter((ele: ProductType, index: number) => {return allProducts[0]?.products[index]?.title_english !== allProducts[0]?.products[index - 1]?.title_english});
    const sleepProducts = allProducts[1]?.products.filter((ele: ProductType, index: number) => {return allProducts[1]?.products[index]?.title_english !== allProducts[1]?.products[index - 1]?.title_english});
    const essentialProducts = allProducts[2]?.products.filter((ele: ProductType, index: number) => {return allProducts[2]?.products[index]?.title_english !== allProducts[2]?.products[index - 1]?.title_english});

    return {
      blissLine: blissProducts,
      sleepSpa: sleepProducts,
      essential: essentialProducts,
    }
    }