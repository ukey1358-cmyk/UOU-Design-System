---
name: uou-design
description: Use this skill to generate well-branded interfaces and assets for 울산대학교 (University of Ulsan, UOU), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css` and `tokens/` for design tokens, `components/` for React primitives,
`ui_kits/uou-website/` for full-screen recreations, `guidelines/` for spec cards,
`assets/` for brand assets and the list of missing official binaries).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
create static HTML files for the user to view. Link `styles.css` for the real tokens.
If working on production code, copy assets and read the rules here to become an expert in
designing with the UOU brand.

Brand essence: clean white base · green (`#009A44`) used only for action/emphasis · UOU
Gray (`#333333`) body text · restrained decoration · high legibility · academic, trustworthy,
modern. No emoji in official communication. The mascot '울리니' uses a SEPARATE pastel-green
palette — never mix it with corporate green.

⚠️ Official logo/symbol/signature/mascot binaries and the 우리고딕 typeface were NOT supplied;
the system substitutes a text wordmark, Pretendard (web font), and Lucide (icons). Flag these
substitutions and ask the user for the real assets when fidelity matters. Never alter the
official logos/mascot (no stretch, recolor, rotate, squash).

If the user invokes this skill without other guidance, ask what they want to build or design,
ask a few focused questions, then act as an expert UOU designer who outputs HTML artifacts or
production code depending on the need.
