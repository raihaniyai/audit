const detect = async (webcam, net, setData, image) => {
  // Check data is available
  if (
    (webcam?.current && net &&
    webcam?.current.video.readyState === 4) || image?.current
  ) {
    var counts = {};

    // Get Video Properties
    const img = image?.current;
    const video = webcam.current?.video;

    const videoWidth = webcam.current.video.videoWidth;
    const videoHeight = webcam.current.video.videoHeight;

    webcam.current.video.width = videoWidth;
    webcam.current.video.height = videoHeight;

    const obj = await net.detect(img || video);
    obj.forEach(x => { counts[x.class] = (counts[x.class] || 0) + 1 });

    const mappingObj = Object.keys(counts).map(key => ({ name: key, total: counts[key] }));
    setData(mappingObj);
  }
};

export default detect;