import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ListIcon as List, XIcon as X, CaretDownIcon as CaretDown } from "@phosphor-icons/react";

type Link = { label: string; href: string };
type SimpleDropdown = { kind: "simple"; items: Link[] };
type GroupedDropdown = {
  kind: "grouped";
  groups: { title: string; tint?: string; items: Link[] }[];
};
export type NavItem = {
  label: string;
  href: string;
  dropdown?: SimpleDropdown | GroupedDropdown;
};

interface Props {
  items: NavItem[];
}

export default function MegaMenu({ items }: Props) {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      {/* Desktop capsule nav */}
      <nav className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full border border-hairline bg-bg/90 px-6 py-3 shadow-sm backdrop-blur lg:grid">
        <a href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          Blume &amp; Co.
        </a>

        <ul className="flex items-center gap-1 justify-self-center">
          {items.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDesktop(item.label)}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-card"
              >
                {item.label}
                {item.dropdown && <CaretDown size={12} weight="bold" />}
              </a>

              <AnimatePresence>
                {item.dropdown && openDesktop === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={panelTransition}
                    className={
                      item.dropdown.kind === "grouped"
                        ? "absolute left-1/2 top-[calc(100%+12px)] w-[min(90vw,720px)] -translate-x-1/2 rounded-lg border border-hairline bg-bg p-6 shadow-lg"
                        : "absolute left-0 top-[calc(100%+12px)] w-56 rounded-lg border border-hairline bg-bg p-3 shadow-lg"
                    }
                  >
                    {item.dropdown.kind === "simple" ? (
                      <ul className="flex flex-col">
                        {item.dropdown.items.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="block rounded-sm px-3 py-2 text-sm text-ink hover:bg-surface-card"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="grid grid-cols-5 gap-4">
                        {item.dropdown.groups.map((group) => (
                          <div key={group.title} className={`rounded-md p-3 ${group.tint ?? ""}`}>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                              {group.title}
                            </p>
                            <ul className="flex flex-col gap-1.5">
                              {group.items.map((link) => (
                                <li key={link.href}>
                                  <a href={link.href} className="text-sm text-ink hover:underline">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" />
      </nav>

      {/* Mobile bar */}
      <div className="flex items-center justify-between rounded-full border border-hairline bg-bg/90 px-4 py-3 shadow-sm backdrop-blur lg:hidden">
        <a href="/" className="font-display text-base font-semibold tracking-tight text-ink">
          Blume &amp; Co.
        </a>
        <button
          type="button"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-surface-card"
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={panelTransition}
            className="mt-2 rounded-lg border border-hairline bg-bg p-4 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.label} className="py-1">
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink"
                      >
                        {item.label}
                        <CaretDown
                          size={14}
                          weight="bold"
                          className={mobileExpanded === item.label ? "rotate-180" : ""}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={panelTransition}
                            className="overflow-hidden pl-3"
                          >
                            {item.dropdown.kind === "simple"
                              ? item.dropdown.items.map((link) => (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    className="block py-2 text-sm text-muted"
                                  >
                                    {link.label}
                                  </a>
                                ))
                              : item.dropdown.groups.map((group) => (
                                  <div key={group.title} className="py-2">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                                      {group.title}
                                    </p>
                                    {group.items.map((link) => (
                                      <a
                                        key={link.href}
                                        href={link.href}
                                        className="block py-1.5 text-sm text-ink"
                                      >
                                        {link.label}
                                      </a>
                                    ))}
                                  </div>
                                ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a href={item.href} className="block py-2 text-sm font-medium text-ink">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
