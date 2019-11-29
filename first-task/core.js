const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];
const firstTask = tasks.reduce((acc, item)=> {
    if (item.category === 'Frontend'){
         acc += item.timeSpent
    }
    return   acc;
},0);
const secondTask = tasks.reduce((acc, item)=> {
   if (item.type === 'bug') {
       return acc + item.timeSpent
   }
   return acc
},0);
const thirdTask = tasks.reduce((acc, item)=> {
    if (item.title.includes('UI')) {
        return  ++acc;
    }
    return acc
},0);
const fourthTask = tasks.reduce((acc, item)=> {
    acc[item.category]++;
    return  acc
},{Frontend:0,Backend:0});

const fifthTask = tasks.filter(item=> item.timeSpent >4).map(item =>{
    return {title:item.title,category:item.category}
});

console.log('front end times ',firstTask);
console.log('bug\'s time ' + secondTask);
console.log(thirdTask);
console.log(fourthTask);
console.log(fifthTask);