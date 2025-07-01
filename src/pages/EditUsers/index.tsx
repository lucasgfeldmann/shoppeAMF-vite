import { useEffect, useState, type FC } from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router";
import Input from "../../components/Input";
import * as userService from "../../services/user";

const EditUser: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<userService.User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      const result = await userService.getUserById(parseInt(id, 10));
      setUser(result);
    };
    fetchUser();
  }, [id]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user) {
      alert("Usuário não carregado.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const updatedUser: userService.User = {
      ...user,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      admin: formData.get("admin") === "on",
    };

    try {
      await userService.updateUser(updatedUser.id, updatedUser);
      navigate(-1);
    } catch (e: any) {
      alert(e.message ?? "Erro ao salvar usuário.");
    }
  }

  if (!user) return <h1>Carregando...</h1>;

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
          <Input
            name="name"
            type="text"
            defaultValue={user.name}
            placeholder="Name"
          />

          <label style={{ marginInlineStart: 16 }}>Email:</label>
          <Input
            name="email"
            type="email"
            defaultValue={user.email}
            placeholder="Email"
          />

          <label style={{ marginInlineStart: 16 }}>Password:</label>
          <Input
            name="password"
            type="password"
            defaultValue={user.password}
            placeholder="Password"
          />

          <label style={{ marginInlineStart: 16 }}>
            Admin
          </label>
          <Input
            name="admin"
            type="checkbox"
            defaultChecked={user.admin}
            style={{ marginRight: 8 }}
          />

        </Content.Vertical>

        <Button.StandartButton type="submit">
          <Button.Text>Save</Button.Text>
        </Button.StandartButton>
      </form>
    </>
  );
};

export default EditUser;
