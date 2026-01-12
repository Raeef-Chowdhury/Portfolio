import { motion, AnimatePresence } from "framer-motion";
import NavbarItem from "@/components/ui/navbaritem";
import { NAV_ITEMS } from "@/components/Layout/NavItemsData";

interface MobileNavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-[2.4rem] bg-background p-6 pt-[4.8rem] text-text lg:hidden"
        >
          <button
            onClick={() => setOpen(false)}
            className="mb-[6rem] text-[4.8rem] text-red-500 transition-all hover:cursor-pointer hover:text-amber-600"
            aria-label="Close menu"
          >
            ✕
          </button>

          <ul className="flex scale-110 flex-col gap-[6rem] text-center">
            {NAV_ITEMS.map(({ content, route }) => (
              <NavbarItem key={content} name={content} route={route} />
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
