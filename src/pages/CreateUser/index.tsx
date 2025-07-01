import { type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import Input from "../../components/Input";
import * as userService from "../../services/user";

const CreateUser: FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUser: Omit<userService.User, "id"> = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      admin: formData.get("admin") === "on",
    };

    try {
      await userService.createUser(newUser);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao criar usuário.");
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

          <label style={{ marginInlineStart: 16 }}>Email:</label>
          <Input name="email" type="email" placeholder="Email" />

          <label style={{ marginInlineStart: 16 }}>Password:</label>
          <Input name="password" type="password" placeholder="Password" />

          <label style={{ marginInlineStart: 16 }}>
            <input name="admin" type="checkbox" style={{ marginRight: 8 }} />
            Admin
          </label>
        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Create</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default CreateUser;
