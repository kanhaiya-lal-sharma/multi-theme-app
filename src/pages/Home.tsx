import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Grid = styled.div<{ layout: string }>`
  display: ${({ layout }) => (layout === 'sidebar' ? 'flex' : 'grid')};
  flex-wrap: ${({ layout }) => (layout === 'sidebar' ? 'wrap' : 'unset')};
  gap: 20px;
  grid-template-columns: ${({ layout }) =>
    layout === 'minimal' || layout === 'cards'
      ? 'repeat(auto-fit, minmax(250px, 1fr))'
      : 'unset'};
  padding: 20px;
  transition: all 0.3s ease-in-out; 
`;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Loading products...</p>;

  return (
    <Grid layout={theme}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Home;
