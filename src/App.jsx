import { useEffect, useState } from 'react'
// Components
import Header from './components/Header'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Rank from './components/Rank'
import Login from './components/Login'
import Signup from './components/Signup'
import { callClarifaiApi, submitImgApi } from './utils/api'

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
    const imageElement = document.getElementById('inputImage')
    const width = Number(imageElement.width);
    const height = Number(imageElement.height);

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
  
  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const onPictureSubmit = async () => {
    if(!input){
      return alert('Please enter image url')
    }
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
      const count = await submitImgApi(userId)
      setUser({...user, entries: count})
    } catch (error) {
      console.log('error:::', error)
    }
  }

  const onRouteChange = (route) => {
    if(route === 'signin' || route === 'login'){
      setIsLoggedIn(false)
      setImageUrl('')
      setInput('')
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
