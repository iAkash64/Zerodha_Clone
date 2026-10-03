import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

const renderHero = () => render(<Hero />);

// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    renderHero();
    const heroImage = screen.getByAltText("Investment dashboard preview");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button", () => {
    renderHero();
    const signupButton = screen.getByRole("button", { name: /signup now/i });
    expect(signupButton).toHaveClass("btn-primary");
  });
});
