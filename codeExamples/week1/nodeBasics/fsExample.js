const fs = require('fs');


fs.readdir('/Users/tesla/teaching/summer2020/cmsc389N/cmsc389nsummer2020-student/lectureCodeExamples/week5/node/', function (err, files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }


});


fs.appendFile('/Users/tesla/teaching/summer2020/cmsc389N/cmsc389nsummer2020-student/lectureCodeExamples/week5/node/pathExample.js', 'console.log(\'HI!\')', function(err){
    if(err){
        console.log('File didn\'t work yo');
    }
    
});