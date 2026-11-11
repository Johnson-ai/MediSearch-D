import { spawn } from 'node:child_process';
const commands=[
 ['api',['scripts/dev-api.mjs']],
 ['web',['node_modules/vite/bin/vite.js','--host','127.0.0.1']]
];
const children=commands.map(([name,args])=>{
 const child=spawn(process.execPath,args,{stdio:'inherit',env:process.env});
 child.on('error',err=>console.error(`${name}:`,err));
 return child;
});
let closed=false;
function terminate(){if(closed)return;closed=true;for(const child of children){if(child.exitCode===null)child.kill('SIGTERM');}}
process.on('SIGINT',terminate);process.on('SIGTERM',terminate);
children.forEach(child=>child.on('exit',(code)=>{if(!closed){terminate();process.exitCode=code||0;}}));
