import React from "react";
import QuoteModal from "@/components/QuoteModal";

const IndexPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)] bg-gray-900 flex items-center justify-center">
        <QuoteModal />
      </div>
    </>
  );
};

export default IndexPage;
