import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  // 1. Check if the footer is successfully rendered
  it("should render footer component", () => {
    const renderedFooter = render(<Footer />);

    expect(renderedFooter).toBeDefined();
  });

  // 2. Check footer button function to change message
  it("should change message when button is clicked", async () => {
    const renderedFooter = render(<Footer message="Footer Message" />);

    const stateMessage = await renderedFooter.findByTestId("state-message");
    expect(stateMessage).toHaveTextContent("Hallo World");

    const btn = await renderedFooter.findByTestId("change-message-btn");
    fireEvent.click(btn);

    await waitFor(() => {
      expect(stateMessage).toHaveTextContent("State Changed");
    });
  });
});
