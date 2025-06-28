
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, MapPin, Star, Wifi, Car, Coffee } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";

const Hotels = () => {
  const { addToCart } = useCart();

  const hotels = [
    {
      id: "hotel-1",
      name: "Hotel Gran Plaza",
      location: "Centro, Nueva York",
      rating: 4.8,
      reviews: 1247,
      price: 289,
      amenities: ["WiFi Gratis", "Estacionamiento", "Restaurante", "Gimnasio"],
      description: "Hotel de lujo en el corazón de la ciudad"
    },
    {
      id: "hotel-2",
      name: "Resort Playa del Sol",
      location: "Frente al mar, Miami",
      rating: 4.6,
      reviews: 892,
      price: 199,
      amenities: ["Acceso a Playa", "Piscina", "Spa", "WiFi Gratis"],
      description: "Resort frente al océano con vistas espectaculares"
    },
    {
      id: "hotel-3",
      name: "Cabaña de Montaña",
      location: "Distrito Alpino, Colorado",
      rating: 4.9,
      reviews: 634,
      price: 149,
      amenities: ["Vista a la Montaña", "Chimenea", "Senderismo", "Restaurante"],
      description: "Cabaña acogedora con aventuras en la montaña"
    },
    {
      id: "hotel-4",
      name: "Hotel Boutique Centro",
      location: "Centro Histórico, Madrid",
      rating: 4.7,
      reviews: 523,
      price: 179,
      amenities: ["WiFi Gratis", "Bar", "Concierge", "Aire Acondicionado"],
      description: "Hotel boutique en el corazón histórico de la ciudad"
    },
    {
      id: "hotel-5",
      name: "Resort Tropical Paradise",
      location: "Cancún, México",
      rating: 4.5,
      reviews: 1156,
      price: 225,
      amenities: ["Todo Incluido", "Playa Privada", "3 Piscinas", "Spa"],
      description: "Resort todo incluido con playa privada y servicios premium"
    }
  ];

  const handleAddToCart = (hotel: any) => {
    addToCart({
      id: hotel.id,
      name: hotel.name,
      price: hotel.price,
      type: 'HOTEL',
      description: hotel.description,
      details: {
        location: hotel.location,
        rating: hotel.rating,
        amenities: hotel.amenities
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
              <div className="bg-green-600 p-2 rounded-lg">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Inicio</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Vuelos</a>
              <a href="/hotels" className="text-green-600 font-medium">Hoteles</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900">Transporte</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900">Experiencias</a>
              <div className="flex items-center space-x-3">
                <AuthComponent />
                <ShoppingCartComponent />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Sección Principal */}
      <section className="bg-green-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Encuentra tu Alojamiento Perfecto</h2>
            <p className="text-green-100">Hoteles de calidad para tu estancia ideal</p>
          </div>
        </div>
      </section>

      {/* Sección de Resultados */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Hoteles Disponibles</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{hotel.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hotel.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{hotel.rating}</span>
                          <span className="text-sm text-gray-500">({hotel.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity === "WiFi Gratis" && <Wifi className="h-3 w-3 mr-1" />}
                          {amenity === "Estacionamiento" && <Car className="h-3 w-3 mr-1" />}
                          {amenity === "Restaurante" && <Coffee className="h-3 w-3 mr-1" />}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-600">${hotel.price}</span>
                        <span className="text-sm text-gray-600">/noche</span>
                      </div>
                      <div className="space-x-2">
                        <Button 
                          variant="outline" 
                          onClick={() => handleAddToCart(hotel)}
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          Agregar al Carrito
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">
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

export default Hotels;
