import { useEffect, useState, type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router";
import Input from "../../components/Input";
import * as orderService from "../../services/order";

const EditOrder: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState<orderService.Order | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) return;
      const result = await orderService.getById(parseInt(id, 10));
      result.total_price = parseFloat((result.total_price / 1000).toFixed(2));
      setOrder(result);
    };
    fetchOrder();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!order) {
      alert("Pedido não carregado.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const updatedOrder: orderService.Order = {
      ...order,
      user_id: formData.get("user_id") as string,
      product_id: formData.get("product_id") as string,
      quantity: parseInt(formData.get("quantity") as string, 10),
      total_price: Math.round(parseFloat(formData.get("total_price") as string) * 1000),
      done_at: new Date(formData.get("done_at") as string),
    };

    try {
      await orderService.updateOrder(updatedOrder.id, updatedOrder);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao salvar pedido.");
    }
  }

  if (!order) return <h1>Carregando...</h1>;

  return (
    <>
      <Layout.Header>
        <Button.StandartButton onClick={() => navigate(-1)}>
          <Button.Text>Go Back</Button.Text>
        </Button.StandartButton>
      </Layout.Header>

      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
        onSubmit={handleSubmit}
      >
        <Content.Vertical style={{ gap: 12 }}>
          <label style={{width:"100%", marginInlineStart: 16}}>User ID:</label>
          <Input
            name="user_id"
            type="text"
            defaultValue={order.user_id}
            placeholder="User ID"
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Product ID:</label>
          <Input
            name="product_id"
            type="text"
            defaultValue={order.product_id}
            placeholder="Product ID"
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Quantity:</label>
          <Input
            name="quantity"
            type="number"
            defaultValue={order.quantity}
            placeholder="Quantity"
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Total Price:</label>
          <Input
            name="total_price"
            type="number"
            step="0.01"
            defaultValue={order.total_price}
            placeholder="Total Price"
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Done At:</label>
          <Input
            name="done_at"
            type="datetime-local"
            defaultValue={new Date(order.done_at).toISOString().slice(0, 16)}
            placeholder="Done at"
          />
        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Save</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default EditOrder;
