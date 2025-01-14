import React from 'react'
import Navbar from '../components/Navbar';
import {getLocalStorageSizeInKB} from '../localStorageKB.js'
const MainPage = () => {
  console.log("LocalStorage usage:", getLocalStorageSizeInKB(), "KB");
  
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Main Page</h1>
        <p className="mt-2">You are authenticated and can now manage posts.</p>
      </div>
    </div>
  )
}

export default MainPage;
