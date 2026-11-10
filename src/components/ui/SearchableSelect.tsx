import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export type SelectOption = { value: string; label: string };

interface SearchableSelectProps {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  defaultValue?: string;
  className?: string;
}

function findMatchingOption(options: SelectOption[], val?: string): SelectOption | null {
  if (!val || val === "-None-") return null;
  const lower = val.toLowerCase().trim();
  return (
    options.find((o) => o.value.toLowerCase() === lower || o.label.toLowerCase() === lower) ||
    options.find((o) => lower.includes(o.value.toLowerCase()) || o.value.toLowerCase().includes(lower)) ||
    null
  );
}

/** Substring matcher for cmdk Command so option ordering stays predictable. */
function substringFilter(value: string, search: string): number {
  const query = search.trim().toLowerCase();
  if (!query) return 1;
  return value.toLowerCase().includes(query) ? 1 : 0;
}

export function SearchableSelect({
  name,
  options,
  placeholder = "Select...",
  searchPlaceholder = "Search interests...",
  defaultValue,
  className = "",
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<SelectOption | null>(() =>
    findMatchingOption(options, defaultValue),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const prevDefaultRef = useRef(defaultValue);

  useEffect(() => {
    if (prevDefaultRef.current !== defaultValue) {
      prevDefaultRef.current = defaultValue;
      setSelected(findMatchingOption(options, defaultValue));
    }
  }, [defaultValue, options]);

  // Reset back to default option when parent form resets
  useEffect(() => {
    const form = containerRef.current?.closest("form");
    if (!form) return;
    const handleReset = () => {
      setSelected(findMatchingOption(options, defaultValue));
      setSearch("");
      setIsOpen(false);
    };
    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, [defaultValue, options]);

  const hasSelection = Boolean(selected && selected.value !== "-None-");

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      setSearch("");
    }
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Hidden input for native form submission */}
      <input type="hidden" name={name} value={selected?.value || "-None-"} />

      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            title={selected?.label}
            className={cn(
              "h-9 w-full flex items-center justify-between gap-2 rounded-lg border px-3 text-[13px] text-left transition-colors outline-none focus:outline-none cursor-pointer",
              hasSelection ? "pr-14" : "pr-8",
              isOpen
                ? "border-brand/70 dark:border-white/30 bg-white dark:bg-slate-950 ring-2 ring-brand/10 dark:ring-white/10"
                : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/[0.06] hover:border-slate-300 dark:hover:border-white/25",
            )}
          >
            <span
              className={cn(
                "min-w-0 flex-1 truncate",
                hasSelection ? "text-foreground" : "text-slate-400 dark:text-slate-500",
              )}
            >
              {hasSelection ? selected!.label : placeholder}
            </span>
            <ChevronDown
              className={cn(
                "pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-transform duration-150",
                isOpen && "rotate-180",
              )}
            />
          </button>
        </PopoverTrigger>

        {hasSelection && (
          <button
            type="button"
            aria-label="Clear selection"
            onClick={() => setSelected(null)}
            className="absolute right-7 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}

        <PopoverContent
          align="end"
          sideOffset={6}
          collisionPadding={16}
          onOpenAutoFocus={(e) => {
            if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
              e.preventDefault();
            }
          }}
          className="z-[60] w-[min(340px,calc(100vw-2rem))] min-w-[var(--radix-popover-trigger-width)] p-0 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-popover text-popover-foreground shadow-xl shadow-slate-900/12 dark:shadow-black/50 overflow-hidden"
        >
          <Command
            defaultValue={hasSelection ? selected!.label : undefined}
            filter={substringFilter}
            className="bg-transparent"
          >
            <CommandInput
              value={search}
              onValueChange={(val) => {
                setSearch(val);
                if (listRef.current) {
                  listRef.current.scrollTop = 0;
                }
              }}
              placeholder={searchPlaceholder}
              className="h-9 py-2 text-[13px]"
            />
            <CommandList ref={listRef} className="max-h-64 overflow-y-auto [color-scheme:light] dark:[color-scheme:dark]">
              <CommandEmpty className="py-6 text-center text-xs text-muted-foreground">
                No results found.
              </CommandEmpty>
              <CommandGroup className="p-1.5 [&_[cmdk-group-items]]:space-y-0.5">
                {options.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onSelect={() => {
                        setSelected(option.value === "-None-" ? null : option);
                        setIsOpen(false);
                        setSearch("");
                      }}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] leading-snug cursor-pointer transition-colors",
                        "data-[selected=true]:bg-slate-100 data-[selected=true]:text-foreground dark:data-[selected=true]:bg-slate-800/80 dark:data-[selected=true]:text-foreground",
                        isSelected &&
                          "bg-red-50/90 text-brand-red font-medium data-[selected=true]:bg-red-50 data-[selected=true]:text-brand-red dark:bg-brand-red/15 dark:text-red-400 dark:data-[selected=true]:bg-brand-red/20",
                      )}
                    >
                      <Check
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 transition-opacity",
                          isSelected ? "opacity-100 text-brand-red dark:text-red-400" : "opacity-0",
                        )}
                      />
                      <span className="flex-1">{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
