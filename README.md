***For windows users: ***   
 `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"` and use git bash       

----    
**Note about tech used**   
Classic setup here, nothing fancy: React, redux-toolkit, jest, testing library. I love redux toolkit as comes with reselect included ( hence, all queries and selectors will be memoised by default). ALso, we can change property on state directly as immer is taking care of immutabilty.

-----

**IMPORTANT: MOBILE ONLY**
As per general good practice, i started with a mobile first approach. In the end, i didnt add any desktop styling. Be sure to test the app from a mobile device. 

**Testing**
Only unit testing, and with an integration test approach ( as per redux guidelines on testing ). I think this approach remove some burden from higher steps in the testing pyramid. And the whole process get faster

----
**Styling**    
A mix of custom css and tailwind, which i nnever used before but it is incredibly fast for certain jobs

----
**The Recursion problem**   
The first half of the test was all about recursion ( asset field was particulary nasty). While i save the laoded data as is, i derived the correct form for the selected and opened info modal. You will notice that a recursion is used also in listElement, as the format for asset field may change from record to record   

----
**The Form**   
I noticed too late i could have used `useReducer` instead of the various `useState`. I also used alerts ( shame on me ), to dont have to design another component and to speed up test of the page. i use an online service and a ´flip the coin' startegy for succeful or erroneous responses.

----
**Designs**    
I'm not a designer, so apologies for the bad design. Also, it is a MOBILE ONLY design!    

----
**Development and production**
For dev version:   
`npm i`   
`npm run dev`      

For production   
`npm i`   
`npm run build`    
`npm run start`    
If your telephone is connected on the same network, you will be able to connect to the local app. 


-----
However, i also deployed the app on heroku at this url https://lightcurve-official.herokuapp.com/, it may be easier to access it like this

-----

I apologise for the great delay ( due to some medical issues for me and my wife as well), and i'm conscious you might have already filled the position, nevertheless i wanted  to finish this test as i usually want to see the end of what i start    

Thank you very much for the attention,
have a nice day, and apologies again for the delay!     

----

*Davide Domenico Arcinotti*
*mastrobardo@gmail.com*





