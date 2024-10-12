import personimg from "../assets/person.jpg"
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useVideo } from "../utils/useVideo";
import { CiMenuKebab } from "react-icons/ci";

function HomeListVideo({item}) {

  const [tsttext,settsttext] = useState('Lorem ipsum dolor, sit ergfs amet consectetur elit , sit ergfs amet consectetur eli')
  const [
    videoelem,
    mute,
    totaltime,
    currenttime,
    VideoMousMove,
    VideoMousLeav,
    mutefunc,
    updateTimes,
    loadedData,
  ] = useVideo();
  const btnshow = useRef({});
  const divshow = useRef({});
  const [menuitem, setmenuitem] = useState(false);
  const btnitemshow = (e) => {
    if (
      btnshow.current.contains(e.target) ||
      divshow.current.contains(e.target)
    ) {
      setmenuitem(true);
    } else {
      setmenuitem(false);
    }
  };

  useEffect(() => {

    // if(videoelem.current){
    //   videoelem.current.preload = 'auto';
    //   // videoelem.current.buffered = true;
    // }

    const videoElement = videoelem.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateTimes);
      videoElement.addEventListener("loadeddata", loadedData);
    }
    document.addEventListener("click", btnitemshow);
    return () => {
      document.removeEventListener("click", btnitemshow);
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateTimes);
        videoElement.removeEventListener("loadeddata", loadedData);
      }
    };
  }, []);

  return (
    <div
    //  data-aos="zoom-in"
      className={`p-1  h-[300px] relative flex flex-col items-center justify-center gap-1 mx-auto  w-[80%] sm:w-[100%] shadow-lg  shadow-violet-400  rounded-3xl dark:border dark:border-t-0  dark:bg-transparent dark:border-violet-800 dark:shadow-md  dark:shadow-red-700 dark:text-slate-100  `}
    >
      <div 
        className="father w-full z-[5] relative rounded-xl shadow-sm  shadow-violet-400  before:content-[''] before:absolute before:bottom-0 before:w-full before:z-[-2] before:aspect-[6/1] before:bg-gradient-to-t before:from-[#00000097] before:to-[#26262605] before:bg-transparent before:rounded-xl  overflow-hidden"
        onMouseOver={VideoMousMove}
        onMouseOut={VideoMousLeav}
      >
        <NavLink to={`/video/${item.id}`} className=" ">
          <video
            src={item.src}
            onLoadedData={loadedData}
            onTimeUpdate={updateTimes}
            muted
            ref={videoelem}
            className={` w-full h-[240px]d h-full  z-[10] object-cover rounded-xl `}
          ></video>
        </NavLink>

        <div className="children bg-[#00000092] z-[2] px-1 py-0.5 absolute right-2 top-2 flex items-center rounded-lg gap-1">
          <button onClick={mutefunc} className="mute z-[20]">
            <svg
              style={mute ? {} : { display: "none" }}
              height="35px"
              version="1.1"
              viewBox="0 0 36 36"
              width="35px"
            >
              <use className="ytp-svg-shadow"></use>
              <defs>
                <clipPath id="ytp-svg-volume-animation-mask">
                  <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                  <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                  <path
                    className="ytp-svg-volume-animation-mover"
                    d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
                <clipPath id="ytp-svg-volume-animation-slash-mask">
                  <path
                    className="ytp-svg-volume-animation-mover"
                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
              </defs>
              <path
                className="ytp-svg-fill ytp-svg-volume-animation-speaker"
                d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                fill="#fff"
                id="ytp-id-66"
              ></path>
            </svg>
            <svg
              style={mute ? { display: "none" } : {}}
              height="35px"
              version="1.1"
              viewBox="0 0 36 36"
              width="35px"
            >
              <use className="ytp-svg-shadow"></use>
              <path
                className="ytp-svg-fill"
                fill="#fff"
                d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
                id="ytp-id-68"
              ></path>
            </svg>
          </button>
          <button className="captions z-[20]">
            <svg
              className=""
              height="35px"
              version="1.1"
              viewBox="0 0 36 36"
              width="35px"
            >
              <use className="ytp-svg-shadow"></use>
              <path
                d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z"
                fill="#fff"
                id="ytp-id-69"
              ></path>
            </svg>
          </button>
        </div>

        <div className="childrens absolute bottom-3 left-2 p-1 px-2 rounded-lg bg-[#00000092] text-white cursor-pointer text-sm font-bold ">
          <span >{currenttime}</span> {(currenttime == 0) ? "" : "/"} <span>{totaltime}</span>
        </div>
      </div>
      <div className="w-full father flex relative ">
        <NavLink to="/user/ali" className=" w-full block">
          <div className="flex flex-shrink gap-2 p-1">
            <img
              className=" w-[55px] h-[55px] mask mask-hexagon   object-contain  "
              src={personimg}
              alt=""
            />
            <div className="">
              <p className=" text-[12px] md:text-[14px]">
                {tsttext.substring(0,60) + '...'}
              </p>
              <p className=" text-[12px] md:text-[14px] text-gray-500">
                abolfazl mollashahi
              </p>
              <p className=" text-[12px]  text-gray-500">
                <span>570 views</span> * <span>2 years ago</span>{" "}
              </p>
            </div>
          </div>
        </NavLink>

        <button
          ref={btnshow}
          className=" z-4 w-[30px] h-[30px] rounded-full flex justify-center items-center !shadow-md !shadow-violet-300 dark:!shadow-red-700 border dark:border-violet-700  bg   "
        >
          <CiMenuKebab
            className="w-full h-full p-1.5"
            onClick={(e) => btnitemshow(e)}
            id="btnshow"
          />
        </button>
      </div>

      {/* meno */}
      <div
        ref={divshow}
        id="divmenu"
        className={` ${
          menuitem ? "flex " : "hidden"
        } w-[250px] h-max absolute top-[225px] right-3 flex-col gap-1 p-2 rounded-xl shadow-lg bg !shadow-violet-700 sm:z-[7]  `}
      >
        <div className="">
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300  dark:hover:bg-violet-950 ">
            Add to queue
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Save to Watch later
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Save tpo playlist
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Download
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Share
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Not interested
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Dont recommend channel
          </button>
          <button className=" w-full px-2 py-0.5 flex gap-1 items-center rounded-lg hover:bg-violet-300 dark:hover:bg-violet-950 ">
            Report
          </button>
        </div>
      </div>

    </div>
  );
}

export default HomeListVideo;
