import { Router } from 'express';

const router = Router();

// Example product data
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 },
  { id: 3, name: 'Smartphone', price: 800 },
];

router.get('/', (req, res) => {
  res.json(products);
});

export default router;
