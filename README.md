# Webbserverprogrammering 1 - Exempel: MVC & E2E 

Utgår ifrån fruktsidan

`rake seed`
`rake dev`

## MVC
Framförall i models - mappen

## E2E (End 2 End) testing med Playwright

Installera i VSCode: https://playwright.dev/docs/getting-started-vscode

Se exempel-testfall i projektet

Väljer ni run tests kör den testerna
Väljer ni debug kommer ni se hur den klickar runt på er webbsida

**Uppdatering:** Det verkar inte riktigt funka att köra testerna i VSCode. Kör dem från terminalen i VSCode med följande: npx playwright test ./tests/whateverthetestdatasnameis.spec.js Tänk på att slashen måste vara på rätt håll.
