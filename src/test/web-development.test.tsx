import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";

it("shows inspectable website proof without presenting the local game as live", () => {
  render(<WebDevelopmentSection />);

  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Web development is my core. Automation is a plus.");
  const featured = screen.getByRole("heading", { name: "Andrey’s developer portfolio" }).closest("article");
  expect(featured).not.toBeNull();
  if (!featured) throw new Error("Featured project is missing");
  expect(within(featured).getByRole("link", { name: "Live site ↗" })).toHaveAttribute("href", "https://dmytrovolodymyrson.github.io/andrey-portfolio/");
  expect(screen.getAllByRole("link", { name: "Live site ↗" }).map((link) => link.getAttribute("href"))).toEqual([
    "https://dmytrovolodymyrson.github.io/andrey-portfolio/",
    "https://soushiant-website.vercel.app",
  ]);
  const game = screen.getByRole("heading", { name: "Telegram Mini App" }).closest("article");
  expect(game).not.toBeNull();
  if (!game) throw new Error("Game project is missing");
  expect(within(game).getByText("Local preview · not deployed")).toBeVisible();
  expect(within(game).getAllByRole("link")).toHaveLength(1);
  expect(within(game).getByRole("link")).toHaveAttribute("href", "https://github.com/DmytroVolodymyrson/ukraine-tower-defense");
  expect(screen.getByText("See the project scope")).toBeVisible();
  expect(screen.getByText("This opens a project brief only. No message is sent and no booking is made.")).toBeInTheDocument();
});
