import {ThemeProvider} from "next-themes";
import FakestorePage from "@/app/_products/pages/FakestorePage";



export default function Home() {
  return (
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          <main>
              <FakestorePage/>
          </main>

      </ThemeProvider>


  );
}
