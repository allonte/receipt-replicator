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
    <div className="font-mono text-sm leading-relaxed max-w-md mx-auto bg-[hsl(var(--receipt-bg))] text-[hsl(var(--receipt-text))] border border-[hsl(var(--receipt-border))] rounded-sm shadow-lg p-6">
      {/* Header */}
      <div className="text-center mb-2">
        <p className="font-bold text-base tracking-wide">{data.bankName}</p>
        <p className="text-[hsl(var(--receipt-muted))] text-xs italic">on the go</p>
      </div>

      <div className="text-left text-xs space-y-0.5 mb-1">
        <p>TERMINAL: {data.terminal}</p>
        <p>AGENT: {data.agent}</p>
      </div>

      <p className="text-[hsl(var(--receipt-muted))] text-xs text-center">{dottedLine}</p>

      {/* Account Holder */}
      <div className="text-left text-xs space-y-0.5 my-1">
        <p>{data.accountHolder}</p>
        {data.address.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <p className="text-[hsl(var(--receipt-muted))] text-xs text-center">{equalLine}</p>

      {/* Card & Transaction Details */}
      <div className="text-xs space-y-0.5 my-1">
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

      <p className="text-[hsl(var(--receipt-muted))] text-xs text-center">{equalLine}</p>

      {/* Status & Payment Info */}
      <div className="text-center my-2 space-y-0.5">
        <p className="text-xs font-semibold tracking-widest">{data.status}</p>
        <p className="font-bold text-sm tracking-wide">{data.paymentType}</p>
        <p className="text-xs">{data.payeeName}</p>
      </div>

      {/* Institution Details */}
      <div className="text-left text-xs space-y-0.5 my-1">
        <p>{data.institution}</p>
        <p>Bill ACC: {data.billAccount}</p>
        <p>Student Number: {data.studentNumber}</p>
        <p>STUDENT NAME: {data.studentName}</p>
      </div>

      {/* Amount */}
      <div className="my-2">
        <p className="text-xs">{data.currency}</p>
        <p className="font-bold text-lg tracking-wide">AMOUNT: {data.currency} {data.amount}</p>
      </div>

      <p className="text-[hsl(var(--receipt-muted))] text-xs text-center">{dottedLine}</p>

      <p className="text-xs my-1">BANK_REF: {data.bankRef}</p>

      <p className="text-[hsl(var(--receipt-muted))] text-xs text-center">{dottedLine}</p>

      {/* Footer */}
      <div className="text-center mt-2 space-y-0.5">
        <p className="font-bold text-sm">VERIFIED BY {data.verifiedBy}</p>
        <p className="text-xs text-[hsl(var(--receipt-muted))]">YOU WERE SERVED BY {data.servedBy}</p>
        <p className="text-xs text-[hsl(var(--receipt-muted))]">THANK YOU FOR BANKING WITH US</p>
        <p className="text-xs font-semibold mt-1">CUSTOMER COPY</p>
      </div>
    </div>
  );
};

export default BankReceipt;
