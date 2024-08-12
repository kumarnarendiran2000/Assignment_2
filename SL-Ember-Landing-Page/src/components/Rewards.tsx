import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-80">
      <div className="bg-white p-6 shadow rounded flex flex-col justify-start">
        <h2 className="text-xl font-semibold mb-4">Let us help you manage your pension plan</h2>
        <p className="mb-4">For pension values, and to make changes or view transactions, click the manage your pensions button below.</p>
        <button className="bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
          Manage your pensions
        </button>
      </div>
      <div className="bg-white p-6 shadow rounded flex flex-col justify-start relative">
        <h2 className="text-xl font-semibold mb-4">Money mindset rewards</h2>
        <p className="mb-4">As a Standard Life Customer, you can access trial period reductions, digital discounts vouchers, cashback offers, and money-off codes potentially saving £600 annually.</p>
        <button className="bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
          Access discounts and cashback offers
        </button>
        <div className="flex justify-end space-x-2 mt-4">
          <img src="https://via.placeholder.com/50" alt="Reward 1" className="h-10 w-10 rounded-full" />
          <img src="https://via.placeholder.com/50" alt="Reward 2" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Rewards;
