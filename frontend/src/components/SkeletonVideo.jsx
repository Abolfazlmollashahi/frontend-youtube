function SkeletonVideo() {
  return (
    <div className="w-full h-[280px] flex flex-col ">
      <div className="w-[98%] h-[190px] mx-auto skeleton  flex justify-start items-end skelet">
        <p className=" translate-x-2 -translate-y-2 w-[70px] h-[23px] skeleton skelet "></p>
      </div>
      <div className="w-full flex gap-2 items-start justify-start mt-2 pl-3">
        <div className=" !w-[70px] !h-[70px] skeleton skelet  !rounded-full"></div>
        <div className="w-[80%] flex flex-col gap-2 pb-2">
          <p className=" w-[95%] h-[20px] skeleton skelet"></p>
          <p className=" w-[70%] h-[20px] skeleton skelet"></p>
          <p className=" w-[40%] h-[20px] skeleton skelet"></p>
          <p className=" w-[20%] h-[20px] skeleton skelet"></p>
        </div>
      </div>
    </div>
  );
}

export default SkeletonVideo;
