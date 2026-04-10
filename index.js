const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('A CLI based counter App')
    .version('2.0.1');

program.command('count-lines')
    .description('Count the number of lines in the file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file ,'utf-8' , (err,data) =>{
            if(err)
            {
                console.log(err);
                return;
            }
            const lines = data.split('\n').length;
            console.log(`number of lines in the ${file} is : ${lines - 1}`);
        });
    });

program.command('count-words')
    .description('Count the number of words in the file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file ,'utf-8' , (err,data) => {
            if(err)
            {
                console.log(err);
                return;
            }
            const words = data.split(" ").length;
            console.log(`number of words in the ${file} is : ${words} `);
        });
    });

program.command('count-chars')
    .description(`Count the number of charcters in the file`)
    .argument('<file>' , 'file to count')
    .action((file) => {
        fs.readFile(file , 'utf-8' , (err,data) => {
            if(err)
            {
                console.log(err);
                return;
            }
            const chars = data.length;
            console.log(`number of characters in the ${file} is : ${chars - 1}`);
        });
    });

program.command('read')
   .description('Read the content of the file')
   .argument('<file>' , 'file to read')
   .action((file) => {
        fs.readFile(file , 'utf-8' , (err,data) => {
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(`Content of the ${file} is : \n ${data}`);
        });
   });

program.command('create')
    .description('Create a new file')
    .argument('<file>' , 'file to create')
    .action((file) => {
        fs.writeFile(file , '' , (err) => {
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(`File ${file} created successfully`);
        });
    });

program.command('delete')
    .description('Delete a file')
    .argument('<file>' , 'file to delete')
    .action((file) => {
        fs.unlink(file , (err) => {
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(`File ${file} deleted successfully`);
        });
    });


program.parse();