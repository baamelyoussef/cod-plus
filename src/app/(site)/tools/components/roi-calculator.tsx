import React from "react";
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

const ROICalculator = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Calculator</CardTitle>
        <CardDescription>Know your numbers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex w-full gap-6 '>
          <div className="w-full">
            <Label>Leads</Label>
            <Input placeholder="100"/>
          </div>
          <div className="w-full">
            <Label>Confimation Rate</Label>
            <Input type='number' min={10} max={100} placeholder="40"/>
          </div>
          <div className="w-full">
            <Label>Delivery Rate</Label>
            <Input type='number' min={10} max={100} placeholder="25"/>
          </div>
        </div>
        <div className='flex gap-6 mt-4'>
          <div className="w-full">
            <Label>Leads</Label>
            <Input />
          </div>
          <div className="w-full">
            <Label>Confimation Rate</Label>
            <Input type='number' min={10} max={100} />
          </div>
          <div className="w-full">
            <Label>Delivery Rate</Label>
            <Input type='number' min={10} max={100} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <h2>Profit : </h2>
        <p>5600 CFA</p>
      </CardFooter>
    </Card>
  );
};

export default ROICalculator;
