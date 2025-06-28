
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";

const Flights = () => {
  const { addToCart } = useCart();

  const flights = [
    {
      id: "flight-1",
      airline: "SkyWings",
      from: "Nueva York",
      to: "Londres",
      departure: "08:30",
      arrival: "20:45",
      duration: "7h 15m",
      price: 899,
      stops: "Directo",
      class: "Económica",
      description: "Vuelo directo con servicio premium"
    },
    {
      id: "flight-2",
      airline: "AirGlobal",
      from: "Nueva York",
      to: "Londres",
      departure: "14:20",
      arrival: "02:15+1",
      duration: "7h 55m",
      price: 749,
      stops: "Directo",
      class: "Económica",
      description: "Vuelo económico con excelente servicio"
    },
    {
      id: "flight-3",
      airline: "FlightExpress",
      from: "Nueva York",
      to: "Londres",
      departure: "22:10",
      arrival: "09:30+1",
      duration: "7h 20m",
      price: 1299,
      stops: "Directo",
      class: "Ejecutiva",
      description: "Clase ejecutiva con máximo confort"
    },
    {
      id: "flight-4",
      airline: "Continental Air",
      from: "Los Ángeles",
      to: "Tokio",
      departure: "11:00",
      arrival: "15:45+1",
      duration: "11h 45m",
      price: 1150,
      stops: "Directo",
      class: "Económica",
      description: "Vuelo transpacífico directo"
    },
    {
      id: "flight-5",
      airline: "Europe Express",
      from: "Madrid",
      to: "París",
      departure: "16:30",
      arrival: "18:15",
      duration: "1h 45m",
      price: 180,
      stops: "Directo",
      class: "Económica",
      description: "Vuelo corto europeo"
    }
  ];

  const handleAddToCart = (flight: any) => {
    addToCart({
      id: flight.id,
      name: `${flight.airline} - ${flight.from} a ${flight.to}`,
      price: flight.price,
      type: 'FLIGHT',
      description: flight.description,
      details: {
        airline: flight.airline,
        from: flight.from,
        to: flight.to,
        departure: flight.departure,
        arrival: flight.arrival,
        duration: flight.duration,
        class: flight.class
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
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Inicio</a>
              <a href="/flights" className="text-blue-600 font-medium">Vuelos</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hoteles</a>
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
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Encuentra tu Vuelo Perfecto</h2>
            <p className="text-blue-100">Los mejores vuelos a los destinos más increíbles</p>
          </div>
        </div>
      </section>

      {/* Sección de Resultados */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Vuelos Disponibles</h3>
            
            <div className="space-y-4">
              {flights.map((flight) => (
                <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Plane className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{flight.airline}</h4>
                            <p className="text-sm text-gray-600">{flight.class}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{flight.departure}</p>
                            <p className="text-sm text-gray-600">{flight.from}</p>
                          </div>
                          
                          <div className="flex-1 text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                              <div className="flex-1 h-0.5 bg-gray-300"></div>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                              <div className="flex-1 h-0.5 bg-gray-300"></div>
                              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 mt-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{flight.duration}</span>
                            </div>
                            <Badge variant="secondary" className="mt-1">{flight.stops}</Badge>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{flight.arrival}</p>
                            <p className="text-sm text-gray-600">{flight.to}</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-4">{flight.description}</p>
                      </div>
                      
                      <div className="text-right ml-8">
                        <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
                        <p className="text-sm text-gray-600 mb-4">por persona</p>
                        <div className="space-x-2">
                          <Button 
                            variant="outline" 
                            onClick={() => handleAddToCart(flight)}
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            Agregar al Carrito
                          </Button>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Reservar Ahora
                          </Button>
                        </div>
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

export default Flights;
