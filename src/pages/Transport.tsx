
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Bus, Train, MapPin, Calendar, Users, Clock } from "lucide-react";

const Transport = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1"
  });

  const carRentals = [
    {
      id: 1,
      name: "Compact Car",
      model: "Toyota Corolla",
      price: 45,
      seats: 4,
      transmission: "Automatic",
      fuelType: "Gasoline",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "SUV",
      model: "Honda CR-V",
      price: 75,
      seats: 5,
      transmission: "Automatic",
      fuelType: "Gasoline",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=200&fit=crop"
    }
  ];

  const busRoutes = [
    {
      id: 1,
      from: "New York",
      to: "Boston",
      departure: "09:00",
      arrival: "13:30",
      duration: "4h 30m",
      price: 25,
      company: "Express Lines"
    },
    {
      id: 2,
      from: "New York",
      to: "Boston",
      departure: "15:00",
      arrival: "19:15",
      duration: "4h 15m",
      price: 28,
      company: "Comfort Bus"
    }
  ];

  const trainRoutes = [
    {
      id: 1,
      from: "New York",
      to: "Washington DC",
      departure: "08:00",
      arrival: "11:30",
      duration: "3h 30m",
      price: 89,
      company: "Amtrak"
    },
    {
      id: 2,
      from: "New York",
      to: "Washington DC",
      departure: "14:00",
      arrival: "17:45",
      duration: "3h 45m",
      price: 95,
      company: "Amtrak"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Flights</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
              <a href="/transport" className="text-purple-600 font-medium">Transport</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900">Experiences</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Find Your Transport</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Tabs defaultValue="car" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="car">Car Rental</TabsTrigger>
                  <TabsTrigger value="bus">Bus</TabsTrigger>
                  <TabsTrigger value="train">Train</TabsTrigger>
                </TabsList>
                
                <TabsContent value="car">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label>Pickup Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="City or Airport" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Pickup Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Return Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Driver Age</Label>
                      <Input placeholder="25+" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="bus">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label>From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Departure city" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Destination city" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Passengers</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="1 passenger" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="train">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label>From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Departure station" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Destination station" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Passengers</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="1 passenger" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 h-12">
                Search Transport
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="cars" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cars">Car Rentals</TabsTrigger>
                <TabsTrigger value="buses">Buses</TabsTrigger>
                <TabsTrigger value="trains">Trains</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cars">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {carRentals.map((car) => (
                    <Card key={car.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          <img 
                            src={car.image} 
                            alt={car.name}
                            className="w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900">{car.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{car.model}</p>
                            <div className="flex space-x-4 text-sm text-gray-600 mb-4">
                              <span>{car.seats} seats</span>
                              <span>{car.transmission}</span>
                              <span>{car.fuelType}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-2xl font-bold text-purple-600">${car.price}</span>
                                <span className="text-sm text-gray-600">/day</span>
                              </div>
                              <Button className="bg-purple-600 hover:bg-purple-700">
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="buses">
                <div className="space-y-4">
                  {busRoutes.map((bus) => (
                    <Card key={bus.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-8">
                            <div className="bg-purple-100 p-3 rounded-lg">
                              <Bus className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{bus.company}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{bus.from} → {bus.to}</span>
                                <Badge variant="secondary">{bus.duration}</Badge>
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{bus.departure}</p>
                              <p className="text-sm text-gray-600">Departure</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{bus.arrival}</p>
                              <p className="text-sm text-gray-600">Arrival</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">${bus.price}</p>
                            <Button className="bg-purple-600 hover:bg-purple-700 mt-2">
                              Select
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="trains">
                <div className="space-y-4">
                  {trainRoutes.map((train) => (
                    <Card key={train.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-8">
                            <div className="bg-purple-100 p-3 rounded-lg">
                              <Train className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{train.company}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{train.from} → {train.to}</span>
                                <Badge variant="secondary">{train.duration}</Badge>
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{train.departure}</p>
                              <p className="text-sm text-gray-600">Departure</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{train.arrival}</p>
                              <p className="text-sm text-gray-600">Arrival</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">${train.price}</p>
                            <Button className="bg-purple-600 hover:bg-purple-700 mt-2">
                              Select
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;
