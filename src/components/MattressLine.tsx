import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import { useQuery } from '@tanstack/react-query';
import { FetchMattress } from "../config/config";
import MattressSwiper from "../ui/MattressSwiper";


export default function MattressLine() {
  
  const { data, status } = useQuery(['mattress'], FetchMattress);

  console.log(data);

  if(status === 'loading') {
    return <div className='text-center text-5xl font-bold'>Loading...</div>
  }

  const tabsData = [
    {
      label: "Bliss Line",
      value: "Bliss Line",
      products: data?.blissLine,
    },
    {
      label: "Sleep Spa",
      value: "Sleep Spa",
      products: data?.sleepSpa,
    },
    {
      label: "Essential Comfy",
      value: "Essential Comfy",
      products: data?.essential,
    },
  ];

  return (
  <div className="mattress container mx-auto flex flex-col justify-center items-center gap-4">
    <div className="text-2xl font-semibold text-orange-600">Our Mattress Line</div>

    <Tabs value="dashboard" className='!w-full'>
      <TabsHeader className="!bg-schlafBlue !rounded-none !w-full !py-2">
        {tabsData.map(({ label, value }) => (
          <Tab key={value} value={value} className='!flex-1'>
            <div className="flex items-center gap-2 text-white !text-xs">
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className='!w-full !mt-4'>
        {tabsData.map(({ value, products }) => (
          <TabPanel key={value} value={value}>
            <MattressSwiper products={products} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  </div>
  );
}
