import { CardLayout, ContainerLayout } from "../components/mainComponent";

export default function Skills() {
  return (
    <ContainerLayout>
      <main>
        <CardLayout>
          <p>HTML</p>
        </CardLayout>

        <CardLayout>
          <p>CSS</p>
        </CardLayout>

        <CardLayout>
          <p>JavaScript</p>
        </CardLayout>

        <CardLayout>
          <p>ReactJs</p>
        </CardLayout>

        <CardLayout>
          <p>NodeJs</p>
        </CardLayout>
      </main>
    </ContainerLayout>
  );
}
