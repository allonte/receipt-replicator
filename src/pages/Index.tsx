import BankReceipt from "@/components/BankReceipt";

const receiptData = {
  bankName: "CO-OPERATIVE BANK",
  terminal: "POS40310",
  agent: "POSAG037988",
  accountHolder: "Wilson Kinyanjui Murong'a",
  address: ["495- Karuri[]", "JUJA", "001"],
  cardNumber: "603120******4164",
  expiry: "02/25",
  date: "02/10/23",
  time: "10:36:59",
  refNo: "327502103659",
  approvalCode: "725661",
  pidTrace: "23614953",
  status: "APPROVED",
  paymentType: "INSTITUTION PAYMENT",
  payeeName: "MURONGA/WILSON K",
  institution: "JOMO KENYATTA UNI OF AGR TE-THIK",
  billAccount: "01129098952900",
  studentNumber: "ENE221-0133/2022",
  studentName: "ONGWEYA ALLAN KAOGA",
  currency: "KES",
  amount: "9,900.00",
  bankRef: "327507226064",
  verifiedBy: "PIN",
  servedBy: "0",
};

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <BankReceipt data={receiptData} />
    </div>
  );
};

export default Index;
