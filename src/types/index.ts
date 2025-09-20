// Types para o cardápio
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    available: boolean;
}

export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
    notes?: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}

export interface Order {
    items: CartItem[];
    total: number;
    customerInfo: {
        name: string;
        phone: string;
        address: string;
    };
    paymentMethod: 'dinheiro' | 'pix' | 'cartao';
    deliveryMethod: 'delivery' | 'retirada';
}
