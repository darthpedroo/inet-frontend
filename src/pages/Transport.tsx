
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Bus, Train } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";

const Transport = () => {
  const { addToCart } = useCart();

  const carRentals = [
    {
      id: "car-1",
      name: "Auto Compacto",
      model: "Toyota Corolla",
      price: 45,
      seats: 4,
      transmission: "Automático",
      fuelType: "Gasolina",
      description: "Auto compacto económico para la ciudad"
    },
    {
      id: "car-2",
      name: "SUV",
      model: "Honda CR-V",
      price: 75,
      seats: 5,
      transmission: "Automático",
      fuelType: "Gasolina",
      description: "SUV espacioso para familias"
    },
    {
      id: "car-3",
      name: "Auto de Lujo",
      model: "BMW Serie 3",
      price: 120,
      seats: 5,
      transmission: "Automático",
      fuelType: "Gasolina",
      description: "Auto de lujo para viajes premium"
    }
  ];

  const busRoutes = [
    {
      id: "bus-1",
      from: "Nueva York",
      to: "Boston",
      departure: "09:00",
      arrival: "13:30",
      duration: "4h 30m",
      price: 25,
      company: "Express Lines",
      description: "Servicio de autobús cómodo y confiable"
    },
    {
      id: "bus-2",
      from: "Nueva York",
      to: "Boston",
      departure: "15:00",
      arrival: "19:15",
      duration: "4h 15m",
      price: 28,
      company: "Comfort Bus",
      description: "Autobús con servicios premium"
    },
    {
      id: "bus-3",
      from: "Los Ángeles",
      to: "San Francisco",
      departure: "08:00",
      arrival: "14:30",
      duration: "6h 30m",
      price: 35,
      company: "Coast Express",
      description: "Ruta costera con vistas espectaculares"
    }
  ];

  const trainRoutes = [
    {
      id: "train-1",
      from: "Nueva York",
      to: "Washington DC",
      departure: "08:00",
      arrival: "11:30",
      duration: "3h 30m",
      price: 89,
      company: "Amtrak",
      description: "Tren de alta velocidad entre ciudades principales"
    },
    {
      id: "train-2",
      from: "Nueva York",
      to: "Washington DC",
      departure: "14:00",
      arrival: "17:45",
      duration: "3h 45m",
      price: 95,
      company: "Amtrak",
      description: "Servicio de tren con comodidades premium"
    },
    {
      id: "train-3",
      from: "Chicago",
      to: "Milwaukee",
      departure: "10:30",
      arrival: "12:00",
      duration: "1h 30m",
      price: 45,
      company: "Amtrak",
      description: "Tren regional rápido y eficiente"
    }
  ];

  const handleAddCarToCart = (car: any) => {
    addToCart({
      id: car.id,
      name: `${car.name} - ${car.model}`,
      price: car.price,
      type: 'TRANSPORT',
      description: car.description,
      details: {
        model: car.model,
        seats: car.seats,
        transmission: car.transmission,
        fuelType: car.fuelType
      }
    });
  };

  const handleAddBusToCart = (bus: any) => {
    addToCart({
      id: bus.id,
      name: `${bus.company} - ${bus.from} a ${bus.to}`,
      price: bus.price,
      type: 'TRANSPORT',
      description: bus.description,
      details: {
        company: bus.company,
        from: bus.from,
        to: bus.to,
        departure: bus.departure,
        arrival: bus.arrival,
        duration: bus.duration
      }
    });
  };

  const handleAddTrainToCart = (train: any) => {
    addToCart({
      id: train.id,
      name: `${train.company} - ${train.from} a ${train.to}`,
      price: train.price,
      type: 'TRANSPORT',
      description: train.description,
      details: {
        company: train.company,
        from: train.from,
        to: train.to,
        departure: train.departure,
        arrival: train.arrival,
        duration: train.duration
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
              <div className="bg-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Inicio</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Vuelos</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hoteles</a>
              <a href="/transport" className="text-purple-600 font-medium">Transporte</a>
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
      <section className="bg-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Encuentra tu Transporte</h2>
            <p className="text-purple-100">Opciones de transporte para todos tus viajes</p>
          </div>
        </div>
      </section>

      {/* Sección de Resultados */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="cars" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cars">Alquiler de Autos</TabsTrigger>
                <TabsTrigger value="buses">Autobuses</TabsTrigger>
                <TabsTrigger value="trains">Trenes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cars">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alquiler de Autos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {carRentals.map((car) => (
                    <Card key={car.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{car.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{car.model}</p>
                          <p className="text-sm text-gray-600 mb-4">{car.description}</p>
                          <div className="flex space-x-4 text-sm text-gray-600 mb-4">
                            <span>{car.seats} asientos</span>
                            <span>{car.transmission}</span>
                            <span>{car.fuelType}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-purple-600">${car.price}</span>
                              <span className="text-sm text-gray-600">/día</span>
                            </div>
                            <div className="space-x-2">
                              <Button 
                                variant="outline" 
                                onClick={() => handleAddCarToCart(car)}
                                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                              >
                                Agregar al Carrito
                              </Button>
                              <Button className="bg-purple-600 hover:bg-purple-700">
                                Seleccionar
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Autobuses</h3>
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
                              <p className="text-sm text-gray-600 mb-2">{bus.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{bus.from} → {bus.to}</span>
                                <Badge variant="secondary">{bus.duration}</Badge>
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{bus.departure}</p>
                              <p className="text-sm text-gray-600">Salida</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{bus.arrival}</p>
                              <p className="text-sm text-gray-600">Llegada</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">${bus.price}</p>
                            <div className="space-x-2 mt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => handleAddBusToCart(bus)}
                                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                              >
                                Agregar al Carrito
                              </Button>
                              <Button className="bg-purple-600 hover:bg-purple-700">
                                Seleccionar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="trains">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trenes</h3>
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
                              <p className="text-sm text-gray-600 mb-2">{train.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{train.from} → {train.to}</span>
                                <Badge variant="secondary">{train.duration}</Badge>
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{train.departure}</p>
                              <p className="text-sm text-gray-600">Salida</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900">{train.arrival}</p>
                              <p className="text-sm text-gray-600">llegada</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-purple-600">${train.price}</p>
                            <div className="space-x-2 mt-2">
                              <Button 
                                variant="outline" 
                                onClick={() => handleAddTrainToCart(train)}
                                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                              >
                                Agregar al Carrito
                              </Button>
                              <Button className="bg-purple-600 hover:bg-purple-700">
                                Seleccionar
                              </Button>
                            </div>
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
