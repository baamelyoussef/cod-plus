import { Metadata } from "next"
import Image from "next/image"
import TeamSwitcher from "./components/team-switcher"
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentSales } from "./components/recent-sales"
import { Search } from "./components/search"
import Overview from "./components/all"
import Products from "./components/products"


export const metadata: Metadata = {
  title: "Analytics",
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
            <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              {/* <Button>Download</Button> */}
            </div>
          </div>
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="adspend" >
                AD Spend 
              </TabsTrigger>
              
              <TabsTrigger value="products" >
                Products 
              </TabsTrigger>
              <TabsTrigger value="expenses" >
                Expenses 
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
             <Overview/> 
            </TabsContent>
            <TabsContent value="products" className="space-y-4">
             <Products/> 
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}