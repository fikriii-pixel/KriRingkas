# **App Name**: KriRingkas.ID

## Core Features:

- Structured Academic Summary: Uses the Gemini API to analyze journal text and generate a structured academic summary in formal Indonesian, with JSON output, focusing on title, methods, results, conclusion, and key points. The LLM uses reasoning and acts as a tool to decide when the summary must contain specific key words.
- Jargon Explanation: Uses the Gemini API to identify and define jargon terms within the journal, providing clear explanations in Indonesian, with JSON output.
- Landing Page: A public-facing landing page with a hero section, key features, testimonials, FAQ, and footer to introduce the service.
- Journal Text Input: A textarea input field where users can paste the content of a journal article.
- Summary Mode Dropdown: A dropdown menu that allows users to select different summary modes (e.g., brief, detailed).
- Tabbed Output Display: Presents the AI-generated summary and jargon explanations in separate tabs for easy navigation.
- Firebase Authentication: Integrates Firebase Authentication for user login to unlock unlimited summaries; free users get 5 summaries per day (stored in localStorage).

## Style Guidelines:

- Primary color: Navy (#000080), representing professionalism and reliability, aligning with academic focus.
- Background color: Light navy (#E0E0FF), a very desaturated shade of navy, provides a calming backdrop.
- Accent color: Teal (#008080), offers a complementary contrast, symbolizing clarity and precision.
- Body and headline font: 'Inter', a grotesque sans-serif for a modern and neutral feel. Note: currently only Google Fonts are supported.
- Minimalist and readable UI layout to ensure ease of use and focus on the summarized content.
- Simple and professional icons to represent key features and functionalities.
- Subtle loading animations to indicate processing when generating summaries.