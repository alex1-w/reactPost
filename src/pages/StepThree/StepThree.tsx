import { Container } from "../../components/Container/Container";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./StepThree.module.scss";

export const StepThree = () => {
  return (
    <Container>
      <form className={styles.formBlock}>
        <Navigation />

        <div className=""></div>
      </form>
    </Container>
  );
};
