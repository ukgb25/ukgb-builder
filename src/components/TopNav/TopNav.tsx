import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m0">
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href="">
                <i className="ti-mobile"></i>+44 7935 396708
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i> 147 Brighton Rd, South Croydon CR2 6EH
              </span>
            </div>
            <div className="float-right">
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/ukgb_official/?next=%2F">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="ti-vimeo"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
  )
}

export default TopNav