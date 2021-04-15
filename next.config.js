module.exports = {
  async rewrites() {
    return [
      {
        // Nueva ruta
        source: '/avocado/:path*',
        // De que ruta vendrá
        destination: '/product/:path*',
      },
    ]
  },
}
