import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Add to cart", async ({ page }) => {
  test.setTimeout(120_000);

  await runSteps({
    page,
    userFlow: "Add product to cart",
    steps: [
      {
        description: "Navigate to https://demo.vercel.store"
      },
      {
        description: "Click product Acme Circles T-Shirt"
      },
      {
        description: "Select color White"
      },
      {
        description: "Select size S"
      },
      {
        description: "Click Add To Cart button"
      },
      {
        description: "Open cart"
      }
    ],
    assertions: [
      {
        assertion:
          "Cart contains Acme Circles T-Shirt with color White and size S"
      }
    ],
    
    test,
    expect,
  });
});