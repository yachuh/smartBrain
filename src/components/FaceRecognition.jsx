const FaceRecognition = ({ imageUrl, boxes }) => {
  console.log('boxes:::', boxes)

  return(
    <div className="my-8">
      <p className="mb-8 text-center">Result: {boxes.length} faces in the picture</p>
      <div className="relative lg:w-2/3 mx-auto">
        {/* Display input image */}
        <img 
          id='inputImage' 
          src={imageUrl} 
          alt='Picture goes here'
          className="abosolute h-auto mx-auto"
        />
        {/* Display FaceBox */}
        {
          boxes.map((box, i) => {
            const { top,left, bottom,right } = box
            const inlineStyle = {top: top, right: right, bottom:  bottom, left:left}
            return (
              <div 
                key={i} 
                className="absolute flex flex-wrap justify-center cursor-pointer shadow-[0_0_0_3px_#149df2]" 
                style={inlineStyle}
              >
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FaceRecognition