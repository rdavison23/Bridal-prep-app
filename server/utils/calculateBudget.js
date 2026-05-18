export function calculateBudget({ idealBudget, maxBudget }) {
  const safeIdeal = Number(idealBudget) || 0;
  const safeMax = Number(maxBudget) || safeIdeal;
  const base = safeIdeal; // calculate from ideal so users can see how close they get to their max

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

  const hiddenCosts = [
    { label: 'Alterations', estimated: Math.round(base * 0.15) },
    { label: 'Veil', estimated: Math.round(base * 0.05) },
    { label: 'Rush Fees', estimated: Math.round(base * 0.03) },
    { label: 'Sales Tax', estimated: Math.round(base * 0.1) },
  ];

  const hiddenCostsTotal = hiddenCosts.reduce(
    (sum, item) => sum + item.estimated,
    0
  );

  const finalEstimate = base + hiddenCostsTotal;
  const overMax = safeMax > 0 && finalEstimate > safeMax; // flag if they're over their max

  return {
    idealBudget: safeIdeal,
    maxBudget: safeMax,
    baseBudget: base,
    breakdown,
    hiddenCosts,
    hiddenCostsTotal,
    finalEstimate,
    overMax, // frontend can use this to warn the user
  };
}
