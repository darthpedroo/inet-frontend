import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Plane, Hotel, Car, Camera } from "lucide-react";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";
import { getPackages } from "@/lib/api";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isLoggedIn } = useCart();

  useEffect(() => {
    getPackages()
      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de Navegación */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                TravelHub
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Paquetes</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900 transition-colors">Vuelos</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900 transition-colors">Hoteles</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900 transition-colors">Transporte</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900 transition-colors">Experiencias</a>
            </nav>

            <div className="flex items-center space-x-3">
              <AuthComponent />
              {isLoggedIn && <ShoppingCartComponent />}
            </div>
          </div>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Tu Próxima
              <span className="block text-blue-600">
                Aventura Te Espera
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre increíbles paquetes de viaje, reserva vuelos, encuentra alojamientos perfectos 
              y crea recuerdos inolvidables alrededor del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Paquetes Destacados */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Paquetes de Viaje Destacados</h3>
            <p className="text-xl text-gray-600">Destinos seleccionados para tu escapada perfecta</p>
          </div>
          {loading ? (
            <div className="text-center text-gray-500">Cargando paquetes...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 line-through">${pkg.originalPrice || ''}</div>
                        <div className="text-2xl font-bold text-blue-600">${pkg.price}</div>
                      </div>
                    </div>
                    <CardDescription className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{pkg.destination || '-'}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{pkg.duration || '-'}</span>
                      </span>
                    </CardDescription>
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 w-fit">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating || '-'}</span>
                      <span className="text-sm text-slate-500">({pkg.reviews || 0})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{pkg.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(pkg.products || []).map((product: any, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {product.type}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Explorar por Categoría</h3>
            <p className="text-xl text-gray-600">Encuentra exactamente lo que estás buscando</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Vuelos", icon: Plane, color: "bg-blue-600", href: "/flights" },
              { name: "Hoteles", icon: Hotel, color: "bg-green-600", href: "/hotels" },
              { name: "Transporte", icon: Car, color: "bg-purple-600", href: "/transport" },
              { name: "Experiencias", icon: Camera, color: "bg-orange-600", href: "/experiences" }
            ].map((category) => (
              <Card 
                key={category.name} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
                onClick={() => window.location.href = category.href}
              >
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">TravelHub</h4>
              </div>
              <p className="text-slate-400">Tu puerta de entrada a experiencias de viaje extraordinarias alrededor del mundo.</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Destinos</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Europa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Asia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">América</a></li>
                <li><a href="#" className="hover:text-white transition-colors">África</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/flights" className="hover:text-white transition-colors">Reserva de Vuelos</a></li>
                <li><a href="/hotels" className="hover:text-white transition-colors">Reservas de Hoteles</a></li>
                <li><a href="/transport" className="hover:text-white transition-colors">Alquiler de Autos</a></li>
                <li><a href="/experiences" className="hover:text-white transition-colors">Experiencias de Viaje</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TravelHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
