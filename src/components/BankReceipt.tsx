import coopLogo from "@/assets/coop-logo.png";

interface ReceiptData {
  bankName: string;
  terminal: string;
  agent: string;
  accountHolder: string;
  address: string[];
  cardNumber: string;
  expiry: string;
  date: string;
  time: string;
  refNo: string;
  approvalCode: string;
  pidTrace: string;
  status: string;
  paymentType: string;
  payeeName: string;
  institution: string;
  billAccount: string;
  studentNumber: string;
  studentName: string;
  currency: string;
  amount: string;
  bankRef: string;
  verifiedBy: string;
  servedBy: string;
}

const dottedLine = "- - - - - - - - - - - - - - - - - - - - - -";
const equalLine = "==========================================";

const BankReceipt = ({ data }: { data: ReceiptData }) => {
  return (
    <div className="relative font-mono text-[10px] leading-[1.45] max-w-[320px] mx-auto bg-[hsl(var(--receipt-bg))] text-[hsl(var(--receipt-text))] border border-[hsl(var(--receipt-border))] rounded-sm shadow-lg px-4 py-4 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <img src={coopLogo} alt="" className="w-48 h-48 object-contain brightness-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with logo */}
        <div className="flex items-start gap-1 mb-0.5">
          <img src={coopLogo} alt="Co-op Bank" className="w-6 h-6 object-contain brightness-0 mt-0.5" />
          <div className="text-center flex-1">
            <p className="font-bold text-[11px] tracking-wide">{data.bankName}</p>
            <p className="text-[hsl(var(--receipt-muted))] text-[8px] italic leading-tight">on the go</p>
          </div>
        </div>

        <div className="text-left">
          <p>TERMINAL: {data.terminal}</p>
          <p>AGENT: {data.agent}</p>
        </div>

        <p className="text-[hsl(var(--receipt-muted))] text-center my-px">{dottedLine}</p>

        <div className="text-left">
          <p>{data.accountHolder}</p>
          {data.address.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <p className="text-[hsl(var(--receipt-muted))] text-center my-px">{equalLine}</p>

        <div>
          <div className="flex justify-between">
            <span>{data.cardNumber}</span>
            <span>EXP: {data.expiry}</span>
          </div>
          <div className="flex justify-between">
            <span>DATE: {data.date}</span>
            <span>TIME: {data.time}</span>
          </div>
          <div className="flex justify-between">
            <span>REF NO: {data.refNo}</span>
            <span>APRV:{data.approvalCode}</span>
          </div>
          <p>PID/TRACE: {data.pidTrace}</p>
        </div>

        <p className="text-[hsl(var(--receipt-muted))] text-center my-px">{equalLine}</p>

        <div className="text-center my-1">
          <p className="text-[10px] tracking-widest">{data.status}</p>
          <p className="font-bold text-[13px] tracking-wide">{data.paymentType}</p>
          <p>{data.payeeName}</p>
        </div>

        <div className="text-left">
          <p>{data.institution}</p>
          <p>Bill ACC: {data.billAccount}</p>
          <p>Student Number: {data.studentNumber}</p>
          <p>STUDENT NAME: {data.studentName}</p>
        </div>

        <div className="mt-0.5">
          <p>{data.currency}</p>
          <p className="font-bold text-[13px]">AMOUNT: {data.currency} {data.amount}</p>
        </div>

        <p className="text-[hsl(var(--receipt-muted))] text-center my-px">{dottedLine}</p>
        <p>BANK_REF: {data.bankRef}</p>
        <p className="text-[hsl(var(--receipt-muted))] text-center my-px">{dottedLine}</p>

        <div className="text-center mt-1">
          <p className="font-bold text-[12px]">VERIFIED BY {data.verifiedBy}</p>
          <p className="text-[hsl(var(--receipt-muted))] text-[9px]">YOU WERE SERVED BY {data.servedBy}</p>
          <p className="text-[hsl(var(--receipt-muted))] text-[9px]">THANK YOU FOR BANKING WITH US</p>
          <p className="font-semibold text-[10px] mt-0.5">CUSTOMER COPY</p>
        </div>
      </div>
    </div>
  );
};

export default BankReceipt;
