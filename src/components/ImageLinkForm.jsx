const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
    <div className="text-center">
      <p>This magic brain willl detect faces in your picture. Give it a try!</p>
      <div className="flex justify-center gap-4 flex-col lg:flex-row shadow-lg lg:w-2/3 mx-auto mt-4 p-8 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter image url..." 
            required=""
            onChange={onInputChange}
          />
        {/* <a 
          className="py-2 px-8 bg-blue-950 rounded-md text-white hover:bg-cyan-700 hover:shadow-md cursor-pointer" 
          onClick={onButtonSubmit}>Detect
        </a> */}
        <button
          type="submit"
          className="btn"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm