import BankReceipt from "@/components/BankReceipt";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";
import { useRef } from "react";

const today = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const dateStr = `${pad(today.getMonth() + 1)}/${pad(today.getDate())}/${String(today.getFullYear()).slice(2)}`;
const timeStr = `${pad(today.getHours())}:${pad(today.getMinutes())}:${pad(today.getSeconds())}`;

const receiptData = {
  bankName: "CO-OPERATIVE BANK",
  terminal: "POS40310",
  agent: "POSAG037988",
  accountHolder: "Kylah Abuje Odhiambo",
  address: ["495- Karuri[]", "JUJA", "001"],
  cardNumber: "603120******4164",
  expiry: "02/25",
  date: dateStr,
  time: timeStr,
  refNo: "327502103659",
  approvalCode: "725661",
  pidTrace: "23614953",
  status: "APPROVED",
  paymentType: "INSTITUTION PAYMENT",
  payeeName: "ODHIAMBO/KYLAH A",
  institution: "KENYATTA UNIVERSITY",
  billAccount: "01129062461400",
  studentNumber: "D33/2430/2024",
  studentName: "KYLAH ABUJE ODHIAMBO",
  currency: "KES",
  amount: "31,575.00",
  bankRef: "327507226064",
  verifiedBy: "PIN",
  servedBy: "0",
};

const Index = () => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    if (!receiptRef.current) return;
    const text = receiptRef.current.innerText;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "receipt.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 gap-4">
      <div ref={receiptRef}>
        <BankReceipt data={receiptData} />
      </div>
      <div className="flex gap-3 print:hidden">
        <Button onClick={handlePrint} variant="outline" className="gap-2">
          <Printer className="h-4 w-4" /> Print
        </Button>
        <Button onClick={handleSave} variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Save
        </Button>
      </div>
    </div>
  );
};

export default Index;
