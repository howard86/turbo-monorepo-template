import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import Docs from "../src/app/page";

describe("docs", () => {
  test("should render", () => {
    render(<Docs />);

    expect(
      screen.getByRole("heading", { name: "Turbo Monorepo Template" })
    ).not.toBeNull();
  });
});
