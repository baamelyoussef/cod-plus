"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SPCalculator = () => {
  const [sellingPrice, setSellingPrice] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null)
  const [grossPrice, setGrossPrice] = useState(0);
  const [confirmationRate, setConfirmationRate] = useState(40);
  const [deliveryRate, setDeliveryRate] = useState(20);
  const [shippingCost, setShippingCost] = useState(0);
  const [codFees, setCodFees] = useState(0);
  const [costPerLead, setCostPerLead] = useState(0);

  const handleGrossPriceChange = (e:any) => {
    setGrossPrice(parseFloat(e.target.value));
  };

  const handleConfirmationRateChange = (e:any) => {
    setConfirmationRate(parseFloat(e.target.value));
  };

  const handleDeliveryRateChange = (e:any) => {
    setDeliveryRate(parseFloat(e.target.value));
  };

  const handleShippingCostChange = (e:any) => {
    setShippingCost(parseFloat(e.target.value));
  };

  const handleCodFeesChange = (e:any) => {
    setCodFees(parseFloat(e.target.value));
  };

  const handleCostPerLeadChange = (e:any) => {
    setCostPerLead(parseFloat(e.target.value));
  };

  const calculateSellingPrice = () => {
    // Calculate the number of successful deliveries based on the delivery rate
    const successfulDeliveries = (deliveryRate / 100) * 10;

    // Calculate the total expenses
    const totalExpenses =
      grossPrice + shippingCost + codFees + costPerLead;

    // Calculate the portion of total expenses to be covered by successful deliveries
    const expensesPerSuccessfulDelivery = totalExpenses / successfulDeliveries;

    // Calculate the selling price by adding the expenses per successful delivery
    const sellingPrice = (expensesPerSuccessfulDelivery / (confirmationRate / 100))+7 ;
    console.log('====================================');
    console.log(sellingPrice);
    console.log('====================================');
    setSellingPrice(sellingPrice);
  };
  useEffect(() => {
    calculateSellingPrice()
  }, [shippingCost,grossPrice,codFees,costPerLead,selectedCurrency])
  
  return (
    <Card>
      <CardHeader className="flex justify-around">
        <CardTitle>Selling Price Calculator</CardTitle>
        <CardDescription>Know your numbers</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Input fields */}
        <div className="w-full mb-2">
          <Label>Currency</Label>
          
          <Select onValueChange={(e) => setSelectedCurrency(e)}>
            <SelectTrigger>
              <SelectValue placeholder='Select a currency' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='usd'>
                <span className='font-medium'>USD</span> -{" "}
                <span className='text-muted-foreground'>
                  US Dollar
                </span>
              </SelectItem>
              <SelectItem value='euro'>
                <span className='font-medium'>EUR</span> -{" "}
                <span className='text-muted-foreground'>European EURO</span>
              </SelectItem>
              <SelectItem value='cfa'>
                <span className='font-medium'>CFA</span> -{" "}
                <span className='text-muted-foreground'>African franc CFA</span>
              </SelectItem>
              <SelectItem value='bhd'>
                <span className='font-medium'>BHD</span> -{" "}
                <span className='text-muted-foreground'>Bahraini Dinar</span>
              </SelectItem>
              <SelectItem value='kwd'>
                <span className='font-medium'>KWD</span> -{" "}
                <span className='text-muted-foreground'>Kuwaiti Dinar</span>
              </SelectItem>
              <SelectItem value='aed'>
                <span className='font-medium'>AED</span> -{" "}
                <span className='text-muted-foreground'>Emirati Dirham</span>
              </SelectItem>
              <SelectItem value='sar'>
                <span className='font-medium'>SAR</span> -{" "}
                <span className='text-muted-foreground'>Saudi Riyal</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">

        
        <div className="w-full">
          <Label>Gross Price</Label>
          <Input
            type="number"
            placeholder="100"
            value={grossPrice}
            onChange={handleGrossPriceChange}
          />
        </div>
        <div className="w-full">
          <Label>Shipping Cost</Label>
          <Input
            type="number"
            placeholder="1"
            value={shippingCost}
            onChange={handleShippingCostChange}
          />
        </div>
        <div className="w-full">
          <Label>COD Fees</Label>
          <Input
            type="number"
            placeholder="7.5"
            value={codFees}
            onChange={handleCodFeesChange}
          />
        </div>
        </div>
        <div className="flex gap-4">

        
        <div className="w-full">
          <Label>Cost Per Lead</Label>
          <Input
            type="number"
            placeholder="1"
            value={costPerLead}
            onChange={handleCostPerLeadChange}
          />
        </div>
        <div className="w-full">
          <Label>Confirmation Rate (%)</Label>
          <Input
            type="number"
            min={10}
            max={100}
            placeholder="40"
            value={confirmationRate}
            onChange={handleConfirmationRateChange}
          />
        </div>
        <div className="w-full">
          <Label>Delivery Rate (%)</Label>
          <Input
            type="number"
            min={10}
            max={100}
            placeholder="20"
            value={deliveryRate}
            onChange={handleDeliveryRateChange}
          />
        </div>
</div>
        
      </CardContent>
      <CardFooter className="flex justify-center">
        <h2>Selling Price : </h2>
        <p>{sellingPrice.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
  
};

export default SPCalculator;
