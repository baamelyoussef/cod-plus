"use client";
import { countryId } from "@/atoms/overview";
import { Skeleton } from "@/components/ui/skeleton";
import { useAtom } from "jotai/react";
import React, { useEffect, useState } from "react";
import { getProducts } from "../actions";
import { ProductsTable } from "@/components/blocks/products-table";

const Products = () => {
  const [selectedCountryId, setSelectedCountryId] = useAtom(countryId);
  const [products, setProducts] = useState<any>(null);
  const getProductsData=async()=> {
    const {data,error}= await getProducts(selectedCountryId)
    console.log('====================================');
    console.log(data,error);
    console.log('====================================');
    if(data){
        setProducts(data)
    }
  }
  
  useEffect(() => {
    getProductsData()
  }, [selectedCountryId]);

  return (
    <div className="">
{!products?
    <div className="p-4 space-y-2">
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
    </div>:
    <div><ProductsTable products={products}/></div>
    }
    </div>
  );
};

export default Products;
