import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    const rules = config.module.rules.map((rule: any) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('.svg')) {
        return {
          ...rule,
          test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i,
        };
      }
      return rule;
    });

    config.module.rules = [
      ...rules,
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets'),
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              dimensions: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
    };

    return config;
  },
};

export default nextConfig;
