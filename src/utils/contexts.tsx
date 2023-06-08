import React, { useState, createContext, useContext, ReactNode } from "react";

interface ActiveSectionContextType {
  activeSection: { theme: 'light' | 'dark' } | null;
  setActiveSection: React.Dispatch<React.SetStateAction<{ theme: 'light' | 'dark' } | null>>;
}

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<{ theme: 'light' | 'dark' } | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};
