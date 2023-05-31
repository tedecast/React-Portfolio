import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            please don't hesitate to contact me using the below form either.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                    <input type="submit" className="flat-button" value="SEND"/>

                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            Slobodan Gajic,
            <br />
            Serbia, 
            <br />
            Branka RadiCevica 19, 22000 <br />
            {/* Address ^ */}
            Sremeska Mitrovica <br />
            {/* Town ^ */}
            <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[44.96366, 19.61045]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Contact
