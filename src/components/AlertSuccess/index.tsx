import { Container, ContainerContent } from "./styles";

interface AlertProps {
  alertSuccess: boolean;
  message: string;
}

export function AlertSuccess({ alertSuccess, message }: AlertProps) {
  return (
    <Container alertSuccess={alertSuccess}>
      <ContainerContent>{message}</ContainerContent>
    </Container>
  );
}
