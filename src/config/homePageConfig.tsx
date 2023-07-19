
import { ProductType } from "../model/Types";

const BaseURL = 'https://demos-iconcreations.com/schlafmiestrback/api/';

  const SlidersEndPoint = `${BaseURL}sliders`;
  const MattressEndPoint = `${BaseURL}productTypes`;
  const PresidentMsgEndPoint = `${BaseURL}presidentMessage`;
  const ViceMsgEndPoint = `${BaseURL}vicePresident`;
  const FeaturedProductsEndPoints = `${BaseURL}featuredProducts`;
  

  export const FetchSliders = async () => {
    const response = await fetch(SlidersEndPoint);
    const responseData = await response.json();
    return responseData.message.sliders;
    }

  export const FetchProducts = async () => {
    const response = await fetch(MattressEndPoint);
    const responseData = await response.json();
    const allProducts = responseData.message.productTypes;

    const blissProducts = allProducts[0]?.products.filter((ele: ProductType, index: number) => {return allProducts[0]?.products[index]?.title_english !== allProducts[0]?.products[index - 1]?.title_english});
    const sleepProducts = allProducts[1]?.products.filter((ele: ProductType, index: number) => {return allProducts[1]?.products[index]?.title_english !== allProducts[1]?.products[index - 1]?.title_english});
    const essentialProducts = allProducts[2]?.products.filter((ele: ProductType, index: number) => {return allProducts[2]?.products[index]?.title_english !== allProducts[2]?.products[index - 1]?.title_english});
    const ourProducts: ProductType[] = [];
    blissProducts.map((item: ProductType) => {return ourProducts.push(item)});
    sleepProducts.map((item: ProductType) => {return ourProducts.push(item)});

    return {
      blissLine: blissProducts,
      sleepSpa: sleepProducts,
      essential: essentialProducts,
      ourProducts: ourProducts,
    }
    }

    export const FetchPresidentMsg = async () => {
      const response = await fetch(PresidentMsgEndPoint);
      const responseData = await response.json();
      return responseData.message.president_message;
      }

    export const FetchViceMsg = async () => {
      const response = await fetch(ViceMsgEndPoint);
      const responseData = await response.json();
      return responseData.message.vice_president;
      }

    export const FetchFeaturedProducts = async () => {
      const response = await fetch(FeaturedProductsEndPoints);
      const responseData = await response.json();
      return responseData.message.featuredProducts;
      }