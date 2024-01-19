import { writeFile } from 'node:fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    console.log("operazione riuscita")
});
