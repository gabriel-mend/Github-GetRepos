import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
  } from 'next/document'
  import { ServerStyleSheet } from 'styled-components'
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
  
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />)
          })
  
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          )
        }
      } finally {
        sheet.seal()
      }
    }
  
    render() {
      return (
        <Html lang="pt-BR">
          <Head>
            <link rel="shortcut icon" href="/img/github-icon.svg" />
            <meta 
              name="description" 
              content="A simple project starter to work NextJs, Typescript, React and Styled Components"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }