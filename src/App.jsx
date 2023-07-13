import { useState } from 'react'
// Components
import Header from './components/Header'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Rank from './components/Rank'
import Login from './components/Login'
import Signup from './components/Signup'
import { baseApiEndpoint, callClarifaiApi, imageApi } from './utils/api'
// APIs

function App() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [boxes, setBoxes] = useState([])
  const [route, setRoute] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joinedAt: ''
  })

  const loadUser = (data) => {
    setUser(data)
  }

  const calculateFaceLocation = (data) => {
    const calafaiFaceBoxes = data.outputs[0].data.regions.map( box => box.region_info.bounding_box );
    const image = document.getElementById('inputImage')
    const width = Number(image.width);
    const height = Number(image.height);

    const newBoxes = calafaiFaceBoxes.map( box => {
      const newBox = {
        top: box.top_row * height,
        left: box.left_col * width,
        bottom: height - (box.bottom_row * height),
        right: width - (box.right_col * width),
      }
      return newBox
    })
    return newBoxes
  }

  const displayFacebox = (box) => {
    setBoxes(box)
  }
  
  // const returnClarafaiRequestOptions = (imageUrl) => {
  //   const PAT = '377c93c35a8c4382979594bff49d0c24';//'22b8073894304dcba77964943fa77a37';
  //   const USER_ID = 'yachuh';       
  //   const APP_ID = 'react-face-detection';
  //   const MODEL_ID = 'face-detection';
  //   const IMAGE_URL = imageUrl;

  //   const raw = JSON.stringify({
  //       "user_app_id": {
  //           "user_id": USER_ID,
  //           "app_id": APP_ID
  //       },
  //       "inputs": [
  //           {
  //               "data": {
  //                   "image": {
  //                       "url": IMAGE_URL
  //                   }
  //               }
  //           }
  //       ]
  //   });

  //   const requestOptions = {
  //       method: 'POST',
  //       headers: {
  //           'Accept': 'application/json',
  //           'Authorization': 'Key ' + PAT
  //       },
  //       body: raw
  //   };

  //   return requestOptions
  // }
  
  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const onPictureSubmit = async () => {
    try {
      setImageUrl(input)
      // Call Clarifai Api
      const imgUrl = {
        url: input
      }
      const data = await callClarifaiApi(imgUrl)
      // Display faceboxes
      displayFacebox(calculateFaceLocation(data))
      // Update user entry count
      const userId = {
        id: user.id
      }
      const count = await imageApi(userId)
      setUser({...user, entries: count})
    } catch (error) {
      console.log('error:::', error)
    }
    
  }

  const onRouteChange = (route) => {
    if(route === 'signin' || route === 'login'){
      setIsLoggedIn(false)
      setImageUrl('')
    } else if( route === 'home'){
      setIsLoggedIn(true)
    }
    setRoute(route)
  }

  return (
    <>
      <Header onRouteChange={onRouteChange} isLoggedIn={isLoggedIn}/>
      <main className='container'>
        {
          route === 'home'
          ? <div>
              <h2 className="text-3xl text-center font-bold my-2">Face Detector Tool</h2>
              <Rank name={user.name} entries={user.entries}/>
              <ImageLinkForm 
                onInputChange={onInputChange} 
                onPictureSubmit={onPictureSubmit}
              />
              { imageUrl ? <FaceRecognition imageUrl={imageUrl} boxes={boxes} /> : null }
            </div>
          : (
            route === 'login' 
            ? <Login loadUser={loadUser} onRouteChange={onRouteChange} /> 
            : <Signup loadUser={loadUser} onRouteChange={onRouteChange}/>
          )
        }
      </main>
    </>
  )
}

export default App
