import React, { Component } from 'react';
import NvtEventForm1 from './components/NvtEventForm1';
import NvtEventForm2 from './components/NvtEventForm2';
import NvtEventForm3 from './components/NvtEventForm3';
import NvtEventForm4 from './components/NvtEventForm4';
import NvtEventForm5 from './components/NvtEventForm5';

 class NvtApp extends Component {


  render() {
    return (
      <div className='container border my-3 bgwhite'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <NvtEventForm1 />
        <NvtEventForm2 />
        <NvtEventForm3 />
        <NvtEventForm4 />
        <NvtEventForm5 />
      </div>
    );
  }
}

export default NvtApp;