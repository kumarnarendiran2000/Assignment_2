import React from 'react';

const PensionInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <div className="bg-white p-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Let us help you manage your pension plan</h2>
        <p className="mb-4">For pension values, and to make changes or view transactions, click the manage your pensions button below.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Manage your pensions</button>
      </div>
      <div className="bg-white p-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Money mindset rewards</h2>
        <p className="mb-4">As a Standard Life Customer, you can access trial period reductions, digital discounts vouchers, cashback offers, and money-off codes potentially saving £600 annually.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Access discounts and cashback offers</button>
      </div>
    </div>
  );
}

export default PensionInfo;
