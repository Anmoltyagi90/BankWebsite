import { Home, Layers, Wallet, LayoutDashboard, CreditCard } from "lucide-react";

export default function MobileNav({ activeSection, onNavigate }) {
  const buttons = [
    { key: "home", label: "Home", Icon: Home },
    { key: "segments", label: "Segments", Icon: Layers },
    { key: "accounts", label: "Accounts", Icon: Wallet },
    { key: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
    { key: "cards", label: "Cards", Icon: CreditCard },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 flex justify-around p-2 md:hidden">
      {buttons.map(({ key, label, Icon }) => (
        <button
          key={key}
          className={`flex flex-col items-center text-xs ${
            activeSection === key ? "text-blue-400" : "text-slate-400"
          }`}
          onClick={() => onNavigate(key)}
        >
          <Icon className="w-5 h-5 mb-1" />
          {label}
        </button>
      ))}
    </div>
  );
}
