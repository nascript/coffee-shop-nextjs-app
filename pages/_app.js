import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer
        style={{
          textAlign: 'center',
          backgroundColor: 'lightgray',
        }}
      >
        <p style={{ textColor: '#fff' }}>NAS NEXT JS &copy; 2022</p>
      </footer>
    </>
  )
}

export default MyApp
