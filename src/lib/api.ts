function getAuthHeaders() {
  const token = localStorage.getItem('travelToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getPackages() {
  const res = await fetch('http://localhost:3000/api/packages', {
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!res.ok) throw new Error('Failed to fetch packages');
  return res.json();
}

export async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', {
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getFlights() {
  const products = await getProducts();
  return products.filter((p: any) => p.type === 'FLIGHT');
}

export async function getHotels() {
  const products = await getProducts();
  return products.filter((p: any) => p.type === 'HOTEL');
}

export async function getTransport() {
  const products = await getProducts();
  return products.filter((p: any) => p.type === 'TRANSPORT');
}

export async function getExperiences() {
  const products = await getProducts();
  return products.filter((p: any) => p.type === 'EXCURSION');
}

export async function loginUser(email: string, password: string) {
  const res = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Error al iniciar sesión');
  return data;
}

export async function registerUser(email: string, password: string, name: string) {
  const res = await fetch('http://localhost:3000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Error al registrarse');
  return data;
}

export async function getCart() {
  const res = await fetch('http://localhost:3000/api/cart', {
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!res.ok) throw new Error('Failed to fetch cart');
  return res.json();
}

export async function addCartItem({ productId, packageId, quantity }: { productId?: string; packageId?: string; quantity: number; }) {
  const res = await fetch('http://localhost:3000/api/cart/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify({ productId, packageId, quantity })
  });
  if (!res.ok) throw new Error('Failed to add item to cart');
  return res.json();
}

export async function updateCartItem(id: string, quantity: number) {
  const res = await fetch(`http://localhost:3000/api/cart/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify({ quantity })
  });
  if (!res.ok) throw new Error('Failed to update cart item');
  return res.json();
}

export async function removeCartItem(id: string) {
  const res = await fetch(`http://localhost:3000/api/cart/items/${id}`, {
    method: 'DELETE',
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!res.ok) throw new Error('Failed to remove cart item');
  return res.json();
}

export async function clearCartApi(cartItems: { id: string }[]) {
  // Remove all items in parallel
  await Promise.all(cartItems.map(item => removeCartItem(item.id)));
} 