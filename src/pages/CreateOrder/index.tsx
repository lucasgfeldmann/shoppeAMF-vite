import { type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Input from "../../components/Input";
import * as orderService from "../../services/order";

const CreateOrder: FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newOrder: Omit<orderService.Order, "id"> = {
      user_id: formData.get("user_id") as string,
      product_id: formData.get("product_id") as string,
      quantity: parseInt(formData.get("quantity") as string, 10),
      total_price: Math.round(parseFloat(formData.get("total_price") as string) * 1000),
      done_at: new Date(formData.get("done_at") as string),
    };

    try {
      await orderService.create(newOrder);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao criar pedido.");
    }
  }

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
          <label style={{ marginInlineStart: 16 }}>User ID:</label>
          <Input name="user_id" type="text" placeholder="User ID" />

          <label style={{ marginInlineStart: 16 }}>Product ID:</label>
          <Input name="product_id" type="text" placeholder="Product ID" />

          <label style={{ marginInlineStart: 16 }}>Quantity:</label>
          <Input name="quantity" type="number" placeholder="Quantity" />

          <label style={{ marginInlineStart: 16 }}>Total Price:</label>
          <Input name="total_price" type="number" step="0.01" placeholder="Total Price" />

          <label style={{ marginInlineStart: 16 }}>Done At:</label>
          <Input name="done_at" type="datetime-local" placeholder="Done at" />
        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Create</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default CreateOrder;
