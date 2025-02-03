import { UI } from './UI';

export default {
  title: 'Live Counter',
  component: UI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    layout: 'fullscreen',
  },
};

export const BlankDown = {
  name: "Blank, ↓ graph",
  args: {
    workflow: undefined,
    trigger: undefined,
    direction: "down",
  }
};

export const TriggerOnly = {
  name: "Trigger only, ↓ graph",
  args: {
    workflow: undefined,
    trigger: {
      event: {
        name: "shopify/order.created",
        data: {
          order: 123,
        },
      }
    },
  }
};

export const SingleAction = {
  name: "Single action, ↓ graph",
  args: {
    direction: "down",
    trigger: {
      event: {
        name: "shopify/order.created",
        data: {
          order: 123,
        },
      }
    },
    workflow: {
      "actions": [
        {
          "id": "1",
          "kind": "send-email",
          "name": "Send Email",
          "description": "Send an email to the user",
          "inputs": {
            "to": "!ref($.event.data.email)",
            "subject": "Welcome to the platform",
            "body": "Welcome to the platform"
          }
        }
      ],
      "edges": [
        {
          "from": "$source",
          "to": "1"
        }
      ]
    },
  }
};