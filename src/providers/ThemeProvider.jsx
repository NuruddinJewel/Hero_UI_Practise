// import React from 'react';
"use client";
import { ThemeProvider } from "next-themes";
const Provider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default Provider;

// app/providers.tsx
// "use client";

// import { ThemeProvider } from "next-themes";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="light">
//       {children}
//     </ThemeProvider>
//   );
// }