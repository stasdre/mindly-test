import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

import {IonContent, IonPage, setupIonicReact} from "@ionic/react";
import {Segment} from "mindly-test-ui";

setupIonicReact({
    swipeBackEnabled: false,
});

const segments = [{id:'feed', label:'Tab 1'}, {id:'info', label:'Tab 2'}];

function App() {
  return (
    <IonPage>
        <IonContent>
            <div style={{maxWidth:'500px', margin:'0 auto'}}>
                <p>Hello!!!</p>
                <Segment segments={segments} selected='feed'/>
            </div>
        </IonContent>
    </IonPage>
  );
}

export default App;
