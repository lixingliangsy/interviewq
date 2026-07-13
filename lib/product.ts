export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "InterviewQ",
  slug: "interviewq",
  tagline: "Role-specific interview questions with scoring rubrics.",
  description: "Generate a balanced set of behavioral and technical interview questions for any role, each with what a strong answer looks like.",
  toolTitle: "Generate interview questions",
  resultLabel: "Your question set",
  ctaLabel: "Generate questions",
  features: [
  "Behavioral and technical mix",
  "Scoring rubric per question",
  "Seniority-tuned",
  "Bias-aware framing"
],
  inputs: [
  {
    "key": "role",
    "label": "Role",
    "type": "input",
    "placeholder": "e.g. Product Designer"
  },
  {
    "key": "level",
    "label": "Seniority",
    "type": "select",
    "options": [
      "Junior",
      "Mid",
      "Senior",
      "Lead"
    ]
  },
  {
    "key": "focus",
    "label": "Focus",
    "type": "select",
    "options": [
      "Mixed",
      "Behavioral",
      "Technical"
    ]
  },
  {
    "key": "count",
    "label": "How many",
    "type": "select",
    "options": [
      "5",
      "8",
      "12"
    ]
  }
] as InputField[],
  systemPrompt: "You are a hiring manager. Given a role, seniority, focus, and a count, write that many interview questions split between behavioral and technical (per the focus). For each question, add a one-line note on what a strong answer includes (a lightweight scoring rubric). Avoid questions that could surface protected-class bias. In demo mode, return a realistic sample set following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "4 sets/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const role = (inputs['role'] || 'your role').trim()
  const lvl = inputs['level'] || 'Senior'
  const focus = inputs['focus'] || 'Mixed'
  const n = inputs['count'] || '8'
  if (!role) return 'Name the role to generate interview questions.'
  let out = 'INTERVIEW QUESTIONS (' + lvl + ' ' + role + ' | ' + focus + ' | ' + n + ')\n\n'
  out += '1) [Behavioral] Tell me about a time you resolved a conflict in a ' + role + ' project.\n'
  out += '   Strong answer: names the conflict, their action, and the outcome.\n\n'
  out += '2) [Technical] How would you approach ' + (lvl === 'Senior' || lvl === 'Lead' ? 'a system design trade-off' : 'a typical task') + ' in this role?\n'
  out += '   Strong answer: reasons about constraints, not just the solution.\n\n'
  out += '3) [Behavioral] Describe a mistake you made and what you changed.\n'
  out += '   Strong answer: shows ownership and a real fix.\n\n'
  out += '4) [Technical] Walk me through how you prioritize when requests pile up.\n'
  out += '   Strong answer: uses a clear framework, not guesswork.\n\n'
  out += '5) [Behavioral] Why this ' + role + ' role, and why now?\n'
  out += '   Strong answer: specific, tied to their goals.\n\n'
  out += '\n--- (Mock demo. Add the role for a tailored set with rubrics.)'
  return out
}
}
