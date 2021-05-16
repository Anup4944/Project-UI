import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import PurchaseHistoryComp from "../../components/purchase-history-comp/PurchaseHistoryComp";

const PurchaseHistory = () => {
  return (
    <div>
      <DefaultLayout>
        <PurchaseHistoryComp />
      </DefaultLayout>
    </div>
  );
};

export default PurchaseHistory;
