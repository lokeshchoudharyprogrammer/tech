import React from 'react';
import { SearchBar } from './SearchBar';

function AppBar() {
  return (
    <div className='flex justify-between p-4 items-center'>
      <div>
        <h1>YouTube</h1>
      </div>

      <div>
       <SearchBar/>
      </div>
      <div>
        <button className='p-2 rounded-3xl border-2 border-white'>Sign in</button>
      </div>

    </div>
  );
}

export default AppBar;
