import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { configure } from 'passmark'; // Impor fungsi config Passmark

/**
 * 1. Mengaktifkan dotenv untuk membaca file .env
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * 2. Mengatur Passmark agar menggunakan OpenRouter sebagai AI Gateway
 */
configure({
  ai: {
    gateway: "openrouter",
    
  }
});

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  /* Kita fokus hanya pada Firefox sesuai permintaanmu */
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});