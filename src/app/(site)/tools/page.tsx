import { Metadata } from "next"
import Image from "next/image"
import TeamSwitcher from "../dashboard/components/team-switcher"
import { MainNav } from "../dashboard/components/main-nav"
import { UserNav } from "../dashboard/components/user-nav"
import { CalendarDateRangePicker } from "../dashboard/components/date-range-picker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Products from "../dashboard/components/products"
import Overview from "../dashboard/components/all"
import ROICalculator from "./components/roi-calculator"
import SPCalculator from "./components/selling-price"
import CountryAnalser from "./components/country-analyser"



export const metadata: Metadata = {
  title: "Tools",
  description: "",
}

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Tools</h2>
            <div className="flex items-center space-x-2">
              {/* <Button>Download</Button> */}
            </div>
          </div>
          <Tabs defaultValue="roi" className="space-y-4">
            <TabsList>
              <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
              <TabsTrigger value="canalyse" >
                Country Analyser
              </TabsTrigger>
              <TabsTrigger value="spc" >
                Selling Price Calculator
              </TabsTrigger>
              
              
            </TabsList>
            <TabsContent value="roi" className="space-y-4">
             <ROICalculator/> 
            </TabsContent>
            <TabsContent value="canalyse" className="space-y-4">
             <CountryAnalser/>
            </TabsContent>
            <TabsContent value="spc" className="space-y-4">
            <SPCalculator/> 
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}