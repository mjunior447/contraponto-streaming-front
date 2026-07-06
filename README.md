
# ContraPonto Streaming — Front-end

Contraponto is a modern, minimalist streaming platform engineered to safeguard, digitalize, and broadcast historical, artistic, and cultural Brazilian audiovisual archives. Built using cutting-edge web technologies, the system prioritizes instantaneous video delivery, rock-solid layout stability, and absolute semantic accessibility.


## Architectural & Technical Highlights

The front-end architecture is optimized for Core Web Vitals (specifically LCP and CLS), leveraging hybrid rendering and strict asset-delivery strategies.

### 1. Next.js 15 (App Router) & React 19
* **App Router Paradigm:** The application fully embraces Next.js App Router architecture, using a nested routing system to isolate layouts, specialized loaders, and error boundaries per segment.
* **Server-First Architecture:** By default, data fetching and category filtering are handled on the server side via *Server Components*. This strategy keeps the client-side JavaScript bundle exceptionally lean, eliminates waterfall fetching cycles, and boosts initial page responsiveness.
* **Granular Static & Dynamic Loading:** Instead of relying on a monolithic global loading state, the application implements isolated `loading.tsx` files for specific routes. The homepage renders a custom *VideoHero* skeleton, while editorial categories and the institutional page (`/sobre`) invoke targeted, layout-matched *Skeletons* to maximize perceived performance.

### 2. Video Delivery & Advanced Playback Mechanics
* **HTTP Live Streaming (HLS):** To ensure a smooth streaming experience across fluctuating network conditions, the platform implements native adaptive bitrate streaming via HLS (`.m3u8` protocols).
* **Robust Video.js Integration:** Playback orchestration is handled by **Video.js**, wrapped cleanly into an optimized React lifecycle component. It manages buffer chunks, resolution shifting, and custom UI controls without degrading client-side performance.
* **Layout Shift Prevention (Anti-CLS):** To eradicate Cumulative Layout Shift (CLS) during metadata loading, the video wrapper enforces strict `aspect-video` Tailwind dimensions combined with server-driven layout hydration. The video player container maintains its precise 16:9 cinematic aspect ratio from the first millisecond, preventing content layout jumps.

### 3. Inclusive Interface & Accessibility (A11y)
* **Semantic Structure:** Designed under modern UX and accessibility guidelines, leveraging strict HTML5 landmark elements (`<main>`, `<header>`, `<nav>`, `<footer>`) to facilitate screen reader navigation.
* **Accessible Component Design:** High-contrast color choices, explicit ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`), and standardized interactive keyboard focus rings (`focus-ring`) ensure that the platform remains inclusive and fully navigable without a mouse.
* **Stable UI Mechanics:** Carousel carousels avoid messy, un-accessible mouse-dragging states on desktops, substituting them with explicit, accessible click-pagination buttons mapped directly to container references (`useRef`). Mobile layouts seamlessly fallback to fluid, native touch scroll events.

## Main Technology Stack

* **Core Framework:** Next.js 15 (App Router)
* **Library:** React 19 (Client & Server Components)
* **Language:** TypeScript
* **Styling Engine:** Tailwind CSS v4
* **Video Player & Streaming Engine:** Video.js (with HLS adaptive support)

## Installation & Local Setup
1. Clone the repository and install the production dependencies:
`npm install`
2. Setup your environmental variables inside a local configuration file (.env.local) pointing to the streaming API server. Example:
```
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_AWS_S3_BUCKET=your-bucket
```
3. Clone the repository and install the production dependencies:
`npm install`
4. Lauch the application locally at http://localhost:3000

