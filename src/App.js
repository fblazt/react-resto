import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen min-w-full p-3 bg-gradient-to-br from-blue-200 to-green-200 flex flex-nowrap">
      <div className="w-3/4 pt-2 mt-24 ml-2 mr-3 mb-2 bg-white rounded-3xl shadow-lg">
        <div className="w-full -mt-24 flex flex-nowrap">
          <div className="h-16 w-16 bg-white rounded-3xl shadow-lg font-bold text-6xl text-center"><span>R</span></div>
          <div className="h-16 w-full ml-2 px-5 bg-white rounded-3xl shadow-lg flex items-center content-center">
            <input type="text" className="h-12 w-full bg-white text-lg" placeholder="Search..."/>
            <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-h-screen w-1/4 my-2 ml-3 mr-2 p-2 bg-white rounded-3xl shadow-lg overflow-auto">
        <div>
          {/* <div className="mb-2 p-2 w-full bg-green-200 rounded-2xl shadow-md">
            <img src="https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg" alt="" className="mb-2 rounded-3xl shadow-md"/>
            <p className="text-lg font-semibold">Restaurant Name</p>
            <div className="mb-2 flex flex-nowrap">
              <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'16px', height:'16px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
            </div>
            <p className="text-xs mb-2">Jl. P. Tubagus Angke Blok B-9D No. 1-3 Jelambar Grogol Petamburan Jakarta Barat DKI Jakarta 4 1, RW.1</p>
            <button className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-lg shadow-md">Add review +</button>
          </div> */}

            <h2 className="mb-2 text-lg font-semibold">Restaurant Name</h2>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/6gefxWFu1cp4cECQE6qpRS/15f4228cb3a2265c990dbaf1304ecea2/shutterstock_1469674187.jpg" alt="" className="mb-2 rounded-3xl shadow-md"/>
            <div className="mb-2 flex flex-nowrap">
              <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
              <svg style={{width:'24px', height:'24px'}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
            </div>
            <div className="mb-2">
              <label htmlFor="comments">Your comments</label>
              <textarea name="" id="" cols="30" rows="10" className="border-2 border-gray-200 rounded-lg"></textarea>
            </div>
            <button className="py-1 px-2 bg-blue-500 transition hover:bg-blue-600 text-white rounded-lg shadow-md">Submit</button>
        </div>
      </div>
    </div>
  )
}

