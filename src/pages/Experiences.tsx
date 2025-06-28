
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Calendar, Users, Star, Clock, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";

const Experiences = () => {
  const { addToCart } = useCart();
  const [searchData, setSearchData] = useState({
    destination: "",
    date: "",
    guests: "2"
  });

  const experiences = [
    {
      id: "experience-1",
      name: "Tour Gastronómico a Pie",
      location: "Ciudad de México, MX",
      duration: "3 horas",
      price: 89,
      rating: 4.9,
      reviews: 432,
      category: "Comida y Bebida",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      description: "Descubre los mejores lugares de comida local con un guía experto"
    },
    {
      id: "experience-2",
      name: "Taller de Fotografía al Atardecer",
      location: "San Francisco, CA",
      duration: "2 horas",
      price: 125,
      rating: 4.8,
      reviews: 256,
      category: "Fotografía",
      image: "https://images.unsplash.com/photo-1502780402662-acc01917176e?w=400&h=250&fit=crop",
      description: "Aprende técnicas de fotografía profesional durante la hora dorada"
    },
    {
      id: "experience-3",
      name: "Tour del Distrito Histórico",
      location: "Boston, MA",
      duration: "2.5 horas",
      price: 45,
      rating: 4.7,
      reviews: 389,
      category: "Historia",
      image: "https://images.unsplash.com/photo-1602522242891-c7b1b8b5c6cf?w=400&h=250&fit=crop",
      description: "Explora siglos de historia americana en el distrito histórico"
    },
    {
      id: "experience-4",
      name: "Aventura en Kayak",
      location: "Miami, FL",
      duration: "4 horas",
      price: 179,
      rating: 4.9,
      reviews: 198,
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      description: "Navega por manglares y observa la vida silvestre local"
    },
    {
      id: "experience-5",
      name: "Experiencia de Cata de Vinos",
      location: "Valle de Napa, CA",
      duration: "6 horas",
      price: 299,
      rating: 4.8,
      reviews: 156,
      category: "Comida y Bebida",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop",
      description: "Visita bodegas premium y aprende sobre la elaboración del vino"
    },
    {
      id: "experience-6",
      name: "Aventura de Senderismo en Montaña",
      location: "Denver, CO",
      duration: "5 horas",
      price: 149,
      rating: 4.9,
      reviews: 287,
      category: "Aventura",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
      description: "Camina por senderos montañosos escénicos con guías experimentados"
    }
  ];

  const categories = [
    { name: "Todas", count: experiences.length },
    { name: "Aventura", count: experiences.filter(e => e.category === "Aventura").length },
    { name: "Comida y Bebida", count: experiences.filter(e => e.category === "Comida y Bebida").length },
    { name: "Fotografía", count: experiences.filter(e => e.category === "Fotografía").length },
    { name: "Historia", count: experiences.filter(e => e.category === "Historia").length }
  ];

  const handleAddToCart = (experience: any) => {
    addToCart({
      id: experience.id,
      name: experience.name,
      price: experience.price,
      type: 'EXPERIENCE',
      image: experience.image,
      description: experience.description,
      details: {
        location: experience.location,
        duration: experience.duration,
        rating: experience.rating,
        category: experience.category
      }
    });
  };

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
              <a href="/" className="text-gray-600 hover:text-gray-900">Inicio</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Vuelos</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hoteles</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900">Transporte</a>
              <a href="/experiences" className="text-orange-600 font-medium">Experiencias</a>
              <div className="flex items-center space-x-3">
                <AuthComponent />
                <ShoppingCartComponent />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-orange-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Descubre Experiencias Increíbles</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label>Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="¿Dónde quieres explorar?" 
                      className="pl-10"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Fecha</Label>
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
                  <Label>Huéspedes</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="2 huéspedes" 
                      className="pl-10"
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12">
                Buscar Experiencias
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
                  variant={category.name === "Todas" ? "default" : "outline"}
                  className={category.name === "Todas" ? "bg-orange-600 hover:bg-orange-700" : ""}
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
                        <span className="text-sm text-gray-600">/persona</span>
                      </div>
                      <div className="space-x-2">
                        <Button 
                          variant="outline" 
                          onClick={() => handleAddToCart(experience)}
                          className="text-orange-600 border-orange-600 hover:bg-orange-50"
                        >
                          Agregar al Carrito
                        </Button>
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          Reservar Ahora
                        </Button>
                      </div>
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
