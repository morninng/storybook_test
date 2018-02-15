import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Welcome, Button } from '@storybook/angular/demo';
import { TestService } from './../src/app/services/test.service';
import { Test2Service } from './../src/app/services/test2.service';


import { TestComponent } from './../src/app/test/test.component';
import { PageComponent } from '../src/app/feature1/page/page.component';

import {SharedComponent} from './../src/app/shared/shared/shared.component';
import { CoreService } from '../src/app/core/core.service';


storiesOf('Test', module)
  .add('aaaa', () => ({
    component: TestComponent,
    props: {
      sss: 'jjjjjjjjjjjjjjjjjjjjjjjjj',
    },
    moduleMetadata: {
      imports: [],
      schemas: [],
      declarations: [SharedComponent],
      providers: [TestService , Test2Service ]
    }
  }))
  .add('aaaa in', () => ({
    component: TestComponent,
    props: {
      sss: '😀 😎 👍 💯',
    },
    moduleMetadata: {
      imports: [],
      schemas: [],
      declarations: [SharedComponent],
      providers: [TestService , Test2Service ]
    }
  }));



  storiesOf('Test2', module)
  .add('bbb', () => ({
    component: PageComponent,
    props: {
      fff: 'jjjjjjjsj',
    },
    moduleMetadata: {
      imports: [],
      schemas: [],
      declarations: [SharedComponent],
      providers: [CoreService]
    }
  }));



//       props: {
//         text: '😀 😎 👍 💯',
//         onClick: action('This was clicked OMG'),
//       },

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   component: Welcome,
//   props: {},
// }));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     component: Button,
//     props: {
//       text: 'Hello Button',
//     },
//   }))
//   .add(
//     'with some emoji',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//       },
//     }))
//   )
//   .add(
//     'with some emoji and action',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//         onClick: action('This was clicked OMG'),
//       },
//     }))
//   );

// storiesOf('Another Button', module).add('button with link to another story', () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// }));
