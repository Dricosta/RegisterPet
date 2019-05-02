import React from 'react';
import RegisterPet from './pages/registerPet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)

function App() {
  return (
    <div>
        <RegisterPet/>
    </div>
  );
}

export default App;
