import { render, screen } from "@testing-library/react";
import Saludo from "../components/Saludo";



test("muestra el nombre en el saludo", () => {
  render(<Saludo nombre="Luis" />);
  expect(screen.getByText("Hola, Luis!")).toBeInTheDocument();
});
