# Stefan Gislason, Developer Portfolio

This repository contains the source code for my personal developer portfolio website. It showcases the projects I've built, the technologies I work with, my CV, and a short introduction about who I am as a developer.

## Features
- Modern, responsive portfolio website
- Project showcase with links to live demos and GitHub repos
- About Me section with background, skills, and experience
- Downloadable CV
- Contact details and social links

## Tech Stack
- HTML, CSS, JavaScript
- React / Next.js (if used)
- TailwindCSS (if used)
- Vercel for deployment

## Projects Highlighted
- PawMatch.fit, Pet adoption matching platform
- OpenTrackr, Productivity app with tasks and calendar
- ThinkLoop, Human-in-the-loop AI email assistant
- Mino Coach, AI focus coach web app
- Paw Health, Pet health tracking app
- Datacom IT Internship, AI-powered internal newsletter platform
- Microsoft Ollama Agent, Free Hack AI, HTB AI Helper, and more on [GitHub](https://github.com/Giza88?tab=repositories)

## About Me
I'm an early‑career IT professional and emerging developer with experience in IT support, customer service, onboarding, and building modern web applications. I enjoy solving problems, creating useful tools, and learning new technologies.

## Purpose
This portfolio is designed to present my work to employers, recruiters, and collaborators. It highlights my development skills, problem‑solving ability, and the projects I've created.

## Contact
Phone: 02108182178  
LinkedIn: linkedin.com/in/stefan-gislason-53948426b  
Email: stefangislason@outlook.com

## Chatbot (local Ollama)

The portfolio includes **Stef**, a floating site-guide chat widget (bottom-right). In production it answers from portfolio content using deterministic intent matching — no external AI required.

**v1 behaviour:**
- Suggested prompts for projects, contact, CV, experience, skills, and Datacom highlight
- Action buttons: scroll to sections, copy email, download CV, open links
- Answers grounded in `src/lib/data.ts` (no invented experience or skills)

**Optional local enhancement:** set Ollama env vars in `.env.local` (see `.env.local.example`) when running `ollama serve` locally. The `/api/chat` route calls Ollama server-side only when intent matching falls back; production visitors never talk to Ollama directly.

```bash
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2
```
