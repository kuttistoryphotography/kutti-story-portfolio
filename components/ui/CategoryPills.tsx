"use client";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryPills({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            style={{
                backgroundColor: active ? "#7F977B" : "white",
                color: active ? "white" : "#3F5A4A",
                border: "1px solid #7F977B",
                padding: "10px 30px",
                borderRadius: "9999px",
                fontSize: "12px",
                letterSpacing: "1.5px",
                fontWeight: "600",
                textTransform: "uppercase",
                minWidth: "180px",
                cursor: "pointer",
                boxShadow: active
                ? "0 12px 25px rgba(127,151,123,0.45)"
                : "0 6px 15px rgba(0,0,0,0.08)",
                transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
                if (!active) {
                e.currentTarget.style.backgroundColor = "#7F977B";
                e.currentTarget.style.color = "white";
                }
            }}
            onMouseLeave={(e) => {
                if (!active) {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#3F5A4A";
                }
            }}
            >
            {category}
          </button>
        );
      })}
    </div>
  );
}