export interface ICard {
  title: string;
  description: string;
  date: string;
  type: "task" | "deal" | "ticket" | "company";
  status: string;
  priority: "low" | "high" | "urgent";
}

export const cardsMock: ICard[] = [
  {
    date: "19 Jun, 2021 09:35 am",
    type: "task",
    title: "Product demo call with Ruth",
    description: "Please call and explain the customer about our product and answer.",
    status: "Need attention",
    priority: "urgent",
  },
  {
    date: "Wed Nov 18 2022 18:08:22",
    type: "deal",
    title: "Harrison & Co Summer Order",
    description: "The company has increased the usage of our services and grew the number of...",
    status: "Closed",
    priority: "low",
  },
  {
    date: "16 Apr, 12:22 am",
    type: "ticket",
    title: "I need help with my invoice!",
    description: "How to connect PayPal? Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Clicked",
    priority: "high",
  },
  {
    date: "16 Apr, 12:22 am",
    type: "company",
    title: "Email Campaign",
    description: "Newsletter January 2021 Harrison & Co Summer Or..",
    status: "Clicked",
    priority: "low",
  },
];
