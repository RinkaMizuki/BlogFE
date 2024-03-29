import { StyledEngineProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

export default function GlobalCssPriority({ children }: { children: ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override Material UI's styles. */}
      {children}
    </StyledEngineProvider>
  );
}