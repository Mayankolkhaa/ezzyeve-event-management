import React, { useMemo, useState } from "react";

const BudgetPage = () => {
  const [budget, setBudget] = useState(1500000);

  const [expenses, setExpenses] = useState({
    venue: 400000,
    catering: 250000,
    decor: 180000,
    photography: 120000,
    bridal: 150000,
    entertainment: 100000,
  });

  const totalSpent = Object.values(expenses).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const remaining = budget - totalSpent;

  const budgetPercentage = Math.min(
    (totalSpent / budget) * 100,
    100
  );

  // AI SUGGESTIONS
  const aiSuggestion = useMemo(() => {
    if (remaining < 0) {
      return {
        title: "Budget Exceeded 🚨",
        color: "text-red-500",
        message:
          "Your event is exceeding the planned budget. Try reducing décor expenses or selecting mid-range catering packages.",
      };
    }

    if (budgetPercentage > 85) {
      return {
        title: "Budget Warning ⚠️",
        color: "text-yellow-500",
        message:
          "You are close to your budget limit. Consider optimizing luxury add-ons and premium extras.",
      };
    }

    return {
      title: "Budget Healthy ✅",
      color: "text-green-500",
      message:
        "Your event budget is balanced perfectly. You still have room for upgrades or entertainment.",
    };
  }, [remaining, budgetPercentage]);

  const updateExpense = (key, value) => {
    setExpenses({
      ...expenses,
      [key]: Number(value),
    });
  };

  return (
    <div className="bg-[#FBF6EE] min-h-screen text-[#2C1A10] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e5c3_0%,#FBF6EE_60%)]"></div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9922A]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
            ✦ AI Smart Budget Planner
          </p>

          <h1 className="font-serif text-6xl lg:text-8xl leading-none font-semibold">
            Plan Events
            <br />

            <span className="italic text-[#8B1A2E]">
              Without Stress
            </span>
          </h1>

          <p className="mt-10 text-[#7A5C48] text-lg leading-9 max-w-3xl">
            EzzyEve intelligently tracks your wedding and event
            expenses in real time. Get AI-powered cost-saving
            suggestions, spending insights, and budget alerts
            before things go out of control.
          </p>

        </div>
      </section>

      {/* MAIN GRID */}
      <section className="px-6 lg:px-16 pb-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-8">

            {/* BUDGET CARD */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#C9922A]/10">

              <div className="flex items-center justify-between flex-wrap gap-6">

                <div>
                  <p className="uppercase tracking-[2px] text-xs text-[#C9922A]">
                    Total Event Budget
                  </p>

                  <h2 className="font-serif text-5xl font-semibold mt-4">
                    ₹{budget.toLocaleString()}
                  </h2>
                </div>

                <div className="bg-[#8B1A2E] text-white px-8 py-4 rounded-2xl shadow-xl">
                  <p className="uppercase tracking-[2px] text-xs opacity-70">
                    Remaining
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    ₹{remaining.toLocaleString()}
                  </h3>
                </div>

              </div>

              {/* PROGRESS BAR */}
              <div className="mt-10">

                <div className="flex items-center justify-between mb-4">
                  
                  <span className="text-[#7A5C48]">
                    Budget Usage
                  </span>

                  <span className="font-semibold text-[#8B1A2E]">
                    {budgetPercentage.toFixed(0)}%
                  </span>

                </div>

                <div className="w-full h-5 bg-[#F3E4C5] rounded-full overflow-hidden">

                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      budgetPercentage > 100
                        ? "bg-red-500"
                        : budgetPercentage > 85
                        ? "bg-yellow-500"
                        : "bg-[#8B1A2E]"
                    }`}
                    style={{
                      width: `${budgetPercentage}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

            {/* EXPENSE TRACKER */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#C9922A]/10">

              <div className="flex items-center justify-between mb-10">

                <div>
                  <p className="uppercase tracking-[2px] text-xs text-[#C9922A]">
                    Expense Breakdown
                  </p>

                  <h2 className="font-serif text-4xl font-semibold mt-3">
                    Live Expense Tracker
                  </h2>
                </div>

                <div className="text-5xl">
                  💸
                </div>

              </div>

              <div className="space-y-8">

                {Object.entries(expenses).map(([key, value]) => (
                  <div key={key}>

                    <div className="flex items-center justify-between mb-3">

                      <div>
                        <h3 className="capitalize text-xl font-semibold">
                          {key}
                        </h3>

                        <p className="text-[#7A5C48] text-sm">
                          Current Allocation
                        </p>
                      </div>

                      <span className="font-bold text-[#8B1A2E] text-xl">
                        ₹{value.toLocaleString()}
                      </span>

                    </div>

                    <input
                      type="range"
                      min="50000"
                      max="600000"
                      step="10000"
                      value={value}
                      onChange={(e) =>
                        updateExpense(key, e.target.value)
                      }
                      className="w-full accent-[#8B1A2E]"
                    />

                  </div>
                ))}

              </div>

            </div>

            {/* FUN INSIGHTS */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-gradient-to-br from-[#8B1A2E] to-[#5A1020] text-white rounded-3xl p-8 shadow-xl">

                <div className="text-5xl mb-5">
                  🍽️
                </div>

                <h3 className="font-serif text-3xl font-semibold">
                  Catering
                </h3>

                <p className="mt-4 text-white/70 leading-8">
                  Food consumes nearly 35% of luxury event budgets.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10">

                <div className="text-5xl mb-5">
                  🎵
                </div>

                <h3 className="font-serif text-3xl font-semibold">
                  Entertainment
                </h3>

                <p className="mt-4 text-[#7A5C48] leading-8">
                  Live music and DJs massively improve guest experience.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10">

                <div className="text-5xl mb-5">
                  📸
                </div>

                <h3 className="font-serif text-3xl font-semibold">
                  Photography
                </h3>

                <p className="mt-4 text-[#7A5C48] leading-8">
                  Couples spend more on memories than décor in 2026.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-8">

            {/* AI ASSISTANT */}
            <div className="bg-gradient-to-br from-[#8B1A2E] to-[#5A1020] text-white rounded-[32px] p-10 shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#C9922A]/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="uppercase tracking-[2px] text-xs text-[#F6D08A]">
                      AI Budget Assistant
                    </p>

                    <h2 className="font-serif text-4xl font-semibold mt-3">
                      Ezzy AI
                    </h2>
                  </div>

                  <div className="text-5xl">
                    🤖
                  </div>

                </div>

                <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                  <h3 className={`text-2xl font-bold ${aiSuggestion.color}`}>
                    {aiSuggestion.title}
                  </h3>

                  <p className="mt-5 text-white/80 leading-8">
                    {aiSuggestion.message}
                  </p>

                </div>

                {/* AI TIPS */}
                <div className="mt-8 space-y-5">

                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">
                    💡 Book weekday venues to reduce costs by 20%.
                  </div>

                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">
                    💡 Combining décor + lighting packages saves money.
                  </div>

                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-xl">
                    💡 AI predicts catering overspending in luxury events.
                  </div>

                </div>

              </div>

            </div>

            {/* EVENT HEALTH */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#C9922A]/10">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="uppercase tracking-[2px] text-xs text-[#C9922A]">
                    Event Health
                  </p>

                  <h2 className="font-serif text-4xl font-semibold mt-3">
                    Smart Analysis
                  </h2>
                </div>

                <div className="text-5xl">
                  📊
                </div>

              </div>

              <div className="space-y-6">

                <div className="bg-[#FBF6EE] p-6 rounded-2xl flex items-center justify-between">

                  <div>
                    <p className="font-semibold">
                      Budget Efficiency
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      AI calculated score
                    </span>
                  </div>

                  <span className="text-3xl font-bold text-[#8B1A2E]">
                    92%
                  </span>

                </div>

                <div className="bg-[#FBF6EE] p-6 rounded-2xl flex items-center justify-between">

                  <div>
                    <p className="font-semibold">
                      Luxury Level
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Based on current spend
                    </span>
                  </div>

                  <span className="text-3xl">
                    💎
                  </span>

                </div>

                <div className="bg-[#FBF6EE] p-6 rounded-2xl flex items-center justify-between">

                  <div>
                    <p className="font-semibold">
                      Overspending Risk
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      AI prediction model
                    </span>
                  </div>

                  <span className="text-2xl font-bold text-yellow-500">
                    Medium
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BudgetPage;