"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import { getContinents, getCountries } from "../actions"
import { countryId } from "@/atoms/overview"
import { useAtom } from "jotai/react"

function createContinentCountryArray(continents:any, countries:any) {
    // Group countries by continent_id
    const countriesByContinent:any = {};
    countries.forEach((country:any) => {
      if (!countriesByContinent[country.continent_id]) {
        countriesByContinent[country.continent_id] = [];
      }
      countriesByContinent[country.continent_id].push(country);
    });
  
    // Create the desired structure
    const result = continents.map((continent:any) => ({
      continent: continent.name,
      countries: countriesByContinent[continent.id]?.map((country:any) => ({
        label: country.name,
        value: country.name.toLowerCase().replace(/\s+/g, '-'),
        id:country.id
      })),
    }));
  
    return result;
  }



type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
  const [selectedTeam, setSelectedTeam] = React.useState<any>(
    
  )
  const [selectedCountryId, setSelectedCountryId] = useAtom(countryId)
  const [regions, setRegions] = React.useState<any>()
  const [continents, setContinents] = React.useState<any>()
  const [countries, setCountries] = React.useState<any>()
  const getSelectorCountrySelectorData=async()=>{
    const {error,data}= await getContinents()
    if(data){
        setContinents(data)
        const {error,data:countriesData}= await getCountries()
        setCountries(countriesData)
    }
  }
  React.useEffect(() => {
    !countries && !continents&& getSelectorCountrySelectorData()
  }, [])
  React.useEffect(() => {
    if(countries?.length>0 && continents?.length>0){
        const result =createContinentCountryArray(continents, countries)
        console.log('====================================');
        console.log(result);
        console.log('====================================');
        setRegions(result)
    }
  }, [countries])
  
  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a region"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTeam?.value}.png`}
                alt={selectedTeam?.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {selectedTeam?.label??"None selected " }
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search region..." />
              <CommandEmpty>No region found.</CommandEmpty>
              {regions?.map((region:any) => (
                <CommandGroup key={region.continent} heading={region.continent}>
                  {region?.countries?.map((country:any) => (
                    <CommandItem
                      key={country.value}
                      onSelect={() => {
                        console.log('====================================');
                        console.log(country);
                        console.log('====================================');
                        setSelectedTeam(country)
                        setSelectedCountryId(country.id)
                        setOpen(false)
                      }}
                      className="text-sm cursor-pointer"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${country.value}.png`}
                          alt={country.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {country?.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedTeam?.value === country?.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            
          </Command>
        </PopoverContent>
      </Popover>
      {/* <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent> */}
    </Dialog>
  )
}