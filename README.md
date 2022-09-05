***For windows users: ***   
 `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"`     

Some shell scripts were inclluded to render reviewers life easier    

----    
**Note about tech used**   
Classic setup here, nothing fancy: React, redux-toolkit, jest. I love redux toolkit as comes with reselect included ( hence, all queries and selectors will be memoised by default). ALso, we can change property on state directly as immer is taking care of immutabilty. useQuery is one of my prefered new tools.

-----

**Testing**    
Only unit testing, and with an integration test approach ( as per redux guidelines on testing ). I wanted to add some e2e today, as i love cypress, but i found myself fighting with the new version which seems actually incompatible with jest. So no end to end tests. However, there was the intention to add them.    

----
**Styling**    
i didnt create mixins or color tables, but they would have been needed in any professional projects. I planned to clean up those at the end, but lack of time kinda mess up my plan.

----
**Game Detail Page**   
I love UX, but im a terrible designer. Tags got random color ( and are not picked up from a map ), to give at least some life to mybad design. Which is responsive though, as the rest of the site.     

----
**Designs and testing design**    
If you use chrome emulator, please use IphoneXR. Other, older emulated device have a strange bug when injecting size in the Dom Model. I usually test from real device though, so you might find the design for wider screen a bit lacking. Anyway real device shpuld be used also during development, and miuch more in testing.

----
**Development and production**
I created a couple of scripts to render everything a bit easier. Anyway, DEV is using json-server as api a server, hence i had to modify a bit the data json to render it compatible.
Anyway, rememeber:   
`npm i`   
`npm run server:start`    
`npm run dev`      

For production, i created a small api server deployed on heroku ( see scripts in package.json ). My idea was to host an instance of the app on heroku, but not having the proper rights i could not do it. 
For production:   
`npm i`   
`npm run build`    
`npm run start`    
this will connect to the api server deployed on heroku
<!-- blank line -->
Or, you could use `start-dev.sh` or `start-prod.sh` (remeber to `chmod +x` them) to make your life easier :)    

----
The project is lacking in many aspects, but i hope it will give you at least a rough idea of what i'm able to do.    

Thank you very much for the attention,
have a nice day, dear reviewer!     

----

*Davide Domenico Arcinotti*
*mastrobardo@gmail.com*





