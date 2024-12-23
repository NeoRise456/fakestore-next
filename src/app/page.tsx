import {ThemeProvider} from "next-themes";


export default function Home() {
  return (
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          <main>
              <div>
                  <h1> monse dxd</h1>
              </div>
          </main>

      </ThemeProvider>


  );
}
