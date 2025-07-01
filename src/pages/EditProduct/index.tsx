import { useEffect, useState, type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router";
import * as productService from "../../services/product";
import Input from "../../components/Input";

const EditProduct: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<productService.Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const result = await productService.getById(parseInt(id, 10));
      result.price = parseFloat((result.price / 1000).toFixed(2));
      setProduct(result);
    };
    fetchProduct();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!product) {
      alert("Produto não carregado.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const updatedProduct: productService.Product = {
      ...product,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      quantity: parseInt(formData.get("quantity") as string, 10),
      price: Math.round(parseFloat(formData.get("price") as string) * 1000),
    };

    try {
      await productService.updateProduct(updatedProduct.id, updatedProduct);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao salvar produto.");
    }
  }

  if (!product) return <h1>Carregando...</h1>;

  return (
    <>
      <Layout.Header>
        <Button.StandartButton onClick={() => navigate(-1)}>
          <Button.Text>Go Back</Button.Text>
        </Button.StandartButton>
      </Layout.Header>

      <form style={{width: "100%", display:"flex", flexDirection: "column", gap: 22}} onSubmit={handleSubmit}>
        <Content.Vertical style={{gap: 12}}>
            <label style={{width:"100%", marginInlineStart: 16}}>Name:</label>
          <Input
            name="name"
            type="text"
            defaultValue={product.name}
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Description:</label>
          <Input
            name="description"
            type="text"
            defaultValue={product.description}
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Quantity:</label>
          <Input
            name="quantity"
            type="number"
            defaultValue={product.quantity}
          />
          <label style={{width:"100%", marginInlineStart: 16}}>Price:</label>
          <Input
            name="price"
            type="number"
            step="0.01"
            defaultValue={product.price}
          />
        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Save</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default EditProduct;
