export function calculateBudget({ idealBudget, maxBudget }) {
  const safeIdeal = Number(idealBudget) || 0;
  const sageMax = Number(maxBudget) || safeIdeal;
  const base = safeMax || safeIdeal;

  const breakdown = [
    { category: 'Dress', percent: 70 },
    { category: 'Accessories', percent: 10 },
    { category: 'Shoes', percent: 10 },
    { category: 'Undergarments', percent: 5 },
    { category: 'Steaming & Clearing', percent: 5 },
  ].map((item) => ({
    ...item,
    estimated: Math.round((item.percent / 100) * base),
  }));

  //hidden costs
  const hiddenCosts = [
    { label: 'Alterations', estimated: Math.round(base * 0.15) }, // realistic
    { label: 'Veil', estimated: Math.round(base * 0.05) },
    { label: 'Rush Fees', estimated: Math.round(base * 0.03) },
    { label: 'Sales Tax', estimated: Math.round(base * 0.1) },
  ];

  const hiddenCostsTotal = hiddenCosts.reduce(
    (sum, item) => sum + item.estimated,
    0
  );

  const finalEstimate = base + hiddenCostsTotal;

  return {
    idealBudget: safeIdeal,
    maxBudget: safeMax,
    baseBudget: base,
    breakdown,
    hiddenCosts,
    hiddenCostsTotal,
    finalEstimate,
  };
}
