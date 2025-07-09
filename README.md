# Paragon Exterior Website

This repository contains the source code for the [Paragon Exterior](https://www.paragonexterior.com) website. It is built using **Next.js** with TypeScript and leverages **Wisp CMS** to power the blog. The site includes a marketing landing page, service pages, and forms for contacting the company or requesting an estimate.

## Features

- Next.js App Router with React Server Components
- TypeScript throughout the project
- Tailwind CSS for styling with shadcn and Radix UI components
- Blog powered by Wisp CMS
- Contact and estimate forms that email submissions via Nodemailer
- Automatic sitemap generation and robots.txt configuration for SEO

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Create an environment file**
   ```bash
   cp .env.example .env
   ```
   Fill in the required variables such as `NEXT_PUBLIC_BLOG_ID`, Gmail credentials (`GMAIL_SENDER`, `GMAIL_PASSWORD`), and `EMAIL_TO_SEND_TO` used by the API routes.

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

4. **Lint the project** (optional)
   ```bash
   npm run lint
   ```

5. **Create a production build**
   ```bash
   npm run build
   npm run start
   ```

## Repository Structure

- `src/app` – Next.js route handlers and pages
- `src/components` – Reusable React components
- `src/lib` – Helper utilities and the Wisp CMS client
- `public` – Static assets including images, videos, and sitemap files

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Visit the live site at [https://www.paragonexterior.com](https://www.paragonexterior.com).
