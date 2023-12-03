import CustomTitleCms from "@/components/cms/CustomTitleCms";
import LayoutCms from "@/components/cms/LayoutCms";
import TabTransaction from "@/components/transaction/TabTransaction";

export default function TransactionPage() {
  return (
    <LayoutCms>
      <div className="transaction space-y-6">
        <CustomTitleCms title="Transaction" handleAdd={() => {}} />
        <TabTransaction />
      </div>
    </LayoutCms>
  );
}
