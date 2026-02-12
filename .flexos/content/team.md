---
id: content-team
title: "Team"
description: "Team member profiles — names, roles, bios, avatars, and social links"
type: content
subtype: collection
status: draft
sequence: 2
tags: [content, team]
relatesTo: [content/manifest.md]
createdAt: ""
updatedAt: ""
---

<flex_block type="instructions">
A collection of team member records. Each entry is a structured object the build agent can iterate over when rendering team sections, about pages, or footer credits. Add new members as objects in the "items" array.
</flex_block>

# Team

<flex_block type="config">
{
  "collection": "team",
  "items": [
    {
      "id": "founder",
      "name": "",
      "role": "Founder",
      "bio": "",
      "avatar": "",
      "email": "",
      "social": {
        "twitter": "",
        "github": "",
        "linkedin": ""
      }
    }
  ]
}
</flex_block>

## Where This Appears

- Landing page team/about section
- Footer founder credit
- Team management page (if multi-user)
- Email sender signatures
