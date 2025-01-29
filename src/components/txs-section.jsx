/* eslint-disable react/prop-types */
export const TsxSection = ({ children }) => {
  return (
    <section>
      <h2 className="text-xl mb-6 font-light">Recent Transactions</h2>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg border border-white/10">
        {children}
      </div>
    </section>
  );
};
