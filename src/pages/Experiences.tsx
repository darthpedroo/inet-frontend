
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Calendar, Users, Star, Clock, Heart } from "lucide-react";

const Experiences = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    date: "",
    guests: "2"
  });

  const experiences = [
    {
      id: 1,
      name: "City Food Walking Tour",
      location: "New York, NY",
      duration: "3 hours",
      price: 89,
      rating: 4.9,
      reviews: 432,
      category: "Food & Drink",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      description: "Discover the best local food spots with a knowledgeable guide"
    },
    {
      id: 2,
      name: "Sunset Photography Workshop",
      location: "San Francisco, CA",
      duration: "2 hours",
      price: 125,
      rating: 4.8,
      reviews: 256,
      category: "Photography",
      image: "https://images.unsplash.com/photo-1502780402662-acc01917176e?w=400&h=250&fit=crop",
      description: "Learn professional photography techniques at golden hour"
    },
    {
      id: 3,
      name: "Historic District Walking Tour",
      location: "Boston, MA",
      duration: "2.5 hours",
      price: 45,
      rating: 4.7,
      reviews: 389,
      category: "History",
      image: "https://images.unsplash.com/photo-1602522242891-c7b1b8b5c6cf?w=400&h=250&fit=crop",
      description: "Explore centuries of American history in the historic district"
    },
    {
      id: 4,
      name: "Kayak Adventure Tour",
      location: "Miami, FL",
      duration: "4 hours",
      price: 179,
      rating: 4.9,
      reviews: 198,
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      description: "Paddle through mangroves and spot local wildlife"
    },
    {
      id: 5,
      name: "Wine Tasting Experience",
      location: "Napa Valley, CA",
      duration: "6 hours",
      price: 299,
      rating: 4.8,
      reviews: 156,
      category: "Food & Drink",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop",
      description: "Visit premium wineries and learn about wine making"
    },
    {
      id: 6,
      name: "Mountain Hiking Adventure",
      location: "Denver, CO",
      duration: "5 hours",
      price: 149,
      rating: 4.9,
      reviews: 287,
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
      description: "Hike scenic mountain trails with experienced guides"
    }
  ];

  const categories = [
    { name: "All", count: experiences.length },
    { name: "Adventure", count: experiences.filter(e => e.category === "Adventure").length },
    { name: "Food & Drink", count: experiences.filter(e => e.category === "Food & Drink").length },
    { name: "Photography", count: experiences.filter(e => e.category === "Photography").length },
    { name: "History", count: experiences.filter(e => e.category === "History").length }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Flights</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900">Transport</a>
              <a href="/experiences" className="text-orange-600 font-medium">Experiences</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-orange-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Discover Amazing Experiences</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label>Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Where do you want to explore?" 
                      className="pl-10"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="date" 
                      className="pl-10"
                      value={searchData.date}
                      onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="2 guests" 
                      className="pl-10"
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12">
                Search Experiences
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.name === "All" ? "default" : "outline"}
                  className={category.name === "All" ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Card key={experience.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={experience.image} 
                      alt={experience.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-orange-600 hover:bg-orange-700">
                        {experience.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-tight">{experience.name}</CardTitle>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{experience.rating}</span>
                        <span className="text-gray-500">({experience.reviews})</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">${experience.price}</span>
                        <span className="text-sm text-gray-600">/person</span>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
