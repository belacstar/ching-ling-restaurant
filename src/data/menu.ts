import { MenuItem } from '@/types';

// Dados do cardápio - em uma aplicação real, viria de uma API
export const menuCategories = [
    { id: 'pratos-principais', name: 'Pratos Principais', icon: '🍜' },
    { id: 'aperitivos', name: 'Aperitivos', icon: '🥟' },
    { id: 'sobremesas', name: 'Sobremesas', icon: '🍮' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
    {
        id: '1',
        name: 'Yakisoba Especial',
        description: 'Macarrão oriental com legumes frescos, broto de feijão e molho especial da casa',
        price: 28.90,
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&h=400&fit=crop',
        category: 'pratos-principais',
        available: true,
    },
    {
        id: '2',
        name: 'Frango Xadrez',
        description: 'Cubos de frango temperados com amendoim, pimentão e molho agridoce',
        price: 32.90,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=400&fit=crop',
        category: 'pratos-principais',
        available: true,
    },
    {
        id: '3',
        name: 'Pork Bao',
        description: 'Pãozinho chinês no vapor recheado com porco caramelizado (4 unidades)',
        price: 18.90,
        image: 'https://images.unsplash.com/photo-1563379091559-badc876bc63e?w=500&h=400&fit=crop',
        category: 'aperitivos',
        available: true,
    },
    {
        id: '4',
        name: 'Harumaki',
        description: 'Rolinho primavera crocante com vegetais (6 unidades)',
        price: 15.90,
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&h=400&fit=crop',
        category: 'aperitivos',
        available: true,
    },
    {
        id: '5',
        name: 'Pudim de Leite Condensado',
        description: 'Sobremesa cremosa e deliciosa com calda de caramelo',
        price: 12.90,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop',
        category: 'sobremesas',
        available: true,
    },
    {
        id: '6',
        name: 'Chá Gelado',
        description: 'Refrescante chá verde gelado com limão',
        price: 8.90,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop',
        category: 'bebidas',
        available: true,
    },
]; export const restaurantInfo = {
    name: 'Ching Ling Restaurant',
    phone: '553233622492',
    address: 'Loja A Restaurante Ching Ling - R. Visc. de Carandaí, 168 - Centro, Barbacena - MG, 36200-000',
    whatsappMessage: (orderSummary: string) =>
        `Olá! Gostaria de fazer o seguinte pedido:\n\n${orderSummary}\n\nPor favor, confirme o pedido e me informe o tempo de entrega.`,
};
