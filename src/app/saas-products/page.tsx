import {
  Users,
  ShoppingCart,
  Warehouse,
  Truck,
  Calculator,
  Briefcase,
  ListTodo,
  CheckCircle,
} from "lucide-react";
import type { ReactElement } from 'react';

const erpModules: { title: string; description: string; icon: ReactElement; features: { name: string; ai: string; }[] }[] = [
    {
        title: "CRM + AI",
        description: "Manage customer relationships with AI-powered insights.",
        icon: <Users className="h-8 w-8 text-primary" />,
        features: [
            { name: "Lead Capture & Scoring", ai: "Autofill, classify, and score leads." },
            { name: "Smart Follow-ups", ai: "AI-suggested next steps and reminders." },
            { name: "Conversion Prediction", ai: "Forecast lead conversion probability." },
        ],
    },
    {
        title: "Sales + AI",
        description: "Streamline your sales process from quote to cash.",
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        features: [
            { name: "Quotation Builder", ai: "AI auto-fills items from lead/opportunity" },
            { name: "Product Price Suggestion", ai: "AI recommends ideal selling price" },
            { name: "Predictive Sales Reports", ai: "Forecast monthly and regional trends." },
        ],
    },
    {
        title: "Inventory + AI",
        description: "Optimize stock levels with intelligent forecasting.",
        icon: <Warehouse className="h-8 w-8 text-primary" />,
        features: [
            { name: "Multi-warehouse Management", ai: "Auto track movement and forecast demand." },
            { name: "Demand Forecasting", ai: "AI predicts demand by season and trends." },
            { name: "Auto Reordering", ai: "AI creates draft POs based on forecasts." },
        ],
    },
    {
        title: "Purchase + AI",
        description: "Automate procurement and vendor management.",
        icon: <Truck className="h-8 w-8 text-primary" />,
        features: [
            { name: "Vendor Database", ai: "Auto-rank vendors by past performance." },
            { name: "Auto PO Generator", ai: "Suggests POs based on low inventory." },
            { name: "Price Comparison", ai: "AI suggests best vendor pricing." },
        ],
    },
    {
        title: "Accounting + AI",
        description: "Simplify financial management with AI automation.",
        icon: <Calculator className="h-8 w-8 text-primary" />,
        features: [
            { name: "Invoice Management", ai: "Auto-generate invoices from sales orders." },
            { name: "Bank Reconciliation", ai: "AI suggests matching entries automatically." },
            { name: "Financial Dashboards", ai: "AI insights on profit and cash flow." },
        ],
    },
    {
        title: "HR & Payroll + AI",
        description: "Enhance HR processes from recruitment to payroll.",
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        features: [
            { name: "Employee Onboarding", ai: "Resume parsing and KYC with AI." },
            { name: "Automated Payroll", ai: "Auto-calculate salaries and deductions." },
            { name: "Resignation Risk Scoring", ai: "Predict which employees might leave soon." },
        ],
    },
    {
        title: "Project & Tasks + AI",
        description: "Manage projects efficiently with AI-driven tools.",
        icon: <ListTodo className="h-8 w-8 text-primary" />,
        features: [
            { name: "Project & Task Setup", ai: "AI suggests task breakdowns and assignments." },
            { name: "Smart Timelines", ai: "Get alerts for predicted delays in your Gantt chart." },
            { name: "Workload Balancing", ai: "AI suggests task redistribution for team efficiency." },
        ],
    },
];

export default function SaasProductsPage() {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-16">
        <div 
            className="absolute inset-0 -z-10"
            style={{
            backgroundImage: 'radial-gradient(circle at 5% 20%, hsl(var(--primary) / 0.1), transparent 50%), radial-gradient(circle at 95% 80%, hsl(262 83% 58% / 0.1), transparent 50%)',
            }}
        />

      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our AI-Powered ERP Suite</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our comprehensive suite of business management tools, supercharged with AI to enhance productivity, forecasting, and decision-making.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {erpModules.map((module) => (
          <div key={module.title} className="glass-card p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 soft-shadow">
            <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 bg-white/10 p-4 rounded-xl border border-white/20">
                    {module.icon}
                </div>
                <div>
                    <h3 className="font-headline text-2xl font-bold text-white">{module.title}</h3>
                    <p className="text-muted-foreground mt-1">{module.description}</p>
                </div>
            </div>
            
            <div className="flex-grow mt-auto">
                <h4 className="font-semibold text-lg mb-4 text-primary">Key AI Features</h4>
                <ul className="space-y-3 text-sm">
                {module.features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                    <span className="font-semibold text-foreground/90">{feature.name}:</span>
                    <span className="text-muted-foreground ml-1">{feature.ai}</span>
                    </div>
                </li>
                ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
