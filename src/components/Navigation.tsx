// interface NavigationProps {
//   activeSection: string
//   onNavClick: (sectionId: string) => void
// }

// export function Navigation({ activeSection, onNavClick }: NavigationProps) {
//   const sections = ["intro", "work", "thoughts", "connect"]

//   return (
//     <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
//       <div className="flex flex-col gap-4">
//         {sections.map((section) => (
//           <button
//             key={section}
//             onClick={() => onNavClick(section)}
//             className={`w-2 h-8 rounded-full transition-all duration-500 ${
//               activeSection === section
//                 ? "bg-primary shadow-[0_0_15px_rgba(6,182,212,0.5)]"
//                 : "bg-muted-foreground/30 hover:bg-primary/50"
//             }`}
//             aria-label={`Navigate to ${section}`}
//           />
//         ))}
//       </div>
//     </nav>
//   )
// }
