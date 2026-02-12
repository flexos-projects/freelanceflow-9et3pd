/**
 * Mock Data
 *
 * Shared data for all prototype pages. This file provides realistic
 * placeholder content so prototypes look and feel like real products.
 *
 * Usage in HTML pages:
 *   <script src="../../shared/mock-data.js"></script>
 *   <script>
 *     const hero = MockData.project;
 *     document.querySelector('.hero-title').textContent = hero.name;
 *   </script>
 */

const MockData = {

  // Project identity — populated by the AI from content/briefing.md and docs
  project: {
    name: "Project Name",
    tagline: "A short tagline describing what this product does",
    description: "A longer description that explains the value proposition, who it's for, and why it matters.",
    version: "0.1.0"
  },

  // Navigation — matches sitemap.md pages with nav: true
  navigation: [
    { id: "index", label: "Home", href: "index.html", icon: "home" }
  ],

  // Team — populated from content/team.md
  team: [
    {
      id: "founder",
      name: "Founder Name",
      role: "Founder",
      bio: "Short bio about the founder and their background.",
      avatar: ""
    }
  ],

  // Features — populated from specs/features
  features: [
    {
      id: "feature-1",
      title: "Feature One",
      description: "A brief description of what this feature does and why users care.",
      icon: "star"
    },
    {
      id: "feature-2",
      title: "Feature Two",
      description: "Another key feature that differentiates this product.",
      icon: "zap"
    },
    {
      id: "feature-3",
      title: "Feature Three",
      description: "A third feature that rounds out the core value proposition.",
      icon: "shield"
    }
  ],

  // Stats — generic placeholder stats for landing pages
  stats: [
    { label: "Users", value: "1,000+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Response Time", value: "<100ms" }
  ]

};
