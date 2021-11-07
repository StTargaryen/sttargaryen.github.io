module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '700px',
      'desktop': '1280px',
      'portrait': {'raw': '(orientation: portrait)'},
    },
    extend: {
      dropShadow: {
        // drop-shadow-card
        card: '0px 0px 50px rgba(0, 0, 0, 0.25)',
        text: '0px 0px 10px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: theme => ({
        'center-ball': "url('/img/center-ball.png')",
        'left-ball': "url('/img/left-ball.png')",
        'right-ball': "url('/img/right-ball.png')",
        'actual-balls': "url('/img/actual-balls.png')",
        'actual-boots': "url('/img/actual-boots.png')",
        'actual-hands': "url('/img/actual-hands.png')",
        'actual-socks': "url('/img/actual-socks.png')",
        'actual-jacket': "url('/img/actual-jacket.png')",
        'wearing-right': "url('/img/wearing-right.png')",
        'wearing-left': "url('/img/wearing-left.png')",
        'fire': "url('/img/fire.gif')",
        'brands-adidas': "url('/img/brands-adidas.png')",
        'brands-nike': "url('/img/brands-nike.png')",
        'brands-mikasa': "url('/img/brands-mikasa.png')",
        'brands-jogel': "url('/img/brands-jogel.png')",
        'brands-asics': "url('/img/brands-asics.png')",
        'mobile-model-s': "url('/img/mobile-model-s.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
