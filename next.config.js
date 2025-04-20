/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  experimental: {
    // Отключаем сбор трасс сборки для предотвращения ошибки Maximum call stack size exceeded
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '.git/**/*',
        '.next/**/*',
      ]
    },
    outputFileTracingRoot: process.cwd(),
  },
  // Оптимизируем изображения
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig; 