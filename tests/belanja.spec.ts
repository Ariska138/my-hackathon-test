import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Coba Firefox di Vercel Commerce", async ({ page }) => {
  // Kita set 90 detik karena MacBook 2017 butuh waktu lebih untuk loading
  test.setTimeout(90_000);

  await runSteps({
    page,
    userFlow: "Cek produk di toko",
    steps: [
      { description: "Buka https://demo.vercel.store" },
      { description: "Pastikan ada tulisan 'Acme' di halaman" }
    ],
    assertions: [
      { assertion: "Halaman toko berhasil terbuka sempurna" }
    ],
    test,
    expect,
  });
});