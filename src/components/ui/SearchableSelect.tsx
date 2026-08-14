import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

interface SearchableSelectProps {
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

export function SearchableSelect({ name, options, placeholder = "Select...", defaultValue, className = "" }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const findMatchingOption = (val?: string) => {
    if (!val || val === "-None-") return null;
    const lower = val.toLowerCase().trim();
    return (
      options.find((o) => o.value.toLowerCase() === lower || o.label.toLowerCase() === lower) ||
      options.find((o) => lower.includes(o.value.toLowerCase()) || o.value.toLowerCase().includes(lower)) ||
      null
    );
  };

  const [selected, setSelected] = useState<{ value: string; label: string } | null>(() => findMatchingOption(defaultValue));
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue) {
      const match = findMatchingOption(defaultValue);
      if (match) setSelected(match);
    }
  }, [defaultValue, options]);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected?.value || "-None-"} />

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); setSearch(""); }}
        className={`w-full flex items-center justify-between rounded-xl border border-border bg-background p-3.5 text-sm text-left transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
          isOpen ? "ring-2 ring-ring border-brand/40" : ""
        }`}
      >
        <span className={selected ? "text-foreground" : "text-muted-foreground/40"}>
          {selected ? selected.label : placeholder}
        </span>
        <div className="flex items-center gap-1">
          {selected && selected.value !== "-None-" && (
            <span
              role="button"
              onClick={(e) => { e.stopPropagation(); setSelected(null); }}
              className="p-0.5 rounded-md hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </span>
          )}
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border border-border bg-background shadow-xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
          {/* Search input */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/60">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search interests..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")} className="p-0.5 rounded hover:bg-muted/60 transition-colors">
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Options list */}
          <div className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-4 text-center text-sm text-muted-foreground">No results found</div>
            ) : (
              filtered.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    selected?.value === option.value
                      ? "bg-brand/10 text-brand font-medium"
                      : "text-foreground hover:bg-muted/50"
                  }`}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
