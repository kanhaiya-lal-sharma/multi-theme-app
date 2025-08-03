import styled from 'styled-components';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Card = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'theme2' ? '#1e1e1e' : '#fff'};
  border-radius: 12px;
  padding: 16px;
  box-shadow: ${({ theme }) =>
    theme.name === 'theme3'
      ? '0 4px 12px rgba(255, 90, 95, 0.3)'
      : '0 2px 5px rgba(0, 0, 0, 0.1)'};
  color: ${({ theme }) => (theme.name === 'theme2' ? '#fff' : '#222')};
  transition: all 0.4s ease; 
  max-width: 250px;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Title = styled.h3`
  font-size: 16px;
`;

const Price = styled.p`
  font-weight: bold;
`;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
    </Card>
  );
};

export default ProductCard;


