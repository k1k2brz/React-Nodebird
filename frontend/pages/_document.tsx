import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// _app.tsx보다 상위에 있는 폴더 (CSS SSR하기 위해)

// 아직 _document는 클래스 문법으로 작성해야 한다
export default class MyDocument extends Document {
    // _document와 _app은 아직 getInitialProps
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            // styled-component SSR
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
            });
            const initialProps: any = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } catch (error) {
            console.error(error);
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2019%2Ces2018%2Ces2020%2Ces2021%2Ces2022" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}