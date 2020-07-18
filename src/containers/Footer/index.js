import React from 'react'
import './index.scss'

/**
 * @footer
 *
 * @version 0.0.1
 */

const Footer = () => (
  <footer className='footer'>
    <section className='footer-top'>
      <div className='container'>
        <ul className='nav'>
          <li>
            <a href='/terms-of-service' className='aTermsCndtn' title='Terms and Conditions'>
              Terms and Conditions
            </a>
            <a
              href='/terms-of-service'
              className='aTermsCndtn d-none aterms-ui-cleanup'
              title='Terms'
            >
              Terms
            </a>
          </li>
          <li>
            <a href='/privacy-policy' className='aPrivacyPolicy' title='Privacy Policy'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='/contact' title='Contact Us'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className='footer-bottom'>
      <div className='container'>
        <p className='text-copyright'>© 2020, Works Limited. All rights reserved.</p>
      </div>
    </section>
  </footer>
)

export default Footer
