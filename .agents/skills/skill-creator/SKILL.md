---
name: skill-creator
description: Create new AI agent skills for WITP project. Use this when the user wants to capture reusable patterns, workflows, or conventions as a skill. Handles intent capture, skill writing, test case creation, evaluation, and iteration.
---

# Skill Creator for WITP

This skill helps you create new skills for the WITP project following the project's conventions.

## When to Use This Skill

Use this skill when the user:

- Says "create a skill for X"
- Wants to capture a workflow/pattern as reusable instructions
- Asks "can you make this a skill?"
- Wants to add new rules or conventions for the AI assistant

---

## Skill Structure

All WITP skills follow this simple structure:

```
.agents/skills/<skill-name>/
├── SKILL.md           (required)
└── assets/            (optional)
    └── ...
```

**SKILL.md must include:**

- YAML frontmatter with `name` and `description`
- Markdown body with detailed instructions

---

## Creation Workflow

### Step 1: Capture Intent

Start by understanding what the skill should do:

1. What should this skill enable the AI to do?
2. When should this skill trigger? (what user phrases/contexts)
3. What's the expected output format?
4. Are there test cases to verify it works?

Extract answers from conversation history first. Ask clarifying questions only if needed.

### Step 2: Write the SKILL.md

Use the template from [assets/skill-template.md](assets/skill-template.md) or use this template:

````markdown
```markdown
---
name: <skill-name>
description: <when to trigger> - <what it does>
---

# <Skill Title>

## Overview

Brief description of what this skill does and when to use it.

## Key Rules

- Rule 1
- Rule 2

## Patterns

### Pattern Name

Explanation and examples.
```
````

**Naming rules:**

- Skill name: lowercase, alphanumeric with single hyphens
- Must match directory name
- 1-64 characters

**Description rules:**

- 1-1024 characters
- Include both "when to trigger" AND "what it does"
- Be specific enough for the AI to know when to use the skill

### Step 3: Create Test Cases

Create 2-3 realistic test prompts and save to `evals/evals.json`:

```json
{
  "skill_name": "<skill-name>",
  "evals": [
    {
      "id": 1,
      "prompt": "User's task prompt",
      "expected_output": "Description of expected result",
      "files": []
    }
  ]
}
```

Ask the user if they want to add more test cases.

### Step 4: Run Evaluation

For each test case:

1. Spawn a subagent WITH the skill to execute the prompt
2. Spawn a subagent WITHOUT the skill (baseline) to compare
3. Document the results

Organize results in `<skill-name>-workspace/iteration-1/`:

```
<skill-name>-workspace/
└── iteration-1/
    ├── eval-1/
    │   ├── with_skill/
    │   │   └── outputs/
    │   └── without_skill/
    │       └── outputs/
    └── evals.json
```

### Step 5: Review with User

Present results to the user:

- Show outputs from with_skill and without_skill
- Ask for qualitative feedback
- Note what worked and what didn't

### Step 6: Iterate

Based on user feedback:

1. Improve the skill
2. Run test cases again
3. Repeat until satisfied

---

## Best Practices

1. **Keep SKILL.md focused** - Under 500 lines if possible
2. **Use frontmatter wisely** - Description is the primary triggering mechanism
3. **Explain the why** - Don't just list rules, explain reasoning
4. **Generalize** - Write skills that work broadly, not just for specific examples
5. **Test edge cases** - Include realistic prompts, not just obvious ones

---

## Examples

### Good Description

```
description: Handle 3D mesh interactions in React Three Fiber. Use when user mentions clicking, hovering, or selecting 3D anatomy models.
```

### Bad Description

```
description: Handle 3D interactions.
```

(Too vague - when should the AI use this?)

---

## After Skill is Created

1. Verify the skill is detected: Run `/skills` command
2. Test it: Trigger the skill with an appropriate prompt
3. Update AGENTS.md if needed: Add to Available Skills table
4. Commit the skill: Add to git with meaningful commit message

---

## Need Help?

If the user wants a more rigorous evaluation process (quantitative benchmarks, grading, description optimization), refer them to the Vercel skill-creator at skills.sh but explain this project's version is simplified for project-specific use.
