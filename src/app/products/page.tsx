
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ShoppingCart,
  Warehouse,
  Truck,
  Calculator,
  Briefcase,
  ListTodo,
} from "lucide-react";
import type { ReactElement } from 'react';

const erpModules: { title: string; icon: ReactElement; features: { step: number | string; name: string; ai: string; }[] }[] = [
    {
        title: "CRM + AI (Customer Relationship Management)",
        icon: <Users className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Lead Capture (Web form/API/email)", ai: "Autofill & classify source" },
            { step: 2, name: "Lead Scoring (Hot/Warm/Cold)", ai: "AI scoring based on past conversions" },
            { step: 3, name: "Lead Assignment", ai: "Auto-assign to best salesperson" },
            { step: 4, name: "Pipeline View (Kanban)", ai: "Drag-n-drop + AI suggest next steps" },
            { step: 5, name: "Follow-up Reminders", ai: "Auto-follow-ups, email summarizer & Smart alerts based on interaction" },
            { step: 6, name: "Email/Chat Logs", ai: "AI summarizer + reply to suggester" },
            { step: 7, name: "Conversion Prediction", ai: "AI says: “80% chance this lead will convert”" },
        ],
    },
    {
        title: "Sales + AI",
        icon: <ShoppingCart className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Quotation Builder", ai: "AI auto-fills items from lead/opportunity" },
            { step: 2, name: "Product Price Suggestion", ai: "AI recommends ideal selling price" },
            { step: 3, name: "Quote-to-Order", ai: "Auto convert quote to Sales Order" },
            { step: 4, name: "Order Approval Flow", ai: "AI flags suspicious/large orders" },
            { step: 5, name: "Sales Reports", ai: "Predictive trends (monthly, region-wise)" },
            { step: 6, name: "Payment Follow-up Emails", ai: "Auto-generate polite payment reminders" },
        ],
    },
    {
        title: "Inventory + AI",
        icon: <Warehouse className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Multi-warehouse Stock Management", ai: "Auto track movement, Demand forecast, reorder alerts" },
            { step: 2, name: "Stock Alert Rules", ai: "AI suggests reorder thresholds" },
            { step: 3, name: "Product Demand Forecast", ai: "AI predicts demand by season/trends" },
            { step: 4, name: "Inventory Valuation", ai: "Predict losses from overstock/expiry" },
            { step: 5, name: "Auto Reorder", ai: "AI creates draft PO based on forecast" },
            { step: 6, name: "Barcode/QR Support", ai: "Auto entry + validation using AI camera OCR (optional)" },
        ],
    },
    {
        title: "Purchase + AI",
        icon: <Truck className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Vendor Database", ai: "Auto-rank by past performance" },
            { step: 2, name: "Purchase Requests", ai: "AI flags fake or duplicate requests" },
            { step: 3, name: "Auto PO Generator", ai: "Suggests PO based on low inventory" },
            { step: 4, name: "Price Comparison", ai: "AI suggests best vendor pricing" },
            { step: 5, name: "GRN (Goods Receipt Note)", ai: "Auto check for mismatched deliveries" },
            { step: 6, name: "PO Approval Flow", ai: "AI detects fraud or errors" },
        ],
    },
    {
        title: "Accounting + AI",
        icon: <Calculator className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Chart of Accounts", ai: "Auto-setup templates" },
            { step: 2, name: "Invoice Management", ai: "Auto-generate invoices from Sales, GST tagging, invoice prediction" },
            { step: 3, name: "Bank Reconciliation", ai: "AI suggests matching entries" },
            { step: 4, name: "Tax Calculation (GST, VAT)", ai: "Smart rule engine" },
            { step: 5, name: "Expense Categorization", ai: "Auto-tag expenses" },
            { step: 6, name: "Payment Delay Prediction", ai: "Forecast which clients may delay" },
            { step: 7, name: "Financial Dashboard", ai: "AI Insights on profit/cash flow" },
        ],
    },
    {
        title: "HR & Payroll + AI",
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Employee Profile + KYC", ai: "Resume parsing with AI" },
            { step: 2, name: "Attendance & Leave", ai: "Auto alerts + AI pattern detection" },
            { step: 3, name: "Payroll Automation", ai: "Auto-calculate salaries, deductions" },
            { step: 4, name: "Payslip Emailing", ai: "Auto-send monthly slips" },
            { step: 5, name: "Resignation Risk Score", ai: "Predict who might leave soon" },
            { step: 6, name: "Recruitment Flow", ai: "AI screen CVs and rank candidates" },
            { step: 7, name: "Performance Insights", ai: "Smart KPI dashboard (AI based)" },
        ],
    },
    {
        title: "Project & Tasks + AI",
        icon: <ListTodo className="h-6 w-6 text-primary" />,
        features: [
            { step: 1, name: "Project Setup", ai: "AI suggests task breakdown" },
            { step: 2, name: "Task Assignment", ai: "Auto assign to best-matched employee" },
            { step: 3, name: "Timeline View (Gantt)", ai: "Delay prediction alerts" },
            { step: 4, name: "Smart Comments & Summaries", ai: "AI summarize discussions, Task delay predictor" },
            { step: 5, name: "Workload Balance", ai: "AI suggests task redistribution" },
            { step: 6, name: "Project Reports", ai: "Health score + Budget forecast" },
        ],
    },
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container max-w-7xl px-4 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our AI-Powered ERP Suite</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore our comprehensive suite of business management tools, supercharged with AI to enhance productivity, forecasting, and decision-making.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full max-w-4xl mx-auto">
            {erpModules.map((module, index) => (
              <AccordionItem key={module.title} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    {module.icon}
                    <span>{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">Step</TableHead>
                          <TableHead>Feature</TableHead>
                          <TableHead>AI Integration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {module.features.map((feature) => (
                          <TableRow key={feature.step}>
                            <TableCell>
                              <Badge variant="secondary">{feature.step}</Badge>
                            </TableCell>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            <TableCell className="text-muted-foreground">{feature.ai}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
}
