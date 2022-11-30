// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   compiler: {
//     styledComponents: true,
//   },
// };

// module.exports = nextConfig;

// hidden-source-map 안하면 배포환경에서 소스코드 노출됨

// 압축된 파일 만들어줌 -> compress: true하면 필요없음
// const CompressPlugin = require("compression-webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// "build": "ANALYZE=true NODE_ENV=production next build" 로 바꿔줌 (process.env설정)
// 그러나 윈도우에서 안되기 때문에 npm i cross-env설치
// 최종 - "build": "cross-env ANALYZE=true NODE_ENV=production next build"

module.exports = withBundleAnalyzer({
  // CompressPlugin 대체
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    // moment 안쓰는 언어 빼기
    const plugins = [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      plugins,

      // 불변성 지켜야 하는 예시 (immer 사용가능)
      // module: {
      //   ...config.module,
      //   rules: [
      //     ...config.module.rules,
      //     {

      //     }
      //   ]
      // }
    };
  },
});
