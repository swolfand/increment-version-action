const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
    const filePath = core.getInput('filePath')
    fs.readFile(filePath, 'utf8', function(err, data) {
        var version = parseInt(data);
        var newVersion = version+1;
        
        fs.writeFile(filePath, newVersion, function(err){
            if(err) throw err;
            console.log(`Successfully updated version code to ${newVersion}`)
            core.setOutput("result", `Done`)
        });
    });

} catch(error) {
    core.setFailed(error.message);
}

