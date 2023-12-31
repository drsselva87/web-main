import { useState, useRef } from "react";
import "../../../views/VideoPlayer/VideoPlayer";
import DatePicker from "react-datepicker";
// import group from '../../../assets/img/'
import { Navigate, useNavigate, Link } from "react-router-dom";
import Meash from "../../../assets/img/Mesh-08.png";
import avatar from "../../../assets/img/Avatar.png";
import rectangular from "../../../assets/img/Rectangle-1873.png";
import rectangularone from "../../../assets/img/Rectangle-1874.png";
import rectangulartwo from "../../../assets/img/Rectangle-1875.png";
import { BiSolidRightArrow, BiCalendar } from "react-icons/bi";
import { AiFillStar, AiOutlineBell } from "react-icons/ai";
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import ellipse from "../../../assets/img/student-db/ellipse.png";
import { IoMdNotificationsOff } from "react-icons/io";
import { RxSpeakerLoud } from "react-icons/rx";
import { FiMoreVertical } from "react-icons/fi";
import { PiPencilLineFill } from "react-icons/pi";
import CalendarFilter from "./CalendarFilter";

const ActiveSessions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [getprofiles, setgetprofiles] = useState("");
  const [getnames, setgetnames] = useState("");
  const [getimage, setgetimage] = useState("");

  const pdf_file_url = "http://localhost:3000/Downloads/feedback.pdf";
  const Navigate = useNavigate();
  const fileInputRef = useRef(null);

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const onClickUpload = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleFileInputChange = (event) => {
    // Handle the file input change event here
    const selectedFile = event.target.files[0];
    // Process the selected file as needed
    console.log('Selected file:', selectedFile);
  };

  return (
    <div className="Active">
      <div className="Active-left" contenteditable>
        <div className="active-left-top">
          <h2 className="Sessions-head">Active Sessions</h2>
          <div className="active-left-top-wrapper">
            <div
              className="top-img"
              onClick={() => Navigate("/studentdashboard")}
            >
              <img
                src={Meash}
                alt=""
                width="382"
                height="286"

              // onClick={() => Navigate("/videoplayer")}
              />
            </div>
            <div className="bar">
              <div className="top-text">
                <div className="top-Product">
                  <span className="Product">Product</span>
                  <span className="Product">Analytic</span>
                  <span className="Middle">Middle/Pro</span>
                  <span className="line">
                    {/* <ul className="dot"> */}
                      <ul className="prog">In Progress</ul>
                    {/* </ul> */}
                  </span>
                </div>
                <div className="top-btns">
                  <button
                    className="Live"
                    onClick={() =>
                      window.open(
                        "https://meet.google.com/ved-iutd-rdz?authuser=0"
                      )
                    }
                  >
                    Join Live
                  </button>
                  <button className="Feedback">Feedback</button>
                  <button className="perc">34%</button>
                </div>
              </div>
              <progress id="file" value="32" max="100" className="proses">
                80%
              </progress>

              <div className="radio-inputs">
                <label className="radio">
                  <input type="radio" name="radio"/>
                  <span className="name"  onClick={onClickUpload} >Upload<br />HomeWork
                  </span>
                </label>

                <label className="radio">
                  <input type="radio" name="radio"/>
                  <span onClick={() => {
                    downloadFileAtURL(pdf_file_url);
                  }} className="name">Download<br />Materials</span>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  ref={fileInputRef}
                  className="input"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                />
              </div>


            </div>
          </div>
        </div>
        <div className="active-left-bottom">
          <div className="bottom-active">
            <h2 className="Completed">Completed Session</h2>
            <div className="calendarFilter"> 
             <CalendarFilter/>
             </div>
            <p className="view">
              View All <BiSolidRightArrow />
            </p>
          </div>
          <table>
            <tr>
              <th className="Course">Course Name</th>
              <th className="Course">Start</th>
              <th className="Course">Rate</th>
              <th className="Course">Type</th>
              <th className="Course">Download</th>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>
              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>

              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>

              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>

              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>

              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
            <tr>
              <td className="Basics">
                Basics of Mobile UX <br />
                <span className="Bruno">Bruno Scott</span>
              </td>

              <td>Feb 12</td>
              <td className="star">
                <AiFillStar /> 4.8
              </td>
              <td>
                <button className="DESIGN">UI DESIGN</button>
              </td>
              <td className="download">
                <a href="" className="BsFillCloudDownloadFill">
                  <BsFillCloudDownloadFill />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="Active-right" contenteditable>
        <div className="active-right-one">
          <div className="one-img">
            <div className="student-img-wrap text-center">
              <img
                className="proimage"
                src={
                  getimage
                    ? getimage
                    : getprofiles
                      ? getprofiles.imageUrl
                      : ellipse
                }
              />

              <h5 className="mb-0 fs-5 profileName">
                {getnames ? getnames : getprofiles ? getprofiles.name : "Rachel Green"}
              </h5>
            </div>
            {/* <img src={avatar} alt="gir" width="204" height="211" />
            <h2>Alexa</h2> */}
            <p className="Contact">
              Email:<span className="email">rachel.green@gmail.com</span>
            </p>
            <p className="Contact">
              Contact Number:<span className="email">+12-7654-3456</span>
            </p>

            <button
              className="Profile"
              onClick={() => Navigate("/EditProStudent")}
            >
              Edit Profile
            </button>
          </div>
          <div className="right-two">
            <div className="right-two-top">
              <h3 className="Reminders">Reminders</h3>
              <p className="IoMdNotificationsOff">
                <IoMdNotificationsOff />
              </p>
            </div>
            <div className="right_two_middle">
              <p className="RxSpeakerLoud">
                <RxSpeakerLoud />
              </p>
              <p className="worktime">
                <span className="workShop">workShop</span>
                <br />
                <span className="time">8:00 AM to 12:00PM</span>
              </p>
              <p className="FiMoreVertical">
                <FiMoreVertical />
              </p>
            </div>
            <div className="right_two_middle">
              <p className="RxSpeakerLoud">
                <PiPencilLineFill />
              </p>
              <p className="worktime">
                <span className="workShop">Home Work</span>
                <br />
                <span className="time">8:00 AM to 12:00PM</span>
              </p>
              <p className="FiMoreVertical">
                <FiMoreVertical />
              </p>
            </div>
          </div>
          <div className="right-three">
            <div className="right-upcoming">
              <h3 className="UpComing">Upcoming Sessions</h3>
            </div>
            <div className="right-three-one">
              <img src={rectangular} alt="" width="87" height="65" />
              <p className="htmlBasics">
                Html Basics <br />
                <span className="Brunoscott">Bruno Scott</span>
              </p>
              <div className="right-flot">
                <p className="BiCalendar">
                  {/* <BiCalendar /> */}
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="BiCalendarDate"
                  />
                </p>

                <p className="AiOutlineBell">
                  <AiOutlineBell />
                  <span className="apr">23,Apr</span>
                </p>
              </div>
            </div>
            <div className="right-three-one">
              <img src={rectangularone} alt="" width="87" height="65" />
              <p className="htmlBasics">
                Css Basics <br />
                <span className="Brunoscott">Bruno Scott</span>
              </p>
              <div className="right-flot">
                <p className="BiCalendar">
                  {/* <BiCalendar /> */}
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="BiCalendarDate"
                  />
                </p>
                <p className="AiOutlineBell">
                  <AiOutlineBell />
                  <span className="apr">23,Apr</span>
                </p>
              </div>
            </div>
            <div className="right-three-one">
              <img src={rectangulartwo} alt="" width="87" height="65" />
              <p className="htmlBasics">
                Java Basics <br />
                <span className="Brunoscott">Bruno Scott</span>
              </p>
              <div className="right-flot">
                <p className="BiCalendar">
                  {/* <BiCalendar /> */}
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="BiCalendarDate"
                  />
                </p>
                <p className="AiOutlineBell">
                  <AiOutlineBell />
                  <span className="apr">3, may</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSessions;
