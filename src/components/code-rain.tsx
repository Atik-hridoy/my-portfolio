// "use client"

// import { useEffect, useState } from "react"

// export function CodeRain() {
//   const [codeSnippets] = useState([
//     "const app = () =>",
//     "function build()",
//     "import React",
//     "export default",
//     "async await",
//     "useState()",
//     "useEffect()",
//     "return <div>",
//     "npm install",
//     "git commit",
//     "interface Props",
//     "type User = {",
//     "class Component",
//     "let data = []",
//     "map((item) =>",
//   ])

//   const [floatingCode, setFloatingCode] = useState<
//     Array<{
//       id: number
//       text: string
//       left: number
//       delay: number
//       duration: number
//     }>
//   >([])

//   useEffect(() => {
//     const snippets = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
//       left: Math.random() * 100,
//       delay: Math.random() * 10,
//       duration: 15 + Math.random() * 10,
//     }))
//     setFloatingCode(snippets)
//   }, [codeSnippets])

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
//       {floatingCode.map((snippet) => (
//         <div
//           key={snippet.id}
//           className="absolute text-xs font-mono text-primary whitespace-nowrap"
//           style={{
//             left: `${snippet.left}%`,
//             top: "-5%",
//             animationDelay: `${snippet.delay}s`,
//             animationDuration: `${snippet.duration}s`,
//             animation: "codeRain linear infinite",
//           }}
//         >
//           {snippet.text}
//         </div>
//       ))}
//     </div>
//   )
// }
