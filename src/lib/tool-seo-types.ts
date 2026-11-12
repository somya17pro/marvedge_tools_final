export type ToolStatusValue = "Yes" | "Partial" | "No";

export interface ToolStepItem {
  title: string;
  body: string;
}

export interface ToolEnvironmentCard {
  title: string;
  steps: string[];
}

export interface ToolSpecItem {
  label: string;
  value: string;
  detail: string;
}

export interface ToolCompatibilityRow {
  target: string;
  status: ToolStatusValue;
  detail: string;
}

export interface ToolTroubleshootingItem {
  issue: string;
  fix: string;
}

export interface ToolRuleCard {
  title: string;
  body: string;
}

export interface ToolSeoData {
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  applicationCategory: "MultimediaApplication" | "UtilitiesApplication" | "BusinessApplication";
  definitionLead: string;
  lastUpdated: string;
  lastUpdatedIso: string;
  capabilities: [string, string, string, string];
  howItWorks: {
    heading: string;
    intro: string;
    steps: [ToolStepItem, ToolStepItem, ToolStepItem];
  };
  environments: {
    heading: string;
    intro: string;
    cards: [ToolEnvironmentCard, ToolEnvironmentCard, ToolEnvironmentCard];
    note: string;
  };
  specs: {
    heading: string;
    intro: string;
    items: [ToolSpecItem, ToolSpecItem, ToolSpecItem, ToolSpecItem, ToolSpecItem, ToolSpecItem];
    callouts: [ToolRuleCard, ToolRuleCard, ToolRuleCard];
  };
  compatibility: {
    heading: string;
    intro: string;
    columns: [string, string, string];
    rows: ToolCompatibilityRow[];
  };
  troubleshooting: {
    heading: string;
    intro: string;
    items: ToolTroubleshootingItem[];
  };
  privacy: {
    heading: string;
    paragraphs: [string, string];
  };
}
