import { type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Input from "../../components/Input";
import * as productService from "../../services/product";

const CreateProduct: FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newProduct: Omit<productService.Product, "id"> = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      quantity: parseInt(formData.get("quantity") as string, 10),
      price: Math.round(parseFloat(formData.get("price") as string) * 1000),
    };

    try {
      await productService.create(newProduct);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao criar produto.");
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
          <label style={{ marginInlineStart: 16 }}>Name:</label>
          <Input name="name" type="text" placeholder="Name" />

          <label style={{ marginInlineStart: 16 }}>Description:</label>
          <Input name="description" type="text" placeholder="Description" />

          <label style={{ marginInlineStart: 16 }}>Quantity:</label>
          <Input name="quantity" type="number" placeholder="Quantity" />

          <label style={{ marginInlineStart: 16 }}>Price:</label>
          <Input name="price" type="number" step="0.01" placeholder="Price" />
        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Create</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default CreateProduct;
