import React from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

const Cart: React.FC = () => {
  // Pegar itens do carrinho, sem as tipagens
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default Cart;
