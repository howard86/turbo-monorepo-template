import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { Card } from "./Card";

function EmptyIcon(): ReactElement {
  return <svg data-testid="SVG" />;
}

describe("card", () => {
  test("should render", () => {
    render(
      <Card
        description="MOCK_DESCRIPTION"
        href="MOCK_HREF"
        Icon={EmptyIcon}
        name="MOCK_NAME"
      />
    );

    expect(screen.getByText("MOCK_NAME")).not.toBeNull();
    expect(screen.getByText("MOCK_DESCRIPTION")).not.toBeNull();
    expect(screen.getByRole("link").getAttribute("href")).toBe("MOCK_HREF");
    expect(screen.getByTestId("SVG")).not.toBeNull();
  });
});
